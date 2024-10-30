import { AddressColumns, AddressRow, AddressService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { AddressDialog } from './AddressDialog';

@Decorators.registerClass('Company.Company.AddressGrid')
export class AddressGrid extends EntityGrid<AddressRow, any> {
    protected getColumnsKey() { return AddressColumns.columnsKey; }
    protected getDialogType() { return AddressDialog; }
    protected getRowDefinition() { return AddressRow; }
    protected getService() { return AddressService.baseUrl; }

    constructor(props: any) {
        super(props);
    }
}