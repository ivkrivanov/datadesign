import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { EmailAddressRow } from './EmailAddressRow';

export interface EmailAddressColumns {
    BusinessEntityId: Column<EmailAddressRow>;
    EmailAddressId: Column<EmailAddressRow>;
    EmailAddress: Column<EmailAddressRow>;
    IsActive: Column<EmailAddressRow>;
    TenantId: Column<EmailAddressRow>;
}

export class EmailAddressColumns extends ColumnsBase<EmailAddressRow> {
    static readonly columnsKey = 'Company.EmailAddress';
    static readonly Fields = fieldsProxy<EmailAddressColumns>();
}