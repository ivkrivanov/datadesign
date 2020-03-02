
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class OrderProductDialog extends Serenity.EntityDialog<OrderProductRow, any> {
        protected getFormKey() { return OrderProductForm.formKey; }
        protected getIdProperty() { return OrderProductRow.idProperty; }
        protected getLocalTextPrefix() { return OrderProductRow.localTextPrefix; }
        protected getNameProperty() { return OrderProductRow.nameProperty; }
        protected getService() { return OrderProductService.baseUrl; }

        protected form = new OrderProductForm(this.idPrefix);

    }
}