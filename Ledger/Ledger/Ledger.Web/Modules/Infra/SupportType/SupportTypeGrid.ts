
namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    export class SupportTypeGrid extends Serenity.EntityGrid<SupportTypeRow, any> {
        protected getColumnsKey() { return 'Infra.SupportType'; }
        protected getDialogType() { return SupportTypeDialog; }
        protected getIdProperty() { return SupportTypeRow.idProperty; }
        protected getLocalTextPrefix() { return SupportTypeRow.localTextPrefix; }
        protected getService() { return SupportTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}