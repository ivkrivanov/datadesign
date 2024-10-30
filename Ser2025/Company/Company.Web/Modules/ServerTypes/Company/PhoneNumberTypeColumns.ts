import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { PhoneNumberTypeRow } from './PhoneNumberTypeRow';

export interface PhoneNumberTypeColumns {
    PhoneNumberTypeId: Column<PhoneNumberTypeRow>;
    Name: Column<PhoneNumberTypeRow>;
    IsActive: Column<PhoneNumberTypeRow>;
    TenantId: Column<PhoneNumberTypeRow>;
}

export class PhoneNumberTypeColumns extends ColumnsBase<PhoneNumberTypeRow> {
    static readonly columnsKey = 'Company.PhoneNumberType';
    static readonly Fields = fieldsProxy<PhoneNumberTypeColumns>();
}