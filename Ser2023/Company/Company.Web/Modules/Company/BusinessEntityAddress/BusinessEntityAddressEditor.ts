import { Decorators } from "@serenity-is/corelib";
import { alertDialog, toId, tryFirst, Lookup } from "@serenity-is/corelib/q";
import { GridEditorBase } from "@serenity-is/extensions";
import { BusinessEntityAddressColumns, AddressRow, BusinessEntityAddressRow } from '../../ServerTypes/Company';
import { BusinessEntityAddressDialog } from "./BusinessEntityAddressDialog";

@Decorators.registerEditor( 'Company.Company.BusinessEntityAddress' )
export class BusinessEntityAddressEditor<P = {}> extends GridEditorBase<BusinessEntityAddressRow, P> {
    protected getColumnsKey() { return BudinessEntityAddressColumns.ColumnsKey; }
    protected getDialogType() { return BusinessEntityAddressDialog; }
    protected getLocalTextPrefix() { return BusinessEntityAddressRow.localTextPrefix; }

    validateEntity(row, id) {
        row.AddressId = toId(row.AddressId)



        return true;



    }




}
