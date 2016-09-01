
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class PhoneEditor extends Common.GridEditorBase<PhoneRow> {
        protected getColumnsKey() { return 'Infra.Phone'; }
        protected getDialogType() { return PhoneEditorDialog; }
                protected getLocalTextPrefix() { return PhoneRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}