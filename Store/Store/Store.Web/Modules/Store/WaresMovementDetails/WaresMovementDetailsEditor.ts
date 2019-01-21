/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class WaresMovementDetailsEditor extends Common.GridEditorBase<WaresMovementDetailsRow> {
        protected getColumnsKey() { return "Store.WaresMovementDetails"; }
        protected getDialogType() { return WaresMovementDetailsDialog; }
        protected getLocalTextPrefix() { return WaresMovementDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
        validateEntity(row, id) {
            row.WaresID = Q.toId(row.WaresID);

            var sameWares = Q.tryFirst(this.view.getItems(), x => x.WaresID === row.WaresID);
            if (sameWares && this.id(sameWares) !== id) {
                Q.alert('This ware is already in order details!');
                return false;
            }

            row.WaresName = WaresRow.getLookup().itemById[row.WaresID].WaresName;

            return true;
        }
    }
}