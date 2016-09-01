
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class EmailEditor extends Common.GridEditorBase<EmailRow> {
        protected getColumnsKey() { return 'Infra.Email'; }
        protected getDialogType() { return EmailEditorDialog; }
                protected getLocalTextPrefix() { return EmailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}