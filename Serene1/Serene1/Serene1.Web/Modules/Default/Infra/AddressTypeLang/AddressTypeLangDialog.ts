
namespace Serene1.Default.Infra.Default {

    @Serenity.Decorators.registerClass()
    export class AddressTypeLangDialog extends Serenity.EntityDialog<AddressTypeLangRow, any> {
        protected getFormKey() { return AddressTypeLangForm.formKey; }
        protected getIdProperty() { return AddressTypeLangRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeLangRow.localTextPrefix; }
        protected getNameProperty() { return AddressTypeLangRow.nameProperty; }
        protected getService() { return AddressTypeLangService.baseUrl; }

        protected form = new AddressTypeLangForm(this.idPrefix);

    }
}