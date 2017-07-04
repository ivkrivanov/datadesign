
namespace Store.Infra {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupportTypeStringDialog extends Serenity.EntityDialog<SupportTypeStringRow, any> {
        protected getFormKey() { return SupportTypeStringForm.formKey; }
        protected getIdProperty() { return SupportTypeStringRow.idProperty; }
        protected getLocalTextPrefix() { return SupportTypeStringRow.localTextPrefix; }
        protected getNameProperty() { return SupportTypeStringRow.nameProperty; }
        protected getService() { return SupportTypeStringService.baseUrl; }

        protected form = new SupportTypeStringForm(this.idPrefix);

    }
}