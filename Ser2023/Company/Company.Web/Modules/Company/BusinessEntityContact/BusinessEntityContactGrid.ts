import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { BusinessEntityContactColumns, BusinessEntityContactRow, BusinessEntityContactService } from '../../ServerTypes/Company';
import { BusinessEntityContactDialog } from './BusinessEntityContactDialog';

@Decorators.registerClass('Company.Company.BusinessEntityContactGrid')
export class BusinessEntityContactGrid extends EntityGrid<BusinessEntityContactRow, any> {
    protected getColumnsKey() { return BusinessEntityContactColumns.columnsKey; }
    protected getDialogType() { return BusinessEntityContactDialog; }
    protected getRowDefinition() { return BusinessEntityContactRow; }
    protected getService() { return BusinessEntityContactService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}