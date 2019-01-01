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


            return true;
        }
    }

}