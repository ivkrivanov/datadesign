namespace Ledger.Infra {
    export interface SupportRow {
        SupportId?: number;
        Guid?: string;
        SupportTypeId?: number;
        SupportCode?: string;
        Name?: string;
        Description?: string;
        TenantId?: number;
        IsActive?: number;
        SupportTypeEnumValue?: number;
        SupportTypeDisplayName?: string;
        SupportTypeLocale?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace SupportRow {
        export const idProperty = 'SupportId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'SupportCode';
        export const localTextPrefix = 'Infra.Support';

        export namespace Fields {
            export declare const SupportId: string;
            export declare const Guid: string;
            export declare const SupportTypeId: string;
            export declare const SupportCode: string;
            export declare const Name: string;
            export declare const Description: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const SupportTypeEnumValue: string;
            export declare const SupportTypeDisplayName: string;
            export declare const SupportTypeLocale: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['SupportId', 'Guid', 'SupportTypeId', 'SupportCode', 'Name', 'Description', 'TenantId', 'IsActive', 'SupportTypeEnumValue', 'SupportTypeDisplayName', 'SupportTypeLocale', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

