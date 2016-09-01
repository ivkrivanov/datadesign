
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PhoneEditorDialog extends Common.GridEditorDialog<PhoneRow> {
        protected getFormKey() { return PhoneForm.formKey; }
                protected getLocalTextPrefix() { return PhoneRow.localTextPrefix; }
        protected getNameProperty() { return PhoneRow.nameProperty; }
        protected form = new PhoneForm(this.idPrefix);
    }
}