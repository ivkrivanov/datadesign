
namespace CoreStore.Store {
    import fld = Store.ProductMovementDetailsRow.Fields

    @Serenity.Decorators.registerClass()
    export class ProductMovementDetailsGrid extends Serenity.EntityGrid<ProductMovementDetailsRow, any> {
        protected getColumnsKey() { return 'Store.ProductMovementDetails'; }
        protected getDialogType() { return ProductMovementDetailsDialog; }
        protected getIdProperty() { return ProductMovementDetailsRow.idProperty; }
        protected getInsertPermission() { return ProductMovementDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductMovementDetailsRow.localTextPrefix; }
        protected getService() { return ProductMovementDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [new Slick.Aggregators.Sum(fld.LineValue)]
            });

            return grid;
        }

        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === fld.LineValue)
                .groupTotalsFormatter = (totals, col) =>
                    (totals.sum ? ('sum: ' + Q.coalesce(totals.sum[col.field], '')) : '');

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
}