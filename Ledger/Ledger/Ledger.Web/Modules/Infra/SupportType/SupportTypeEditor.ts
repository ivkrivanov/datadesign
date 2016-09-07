
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class SupportTypeEditor extends Common.GridEditorBase<SupportTypeRow> {
        protected getColumnsKey() { return 'Infra.SupportType'; }
        protected getDialogType() { return SupportTypeEditorDialog; }
                protected getLocalTextPrefix() { return SupportTypeRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}