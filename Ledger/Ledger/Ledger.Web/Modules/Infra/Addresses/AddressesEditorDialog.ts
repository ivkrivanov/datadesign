
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AddressesEditorDialog extends Common.GridEditorDialog<AddressesRow> {
        protected getFormKey() { return AddressesForm.formKey; }
                protected getLocalTextPrefix() { return AddressesRow.localTextPrefix; }
        protected getNameProperty() { return AddressesRow.nameProperty; }
        protected form = new AddressesForm(this.idPrefix);
    }
}