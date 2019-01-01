
namespace Warehouse.Store {

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
    }
}