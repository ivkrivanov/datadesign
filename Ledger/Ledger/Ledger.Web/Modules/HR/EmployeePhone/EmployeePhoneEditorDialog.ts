
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeePhoneEditorDialog extends Common.GridEditorDialog<EmployeePhoneRow> {
        protected getFormKey() { return EmployeePhoneForm.formKey; }
                protected getLocalTextPrefix() { return EmployeePhoneRow.localTextPrefix; }
        protected getNameProperty() { return EmployeePhoneRow.nameProperty; }
        protected form = new EmployeePhoneForm(this.idPrefix);
    }
}