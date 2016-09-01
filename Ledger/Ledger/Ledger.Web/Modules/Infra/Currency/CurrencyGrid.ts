
namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class CurrencyGrid extends Serenity.EntityGrid<CurrencyRow, any> {
        protected getColumnsKey() { return 'Infra.Currency'; }
        protected getDialogType() { return CurrencyDialog; }
        protected getIdProperty() { return CurrencyRow.idProperty; }
        protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
        protected getService() { return CurrencyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}