import { EntityGrid } from '@serenity-is/corelib';
import { OperationTypeColumns, OperationTypeRow, OperationTypeService } from '../../ServerTypes/Sales';
import { OperationTypeDialog } from './OperationTypeDialog';

export class OperationTypeGrid extends EntityGrid<OperationTypeRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return OperationTypeColumns.columnsKey; }
    protected override getDialogType() { return OperationTypeDialog; }
    protected override getRowDefinition() { return OperationTypeRow; }
    protected override getService() { return OperationTypeService.baseUrl; }
}