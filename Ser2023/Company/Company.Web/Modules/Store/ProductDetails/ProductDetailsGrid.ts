import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ProductDetailsColumns, ProductDetailsRow, ProductDetailsService } from '../../ServerTypes/Store';
import { ProductDetailsDialog } from './ProductDetailsDialog';
import { Dictionary, Lookup, attrEncode, coalesce, deepClone, first, formatNumber, htmlEncode, notifyError, parseDecimal, parseInteger, serviceRequest, trimToNull } from '@serenity-is/corelib/q';
import { Column, FormatterContext } from '@serenity-is/sleekgrid';
import { Aggregators } from '@serenity-is/corelib/slick';

const fld = ProductDetailsRow.Fields;

@Decorators.registerClass('Company.Store.ProductDetailsGrid')
@Decorators.filterable()
export class ProductDetailsGrid extends EntityGrid<ProductDetailsRow, any> {
    protected getColumnsKey() { return ProductDetailsColumns.columnsKey; }
    protected getDialogType() { return ProductDetailsDialog; }
    protected getIdProperty() { return ProductDetailsRow.idProperty; }
    protected getInsertPermission() { return ProductDetailsRow.insertPermission; }
    protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }
    protected getService() { return ProductDetailsService.baseUrl; }

    private pendingChanges: Dictionary<any> = {};

    constructor(container: JQuery) {
        super(container);

        this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
    }

    protected getButtons() {
        var buttons = super.getButtons();
        buttons.push({
            title: 'Save Changes',
            cssClass: 'apply-changes-button disabled',
            onClick: e => this.saveClick(),
            separator: true
        });

        return buttons;
    }

    private numericInputFormatter(ctx) {
        var klass = 'edit numeric';
        var item = ctx.item as ProductDetailsRow;
        var pending = this.pendingChanges[item.WaresId];

        if (pending && pending[ctx.column.field] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, ctx.column.field) as number;

        return "<input type='text' class='" + klass +
            "' data-field='" + ctx.column.field +
            "' value='" + formatNumber(value, '0.####') + "'/>";
    }

    private moneyInputFormatter(ctx) {
        var klass = 'edit numeric';
        var item = ctx.item as ProductDetailsRow;
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
        var klass = 'edit string';
        var item = ctx.item as ProductDetailsRow;
        var pending = this.pendingChanges[item.WaresId];
        var column = ctx.column as Column;

        if (pending && pending[column.field] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, column.field) as string;

        return "<input type='text' class='" + klass +
            "' data-field='" + column.field +
            "' value='" + attrEncode(value) +
            "' maxlength='" + column.sourceItem.maxLength + "'/>";
    }

    private selectFormatter(ctx: FormatterContext, idField: string, lookup: Lookup<any>): string {
        var klass = 'edit';
        var item = ctx.item as ProductDetailsRow;
        var pending = this.pendingChanges[item.WaresId];
        var column = ctx.column as Column;

        if (pending && pending[idField] !== undefined) {
            klass += ' dirty';
        }

        var value = this.getEffectiveValue(item, idField);
        var markup = "<select class='" + klass +
            "' data-field='" + idField +
            "' style='width: 100%; max-width: 100%'>";
        for (var c of lookup.items) {
            let id = c[lookup.idField];
            markup += "<option value='" + attrEncode(id) + "'"
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

    private inputsChange(e: JQueryEventObject) {
        var cell = this.slickGrid.getCellFromEvent(e);
        var item = this.itemAt(cell.row);
        var input = $(e.target);
        var field = input.data('field');
        var text = coalesce(trimToNull(input.val()), '0');
        var pending = this.pendingChanges[item.WaresId];

        var effective = this.getEffectiveValue(item, field);
        var oldText: string;
        if (input.hasClass("numeric"))
            oldText = formatNumber(effective, '0.####');
        else
            oldText = effective as string;

        var value;
        if (field === 'UnitPrice') {
            value = parseDecimal(text);
            if (value == null || isNaN(value)) {
                notifyError(text('Validation.Decimal'), '', null);
                input.val(oldText);
                input.focus();
                return;
            }
        }
        else if (input.hasClass("numeric")) {
            var i = parseInteger(text);
            if (isNaN(i) || i > 32767 || i < 0) {
                notifyError(text('Validation.Integer'), '', null);
                input.val(oldText);
                input.focus();
                return;
            }
            value = i;
        }
        else
            value = text;

        if (!pending) {
            this.pendingChanges[item.ProductId] = pending = {};
        }

        pending[field] = value;
        item[field] = value;
        this.view.refresh();

        if (input.hasClass("numeric"))
            value = formatNumber(value, '0.####');

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
            entity.ProductID = key;
            serviceRequest('Store/Product/Update', {
                EntityId: key,
                Entity: entity
            }, (response) => {
                delete self.pendingChanges[key];
                saveNext();
            });
        })();
    }

    protected createSlickGrid() {
        var grid = super.createSlickGrid();

        grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

        this.view.setSummaryOptions({
            aggregators: [new Aggregators.Sum(fld.LineTotal)]
        });

        return grid;
    }

    protected getColumns() {
        var columns = super.getColumns();

        var num = ctx => this.numericInputFormatter(ctx);
        var str = ctx => this.stringInputFormatter(ctx);
        var mon = ctx => this.moneyInputFormatter(ctx);

        first(columns, x => x.field === fld.PlanPrice).format = mon;
        first(columns, x => x.field == fld.PlanPrice).cssClass += " col-unit-price";
        first(columns, x => x.field === fld.Quantity).format = num;
        first(columns, x => x.field === fld.ProductQuantity).format = num;
        first(columns, x => x.field === fld.LineTotal)

            .groupTotalsFormatter = (totals, col) =>
                (totals.sum ? ('Sum: ' + coalesce(totals.sum[col.field], '')) : '');

        return columns;
    }

    protected getSlickOptions() {
        var opt = super.getSlickOptions();

        opt.showFooterRow = true;
        return opt;
    }

    protected usePager() {
        return false;
    }  
}