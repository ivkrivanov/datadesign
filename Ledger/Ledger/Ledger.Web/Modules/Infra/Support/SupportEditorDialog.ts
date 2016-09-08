
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SupportEditorDialog extends Common.GridEditorDialog<SupportRow> {
        protected getFormKey() { return SupportForm.formKey; }
                protected getLocalTextPrefix() { return SupportRow.localTextPrefix; }
        protected getNameProperty() { return SupportRow.nameProperty; }
        protected form = new SupportForm(this.idPrefix);
    }
}