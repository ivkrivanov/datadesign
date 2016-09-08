
namespace Ledger.Infra {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupportDialog extends Serenity.EntityDialog<SupportRow, any> {
        protected getFormKey() { return SupportForm.formKey; }
        protected getIdProperty() { return SupportRow.idProperty; }
        protected getLocalTextPrefix() { return SupportRow.localTextPrefix; }
        protected getNameProperty() { return SupportRow.nameProperty; }
        protected getService() { return SupportService.baseUrl; }

        protected form = new SupportForm(this.idPrefix);
    }
}