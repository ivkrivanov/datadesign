import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { PersonPhoneRow } from './PersonPhoneRow';

export interface PersonPhoneColumns {
    BusinessEntityId: Column<PersonPhoneRow>;
    PhoneNumber: Column<PersonPhoneRow>;
    PhoneNumberTypeId: Column<PersonPhoneRow>;
    IsActive: Column<PersonPhoneRow>;
    TenantId: Column<PersonPhoneRow>;
}

export class PersonPhoneColumns extends ColumnsBase<PersonPhoneRow> {
    static readonly columnsKey = 'Company.PersonPhone';
    static readonly Fields = fieldsProxy<PersonPhoneColumns>();
}