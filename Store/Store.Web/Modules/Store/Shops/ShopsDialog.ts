
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ShopsDialog extends Serenity.EntityDialog<ShopsRow, any> {
        protected getFormKey() { return ShopsForm.formKey; }
        protected getIdProperty() { return ShopsRow.idProperty; }
        protected getLocalTextPrefix() { return ShopsRow.localTextPrefix; }
        protected getNameProperty() { return ShopsRow.nameProperty; }
        protected getService() { return ShopsService.baseUrl; }

        protected form = new ShopsForm(this.idPrefix);

    }
}