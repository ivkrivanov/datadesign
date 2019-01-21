
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmplAddressTypeEditorDialog extends Common.GridEditorDialog<EmplAddressTypeRow> {
        protected getFormKey() { return EmplAddressTypeForm.formKey; }
        protected getLocalTextPrefix() { return EmplAddressTypeRow.localTextPrefix; }
        protected getNameProperty() { return EmplAddressTypeRow.nameProperty; }
        protected form = new EmplAddressTypeForm(this.idPrefix);
    }
}