import { AddressTypeColumns, AddressTypeRow, AddressTypeService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AddressTypeDialog } from './AddressTypeDialog';

@Decorators.registerClass('Company.Company.AddressTypeGrid')
export class AddressTypeGrid extends EntityGrid<AddressTypeRow, any> {
    protected getColumnsKey() { return AddressTypeColumns.columnsKey; }
    protected getDialogType() { return AddressTypeDialog; }
    protected getRowDefinition() { return AddressTypeRow; }
    protected getService() { return AddressTypeService.baseUrl; }

    constructor(props: any) {
        super(props);
    }
}