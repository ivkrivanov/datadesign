
namespace Serene1.Default.Employees {

    @Serenity.Decorators.registerClass()
    export class EmployeesAddressesGrid extends Serenity.EntityGrid<EmployeesAddressesRow, any> {
        protected getColumnsKey() { return 'Default.Employees.EmployeesAddresses'; }
        protected getDialogType() { return EmployeesAddressesDialog; }
        protected getIdProperty() { return EmployeesAddressesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeesAddressesRow.localTextPrefix; }
        protected getService() { return EmployeesAddressesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}