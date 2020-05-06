
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailsDialog extends Serenity.EntityDialog<ProductDetailsRow, any> {
        protected getFormKey() { return ProductDetailsForm.formKey; }
        protected getIdProperty() { return ProductDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }
        protected getService() { return ProductDetailsService.baseUrl; }
        protected getDeletePermission() { return ProductDetailsRow.deletePermission; }
        protected getInsertPermission() { return ProductDetailsRow.insertPermission; }
        protected getUpdatePermission() { return ProductDetailsRow.updatePermission; }

        protected form = new ProductDetailsForm(this.idPrefix);

    }
}