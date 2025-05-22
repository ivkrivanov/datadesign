import { ProvinceColumns, ProvinceRow, ProvinceService } from '../../ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ProvinceDialog } from './ProvinceDialog';

@Decorators.registerClass('Company.Company.ProvinceGrid')
export class ProvinceGrid extends EntityGrid<ProvinceRow, any> {
    protected getColumnsKey() { return ProvinceColumns.columnsKey; }
    protected getDialogType() { return ProvinceDialog; }
    protected getRowDefinition() { return ProvinceRow; }
    protected getIdProperty() { return ProvinceRow.idProperty }
    protected getService() { return ProvinceService.baseUrl; }
}