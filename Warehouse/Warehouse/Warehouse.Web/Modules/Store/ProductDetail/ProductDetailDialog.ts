/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />

namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailDialog extends Common.GridEditorDialog<ProductDetailRow> {
        protected getFormKey() { return ProductDetailForm.formKey; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }

        protected form: ProductDetailForm;

        constructor() {
            super();

            this.form = new ProductDetailForm(this.idPrefix);

            this.form.ItemID.changeSelect2(e => {
                var ItemID = Q.toId(this.form.ItemID.value);
                if (ItemID != null) {
                    this.form.PlanPrice.value = ProductRow.getLookup().itemById[ItemID].UnitPrice;
                }
            });

        }
    }
}