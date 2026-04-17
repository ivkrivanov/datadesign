import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { MeasuresRow } from "./MeasuresRow";

export interface MeasuresColumns {
    MeasureId: Column<MeasuresRow>;
    MeasureName: Column<MeasuresRow>;
}

export class MeasuresColumns extends ColumnsBase<MeasuresRow> {
    static readonly columnsKey = 'Sales.Measures';
    static readonly Fields = fieldsProxy<MeasuresColumns>();
}