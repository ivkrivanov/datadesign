
namespace Store.Infra {
    
    @Serenity.Decorators.registerClass()
    export class SupportGrid extends Serenity.EntityGrid<SupportRow, any> {
        protected getColumnsKey() { return 'Infra.Support'; }
        protected getDialogType() { return SupportDialog; }
        protected getIdProperty() { return SupportRow.idProperty; }
        protected getLocalTextPrefix() { return SupportRow.localTextPrefix; }
        protected getService() { return SupportService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}