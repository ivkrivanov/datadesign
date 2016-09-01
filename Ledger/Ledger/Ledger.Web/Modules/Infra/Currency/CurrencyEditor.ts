
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class CurrencyEditor extends Common.GridEditorBase<CurrencyRow> {
        protected getColumnsKey() { return 'Infra.Currency'; }
        protected getDialogType() { return CurrencyEditorDialog; }
                protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}