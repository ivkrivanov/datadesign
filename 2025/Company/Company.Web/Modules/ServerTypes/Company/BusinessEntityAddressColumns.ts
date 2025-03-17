import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { BusinessEntityAddressRow } from "./BusinessEntityAddressRow";

export interface BusinessEntityAddressColumns {
    BusinessEntityId: Column<BusinessEntityAddressRow>;
    AddressLine1: Column<BusinessEntityAddressRow>;
    AddressTypeName: Column<BusinessEntityAddressRow>;
}

export class BusinessEntityAddressColumns extends ColumnsBase<BusinessEntityAddressRow> {
    static readonly columnsKey = 'Company.BusinessEntityAddress';
    static readonly Fields = fieldsProxy<BusinessEntityAddressColumns>();
}