
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class OrderProductDetailGrid extends Serenity.EntityGrid<OrderProductDetailRow, any> {
        protected getColumnsKey() { return 'Store.OrderProductDetail'; }
        protected getDialogType() { return OrderProductDetailDialog; }
        protected getIdProperty() { return OrderProductDetailRow.idProperty; }
        protected getLocalTextPrefix() { return OrderProductDetailRow.localTextPrefix; }
        protected getService() { return OrderProductDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}