namespace Ledger.Infra {
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
        export const localTextPrefix = 'Infra.Addresses';
        export const lookupKey = 'Infra.Addresses';

        export function getLookup(): Q.Lookup<AddressesRow> {
            return Q.getLookup<AddressesRow>('Infra.Addresses');
        }

        export namespace Fields {
            export declare const AddressId: string;
            export declare const Address: string;
            export declare const ZipCode: string;
            export declare const City: string;
            export declare const State: string;
            export declare const Country: string;
            export declare const StreetAddress: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['AddressId', 'Address', 'ZipCode', 'City', 'State', 'Country', 'StreetAddress', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

