
namespace Store.Store {

    import fld = ProductMovementRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ProductMovementGrid extends Serenity.EntityGrid<ProductMovementRow, any> {
        protected getColumnsKey() { return 'Store.ProductMovement'; }
        protected getDialogType() { return ProductMovementDialog; }
        protected getIdProperty() { return ProductMovementRow.idProperty; }
        protected getInsertPermission() { return ProductMovementRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductMovementRow.localTextPrefix; }
        protected getService() { return ProductMovementService.baseUrl; }

        protected shippingStateFilter: Serenity.EnumEditor;

        constructor(container: JQuery) {
            super(container);
        }

        protected getQuickFilters() {

            var filters = super.getQuickFilters();

            filters.push({
                type: Serenity.LookupEditor,
                options: {
                    lookupKey: ProductsRow.lookupKey
                },
                field: 'ProductId',
                title: 'Contains Product in Details',
                handler: p => {
                    (this.view.params as ProductMovementListRequest).ProductId = Q.toId(p.value);
                },
                cssClass: 'hidden-xs'
            });

            return filters;
        }

        protected createQuickFilters() {
            super.createQuickFilters();

            this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ProductMovementService.baseUrl + '/ListExcel',
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

            if (target.parent().hasClass('inline-action'))
                target = target.parent();

            if (target.hasClass('inline-action')) {
                e.preventDefault();

                if (target.hasClass('print-invoice')) {
                    Common.ReportHelper.execute({
                        reportKey: 'Store.ProductMovementDetails',
                        params: {
                            ProductMoveId: item.ProductMoveId
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
            this.editItem(<ProductMovementRow>{
                CounterpartyId: eq ? eq.CounterpartyId : null
            });
        }
    }
}