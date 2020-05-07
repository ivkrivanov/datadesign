/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CoreStore.Store {
    //export class ProductDetailsDialog extends Serenity.EntityDialog<ProductDetailsRow, any> {
    @Serenity.Decorators.registerClass()
    export class ProductDetailsDialog extends Common.GridEditorDialog<ProductDetailsRow> {
        protected getFormKey() { return ProductDetailsForm.formKey; }
        protected getIdProperty() { return ProductDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }
        protected getService() { return ProductDetailsService.baseUrl; }
        protected getDeletePermission() { return ProductDetailsRow.deletePermission; }
        protected getInsertPermission() { return ProductDetailsRow.insertPermission; }
        protected getUpdatePermission() { return ProductDetailsRow.updatePermission; }

        protected form: ProductDetailsForm;

        constructor() {
            super();

            this.form = new ProductDetailsForm(this.idPrefix);

            this.form.WaresId.changeSelect2(e => {
                var itemID = Q.toId(this.form.WaresId.value);
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
                    discount > 0 && discount >= price * quantity / quanprod) {
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