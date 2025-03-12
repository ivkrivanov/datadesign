import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { ContactTypeRow } from './ContactTypeRow';

export interface ContactTypeColumns {
    ContactTypeId: Column<ContactTypeRow>;
    Name: Column<ContactTypeRow>;
    IsActive: Column<ContactTypeRow>;
    TenantId: Column<ContactTypeRow>;
}

export class ContactTypeColumns extends ColumnsBase<ContactTypeRow> {
    static readonly columnsKey = 'Company.ContactType';
    static readonly Fields = fieldsProxy<ContactTypeColumns>();
}