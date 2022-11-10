namespace Store.Store {
    export interface ShopsRow {
        Id?: number;
        ShopId?: string;
        ShopName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ShopsRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ShopName';
        export const localTextPrefix = 'Store.Shops';
        export const lookupKey = 'Store.Shops';

        export function getLookup(): Q.Lookup<ShopsRow> {
            return Q.getLookup<ShopsRow>('Store.Shops');
        }
        export const deletePermission = 'Store:Shops:Delete';
        export const insertPermission = 'Store:Shops:Modify';
        export const readPermission = 'Store:Shops:View';
        export const updatePermission = 'Store:Shops:Modify';

        export declare const enum Fields {
            Id = "Id",
            ShopId = "ShopId",
            ShopName = "ShopName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
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
