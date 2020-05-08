/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class WaresMovementDetailsEditor extends Common.GridEditorBase<WaresMovementDetailsRow> {
        protected getColumnsKey() { return "Store.WaresMovementDetails"; }
        protected getDialogType() { return WaresMovementDetailsDialog; }
        protected getLocalTextPrefix() { return WaresMovementDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }

        validateEntity(row, id) {
            row.WaresID = Q.toId(row.WaresId);

            var sameWares = Q.tryFirst(this.view.getItems(), x => x.WaresId === row.WaresId);
            if (sameWares && this.id(sameWares) !== id) {
                Q.alert('This ware is already in order details!');
                return false;
            }

            row.WaresName = WaresRow.getLookup().itemById[row.WaresId].WaresName;

            row.LineTotal = (row.Quantity || 0) * (row.SinglePrice || 0) - (row.Discount || 0);

            //switch (row.WaresMoveOperationTypeOpCode) {
            //    case 102: {
            //        row.LineTotal = (row.Quantity || 0) * (row.IncomePrice || 0) - (row.Discount || 0);
            //        break;
            //    }
            //    case 201: {
            //        row.LineTotal = (row.Quantity || 0) * (row.SalePrice || 0) - (row.Discount || 0);
            //        break;
            //    }

            //    default: {
            //        row.LineTotal = (row.Quantity || 0) * (row.SinglePrice || 0) - (row.Discount || 0);
            //        break;
            //    }
            //}
            return true;
        }
    }
}
