/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailDialog extends Common.GridEditorDialog<ProductDetailRow> {
        protected getFormKey() { return ProductDetailForm.formKey; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }

        protected form: ProductDetailForm;

        constructor() {
            super();

            this.form = new ProductDetailForm(this.idPrefix);

            this.form.WaresID.changeSelect2(e => {
                var itemID = Q.toId(this.form.WaresID.value);
            });
        }
    }
}