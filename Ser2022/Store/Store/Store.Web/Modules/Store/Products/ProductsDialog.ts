﻿
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductsDialog extends Serenity.EntityDialog<ProductsRow, any> {
        protected getFormKey() { return ProductsForm.formKey; }
        protected getIdProperty() { return ProductsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
        protected getNameProperty() { return ProductsRow.nameProperty; }
        protected getService() { return ProductsService.baseUrl; }
        protected getDeletePermission() { return ProductsRow.deletePermission; }
        protected getInsertPermission() { return ProductsRow.insertPermission; }
        protected getUpdatePermission() { return ProductsRow.updatePermission; }

        protected form = new ProductsForm(this.idPrefix);

        constructor() {
            super();
        }

        protected UpdateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.ProductCode, true);
        }

    }
}