
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeeEditor extends Common.GridEditorBase<EmployeeRow> {

        protected getColumnsKey() {
            return 'HR.Employee';
        }

        protected getDialogType() {
            return EmployeeEditorDialog;
        }
        protected getLocalTextPrefix() {
            return EmployeeRow.localTextPrefix;
        }

        constructor(container: JQuery) {
            super(container);
        }
    }
}