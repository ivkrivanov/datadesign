
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeeEmailEditor extends Common.GridEditorBase<EmployeeEmailRow> {

        protected getColumnsKey() {
            return 'HR.EmployeeEmail';
        }

        protected getDialogType() {
            return EmployeeEmailEditorDialog;
        }
        protected getLocalTextPrefix() {
            return EmployeeEmailRow.localTextPrefix;
        }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add Email";
        }

        protected validateEntity(row: EmployeeEmailRow, id: number) {

            if (!super.validateEntity(row, id))
                return false;

            //row.EmailAddress = Infra.EmailRow.getLookup()
            //    .itemById[row.EmailId].EmailAddress;

            //row.FullName = HR.EmployeeRow.getLookup().itemById[row.EmployeeId].FullName;

            return true;
        }
    }
}