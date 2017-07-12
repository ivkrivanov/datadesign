namespace Store.Infra {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupportTypeStringEditorDialog extends Common.GridEditorDialog<SupportTypeStringRow>{
        protected getFormKey() { return SupportTypeStringForm.formKey; }
        protected getLocalTextPrefix() { return SupportTypeStringRow.localTextPrefix; }
        protected getNameProperty() { return SupportTypeStringRow.nameProperty; }
        protected form = new SupportTypeStringForm(this.idPrefix);
    }
}