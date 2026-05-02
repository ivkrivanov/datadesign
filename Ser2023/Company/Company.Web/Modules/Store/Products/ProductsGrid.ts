import { Decorators, EntityGrid, EnumEditor, LookupEditor, ToolButton } from '@serenity-is/corelib';
import { attrEncode, coalesce, deepClone, Dictionary, first, formatNumber, htmlEncode, notifyError, parseDecimal, parseInteger, parseQueryString, serviceRequest, toId, trimToNull, tryFirst, Lookup } from "@serenity-is/corelib/q";
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";
import { Column, FormatterContext } from '@serenity-is/sleekgrid';
import { CategoriesRow, ProductsColumns, ProductsListRequest, ProductsRow, ProductsService, WaresRow } from '../../ServerTypes/Store';
import { ProductsDialog } from './ProductsDialog';

const fld = ProductsRow.Fields;

@Decorators.registerClass('Company.Store.ProductsGrid')
@Decorators.filterable()
export class ProductsGrid extends EntityGrid<ProductsRow, any> {
    protected getColumnsKey() { return ProductsColumns.columnsKey; }
    protected getDialogType() { return <any>ProductsDialog; }
    protected getIdProperty() { return ProductsRow.idProperty; }
    protected getInsertPermission() { return ProductsRow.insertPermission; }
    protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
    protected getService() { return ProductsService.baseUrl; }

    private pendingChanges: Dictionary<any> = {};

    constructor(container: JQuery) {
        super(container);
    }

    protected getQuickFilters() {
        var filters = super.getQuickFilters();

        var q = parseQueryString();
        if (q["cat"]) {
            var category = tryFirst(filters, x => x.field == "CategoryId");
            category.init = e => {
                e.element.getWidget(LookupEditor).value = q["cat"];
            };
        }

        filters.push({
            type: LookupEditor,
            options: {
                lookupKey: WaresRow.lookupKey
            },
            field: 'WaresID',
            title: 'Contains Wares in Details',
            handler: w => {
                (this.view.params as ProductsListRequest).WaresId = toId(w.value);
            },
            cssClass: 'hidden-xs'
        });

        return filters;
    }

    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push( ExcelExportHelper.createToolButton({
            title: 'Export To Excel',
            grid: this,
            service: ProductsService.baseUrl + '/ListExcel',
            onViewSubmit: () => this.onViewSubmit(),
            separator: true
        }));

        //buttons.push({
        //    title: 'Import From Excel',
        //    cssClass: 'export-xlsx-button',
        //    onClick: () => {
        //        // open import dialog, let it handle rest
        //        var dialog = new ProductExcelImportDialog();
        //        dialog.element.on('dialogclose', () => {
        //            this.refresh();
        //            dialog = null;
        //        });
        //        dialog.dialogOpen();
        //    }
        //});

        buttons.push(PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit(),
            reportTitle: 'Product List',
            columnTitles: {
                'Discontinued': 'Dis.',
            },
            tableOptions: {
                columnStyles: {
                    ProductID: {
                        columnWidth: 25,
                        halign: 'right'
                    },
                    Discountinued: {
                        columnWidth: 25
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

    private numericInputFormatter(ctx) {
        var klass = 'edit numeric';
        var item = ctx.item as ProductsRow;
        var pending = this.pendingChanges[item.ProductId];

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
        var item = ctx.item as ProductsRow;
        var pending = this.pendingChanges[item.ProductId];

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
        var item = ctx.item as ProductsRow;
        var pending = this.pendingChanges[item.ProductId];
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

    /**
     * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
     */
    private selectFormatter(ctx: FormatterContext, idField: string, lookup: Lookup<any>): string {
        var klass = 'edit';
        var item = ctx.item as ProductsRow;
        var pending = this.pendingChanges[item.ProductId];
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
        var pending = this.pendingChanges[item.ProductID];
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

        var category = first(columns, x => x.field === fld.CategoryName);
        category.referencedFields = [fld.CategoryId];
        category.format = ctx => this.selectFormatter(ctx, fld.CategoryId, CategoriesRow.getLookup());

        //var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
        //supplier.referencedFields = [fld.SupplierID];
        //supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.getLookup());

        first(columns, x => x.field === fld.UnitPrice).format = mon;
        first(columns, x => x.field == fld.UnitPrice).cssClass += " col-unit-price";
        first(columns, x => x.field === fld.SalePrice).format = mon;
        first(columns, x => x.field == fld.SalePrice).cssClass += " col-unit-price";
        first(columns, x => x.field === fld.UnitsInStock).format = num;
        first(columns, x => x.field === fld.UnitsOnOrder).format = num;
        first(columns, x => x.field === fld.ReorderLevel).format = num;

        return columns;
    }

    private inputsChange(e: JQueryEventObject) {
        var cell = this.slickGrid.getCellFromEvent(e);
        var item = this.itemAt(cell.row);
        var input = $(e.target);
        var field = input.data('field');
        var text = coalesce(trimToNull(input.val()), '0');
        var pending = this.pendingChanges[item.ProductId];

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

    protected onClick(e: JQueryEventObject, row: number, cell: number) {
        super.onClick(e, row, cell);

        if (e.isDefaultPrevented())
            return;

        var item = this.itemAt(row);
        var target = $(e.target);

        // if user clicks "i" element, e.g. icon
        if (target.parent().hasClass('inline-action'))
            target = target.parent();

        if (target.hasClass('inline-action')) {
            e.preventDefault();

            if (target.hasClass('print-invoice')) {
                ReportHelper.execute({
                    reportKey: 'Northwind.OrderDetail',
                    params: {
                        ProductId: item.ProductId
                    }
                });
            }
        }
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


    //protected addButtonClick() {
    //    var eq = this.view.params.EqualityFilter;
    //    this.editItem(<ProductsRow>{
    //        CustomerID: eq ? eq.CustomerID : null
    //    });
    //}
}