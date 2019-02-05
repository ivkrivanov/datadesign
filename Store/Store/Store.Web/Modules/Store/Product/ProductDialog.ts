
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return ProductForm.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }
        protected getLanguages(): string[][] { return LanguageList.getValue(); }

        protected form = new ProductForm(this.idPrefix);

        constructor() {
            super();
        }

        protected UpdateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.ProductCode, true);
        }
    }
}