
namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmailDialog extends Serenity.EntityDialog<EmailRow, any> {
        protected getFormKey() { return EmailForm.formKey; }
        protected getIdProperty() { return EmailRow.idProperty; }
        protected getLocalTextPrefix() { return EmailRow.localTextPrefix; }
        protected getNameProperty() { return EmailRow.nameProperty; }
        protected getService() { return EmailService.baseUrl; }

        protected form = new EmailForm(this.idPrefix);
    }
}