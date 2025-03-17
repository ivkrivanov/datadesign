import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { StateProvinceRow } from "./StateProvinceRow";

export interface StateProvinceColumns {
    StateProvinceId: Column<StateProvinceRow>;
    StateProvinceCode: Column<StateProvinceRow>;
    CountryCodeCountryName: Column<StateProvinceRow>;
    StateProvinceName: Column<StateProvinceRow>;
}

export class StateProvinceColumns extends ColumnsBase<StateProvinceRow> {
    static readonly columnsKey = 'Company.StateProvince';
    static readonly Fields = fieldsProxy<StateProvinceColumns>();
}