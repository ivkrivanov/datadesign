/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailDialog extends Serenity.EntityDialog<ProductDetailRow, any> {
        protected getFormKey() { return ProductDetailForm.formKey; }
        //protected getIdProperty() { return ProductDetailRow.idProperty; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }
        //protected getService() { return ProductDetailService.baseUrl; }

        protected form: ProductDetailForm;

        constructor() {
            super();

            this.form = new ProductDetailForm(this.idPrefix);



        }
    }
}