import { CurrencyColumns, CurrencyRow, CurrencyService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CurrencyDialog } from './CurrencyDialog';

@Decorators.registerClass('Company.Company.CurrencyGrid')
export class CurrencyGrid extends EntityGrid<CurrencyRow, any> {
    protected getColumnsKey() { return CurrencyColumns.columnsKey; }
    protected getDialogType() { return CurrencyDialog; }
    protected getRowDefinition() { return CurrencyRow; }
    protected getService() { return CurrencyService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}