import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CurrencyRow } from "./CurrencyRow";

export interface CurrencyColumns {
    CurrencyId: Column<CurrencyRow>;
    CurrencyCode: Column<CurrencyRow>;
    Name: Column<CurrencyRow>;
}

export class CurrencyColumns extends ColumnsBase<CurrencyRow> {
    static readonly columnsKey = 'Company.Currency';
    static readonly Fields = fieldsProxy<CurrencyColumns>();
}