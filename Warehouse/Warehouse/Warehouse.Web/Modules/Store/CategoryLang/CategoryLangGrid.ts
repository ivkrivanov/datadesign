
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class CategoryLangGrid extends Serenity.EntityGrid<CategoryLangRow, any> {
        protected getColumnsKey() { return 'Store.CategoryLang'; }
        protected getDialogType() { return CategoryLangDialog; }
        protected getIdProperty() { return CategoryLangRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryLangRow.localTextPrefix; }
        protected getService() { return CategoryLangService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}