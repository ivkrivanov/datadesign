import { EntityGrid } from '@serenity-is/corelib';
import { CurrencyRateColumns, CurrencyRateRow, CurrencyRateService } from '../../ServerTypes/Sales';
import { CurrencyRateDialog } from './CurrencyRateDialog';

export class CurrencyRateGrid extends EntityGrid<CurrencyRateRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return CurrencyRateColumns.columnsKey; }
    protected override getDialogType() { return CurrencyRateDialog; }
    protected override getRowDefinition() { return CurrencyRateRow; }
    protected override getService() { return CurrencyRateService.baseUrl; }
}