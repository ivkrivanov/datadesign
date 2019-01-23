/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class WaresMovementDetailsDialog extends Common.GridEditorDialog<WaresMovementDetailsRow> {
        protected getFormKey() { return WaresMovementDetailsForm.formKey; }
        protected getLocalTextPrefix() { return WaresMovementDetailsRow.localTextPrefix; }

        protected form: WaresMovementDetailsForm;

        constructor() {
            super();

            this.form = new WaresMovementDetailsForm(this.idPrefix);

            this.form.WaresID.changeSelect2(e => {
                var waresID = Q.toId(this.form.WaresID.value);
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