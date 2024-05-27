import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ShopsColumns, ShopsRow, ShopsService } from '@/ServerTypes/Store';
import { ShopsDialog } from './ShopsDialog';

@Decorators.registerClass('Store.Store.ShopsGrid')
export class ShopsGrid extends EntityGrid<ShopsRow, any> {
    protected getColumnsKey() { return ShopsColumns.columnsKey; }
    protected getDialogType() { return ShopsDialog; }
    protected getIdProperty() { return ShopsRow.idProperty; }
    protected getInsertPermission() { return ShopsRow.insertPermission; }
    protected getLocalTextPrefix() { return ShopsRow.localTextPrefix; }
    protected getService() { return ShopsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}