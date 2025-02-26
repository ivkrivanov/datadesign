import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { PersonRow } from './PersonRow';

export interface PersonColumns {
    BusinessEntityId: Column<PersonRow>;
    PersonType: Column<PersonRow>;
    Title: Column<PersonRow>;
    FirstName: Column<PersonRow>;
    MiddleName: Column<PersonRow>;
    LastName: Column<PersonRow>;
    Suffix: Column<PersonRow>;
    IsActive: Column<PersonRow>;
    TenantId: Column<PersonRow>;
}

export class PersonColumns extends ColumnsBase<PersonRow> {
    static readonly columnsKey = 'Company.Person';
    static readonly Fields = fieldsProxy<PersonColumns>();
}