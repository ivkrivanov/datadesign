import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { ProvinceRow } from "./ProvinceRow";

export interface ProvinceColumns {
    ProvinceId: Column<ProvinceRow>;
    ProvinceCode: Column<ProvinceRow>;
    CountryId: Column<ProvinceRow>;
    ProvinceName: Column<ProvinceRow>;
}

export class ProvinceColumns extends ColumnsBase<ProvinceRow> {
    static readonly columnsKey = 'Company.Province';
    static readonly Fields = fieldsProxy<ProvinceColumns>();
}