
namespace Store.Infra {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupportTypeDialog extends Serenity.EntityDialog<SupportTypeRow, any> {
        protected getFormKey() { return SupportTypeForm.formKey; }
        protected getIdProperty() { return SupportTypeRow.idProperty; }
        protected getLocalTextPrefix() { return SupportTypeRow.localTextPrefix; }
        protected getNameProperty() { return SupportTypeRow.nameProperty; }
        protected getService() { return SupportTypeService.baseUrl; }

        protected form = new SupportTypeForm(this.idPrefix);

    }
}