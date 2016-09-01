
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {

        protected getColumnsKey() {
            return 'HR.Employee';
        }

        protected getDialogType() {
            return EmployeeDialog;
        }

        protected getIdProperty() {
            return EmployeeRow.idProperty;
        }

        protected getLocalTextPrefix() {
            return EmployeeRow.localTextPrefix;
        }

        protected getService() {
            return EmployeeService.baseUrl;
        }

        constructor(container: JQuery) {
            super(container);
        }
    }
}