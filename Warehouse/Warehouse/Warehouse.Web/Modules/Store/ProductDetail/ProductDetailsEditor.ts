/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailsEditor extends Common.GridEditorBase<ProductDetailRow> {
        protected getColumnsKey() { return "Store.ProductDetail"; }
        protected getDialogType() { return ProductDetailDialog; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.ItemID = Q.toId(row.ItemID);

            var sameItem = Q.tryFirst(this.view.getItems(), x => x.ItemID === row.ItemID);
            if (sameItem && this.id(sameItem) != id) {
                return false;
            }

            row.ItemName = ItemRow.getLookup().itemById[row.ItemID].ItemName;

            return true;
        }
    }

}