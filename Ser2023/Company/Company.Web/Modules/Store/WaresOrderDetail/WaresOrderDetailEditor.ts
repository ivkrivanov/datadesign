import { Decorators } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { WaresOrderDetailDialog } from "./WaresOrderDetailDialog";
import { WaresOrderDetailColumn, WaresOrderDetailRow, WaresRow } from '../../ServerTypes/Store';


@Decorators.registerClass('Company.Store.WaresOrderDetailEditor')
export class WaresOrderDetailEditor extends GridEditorBase<WaresOrderDetailRow> {
    protected getColumnsKey() { return WaresOrderDetailColumn.columnsKey; }
    protected getDialogType() { return WaresOrderDetailDialog; }
    protected getLocalTextPrefix() { return WaresOrderDetailRow.localTextPrefix; }

    constructor(container: JQuery) {
        super(container);
    }

    validateEntity(row, id) {
        row.WaresId = toId(row.WaresId);

        var sameWares = this.view.getItems().find(x => x.WaresId === row.WaresId);

        if (sameWares && this.id(sameWares) !== id) {
            alert('This ware is already in order details!');
            return false;
        }

        id ??= row[this.getIdProperty()]

        WaresRow.getLookupAsync().then(lookup => {
            var item = this.view?.getItemById?.(id);
            if (item) {
                item.WaresName = lookup.itemById[row.WaresId].WaresName;
                this.view.updateItem(id, item);
                item.SinglePrice = lookup.itemById[row.WaresId].UnitPrice;
                this.view.updateItem(id, item);
            }
        });

        //row.WaresName = (await WaresRow.getLookupAsync()).itemById[row.WaresID].WaresName;

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
