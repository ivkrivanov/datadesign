
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailsGrid extends Serenity.EntityGrid<ProductDetailsRow, any> {
        protected getColumnsKey() { return 'Store.ProductDetails'; }
        protected getDialogType() { return ProductDetailsDialog; }
        protected getIdProperty() { return ProductDetailsRow.idProperty; }
        protected getInsertPermission() { return ProductDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }
        protected getService() { return ProductDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}