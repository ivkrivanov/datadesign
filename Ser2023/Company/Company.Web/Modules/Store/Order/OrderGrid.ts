import { Decorators, EntityGrid, EnumEditor, LookupEditor } from '@serenity-is/corelib';
import { toId } from '@serenity-is/corelib/q';
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";
import { OrderColumns, OrderRow, OrderService, OrderListRequest, ProductsRow } from '../../ServerTypes/Store';
import { StoreAverageDialog } from "../WaresOrder/StoreAverageDialog";
import { OrderDialog } from './OrderDialog';

const fld = OrderRow.Fields;

@Decorators.registerClass('Company.Store.OrderGrid')
@Decorators.filterable()
export class OrderGrid extends EntityGrid<OrderRow, any> {
    protected getColumnsKey() { return OrderColumns.columnsKey; }
    protected getDialogType() { return OrderDialog; }
    protected getIdProperty() { return OrderRow.idProperty; }
    protected getInsertPermission() { return OrderRow.insertPermission; }
    protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
    protected getRowDefinition() { return OrderRow; }
    protected getService() { return OrderService.baseUrl; }

    protected shippingStateFilter: EnumEditor;

    constructor(container: JQuery) {
        super(container);
    }

    protected getQuickFilters() {

        var filters = super.getQuickFilters();

        filters.push({
            type: LookupEditor,
            options: {
                lookupKey: ProductsRow.lookupKey
            },
            field: 'ProductId',
            title: 'Contains Product in Details',
            handler: p => {
                (this.view.params as OrderListRequest).ProductId = toId(p.value);
            },
            cssClass: 'hidden-xs'
        });

        return filters;
    }

    protected createQuickFilters() {
        super.createQuickFilters();

        this.shippingStateFilter = this.findQuickFilter(EnumEditor, fld.ShippingState);
    }

    protected getButtons() {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: OrderService.baseUrl + '/ListExcel',
            onViewSubmit: () => this.onViewSubmit(),
            separator: true
        }));

        buttons.push(PdfExportHelper.createToolButton({
            grid: this,
            onViewSubmit: () => this.onViewSubmit()
        }));

        buttons.push({
            title: 'Warehouse',
            cssClass: 'export-xlsx-button',
            onClick: () => {
                var dialog = new StoreAverageDialog();
                dialog.element.on('dialogclose', () => {
                    this.refresh();
                    dialog = null;
                });
                dialog.dialogOpen();
            }
        });

        return buttons;
    }

    protected getColumns() {
        var columns = super.getColumns();

        columns.splice(1, 0, {
            id: 'Print Invoice',
            field: null,
            name: '',
            cssClass: 'align-center',
            format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                '<i class="fa fa-file-pdf-o text-red"></i></a>',
            width: 24,
            minWidth: 24,
            maxWidth: 24
        });

        return columns;
    }

    protected onClick(e: JQueryEventObject, row: number, cell: number) {
        super.onClick(e, row, cell);

        if (e.isDefaultPrevented())
            return;

        var item = this.itemAt(row);
        var target = $(e.target);

        if (target.parent().hasClass('inline-action'))
            target = target.parent();

        if (target.hasClass('inline-action')) {
            e.preventDefault();

            if (target.hasClass('print-invoice')) {
                ReportHelper.execute({
                    reportKey: 'Store.ProductMovementDetails',
                    params: {
                        ProductMoveId: item.OrderId
                    }
                });
            }
        }
    }



    public set_shippingState(value: number): void {
        this.shippingStateFilter.value = value == null ? '' : value.toString();
    }

    protected addButtonClick() {
        var eq = this.view.params.EqualityFilter;
        this.editItem(<OrderRow>{
            CounterpartyId: eq ? eq.CounterpartyId : null
        });
    }
}