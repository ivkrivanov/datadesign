import { Decorators } from "@serenity-is/corelib";
import { alertDialog, toId } from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { OrderDetailColumns, OrderDetailRow, ProductsRow } from '../../ServerTypes/Store';
import { OrderDetailDialog } from "./OrderDetailDialog";

@Decorators.registerEditor('Company.Store.OrderDetailEditor')
export class OrderDetailEditor extends GridEditorBase<OrderDetailRow> {
    protected getColumnsKey() { return OrderDetailColumns.columnsKey; }
    protected getDialogType() { return OrderDetailDialog; }
    protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }

    constructor(container: JQuery) {
        super(container);
    }

    validateEntity(row, id) {
        row.ProductId = toId(row.ProductId);

        var sameProduct = this.view.getItems().find(x => x.ProductId === row.ProductId);

        if (sameProduct && this.id(sameProduct) !== id) {
            alertDialog('This product is already in order details!');
            return false;
        }

        id ??= row[this.getIdProperty()];

        ProductsRow.getLookupAsync().then(lookup => {
            var item = this.view?.getItemById?.(id);
            if (item) {
                item.ProductName = lookup.itemById[row.ProductID].ProductName;
                this.view.updateItem(id, item);
                item.SinglePrice = lookup.itemById[row.ProductID].UnitPrice;
                this.view.updateItem(id, item);
            }
        });

        row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);

        return true;
    }
}
