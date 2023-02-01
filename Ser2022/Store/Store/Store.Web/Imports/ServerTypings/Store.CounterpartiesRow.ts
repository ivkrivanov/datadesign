namespace Store.Store {
    export interface CounterpartiesRow {
        Id?: number;
        CounterpartyId?: string;
        CompanyName?: string;
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
        NotesList?: NotesRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CounterpartiesRow {
        export const idProperty = 'Id';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CompanyName';
        export const localTextPrefix = 'Store.Counterparties';
        export const lookupKey = 'Store.Counterparties';

        export function getLookup(): Q.Lookup<CounterpartiesRow> {
            return Q.getLookup<CounterpartiesRow>('Store.Counterparties');
        }
        export const deletePermission = 'Store:Counterparty:Delete';
        export const insertPermission = 'Store:Counterparty:Modify';
        export const readPermission = 'Store:Counterparty:View';
        export const updatePermission = 'Store:Counterparty:Modify';

        export declare const enum Fields {
            Id = "Id",
            CounterpartyId = "CounterpartyId",
            CompanyName = "CompanyName",
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
            NotesList = "NotesList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
