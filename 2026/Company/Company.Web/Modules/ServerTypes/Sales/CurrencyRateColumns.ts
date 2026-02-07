import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CurrencyRateRow } from "./CurrencyRateRow";

export interface CurrencyRateColumns {
    CurrencyRateId: Column<CurrencyRateRow>;
    CurrencyRateDate: Column<CurrencyRateRow>;
    FromCurrencyCode: Column<CurrencyRateRow>;
    ToCurrencyCode: Column<CurrencyRateRow>;
    AverageRate: Column<CurrencyRateRow>;
    EndOfDayRate: Column<CurrencyRateRow>;
}

export class CurrencyRateColumns extends ColumnsBase<CurrencyRateRow> {
    static readonly columnsKey = 'Sales.CurrencyRate';
    static readonly Fields = fieldsProxy<CurrencyRateColumns>();
}