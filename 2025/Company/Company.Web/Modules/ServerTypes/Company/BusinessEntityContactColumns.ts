import { ColumnsBase, fieldsProxy } from '@serenity-is/corelib';
import { Column } from '@serenity-is/sleekgrid';
import { BusinessEntityContactRow } from './BusinessEntityContactRow';

export interface BusinessEntityContactColumns {
    BusinessEntityId: Column<BusinessEntityContactRow>;
    PersonId: Column<BusinessEntityContactRow>;
    ContactTypeId: Column<BusinessEntityContactRow>;
    IsActive: Column<BusinessEntityContactRow>;
    TenantId: Column<BusinessEntityContactRow>;
}

export class BusinessEntityContactColumns extends ColumnsBase<BusinessEntityContactRow> {
    static readonly columnsKey = 'Company.BusinessEntityContact';
    static readonly Fields = fieldsProxy<BusinessEntityContactColumns>();
}