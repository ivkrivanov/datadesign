namespace Ledger.HR {
    export interface EmplAddressTypeRow {
        EmplAddressTypeId?: number;
        EmplAddressType?: string;
        TenantId?: number;
        IsActive?: number;
        EmplAddressTypeEmployeeId?: number;
        EmplAddressTypeAddressId?: number;
        EmplAddressTypeAddressType?: string;
        EmplAddressTypeInsertUserId?: number;
        EmplAddressTypeInsertDate?: string;
        EmplAddressTypeUpdateUserId?: number;
        EmplAddressTypeUpdateDate?: string;
        EmplAddressTypeTenantId?: number;
        EmplAddressTypeIsActive?: number;
        EmplAddressTypeAddressTypeId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmplAddressTypeRow {
        export const idProperty = 'EmplAddressTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'EmplAddressType';
        export const localTextPrefix = 'HR.EmplAddressType';

        export namespace Fields {
            export declare const EmplAddressTypeId: string;
            export declare const EmplAddressType: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const EmplAddressTypeEmployeeId: string;
            export declare const EmplAddressTypeAddressId: string;
            export declare const EmplAddressTypeAddressType: string;
            export declare const EmplAddressTypeInsertUserId: string;
            export declare const EmplAddressTypeInsertDate: string;
            export declare const EmplAddressTypeUpdateUserId: string;
            export declare const EmplAddressTypeUpdateDate: string;
            export declare const EmplAddressTypeTenantId: string;
            export declare const EmplAddressTypeIsActive: string;
            export declare const EmplAddressTypeAddressTypeId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EmplAddressTypeId', 'EmplAddressType', 'TenantId', 'IsActive', 'EmplAddressTypeEmployeeId', 'EmplAddressTypeAddressId', 'EmplAddressTypeAddressType', 'EmplAddressTypeInsertUserId', 'EmplAddressTypeInsertDate', 'EmplAddressTypeUpdateUserId', 'EmplAddressTypeUpdateDate', 'EmplAddressTypeTenantId', 'EmplAddressTypeIsActive', 'EmplAddressTypeAddressTypeId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

