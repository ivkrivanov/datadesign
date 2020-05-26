/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class WaresMovementDetailsDialog extends Common.GridEditorDialog<WaresMovementDetailsRow> {
        protected getFormKey() { return WaresMovementDetailsForm.formKey; }
        protected getIdProperty() { return ProductMovementDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return WaresMovementDetailsRow.localTextPrefix; }
        protected getService() { return WaresMovementDetailsRow.baseUrl; }
        protected getDeletePermission() { return WaresMovementDetailsRow.deletePermission; }
        protected getInsertPermission() { return WaresMovementDetailsRow.insertPermission; }
        protected getUpdatePermission() { return WaresMovementDetailsRow.updatePermission; }

        protected form: WaresMovementDetailsForm;

        constructor() {
            super();

            this.form = new WaresMovementDetailsForm(this.idPrefix);

            this.form.WaresId.changeSelect2(e => {
                var waresID = Q.toId(this.form.WaresId.value);
                if (waresID != null) {
                    this.form.SinglePrice.value = WaresRow.getLookup().itemById[waresID].UnitPrice;
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