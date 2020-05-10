
namespace CoreStore.Store {

    import fld = WaresMovementRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class WaresMovementGrid extends Serenity.EntityGrid<WaresMovementRow, any> {
        protected getColumnsKey() { return 'Store.WaresMovement'; }
        protected getDialogType() { return WaresMovementDialog; }
        protected getIdProperty() { return WaresMovementRow.idProperty; }
        protected getInsertPermission() { return WaresMovementRow.insertPermission; }
        protected getLocalTextPrefix() { return WaresMovementRow.localTextPrefix; }
        protected getService() { return WaresMovementService.baseUrl; }

        protected shippingStateFilter: Serenity.EnumEditor;

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() { //: Serenity.QuickFilter<Serenity.Widget<any>, any > []  {

            var filters = super.getQuickFilters();

            filters.push({
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: WaresRow.lookupKey
                },
                field: 'WaresId',
                title: 'Contains Wares in Details',
                handler: w => {
                    (this.view.params as WaresMovementListRequest).WaresId = Q.toId(w.value);
                },
                cssClass: 'hidden-xs'
            });

            return filters;
        }


        protected createQuickFilters() {
            super.createQuickFilters();

            //this.findQuickFilter(Serenity.LookupEditor, fld.OperationTypeOperation).values = ["[102]Доставка на стоки"];

            //this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: WaresMovementService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
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
                field: 'Print Invoice',
                name: '',
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
                    Common.ReportHelper.execute({
                        reportKey: 'Store.WaresMovementDetails',
                        params: {
                            WaresMoveID: item.WaresMoveId
                        }
                    });
                }
            }
        }

        public set_shippingState(value: number): void {
            this.shippingStateFilter.value = value == null ? '' : value.toString();
        }

        //public set_OpCode(value: any): void {
        //    this.OpCodeQuickFilter.value = value == ["[102]Доставка на стоки"].toString();

        protected addButtonClick() {
            var eq = this.view.params.EqualityFilter;
            this.editItem(<WaresMovementRow>{
                CounterpartyId: eq ? eq.CounterpartyId : null
            });
        }
    }
}