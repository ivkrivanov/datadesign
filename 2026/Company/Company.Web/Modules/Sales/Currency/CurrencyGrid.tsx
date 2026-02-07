import { EntityGrid } from '@serenity-is/corelib';
import { CurrencyColumns, CurrencyRow, CurrencyService } from '../../ServerTypes/Sales';
import { CurrencyDialog } from './CurrencyDialog';

export class CurrencyGrid extends EntityGrid<CurrencyRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return CurrencyColumns.columnsKey; }
    protected override getDialogType() { return CurrencyDialog; }
    protected override getRowDefinition() { return CurrencyRow; }
    protected override getService() { return CurrencyService.baseUrl; }
}