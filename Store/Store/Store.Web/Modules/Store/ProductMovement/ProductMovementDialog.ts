
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDialog extends Serenity.EntityDialog<ProductMovementRow, any> {
        protected getFormKey() { return ProductMovementForm.formKey; }
        protected getIdProperty() { return ProductMovementRow.idProperty; }
        protected getLocalTextPrefix() { return ProductMovementRow.localTextPrefix; }
        protected getNameProperty() { return ProductMovementRow.nameProperty; }
        protected getService() { return ProductMovementService.baseUrl; }

        protected form = new ProductMovementForm(this.idPrefix);

    }
}