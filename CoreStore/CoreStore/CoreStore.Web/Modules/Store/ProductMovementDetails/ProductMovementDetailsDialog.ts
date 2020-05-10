/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDetailsDialog extends Common.GridEditorDialog<ProductMovementDetailsRow> {
        protected getFormKey() { return ProductMovementDetailsForm.formKey; }
        protected getIdProperty() { return ProductMovementDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductMovementDetailsRow.localTextPrefix; }
        protected getService() { return ProductMovementDetailsService.baseUrl; }
        protected getDeletePermission() { return ProductMovementDetailsRow.deletePermission; }
        protected getInsertPermission() { return ProductMovementDetailsRow.insertPermission; }
        protected getUpdatePermission() { return ProductMovementDetailsRow.updatePermission; }

        protected form = new ProductMovementDetailsForm(this.idPrefix);

        constructor() {
            super();

            this.form = new ProductMovementDetailsForm(this.idPrefix);

            this.form.ProductId.changeSelect2(e => {
                var productID = Q.toId(this.form.ProductId.value);
                if (productID != null) {
                    this.form.SinglePrice.value = ProductsRow.getLookup().itemById[productID].UnitPrice;
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