/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailsEditor extends Common.GridEditorBase<ProductDetailRow> {
        protected getColumnsKey() { return "Store.ProductDetail"; }
        protected getDialogType() { return ProductDetailDialog; }
        protected getLocalTextPrefix() { return ProductDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.WaresID = Q.toId(row.WaresID);

            var sameItem = Q.tryFirst(this.view.getItems(), x => x.WaresID === row.WaresID);
            if (sameItem && this.id(sameItem) != id) {
                Q.alert('This article is already in order details!')
                return false;
            }

            row.WaresName = WaresRow.getLookup().itemById[row.WaresID].WaresName;
            row.WaresCode = WaresRow.getLookup().itemById[row.WaresID].WaresCode;
            row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) / (row.ProductQuantity || 0) - (row.Discount || 0);
            return true;
        }
    }
}