
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class CategoriesTypeGrid extends Serenity.EntityGrid<CategoriesTypeRow, any> {
        protected getColumnsKey() { return 'Store.CategoriesType'; }
        protected getDialogType() { return CategoriesTypeDialog; }
        protected getIdProperty() { return CategoriesTypeRow.idProperty; }
        protected getInsertPermission() { return CategoriesTypeRow.insertPermission; }
        protected getLocalTextPrefix() { return CategoriesTypeRow.localTextPrefix; }
        protected getService() { return CategoriesTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}