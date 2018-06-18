
namespace Serene1.Default {
    export interface AddressesRow {
        AddressId?: number;
        Address?: string;
        ZipCode?: string;
        City?: string;
        State?: string;
        Country?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        IsActive?: number;
        TenantId?: number;
    }

    export namespace AddressesRow {
        export const idProperty = 'AddressId';
        export const nameProperty = 'Address';
        export const localTextPrefix = 'Default.Addresses';

        export namespace Fields {
            export declare const AddressId;
            export declare const Address;
            export declare const ZipCode;
            export declare const City;
            export declare const State;
            export declare const Country;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDate;
            export declare const IsActive;
            export declare const TenantId;
        }

        [
            'AddressId',
            'Address',
            'ZipCode',
            'City',
            'State',
            'Country',
            'InsertUserId',
            'InsertDate',
            'UpdateUserId',
            'UpdateDate',
            'IsActive',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}