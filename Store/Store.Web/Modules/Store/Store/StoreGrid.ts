
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class StoreGrid extends Serenity.EntityGrid<StoreRow, any> {
        protected getColumnsKey() { return 'Store.Store'; }
        protected getDialogType() { return StoreDialog; }
        protected getIdProperty() { return StoreRow.idProperty; }
        protected getLocalTextPrefix() { return StoreRow.localTextPrefix; }
        protected getService() { return StoreService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}