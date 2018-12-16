
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailDialog extends Serenity.EntityDialog<ProductDetailRow, any> {
        protected getFormKey() { return ProductDetailForm.formKey; }
        protected getIdProperty() { return ProductDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }
        protected getService() { return ProductDetailService.baseUrl; }

        protected form = new ProductDetailForm(this.idPrefix);

    }
}