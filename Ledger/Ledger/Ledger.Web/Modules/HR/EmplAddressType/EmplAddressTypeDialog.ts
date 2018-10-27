
namespace Ledger.HR {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmplAddressTypeDialog extends Serenity.EntityDialog<EmplAddressTypeRow, any> {
        protected getFormKey() { return EmplAddressTypeForm.formKey; }
        protected getIdProperty() { return EmplAddressTypeRow.idProperty; }
        protected getLocalTextPrefix() { return EmplAddressTypeRow.localTextPrefix; }
        protected getNameProperty() { return EmplAddressTypeRow.nameProperty; }
        protected getService() { return EmplAddressTypeService.baseUrl; }

        protected form = new EmplAddressTypeForm(this.idPrefix);

    }
}