import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AddressTypeColumns, AddressTypeRow, AddressTypeService } from '@/ServerTypes/Company';
import { AddressTypeDialog } from './AddressTypeDialog';

@Decorators.registerClass('Company.Company.AddressTypeGrid')
export class AddressTypeGrid extends EntityGrid<AddressTypeRow, any> {
    protected getColumnsKey() { return AddressTypeColumns.columnsKey; }
    protected getDialogType() { return AddressTypeDialog; }
    protected getIdProperty() { return AddressTypeRow.idProperty; }
    protected getInsertPermission() { return AddressTypeRow.insertPermission; }
    protected getLocalTextPrefix() { return AddressTypeRow.localTextPrefix; }
    protected getRowDefinition() { return AddressTypeRow; }
    protected getService() { return AddressTypeService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}