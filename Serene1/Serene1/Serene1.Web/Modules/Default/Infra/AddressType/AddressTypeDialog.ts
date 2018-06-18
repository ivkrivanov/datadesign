
namespace Serene1.Default.Infra {

    @Serenity.Decorators.registerClass()
    export class AddressTypeDialog extends Serenity.EntityDialog<AddressTypeRow, any> {
        protected getFormKey() { return AddressTypeForm.formKey; }
        protected getIdProperty() { return AddressTypeRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeRow.localTextPrefix; }
        protected getNameProperty() { return AddressTypeRow.nameProperty; }
        protected getService() { return AddressTypeService.baseUrl; }

        protected form = new AddressTypeForm(this.idPrefix);

    }
}