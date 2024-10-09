import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CurrencyColumns, CurrencyRow, CurrencyService } from '@/ServerTypes/Company';
import { CurrencyDialog } from './CurrencyDialog';

@Decorators.registerClass('Company.Company.CurrencyGrid')
export class CurrencyGrid extends EntityGrid<CurrencyRow, any> {
    protected getColumnsKey() { return CurrencyColumns.columnsKey; }
    protected getDialogType() { return CurrencyDialog; }
    protected getIdProperty() { return CurrencyRow.idProperty; }
    protected getInsertPermission() { return CurrencyRow.insertPermission; }
    protected getLocalTextPrefix() { return CurrencyRow.localTextPrefix; }
    protected getRowDefinition() { return CurrencyRow; }
    protected getService() { return CurrencyService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}