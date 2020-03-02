
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class CategoryTypeGrid extends Serenity.EntityGrid<CategoryTypeRow, any> {
        protected getColumnsKey() { return 'Store.CategoryType'; }
        protected getDialogType() { return CategoryTypeDialog; }
        protected getIdProperty() { return CategoryTypeRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryTypeRow.localTextPrefix; }
        protected getService() { return CategoryTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}