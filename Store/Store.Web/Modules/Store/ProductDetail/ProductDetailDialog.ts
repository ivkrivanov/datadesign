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
                if (itemID != null) {
                    this.form.PlanPrice.value = WaresRow.getLookup().itemById[itemID].UnitPrice;
                }
            });

            this.form.Discount.addValidationRule(this.uniqueName, e => {
                var price = this.form.PlanPrice.value;
                var quantity = this.form.Quantity.value;
                var quanprod = this.form.ProductQuantity.value;
                var discount = this.form.Discount.value;
                if (price != null && quantity != null && quanprod != null && discount != null &&
                    discount > 0 && discount >= price * quantity /quanprod) {
                    return "Discount can't be higher than total price!";
                }
            });
        }
        protected updateInterface() {
            super.updateInterface();
                //this.toolbar.findButton('apply-changes-button').hide();
                //this.toolbar.findButton('save-and-close-button').hide();
        }
    }
}