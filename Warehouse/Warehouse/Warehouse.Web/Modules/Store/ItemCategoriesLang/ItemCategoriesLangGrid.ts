
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ItemCategoriesLangGrid extends Serenity.EntityGrid<ItemCategoriesLangRow, any> {
        protected getColumnsKey() { return 'Store.ItemCategoriesLang'; }
        protected getDialogType() { return ItemCategoriesLangDialog; }
        protected getIdProperty() { return ItemCategoriesLangRow.idProperty; }
        protected getLocalTextPrefix() { return ItemCategoriesLangRow.localTextPrefix; }
        protected getService() { return ItemCategoriesLangService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}