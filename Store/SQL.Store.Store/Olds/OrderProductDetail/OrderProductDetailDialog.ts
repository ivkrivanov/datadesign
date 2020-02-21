
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class OrderProductDetailDialog extends Serenity.EntityDialog<OrderProductDetailRow, any> {
        protected getFormKey() { return OrderProductDetailForm.formKey; }
        protected getIdProperty() { return OrderProductDetailRow.idProperty; }
        protected getLocalTextPrefix() { return OrderProductDetailRow.localTextPrefix; }
        protected getService() { return OrderProductDetailService.baseUrl; }

        protected form = new OrderProductDetailForm(this.idPrefix);

    }
}