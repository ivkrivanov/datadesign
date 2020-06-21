
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ItemCategoryGrid extends Serenity.EntityGrid<ItemCategoryRow, any> {
        protected getColumnsKey() { return 'Store.ItemCategory'; }
        protected getDialogType() { return ItemCategoryDialog; }
        protected getIdProperty() { return ItemCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ItemCategoryRow.localTextPrefix; }
        protected getService() { return ItemCategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}