
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class CurrencyEditorDialog extends Common.GridEditorDialog<CurrencyRow> {
        protected getFormKey() { return CurrencyForm.formKey; }
                protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getNameProperty() { return CurrencyRow.nameProperty; }
        protected form = new CurrencyForm(this.idPrefix);
    }
}