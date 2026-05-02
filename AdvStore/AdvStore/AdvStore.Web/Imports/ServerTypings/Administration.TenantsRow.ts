namespace AdvStore.Administration {
    export interface TenantsRow {
        TenantId?: number;
        TenantName?: string;
    }

    export namespace TenantsRow {
        export const idProperty = 'TenantId';
        export const nameProperty = 'TenantName';
        export const localTextPrefix = 'Administration.Tenants';
        export const lookupKey = 'Administration.Tenant';

        export function getLookup(): Q.Lookup<TenantsRow> {
            return Q.getLookup<TenantsRow>('Administration.Tenant');
        }
        export const deletePermission = 'Administration:Tenants';
        export const insertPermission = 'Administration:Tenants';
        export const readPermission = 'Administration:Tenants';
        export const updatePermission = 'Administration:Tenants';

        export declare const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
