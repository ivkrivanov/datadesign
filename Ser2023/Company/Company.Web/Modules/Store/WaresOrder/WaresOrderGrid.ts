import { Decorators, EntityGrid, EnumEditor, LookupEditor, ToolButton } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { WaresOrderColumns, WaresOrderListRequest, WaresOrderRow, WaresOrderService, WaresRow } from "../../ServerTypes/Store";
import { WaresOrderDialog } from "./WaresOrderDialog";
import { StoreAverageDialog } from "./StoreAverageDialog";
import { ExcelExportHelper } from "../../Common/Helpers/ExcelExportHelper";
import { PdfExportHelper } from "../../Common/Helpers/PdfExportHelper";
import { ReportHelper } from "../../Common/Reporting/ReportHelper";


const fld = WaresOrderRow.Fields;

@Decorators.registerClass()
@Decorators.filterable()
export class WaresOrderGrid<P = {}> extends EntityGrid<WaresOrderRow, P> {
    protected getColumnsKey() { return WaresOrderColumns.columnsKey; }
    protected getDialogType() { return <any>WaresOrderDialog; }
    protected getIdProperty() { return WaresOrderRow.idProperty; }
    protected getInsertPermission() { return WaresOrderRow.insertPermission; }
    protected getLocalTextPrefix() { return WaresOrderRow.localTextPrefix; }
    protected getService() { return WaresOrderService.baseUrl; }

    protected shippingStateFilter: EnumEditor;

    protected getQuickFilters() { //: Serenity.QuickFilter<Serenity.Widget<any>, any > []  {

        var filters = super.getQuickFilters();

        filters.push({
            type: LookupEditor,
            options: {
                lookupKey: WaresRow.lookupKey
            },
            field: 'WaresOrderID',
            title: 'Contains Wares in Details',
            handler: w => {
                (this.view.params as WaresOrderListRequest).WaresId = toId(w.value);
            },
            cssClass: 'hidden-xs'
        });

        return filters;
    }

    protected createQuickFilters() {
        super.createQuickFilters();

        this.shippingStateFilter = this.findQuickFilter(EnumEditor, fld.ShippingState);
    }

    protected getButtons(): ToolButton[] {
        var buttons = super.getButtons();

        buttons.push(ExcelExportHelper.createToolButton({
            grid: this,
            service: WaresOrderService.baseUrl + '/ListExcel',
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

        // if user clicks "i" element, e.g. icon
        if (target.parent().hasClass('inline-action'))
            target = target.parent();

        if (target.hasClass('inline-action')) {
            e.preventDefault();

            if (target.hasClass('print-invoice')) {
                ReportHelper.execute({
                    reportKey: 'Store.WaresOrderDetail',
                    params: {
                        WaresOrderID: item.WaresOrderId
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
        this.editItem(<WaresOrderRow>{
            CounterpartyID: eq ? eq.CounterpartyID : null
        });
    }

}
