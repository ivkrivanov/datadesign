
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupportTypeEditorDialog extends Common.GridEditorDialog<SupportTypeRow> {
        protected getFormKey() { return SupportTypeForm.formKey; }
                protected getLocalTextPrefix() { return SupportTypeRow.localTextPrefix; }
        protected getNameProperty() { return SupportTypeRow.nameProperty; }
        protected form = new SupportTypeForm(this.idPrefix);
    }
}