
namespace Store.Store {
    import fld = Store.WaresMovementDetailsRow.Fields

    @Serenity.Decorators.registerClass()
    export class WaresMovementDetailsGrid extends Serenity.EntityGrid<WaresMovementDetailsRow, any> {
        protected getColumnsKey() { return 'Store.WaresMovementDetails'; }
        protected getDialogType() { return WaresMovementDetailsDialog; }
        protected getIdProperty() { return WaresMovementDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return WaresMovementDetailsRow.localTextPrefix; }
        protected getService() { return WaresMovementDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [new Slick.Aggregators.Sum(fld.LineTotal)]
            });

            return grid;
        }

        protected getColumns() {
            var columns = super.getColumns();

            Q.first(columns, x => x.field === fld.LineTotal)
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