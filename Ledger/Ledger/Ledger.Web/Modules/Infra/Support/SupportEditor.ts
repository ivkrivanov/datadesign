
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class SupportEditor extends Common.GridEditorBase<SupportRow> {
        protected getColumnsKey() { return 'Infra.Support'; }
        protected getDialogType() { return SupportEditorDialog; }
                protected getLocalTextPrefix() { return SupportRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}