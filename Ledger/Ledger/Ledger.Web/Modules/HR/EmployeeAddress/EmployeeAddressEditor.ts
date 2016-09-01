
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeeAddressEditor extends Common.GridEditorBase<EmployeeAddressRow> {

        protected getColumnsKey() {
            return 'HR.EmployeeAddress';
        }

        protected getLocalTextPrefix() {
            return EmployeeAddressRow.localTextPrefix;
        }

        protected getDialogType() {
            return EmployeeAddressEditorDialog;
        }

        constructor(container: JQuery) {
            super(container);
        }

        protected getAddButtonCaption() {
            return "Add Address";
        }

        protected validateEntity(row: EmployeeAddressRow, id: number) {

            if (!super.validateEntity(row, id))
                return false;

            row.StreetAddress = Infra.AddressesRow.getLookup()
                .itemById[row.AddressId].StreetAddress;

            return true;
        }
    }
}