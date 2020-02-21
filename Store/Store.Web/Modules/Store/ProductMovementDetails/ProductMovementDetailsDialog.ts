/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDetailsDialog extends Common.GridEditorDialog<ProductMovementDetailsRow> {
        protected getFormKey() { return ProductMovementDetailsForm.formKey; }
        protected getLocalTextPrefix() { return ProductMovementDetailsRow.localTextPrefix; }

        protected form: ProductMovementDetailsForm;

        constructor() {
            super();

            this.form = new ProductMovementDetailsForm(this.idPrefix);

            this.form.ProductID.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductID.value);
                if (productID != null) {
                    this.form.SinglePrice.value = ProductRow.getLookup().itemById[productID].UnitPrice;
                }
            });

            this.form.Discount.addValidationRule(this.uniqueName, e => {
                var price = this.form.SinglePrice.value;
                var quantity = this.form.Quantity.value;
                var discount = this.form.Discount.value;
                if (price != null && quantity != null && discount != null &&
                    discount > 0 && discount >= price * quantity) {
                    return "Discount can't be higher than total price!";
                }
            });
        }
    }
}