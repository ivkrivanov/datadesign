import { CurrencyRateColumns, CurrencyRateRow, CurrencyRateService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CurrencyRateDialog } from './CurrencyRateDialog';

@Decorators.registerClass('Company.Company.CurrencyRateGrid')
export class CurrencyRateGrid extends EntityGrid<CurrencyRateRow, any> {
    protected getColumnsKey() { return CurrencyRateColumns.columnsKey; }
    protected getDialogType() { return CurrencyRateDialog; }
    protected getRowDefinition() { return CurrencyRateRow; }
    protected getService() { return CurrencyRateService.baseUrl; }

    constructor(props: any) {
        super(props);
    }
}