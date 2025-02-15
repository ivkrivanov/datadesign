import { TenantsColumns, TenantsRow, TenantsService } from '@/ServerTypes/Default';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { TenantsDialog } from './TenantsDialog';

@Decorators.registerClass('Company.Default.TenantsGrid')
export class TenantsGrid extends EntityGrid<TenantsRow, any> {
    protected getColumnsKey() { return TenantsColumns.columnsKey; }
    protected getDialogType() { return TenantsDialog; }
    protected getRowDefinition() { return TenantsRow; }
    protected getService() { return TenantsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}