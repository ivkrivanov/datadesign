
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey() { return CategoriesForm.formKey; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesRow.nameProperty; }
        protected getService() { return CategoriesService.baseUrl; }

        protected form = new CategoriesForm(this.idPrefix);

    }
}