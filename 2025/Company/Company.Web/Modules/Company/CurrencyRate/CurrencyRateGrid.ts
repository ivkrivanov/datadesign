import { CurrencyRateColumns, CurrencyRateRow, CurrencyRateService } from '../../ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CurrencyRateDialog } from './CurrencyRateDialog';
import "./CurrencyRateGrid.css"

@Decorators.registerClass('Company.Company.CurrencyRateGrid')
export class CurrencyRateGrid extends EntityGrid<CurrencyRateRow, any> {
    protected getColumnsKey() { return CurrencyRateColumns.columnsKey; }
    protected getDialogType() { return CurrencyRateDialog; }
    protected getIdProperty() { return CurrencyRateRow.idProperty; }
    protected getRowDefinition() { return CurrencyRateRow; }
    protected getService() { return CurrencyRateService.baseUrl; }

}