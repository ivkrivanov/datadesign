namespace Store.Store {
    export interface SupplierRow {
        SupplierID?: number;
        SupplierStat?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        Email?: string;
        HomePage?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace SupplierRow {
        export const idProperty = 'SupplierID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Store.Supplier';
        export const lookupKey = 'Store.Supplier';

        export function getLookup(): Q.Lookup<SupplierRow> {
            return Q.getLookup<SupplierRow>('Store.Supplier');
        }

        export declare const enum Fields {
            SupplierID = "SupplierID",
            SupplierStat = "SupplierStat",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            Email = "Email",
            HomePage = "HomePage",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

