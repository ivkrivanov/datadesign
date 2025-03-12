import { StateProvinceColumns, StateProvinceRow, StateProvinceService } from '../../ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { StateProvinceDialog } from './StateProvinceDialog';

@Decorators.registerClass('Company.Company.StateProvinceGrid')
export class StateProvinceGrid extends EntityGrid<StateProvinceRow, any> {
    protected getColumnsKey() { return StateProvinceColumns.columnsKey; }
    protected getDialogType() { return StateProvinceDialog; }
    protected getRowDefinition() { return StateProvinceRow; }
    protected getService() { return StateProvinceService.baseUrl; }

    protected afterInit() {
        super.afterInit();
    }
    //constructor(container: JQuery) {
    //    super(container);
    //}
}