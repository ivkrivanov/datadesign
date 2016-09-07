
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class SupportTypeStringEditor extends Common.GridEditorBase<SupportTypeStringRow> {
        protected getColumnsKey() { return 'Infra.SupportTypeString'; }
        protected getDialogType() { return SupportTypeStringEditorDialog; }
                protected getLocalTextPrefix() { return SupportTypeStringRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}