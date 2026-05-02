import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { AddressTypeRow } from "./AddressTypeRow";

export interface AddressTypeColumns {
    AddressTypeId: Column<AddressTypeRow>;
    AddressTypeName: Column<AddressTypeRow>;
}

export class AddressTypeColumns extends ColumnsBase<AddressTypeRow> {
    static readonly columnsKey = 'Company.AddressType';
    static readonly Fields = fieldsProxy<AddressTypeColumns>();
}