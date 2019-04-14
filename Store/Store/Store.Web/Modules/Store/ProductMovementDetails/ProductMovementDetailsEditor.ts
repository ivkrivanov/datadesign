/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDetailsEditor extends Common.GridEditorBase<ProductMovementDetailsRow> {
        protected getColumnsKey() { return "Store.ProductMovementDetails"; }
        protected getDialogType() { return ProductMovementDetailsDialog; }
        protected getLocalTextPrefix() { return ProductMovementDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.ProductID = Q.toId(row.ProductID);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => x.ProductID === row.ProductID);

            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in order details!');
                return false;
            }

            row.ProductName = ProductRow.getLookup().itemById[row.ProductID].ProductName;

            switch (row.ProductMoveOperationTypeOpCode) {
                case 302: {
                    row.LineTotal = (row.Quantity || 0) * (row.IncomePrice || 0) - (row.Discount || 0);
                    break;
                }
                case 401: {
                    row.LineTotal = (row.Quantity || 0) * (row.SalePrice || 0) - (row.Discount || 0);
                    break;
                }
                default: {
                    row.LineTotal = (row.Quantity || 0) * (row.SinglePrice || 0) - (row.Discount || 0);
                    break;
                }
            }
            return true;
        }
    }
}