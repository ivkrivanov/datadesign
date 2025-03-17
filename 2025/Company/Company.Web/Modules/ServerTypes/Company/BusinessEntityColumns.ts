import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { BusinessEntityRow } from "./BusinessEntityRow";

export interface BusinessEntityColumns {
    BusinessEntityId: Column<BusinessEntityRow>;
    FullName: Column<BusinessEntityRow>;
}

export class BusinessEntityColumns extends ColumnsBase<BusinessEntityRow> {
    static readonly columnsKey = 'Company.BusinessEntity';
    static readonly Fields = fieldsProxy<BusinessEntityColumns>();
}