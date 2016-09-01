
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeePhoneGrid extends Serenity.EntityGrid<EmployeePhoneRow, any> {
        protected getColumnsKey() { return 'HR.EmployeePhone'; }
        protected getDialogType() { return EmployeePhoneDialog; }
        protected getIdProperty() { return EmployeePhoneRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeePhoneRow.localTextPrefix; }
        protected getService() { return EmployeePhoneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}