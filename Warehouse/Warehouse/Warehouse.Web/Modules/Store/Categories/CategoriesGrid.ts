
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey() { return 'Store.Categories'; }
        protected getDialogType() { return CategoriesDialog; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getService() { return CategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}