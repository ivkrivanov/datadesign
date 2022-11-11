namespace Store.Store {
    export interface ShippersRow {
        ShipperId?: number;
        CompanyName?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ShippersRow {
        export const idProperty = 'ShipperId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Store.Shippers';
        export const lookupKey = 'Store.Shipper';

        export function getLookup(): Q.Lookup<ShippersRow> {
            return Q.getLookup<ShippersRow>('Store.Shipper');
        }
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export declare const enum Fields {
            ShipperId = "ShipperId",
            CompanyName = "CompanyName",
            Phone = "Phone",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
