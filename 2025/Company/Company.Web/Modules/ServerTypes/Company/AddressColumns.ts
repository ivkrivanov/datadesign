import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { AddressRow } from "./AddressRow";

export interface AddressColumns {
    AddressId: Column<AddressRow>;
    AddressLine1: Column<AddressRow>;
    AddressLine2: Column<AddressRow>;
    City: Column<AddressRow>;
    CountryCodeCountryName: Column<AddressRow>;
    StateProvinceCode: Column<AddressRow>;
    PostalCode: Column<AddressRow>;
}

export class AddressColumns extends ColumnsBase<AddressRow> {
    static readonly columnsKey = 'Company.Address';
    static readonly Fields = fieldsProxy<AddressColumns>();
}