import { Decorators } from "@serenity-is/corelib";
import { alertDialog, toId, tryFirst, Lookup} from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { ProductDetailsColumns, ProductDetailsRow, WaresRow } from '../../ServerTypes/Store';
import { ProductDetailsDialog } from "./ProductDetailsDialog";

@Decorators.registerEditor("Company.Store.ProductDetailsEditor")
export class ProductDetailsEditor<P = {}> extends GridEditorBase<ProductDetailsRow, P> {
    protected getColumnsKey() { return ProductDetailsColumns.columnsKey; }
    protected getDialogType() { return ProductDetailsDialog; }
    protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }

    validateEntity(row, id) {
        row.WaresId = toId(row.WaresId);

        var sameWares = this.view.getItems().find(x => x.WaresId === row.WaresId);
        if (sameWares && this.id(sameWares) !== id) {
            alertDialog('This wares is already in order details!');
            return false;
        }

        id ??= row[this.getIdProperty()];

        WaresRow.getLookupAsync().then(Lookup => {
            var item = this.view?.getItemById?.(id);
            if (item) {
                item.WaresName = Lookup.itemById[row.WaresId].WaresName;
                this.view.updateItem(id, item);
            }
        });

        row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
        return true;

    }
}


    //constructor(container: JQuery) {
    //    super(container)
    //}

    //protected getLookupKey() {
    //    return WaresRow.lookupKey;
    //}

    //validateEntity(row, id) {
    //    row.WaresId = toId(row.WaresId);

    //    var sameWares = this.view.getItems().find(x => x.WaresId === row.WaresId);
    //    if (sameWares && this.id(sameWares) !== id) {
    //        alertDialog('This wares is already in order details!');
    //        return false;
    //    }

    //    id ??= row[this.getIdProperty()];

        
    //    WaresRow.getLookupAsync().then(Lookup => {
    //        var item = this.view?.getItemById?.(id);
    //        if (item) {
    //            item.WaresName = Lookup.itemById[row.WaresId].WaresName;
    //            this.view.updateItem(id, item);
    //        }
    //    });

    //    row.WaresName = (WaresRow.getLookup()).itemById[row.WaresId].WaresName;
    //    row.WaresCode = (WaresRow.getLookup()).itemById[row.WaresId].WaresCode;
    //    row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
    //    return true;
    //}

    //protected getItemText(item: WaresRow, lookup: Lookup<WaresRow>) {
    //    return super.getItemText(item, lookup) +
    //        ' (' +
    //        '$' + formatNumber(item.UnitPrice, '#, ##0.0000') +
    //        //', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
    //        //', ' + (item.SupplierCompanyName || 'Unknown') +
    //        ')';
    //}
    //}
