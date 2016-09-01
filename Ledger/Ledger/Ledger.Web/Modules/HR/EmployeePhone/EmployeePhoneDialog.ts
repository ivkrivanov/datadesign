
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class EmployeePhoneDialog extends Serenity.EntityDialog<EmployeePhoneRow, any> {
        protected getFormKey() { return EmployeePhoneForm.formKey; }
        protected getIdProperty() { return EmployeePhoneRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeePhoneRow.localTextPrefix; }
        protected getNameProperty() { return EmployeePhoneRow.nameProperty; }
        protected getService() { return EmployeePhoneService.baseUrl; }

        protected form = new EmployeePhoneForm(this.idPrefix);
    }
}