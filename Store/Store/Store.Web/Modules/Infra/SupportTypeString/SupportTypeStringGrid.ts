
namespace Store.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class SupportTypeStringGrid extends Serenity.EntityGrid<SupportTypeStringRow, any> {
        protected getColumnsKey() { return 'Infra.SupportTypeString'; }
        protected getDialogType() { return SupportTypeStringDialog; }
        protected getIdProperty() { return SupportTypeStringRow.idProperty; }
        protected getLocalTextPrefix() { return SupportTypeStringRow.localTextPrefix; }
        protected getService() { return SupportTypeStringService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}