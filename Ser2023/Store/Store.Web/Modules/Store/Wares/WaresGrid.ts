import { Decorators, EntityGrid, LookupEditor } from "@serenity-is/corelib";
import { deepClone, Dictionary, first, formatNumber, htmlEncode, notifyError, parseDecimal, parseInteger, parseQueryString, serviceRequest, localText, toId, trimToNull, tryFirst } from "@serenity-is/corelib/q";
import { ExcelExportHelper, PdfExportHelper } from "@serenity-is/extensions";
import { Column, FormatterContext, NonDataRow } from "@serenity-is/sleekgrid";
import { WaresColumns, WaresRow, WaresService, CounterpartiesRow, CategoriesRow } from "../../ServerTypes/Store";
import { WaresDialog } from "./WaresDialog";

const fld = WaresRow.Fields;

@Decorators.registerClass()
@Decorators.filterable()
export class WaresGrid extends EntityGrid<WaresRow, any> {
    protected getColumnsKey() { return WaresColumns.columnsKey; }
    protected getDialogType() { return <any>WaresDialog; }
    protected getIdProperty() { return WaresRow.idProperty; }
    protected getInsertPermission() { return WaresRow.insertPermission; }
    protected getLocalTextPrefix() { return WaresRow.localTextPrefix; }
    protected getService() { return WaresService.baseUrl; }

    private pendingChanges: Dictionary<any> = {};

    constructor(container: JQuery) {
        super(container);

        this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
    }

