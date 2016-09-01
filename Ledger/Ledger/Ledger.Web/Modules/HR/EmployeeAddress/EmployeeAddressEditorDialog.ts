
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeeAddressEditorDialog extends Common.GridEditorDialog<EmployeeAddressRow> {

        protected getFormKey() {
            return EmployeeAddressForm.formKey;
        }

        protected getLocalTextPrefix() {
            return EmployeeAddressRow.localTextPrefix;
        }

        protected getNameProperty() {
            return EmployeeAddressRow.nameProperty;
        }

        protected form: EmployeeAddressForm

        constructor() {
            super();
            this.form = new EmployeeAddressForm(this.idPrefix);
        }
    }
}