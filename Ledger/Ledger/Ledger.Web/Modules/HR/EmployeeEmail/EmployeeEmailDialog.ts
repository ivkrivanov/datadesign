
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeeEmailDialog extends Serenity.EntityDialog<EmployeeEmailRow, any> {
        protected getFormKey() { return EmployeeEmailForm.formKey; }
        protected getIdProperty() { return EmployeeEmailRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeEmailRow.localTextPrefix; }
        protected getNameProperty() { return EmployeeEmailRow.nameProperty; }
        protected getService() { return EmployeeEmailService.baseUrl; }

        protected form = new EmployeeEmailForm(this.idPrefix);
    }
}