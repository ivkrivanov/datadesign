
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class CategoryLangDialog extends Serenity.EntityDialog<CategoryLangRow, any> {
        protected getFormKey() { return CategoryLangForm.formKey; }
        protected getIdProperty() { return CategoryLangRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryLangRow.localTextPrefix; }
        protected getNameProperty() { return CategoryLangRow.nameProperty; }
        protected getService() { return CategoryLangService.baseUrl; }

        protected form = new CategoryLangForm(this.idPrefix);

    }
}