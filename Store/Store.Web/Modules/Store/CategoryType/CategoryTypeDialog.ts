
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class CategoryTypeDialog extends Serenity.EntityDialog<CategoryTypeRow, any> {
        protected getFormKey() { return CategoryTypeForm.formKey; }
        protected getIdProperty() { return CategoryTypeRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryTypeRow.localTextPrefix; }
        protected getNameProperty() { return CategoryTypeRow.nameProperty; }
        protected getService() { return CategoryTypeService.baseUrl; }

        protected form = new CategoryTypeForm(this.idPrefix);

    }
}