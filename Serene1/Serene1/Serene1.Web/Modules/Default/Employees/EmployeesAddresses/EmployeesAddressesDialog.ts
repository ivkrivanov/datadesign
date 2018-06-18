
namespace Serene1.Default.Employees {

    @Serenity.Decorators.registerClass()
    export class EmployeesAddressesDialog extends Serenity.EntityDialog<EmployeesAddressesRow, any> {
        protected getFormKey() { return EmployeesAddressesForm.formKey; }
        protected getIdProperty() { return EmployeesAddressesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeesAddressesRow.localTextPrefix; }
        protected getService() { return EmployeesAddressesService.baseUrl; }

        protected form = new EmployeesAddressesForm(this.idPrefix);

    }
}