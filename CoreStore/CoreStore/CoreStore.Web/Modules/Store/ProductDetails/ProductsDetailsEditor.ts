/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductDetailsEditor extends Common.GridEditorBase<ProductDetailsRow> {
        protected getColumnsKey() { return "Store.ProductDetails"; }
        protected getDialogType() { return ProductDetailsDialog; }
        protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.WaresId = Q.toId(row.WaresId);

            var sameItem = Q.tryFirst(this.view.getItems(), x => x.WaresId === row.WaresId);
            if (sameItem && this.id(sameItem) != id) {
                Q.alert('This article is already in order details!')
                return false;
            }

            row.WaresName = WaresRow.getLookup().itemById[row.WaresId].WaresName;
            row.WaresCode = WaresRow.getLookup().itemById[row.WaresId].WaresCode;
            row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) / (row.ProductQuantity || 0) - (row.Discount || 0);
            return true;
        }
    }
}