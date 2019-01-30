
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class OrderProductGrid extends Serenity.EntityGrid<OrderProductRow, any> {
        protected getColumnsKey() { return 'Store.OrderProduct'; }
        protected getDialogType() { return OrderProductDialog; }
        protected getIdProperty() { return OrderProductRow.idProperty; }
        protected getLocalTextPrefix() { return OrderProductRow.localTextPrefix; }
        protected getService() { return OrderProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}