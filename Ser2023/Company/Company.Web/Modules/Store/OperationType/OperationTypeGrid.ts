import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OperationTypeColumns, OperationTypeRow, OperationTypeService } from '@/ServerTypes/Store';
import { OperationTypeDialog } from './OperationTypeDialog';

@Decorators.registerClass('Store.Store.OperationTypeGrid')
export class OperationTypeGrid extends EntityGrid<OperationTypeRow, any> {
    protected getColumnsKey() { return OperationTypeColumns.columnsKey; }
    protected getDialogType() { return OperationTypeDialog; }
    protected getIdProperty() { return OperationTypeRow.idProperty; }
    protected getInsertPermission() { return OperationTypeRow.insertPermission; }
    protected getLocalTextPrefix() { return OperationTypeRow.localTextPrefix; }
    protected getService() { return OperationTypeService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getDefaultSortBy() {
        return [OperationTypeRow.Fields.OpCode];
    }
}