
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeeEditorDialog extends Common.GridEditorDialog<EmployeeRow> {
        protected getFormKey() {
            return EmployeeForm.formKey;
        }

        protected getLocalTextPrefix() {
            return EmployeeRow.localTextPrefix;
        }

        protected getNameProperty() {
            return EmployeeRow.nameProperty;
        }

        protected form = new EmployeeForm(this.idPrefix);
    }
}