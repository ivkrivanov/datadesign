import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { WaresColumns, WaresRow, WaresService } from '../../ServerTypes/Store';
import { WaresDialog } from './WaresDialog';

@Decorators.registerClass('Store.Store.WaresGrid')
export class WaresGrid extends EntityGrid<WaresRow, any> {
    protected getColumnsKey() { return WaresColumns.columnsKey; }
    protected getDialogType() { return WaresDialog; }
    protected getIdProperty() { return WaresRow.idProperty; }
    protected getInsertPermission() { return WaresRow.insertPermission; }
    protected getLocalTextPrefix() { return WaresRow.localTextPrefix; }
    protected getService() { return WaresService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}