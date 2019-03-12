
namespace Store.Store {
    import fld = Store.ProductDetailRow.Fields

    @Serenity.Decorators.registerClass()
    export class ProductDetailGrid extends Serenity.EntityGrid<ProductDetailRow, any> {
        protected getColumnsKey() { return 'Store.ProductDetail'; }
        protected getDialogType() { return ProductDetailDialog; }
        protected getIdProperty() { return ProductDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }
        protected getService() { return ProductDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

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
                    (totals.sum ? ('Sum: ' + Q.coalesce(totals.sum[col.field], '')) : '');

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