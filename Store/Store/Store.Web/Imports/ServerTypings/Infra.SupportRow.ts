namespace Store.Infra {
    export interface SupportRow {
        SupportId?: number;
        SupportGuid?: string;
        SupportTypeId?: number;
        SupportCode?: string;
        SupportName?: string;
        SupportDescription?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        TenantId?: number;
        IsActive?: number;
        SupportTypeEnumValue?: number;
        SupportTypeDisplayName?: string;
        SupportTypeLanguageId?: number;
        SupportTypeInsertUserId?: number;
        SupportTypeInsertDate?: string;
        SupportTypeUpdateUserId?: number;
        SupportTypeUpdateDate?: string;
        SupportTypeTenantId?: number;
        SupportTypeIsActive?: number;
    }

    export namespace SupportRow {
        export const idProperty = 'SupportId';
        export const nameProperty = 'SupportCode';
        export const localTextPrefix = 'Infra.Support';

        export namespace Fields {
            export declare const SupportId: string;
            export declare const SupportGuid: string;
            export declare const SupportTypeId: string;
            export declare const SupportCode: string;
            export declare const SupportName: string;
            export declare const SupportDescription: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const SupportTypeEnumValue: string;
            export declare const SupportTypeDisplayName: string;
            export declare const SupportTypeLanguageId: string;
            export declare const SupportTypeInsertUserId: string;
            export declare const SupportTypeInsertDate: string;
            export declare const SupportTypeUpdateUserId: string;
            export declare const SupportTypeUpdateDate: string;
            export declare const SupportTypeTenantId: string;
            export declare const SupportTypeIsActive: string;
        }

        ['SupportId', 'SupportGuid', 'SupportTypeId', 'SupportCode', 'SupportName', 'SupportDescription', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'TenantId', 'IsActive', 'SupportTypeEnumValue', 'SupportTypeDisplayName', 'SupportTypeLanguageId', 'SupportTypeInsertUserId', 'SupportTypeInsertDate', 'SupportTypeUpdateUserId', 'SupportTypeUpdateDate', 'SupportTypeTenantId', 'SupportTypeIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

