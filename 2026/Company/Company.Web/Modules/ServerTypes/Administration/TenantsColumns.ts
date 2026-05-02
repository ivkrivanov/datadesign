import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { TenantsRow } from "./TenantsRow";

export interface TenantsColumns {
    TenantId: Column<TenantsRow>;
    TenantName: Column<TenantsRow>;
}

export class TenantsColumns extends ColumnsBase<TenantsRow> {
    static readonly columnsKey = 'Administration.Tenants';
    static readonly Fields = fieldsProxy<TenantsColumns>();
}