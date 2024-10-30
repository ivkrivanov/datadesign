import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { CurrencyRow } from './CurrencyRow';

export interface CurrencyColumns {
    CurrencyCode: Column<CurrencyRow>;
    Name: Column<CurrencyRow>;
    IsActive: Column<CurrencyRow>;
    TenantId: Column<CurrencyRow>;
}

export class CurrencyColumns extends ColumnsBase<CurrencyRow> {
    static readonly columnsKey = 'Company.Currency';
    static readonly Fields = fieldsProxy<CurrencyColumns>();
}