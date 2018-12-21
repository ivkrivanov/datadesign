/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailsEditor extends Common.GridEditorBase<ProductDetailRow> {
        protected getColumsKey() { return "Store.ProductDetail"; }
        protected get DialogType() { return ProductDetailDialog; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container)
        }

        validateEntity(row, id) {
            row.ItemID = Q.toId(row.ItemID);

            var sameItem = Q.tryFirst(this.view.getItems(), x => x.ItemID === row.ItemID);
            if (sameItem && this.id(sameItem) !== id) {
                Q.alert('This item is already in product details!');
                return false;
            }

            row.ItemName = ItemRow.getLookup().itemById[row.ItemID].ItemName;
            row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}