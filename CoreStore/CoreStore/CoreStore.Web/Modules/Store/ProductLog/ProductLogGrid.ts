
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductLogGrid extends Serenity.EntityGrid<ProductLogRow, any> {
        protected getColumnsKey() { return 'Store.ProductLog'; }
        protected getDialogType() { return ProductLogDialog; }
        protected getIdProperty() { return ProductLogRow.idProperty; }
        protected getInsertPermission() { return ProductLogRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductLogRow.localTextPrefix; }
        protected getService() { return ProductLogService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}