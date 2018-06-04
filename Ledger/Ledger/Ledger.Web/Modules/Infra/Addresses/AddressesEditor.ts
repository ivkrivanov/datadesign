
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class AddressesEditor extends Common.GridEditorBase<AddressesRow> {
        protected getColumnsKey() { return 'Infra.Addresses'; }
        protected getDialogType() { return AddressesEditorDialog; }
        protected getLocalTextPrefix() { return AddressesRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}