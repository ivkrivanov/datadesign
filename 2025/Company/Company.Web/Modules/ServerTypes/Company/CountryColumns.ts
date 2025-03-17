import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { CountryRow } from "./CountryRow";

export interface CountryColumns {
    CountryCode: Column<CountryRow>;
    CountryName: Column<CountryRow>;
}

export class CountryColumns extends ColumnsBase<CountryRow> {
    static readonly columnsKey = 'Company.Country';
    static readonly Fields = fieldsProxy<CountryColumns>();
}