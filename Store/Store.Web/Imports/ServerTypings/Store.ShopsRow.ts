namespace Store.Store {
    export interface ShopsRow {
        ID?: number;
        ShopID?: string;
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
        export const idProperty = 'ShopID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ShopName';
        export const localTextPrefix = 'Store.Shops';
        export const lookupKey = 'Store.Shops';

        export function getLookup(): Q.Lookup<ShopsRow> {
            return Q.getLookup<ShopsRow>('Store.Shops');
        }

        export declare const enum Fields {
            ID = "ID",
            ShopID = "ShopID",
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