    protected getButtons() {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: WaresService.baseUrl + '/ListExcel',
            onViewSubmit: () => this.onViewSubmit(),
            separator: true
        }));

        buttons.push(PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit(),
            reportTitle: 'Wares List',
            columnTitles: {
                'Discontinued': 'Dis.',
            },
            tableOptions: {
                columnStyles: {
                    ProductID: {
                        cellWidth: 25,
                        halign: 'right'
                    },
                    Discountinued: {
                        cellWidth: 25
                    }
                }
            }
        }));

        buttons.push({
            title: 'Save Changes',
            cssClass: 'apply-changes-button disabled',
            onClick: e => this.saveClick(),
            separator: true
        });

        return buttons;
    }

    protected onViewProcessData(response) {
        this.pendingChanges = {};
        this.setSaveButtonState();
        return super.onViewProcessData(response);
    }

    // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
    // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
    // custom widgets and validations are not possible, and as a bonus the code can become a mess.
    // 
    // This was just a sample how-to after much requests, and is not supported. 
    // This is all we can offer, please don't ask us to Guide you...

    /**
     * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
     * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
     * no event handlers to rendered cell contents
     */
    private numericInputFormatter(ctx) {
        if ((ctx.item as NonDataRow).__nonDataRow)
            return htmlEncode(formatNumber(ctx.value, '#0.##'));

        var klass = 'edit numeric';
        var item = ctx.item as WaresRow;
        var pending = this.pendingChanges[item.WaresId];

        if (pending && pending[ctx.column.field] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, ctx.column.field) as number;

        return "<input type='text' class='" + klass +
            "' data-field='" + ctx.column.field +
            "' value='" + formatNumber(value, '0.##') + "'/>";
    }

    private moneyInputFormatter(ctx) {
        var klass = 'edit numeric';
        var item = ctx.item as WaresRow;
        var pending = this.pendingChanges[item.WaresId];

        if (pending && pending[ctx.column.field] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, ctx.column.field) as number;

        return "<input type='text' style='text - align:right' class='" + klass +
            "' data-field='" + ctx.column.field +
            "' value='" + formatNumber(value, '0.0000') + "'/>";
    }

    private stringInputFormatter(ctx) {
        if ((ctx.item as NonDataRow).__nonDataRow)
            return htmlEncode(ctx.value);

        var klass = 'edit string';
        var item = ctx.item as WaresRow;
        var pending = this.pendingChanges[item.WaresId];
        var column = ctx.column as Column;

        if (pending && pending[column.field] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, column.field) as string;

        return "<input type='text' class='" + klass +
            "' data-field='" + column.field +
            "' value='" + htmlEncode(value) +
            "' maxlength='" + column.sourceItem.maxLength + "'/>";
    }

    /**
    * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
    */
    private selectFormatter(ctx: FormatterContext, idField: string, lookup: Q.Lookup<any>) {
        if ((ctx.item as NonDataRow).__nonDataRow)
            return htmlEncode(ctx.value);

        var klass = 'edit';
        var item = ctx.item as WaresRow;
        var pending = this.pendingChanges[item.WaresId];
        var column = ctx.column as Column;

        if (pending && pending[idField] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, idField);
        var markup = "<select class='" + klass +
            "' data-field='" + idField +
            "' style='width: 100%; max-width: 100%'>" +
            "<option value=''>--</option>";
        for (var c of lookup.items) {
            let id = c[lookup.idField];
            markup += "<option value='" + htmlEncode(id) + "'"
            if (id == value) {
                markup += " selected";
            }
            markup += ">" + htmlEncode(c[lookup.textField]) + "</option>";
        }
        return markup + "</select>";
    }

    private getEffectiveValue(item, field): any {
        var pending = this.pendingChanges[item.WaresID];
        if (pending && pending[field] !== undefined) {
            return pending[field];
        }

        return item[field];
    }

    protected getColumns() {
        var columns = super.getColumns();
        var num = ctx => this.numericInputFormatter(ctx);
        var str = ctx => this.stringInputFormatter(ctx);
        var mon = ctx => this.moneyInputFormatter(ctx);

        first(columns, x => x.field === 'QuantityPerUnit').format = str;

        var category = first(columns, x => x.field === fld.CategoryCategoryName);
        category.referencedFields = [fld.CategoryId];
        category.format = ctx => this.selectFormatter(ctx, fld.CategoryId, CategoriesRow.getLookup());

        var counterparty = first(columns, x => x.field === fld.CounterpartyCompanyName);
        counterparty.referencedFields = [fld.CounterpartyId];
        counterparty.format = ctx => this.selectFormatter(ctx, fld.CounterpartyId, CounterpartiesRow.getLookup());

        first(columns, x => x.field === fld.UnitPrice).format = num;
        first(columns, x => x.field == fld.UnitPrice).cssClass += " col-unit-price";
        first(columns, x => x.field === fld.QuantityPerUnit).format = num;
        first(columns, x => x.field === fld.MeasureName).format = str;

        return columns;
    }

    private inputsChange(e: JQueryEventObject) {
        var cell = this.slickGrid.getCellFromEvent(e);
        var item = this.itemAt(cell.row);
        var input = $(e.target);
        var field = input.data('field');
        var txt = trimToNull(input.val());
        var pending = this.pendingChanges[item.WaresId];

        var effective = this.getEffectiveValue(item, field);
        var oldText: string;
        if (input.hasClass("numeric"))
            oldText = formatNumber(effective, '0.##');
        else
            oldText = effective as string;

        var value;
        if (field === 'UnitPrice') {
            value = parseDecimal(txt ?? '');
            if (value == null || isNaN(value)) {
                notifyError(localText('Validation.Decimal'), '', null);
                input.val(oldText);
                input.focus();
                return;
            }
        }
        else if (input.hasClass("numeric")) {
            var i = parseInteger(txt ?? '');
            if (isNaN(i) || i > 32767 || i < 0) {
                notifyError(localText('Validation.Integer'), '', null);
                input.val(oldText);
                input.focus();
                return;
            }
            value = i;
        }
        else if (input.is('select'))
            value = toId(input.val());
        else
            value = txt;

        if (!pending) {
            this.pendingChanges[item.WaresId] = pending = {};
        }

        pending[field] = value;
        item[field] = value;
        this.view.refresh();

        if (input.hasClass("numeric"))
            value = formatNumber(value, '0.##');

        input.val(value).addClass('dirty');

        this.setSaveButtonState();
    }

    private setSaveButtonState() {
        this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
            Object.keys(this.pendingChanges).length === 0);
    }

    private saveClick() {
        if (Object.keys(this.pendingChanges).length === 0) {
            return;
        }

        // this calls save service for all modified rows, one by one
        // you could write a batch update service
        var keys = Object.keys(this.pendingChanges);
        var current = -1;
        var self = this;

        (function saveNext() {
            if (++current >= keys.length) {
                self.refresh();
                return;
            }

            var key = keys[current];
            var entity = deepClone(self.pendingChanges[key]);
            entity.WaresId = key;
            serviceRequest(WaresService.Methods.Update, {
                EntityId: key,
                Entity: entity
            }, (response) => {
                delete self.pendingChanges[key];
                saveNext();
            });
        })();
    }

    protected getQuickFilters() {
        var flt = super.getQuickFilters();

        var q = parseQueryString();
        if (q["cat"]) {
            var category = tryFirst(flt, x => x.field == "CategoryID");
            category.init = e => {
                e.element.getWidget(LookupEditor).value = q["cat"];
            };
        }

        return flt;
    }

}