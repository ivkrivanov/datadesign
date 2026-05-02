import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ShippersColumns, ShippersRow, ShippersService } from '../../ServerTypes/Store';
import { ShippersDialog } from './ShippersDialog';

@Decorators.registerClass('Company.Store.ShippersGrid')
export class ShippersGrid extends EntityGrid<ShippersRow, any> {
    protected getColumnsKey() { return ShippersColumns.columnsKey; }
    protected getDialogType() { return ShippersDialog; }
    protected getIdProperty() { return ShippersRow.idProperty; }
    protected getInsertPermission() { return ShippersRow.insertPermission; }
    protected getLocalTextPrefix() { return ShippersRow.localTextPrefix; }
    protected getService() { return ShippersService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}