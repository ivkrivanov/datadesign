
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmplAddressTypeEditor extends Common.GridEditorBase<EmplAddressTypeRow> {
        protected getColumnsKey() { return 'HR.EmplAddressType'; }
        protected getDialogType() { return EmplAddressTypeEditorDialog; }
                protected getLocalTextPrefix() { return EmplAddressTypeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}