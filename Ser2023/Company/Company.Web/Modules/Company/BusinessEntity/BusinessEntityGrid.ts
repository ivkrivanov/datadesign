import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { BusinessEntityColumns, BusinessEntityRow, BusinessEntityService } from '../../ServerTypes/Company';
import { BusinessEntityDialog } from './BusinessEntityDialog';

@Decorators.registerClass('Company.Company.BusinessEntityGrid')
export class BusinessEntityGrid extends EntityGrid<BusinessEntityRow, any> {
    protected getColumnsKey() { return BusinessEntityColumns.columnsKey; }
    protected getDialogType() { return BusinessEntityDialog; }
    protected getRowDefinition() { return BusinessEntityRow; }
    protected getService() { return BusinessEntityService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}