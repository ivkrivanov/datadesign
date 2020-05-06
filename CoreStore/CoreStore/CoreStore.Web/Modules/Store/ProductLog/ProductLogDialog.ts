
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductLogDialog extends Serenity.EntityDialog<ProductLogRow, any> {
        protected getFormKey() { return ProductLogForm.formKey; }
        protected getIdProperty() { return ProductLogRow.idProperty; }
        protected getLocalTextPrefix() { return ProductLogRow.localTextPrefix; }
        protected getNameProperty() { return ProductLogRow.nameProperty; }
        protected getService() { return ProductLogService.baseUrl; }
        protected getDeletePermission() { return ProductLogRow.deletePermission; }
        protected getInsertPermission() { return ProductLogRow.insertPermission; }
        protected getUpdatePermission() { return ProductLogRow.updatePermission; }

        protected form = new ProductLogForm(this.idPrefix);

    }
}