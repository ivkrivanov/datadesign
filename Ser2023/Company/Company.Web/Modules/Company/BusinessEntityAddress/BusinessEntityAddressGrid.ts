import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { BusinessEntityAddressColumns, BusinessEntityAddressRow, BusinessEntityAddressService } from '../../ServerTypes/Company';
import { BusinessEntityAddressDialog } from './BusinessEntityAddressDialog';

@Decorators.registerClass('Company.Company.BusinessEntityAddressGrid')
export class BusinessEntityAddressGrid extends EntityGrid<BusinessEntityAddressRow, any> {
    protected getColumnsKey() { return BusinessEntityAddressColumns.columnsKey; }
    protected getDialogType() { return BusinessEntityAddressDialog; }
    protected getRowDefinition() { return BusinessEntityAddressRow; }
    protected getService() { return BusinessEntityAddressService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}