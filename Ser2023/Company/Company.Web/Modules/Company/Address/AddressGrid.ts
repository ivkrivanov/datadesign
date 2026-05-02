import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AddressColumns, AddressRow, AddressService } from '@/ServerTypes/Company';
import { AddressDialog } from './AddressDialog';

@Decorators.registerClass('Company.Company.AddressGrid')
export class AddressGrid extends EntityGrid<AddressRow, any> {
    protected getColumnsKey() { return AddressColumns.columnsKey; }
    protected getDialogType() { return AddressDialog; }
    protected getIdProperty() { return AddressRow.idProperty; }
    protected getInsertPermission() { return AddressRow.insertPermission; }
    protected getLocalTextPrefix() { return AddressRow.localTextPrefix; }
    protected getRowDefinition() { return AddressRow; }
    protected getService() { return AddressService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}