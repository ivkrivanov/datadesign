
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    export class EmployeeEmailGrid extends Serenity.EntityGrid<EmployeeEmailRow, any> {
        protected getColumnsKey() { return 'HR.EmployeeEmail'; }
        protected getDialogType() { return EmployeeEmailDialog; }
        protected getIdProperty() { return EmployeeEmailRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeeEmailRow.localTextPrefix; }
        protected getService() { return EmployeeEmailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}