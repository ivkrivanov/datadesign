
namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PhoneDialog extends Serenity.EntityDialog<PhoneRow, any> {
        protected getFormKey() { return PhoneForm.formKey; }
        protected getIdProperty() { return PhoneRow.idProperty; }
        protected getLocalTextPrefix() { return PhoneRow.localTextPrefix; }
        protected getNameProperty() { return PhoneRow.nameProperty; }
        protected getService() { return PhoneService.baseUrl; }

        protected form = new PhoneForm(this.idPrefix);
    }
}