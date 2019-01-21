
namespace Ledger.Default {
    export interface EmplAddressTypeRow {
        EmplAddressTypeId?: number;
        EmplAddressType?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
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
    }

    export namespace EmplAddressTypeRow {
        export const idProperty = 'EmplAddressTypeId';
        export const nameProperty = 'EmplAddressType';
        export const localTextPrefix = 'Default.EmplAddressType';

        export namespace Fields {
            export declare const EmplAddressTypeId;
            export declare const EmplAddressType;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDate;
            export declare const TenantId;
            export declare const IsActive;
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
        }

        ['EmplAddressTypeId', 'EmplAddressType', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'TenantId', 'IsActive', 'EmplAddressTypeEmployeeId', 'EmplAddressTypeAddressId', 'EmplAddressTypeAddressType', 'EmplAddressTypeInsertUserId', 'EmplAddressTypeInsertDate', 'EmplAddressTypeUpdateUserId', 'EmplAddressTypeUpdateDate', 'EmplAddressTypeTenantId', 'EmplAddressTypeIsActive', 'EmplAddressTypeAddressTypeId'].forEach(x => (<any>Fields)[x] = x);
    }
}

