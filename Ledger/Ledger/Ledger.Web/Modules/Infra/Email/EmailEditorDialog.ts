
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmailEditorDialog extends Common.GridEditorDialog<EmailRow> {
        protected getFormKey() { return EmailForm.formKey; }
                protected getLocalTextPrefix() { return EmailRow.localTextPrefix; }
        protected getNameProperty() { return EmailRow.nameProperty; }
        protected form = new EmailForm(this.idPrefix);
    }
}