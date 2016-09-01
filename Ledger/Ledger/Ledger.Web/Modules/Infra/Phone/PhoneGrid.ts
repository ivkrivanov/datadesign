
namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class PhoneGrid extends Serenity.EntityGrid<PhoneRow, any> {
        protected getColumnsKey() { return 'Infra.Phone'; }
        protected getDialogType() { return PhoneDialog; }
        protected getIdProperty() { return PhoneRow.idProperty; }
        protected getLocalTextPrefix() { return PhoneRow.localTextPrefix; }
        protected getService() { return PhoneService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}