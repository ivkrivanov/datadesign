
namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class EmailGrid extends Serenity.EntityGrid<EmailRow, any> {
        protected getColumnsKey() { return 'Infra.Email'; }
        protected getDialogType() { return EmailDialog; }
        protected getIdProperty() { return EmailRow.idProperty; }
        protected getLocalTextPrefix() { return EmailRow.localTextPrefix; }
        protected getService() { return EmailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}