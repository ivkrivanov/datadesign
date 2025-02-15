import { fieldsProxy } from '@serenity-is/corelib';

export interface TenantsRow {
    TenantId?: number;
    TenantName?: string;
}

export abstract class TenantsRow {
    static readonly idProperty = 'TenantId';
    static readonly nameProperty = 'TenantName';
    static readonly localTextPrefix = 'Administration.Tenants';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<TenantsRow>();
}