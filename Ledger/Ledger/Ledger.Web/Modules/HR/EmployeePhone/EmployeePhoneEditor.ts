
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeePhoneEditor extends Common.GridEditorBase<EmployeePhoneRow> {
        protected getColumnsKey() { return 'HR.EmployeePhone'; }
        protected getDialogType() { return EmployeePhoneEditorDialog; }
                protected getLocalTextPrefix() { return EmployeePhoneRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}