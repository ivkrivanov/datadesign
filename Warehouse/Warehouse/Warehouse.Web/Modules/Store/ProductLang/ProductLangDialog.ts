
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ProductLangDialog extends Serenity.EntityDialog<ProductLangRow, any> {
        protected getFormKey() { return ProductLangForm.formKey; }
        protected getIdProperty() { return ProductLangRow.idProperty; }
        protected getLocalTextPrefix() { return ProductLangRow.localTextPrefix; }
        protected getNameProperty() { return ProductLangRow.nameProperty; }
        protected getService() { return ProductLangService.baseUrl; }

        protected form = new ProductLangForm(this.idPrefix);

    }
}