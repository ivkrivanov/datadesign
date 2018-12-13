namespace Warehouse.Store {
    export interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ShipperRow {
        export const idProperty = 'ShipperID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Store.Shipper';
        export const lookupKey = 'Store.Shipper';

        export function getLookup(): Q.Lookup<ShipperRow> {
            return Q.getLookup<ShipperRow>('Store.Shipper');
        }

        export declare const enum Fields {
            ShipperID = "ShipperID",
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

