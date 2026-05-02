import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { BusinessEntityContactRow } from "./BusinessEntityContactRow";

export interface BusinessEntityContactColumns {
    BusinessEntityId: Column<BusinessEntityContactRow>;
    PersonType: Column<BusinessEntityContactRow>;
    ContactTypeName: Column<BusinessEntityContactRow>;
}

export class BusinessEntityContactColumns extends ColumnsBase<BusinessEntityContactRow> {
    static readonly columnsKey = 'Company.BusinessEntityContact';
    static readonly Fields = fieldsProxy<BusinessEntityContactColumns>();
}