
namespace Serene1.Default.Infra {

    @Serenity.Decorators.registerClass()
    export class AddressTypeStringDialog extends Serenity.EntityDialog<AddressTypeStringRow, any> {
        protected getFormKey() { return AddressTypeStringForm.formKey; }
        protected getIdProperty() { return AddressTypeStringRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeStringRow.localTextPrefix; }
        protected getNameProperty() { return AddressTypeStringRow.nameProperty; }
        protected getService() { return AddressTypeStringService.baseUrl; }

        protected form = new AddressTypeStringForm(this.idPrefix);

    }
}