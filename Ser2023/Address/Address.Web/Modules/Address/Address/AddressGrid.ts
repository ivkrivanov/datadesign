import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AddressColumns, AddressRow, AddressService } from '../../ServerTypes/Address';
import { AddressDialog } from './AddressDialog';

@Decorators.registerClass('Address.Address.AddressGrid')
export class AddressGrid extends EntityGrid<AddressRow, any> {
    protected getColumnsKey() { return AddressColumns.columnsKey; }
    protected getDialogType() { return AddressDialog; }
    protected getIdProperty() { return AddressRow.idProperty; }
    protected getInsertPermission() { return AddressRow.insertPermission; }
    protected getLocalTextPrefix() { return AddressRow.localTextPrefix; }
    protected getService() { return AddressService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}