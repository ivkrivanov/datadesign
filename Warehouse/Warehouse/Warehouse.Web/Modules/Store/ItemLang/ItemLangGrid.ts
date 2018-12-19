
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ItemLangGrid extends Serenity.EntityGrid<ItemLangRow, any> {
        protected getColumnsKey() { return 'Store.ItemLang'; }
        protected getDialogType() { return ItemLangDialog; }
        protected getIdProperty() { return ItemLangRow.idProperty; }
        protected getLocalTextPrefix() { return ItemLangRow.localTextPrefix; }
        protected getService() { return ItemLangService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}