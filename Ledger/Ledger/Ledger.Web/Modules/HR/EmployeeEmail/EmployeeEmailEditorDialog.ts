
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeeEmailEditorDialog extends Common.GridEditorDialog<EmployeeEmailRow> {

        protected getFormKey() {
            return EmployeeEmailForm.formKey;
        }

        protected getLocalTextPrefix() {
            return EmployeeEmailRow.localTextPrefix;
        }

        protected getNameProperty() {
            return EmployeeEmailRow.nameProperty;
        }

        protected form: EmployeeEmailForm

        constructor() {
            super();
            this.form = new EmployeeEmailForm(this.idPrefix);
        }
    }
}