import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { StateProvinceColumns, StateProvinceRow, StateProvinceService } from '@/ServerTypes/Company';
import { StateProvinceDialog } from './StateProvinceDialog';

@Decorators.registerClass('Company.Company.StateProvinceGrid')
export class StateProvinceGrid extends EntityGrid<StateProvinceRow, any> {
    protected getColumnsKey() { return StateProvinceColumns.columnsKey; }
    protected getDialogType() { return StateProvinceDialog; }
    protected getIdProperty() { return StateProvinceRow.idProperty; }
    protected getInsertPermission() { return StateProvinceRow.insertPermission; }
    protected getLocalTextPrefix() { return StateProvinceRow.localTextPrefix; }
    protected getRowDefinition() { return StateProvinceRow; }
    protected getService() { return StateProvinceService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}