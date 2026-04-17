import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { OperationTypeRow } from "./OperationTypeRow";

export interface OperationTypeColumns {
    OperationTypeId: Column<OperationTypeRow>;
    OpCode: Column<OperationTypeRow>;
    Operation: Column<OperationTypeRow>;
}

export class OperationTypeColumns extends ColumnsBase<OperationTypeRow> {
    static readonly columnsKey = 'Sales.OperationType';
    static readonly Fields = fieldsProxy<OperationTypeColumns>();
}