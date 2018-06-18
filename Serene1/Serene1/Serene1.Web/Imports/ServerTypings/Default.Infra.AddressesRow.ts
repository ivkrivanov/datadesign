namespace Serene1.Default.Infra {
    export interface AddressesRow {
        AddressId?: number;
        Address?: string;
        ZipCode?: string;
        City?: string;
        State?: string;
        Country?: string;
        StreetAddress?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AddressesRow {
        export const idProperty = 'AddressId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'StreetAddress';
        export const localTextPrefix = 'Default.Addresses';
        export const lookupKey = 'Infra.Addresses';

        export function getLookup(): Q.Lookup<AddressesRow> {
            return Q.getLookup<AddressesRow>('Infra.Addresses');
        }

        export declare const enum Fields {
            AddressId = "AddressId",
            Address = "Address",
            ZipCode = "ZipCode",
            City = "City",
            State = "State",
            Country = "Country",
            StreetAddress = "StreetAddress",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

