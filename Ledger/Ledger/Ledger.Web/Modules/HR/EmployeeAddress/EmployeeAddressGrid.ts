
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeeAddressGrid extends Serenity.EntityGrid<EmployeeAddressRow, any> {

        protected getColumnsKey() {
            return 'HR.EmployeeAddress';
        }
        protected getDialogType() {
            return EmployeeAddressDialog;
        }
        protected getIdProperty() {
            return EmployeeAddressRow.idProperty;
        }
        protected getLocalTextPrefix() {
            return EmployeeAddressRow.localTextPrefix;
        }
        protected getService() {
            return EmployeeAddressService.baseUrl;
        }

        constructor(container: JQuery) {
            super(container);
        }
    }
}