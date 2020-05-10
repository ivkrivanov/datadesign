
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDialog extends Serenity.EntityDialog<ProductMovementRow, any> {
        protected getFormKey() { return ProductMovementForm.formKey; }
        protected getIdProperty() { return ProductMovementRow.idProperty; }
        protected getLocalTextPrefix() { return ProductMovementRow.localTextPrefix; }
        protected getNameProperty() { return ProductMovementRow.nameProperty; }
        protected getService() { return ProductMovementService.baseUrl; }
        protected getDeletePermission() { return ProductMovementRow.deletePermission; }
        protected getInsertPermission() { return ProductMovementRow.insertPermission; }
        protected getUpdatePermission() { return ProductMovementRow.updatePermission; }

        protected form = new ProductMovementForm(this.idPrefix);

    }
}