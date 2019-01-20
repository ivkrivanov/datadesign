
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class WaresCategoriesGrid extends Serenity.EntityGrid<WaresCategoriesRow, any> {
        protected getColumnsKey() { return 'Store.WaresCategories'; }
        protected getDialogType() { return WaresCategoriesDialog; }
        protected getIdProperty() { return WaresCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return WaresCategoriesRow.localTextPrefix; }
        protected getService() { return WaresCategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}