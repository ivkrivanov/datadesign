namespace Warehouse.Store {
    export interface CustomerRow {
        Id?: number;
        CustomerID?: string;
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
        IsActive?: number;
        TenantId?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        NoteList?: NoteRow[];
        Representatives?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CustomerID';
        export const localTextPrefix = 'Store.Customer';
        export const lookupKey = 'Store.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Store.Customer');
        }

        export declare const enum Fields {
            Id = "Id",
            CustomerID = "CustomerID",
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
            IsActive = "IsActive",
            TenantId = "TenantId",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            NoteList = "NoteList",
            Representatives = "Representatives",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

