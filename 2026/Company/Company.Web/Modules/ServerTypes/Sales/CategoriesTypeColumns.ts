import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CategoriesTypeRow } from "./CategoriesTypeRow";

export interface CategoriesTypeColumns {
    CategoryTypeId: Column<CategoriesTypeRow>;
    Type: Column<CategoriesTypeRow>;
    CategoryType: Column<CategoriesTypeRow>;
}

export class CategoriesTypeColumns extends ColumnsBase<CategoriesTypeRow> {
    static readonly columnsKey = 'Sales.CategoriesType';
    static readonly Fields = fieldsProxy<CategoriesTypeColumns>();
}