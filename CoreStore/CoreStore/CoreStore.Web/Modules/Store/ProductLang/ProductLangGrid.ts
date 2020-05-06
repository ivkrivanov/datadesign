
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductLangGrid extends Serenity.EntityGrid<ProductLangRow, any> {
        protected getColumnsKey() { return 'Store.ProductLang'; }
        protected getDialogType() { return ProductLangDialog; }
        protected getIdProperty() { return ProductLangRow.idProperty; }
        protected getInsertPermission() { return ProductLangRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductLangRow.localTextPrefix; }
        protected getService() { return ProductLangService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}