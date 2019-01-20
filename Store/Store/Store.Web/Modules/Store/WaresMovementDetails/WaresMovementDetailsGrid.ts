
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class WaresMovementDetailsGrid extends Serenity.EntityGrid<WaresMovementDetailsRow, any> {
        protected getColumnsKey() { return 'Store.WaresMovementDetails'; }
        protected getDialogType() { return WaresMovementDetailsDialog; }
        protected getIdProperty() { return WaresMovementDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return WaresMovementDetailsRow.localTextPrefix; }
        protected getService() { return WaresMovementDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}