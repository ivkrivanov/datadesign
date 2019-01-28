
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDetailsDialog extends Serenity.EntityDialog<ProductMovementDetailsRow, any> {
        protected getFormKey() { return ProductMovementDetailsForm.formKey; }
        protected getIdProperty() { return ProductMovementDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductMovementDetailsRow.localTextPrefix; }
        protected getService() { return ProductMovementDetailsService.baseUrl; }

        protected form = new ProductMovementDetailsForm(this.idPrefix);

    }
}