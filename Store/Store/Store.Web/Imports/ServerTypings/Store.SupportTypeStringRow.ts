
namespace Store.Store {
    export interface SupportTypeStringRow {
        EnumLocaleId?: number;
        EnumValue?: number;
        DisplayName?: string;
        LanguageId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        TenantId?: number;
        IsActive?: number;
        EnumValueEnumName?: string;
        EnumValueInsertUserId?: number;
        EnumValueInsertDate?: string;
        EnumValueUpdateUserId?: number;
        EnumValueUpdateDate?: string;
        EnumValueTenantId?: number;
        EnumValueIsActive?: number;
    }

    export namespace SupportTypeStringRow {
        export const idProperty = 'EnumLocaleId';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'Store.SupportTypeString';

        export namespace Fields {
            export declare const EnumLocaleId;
            export declare const EnumValue;
            export declare const DisplayName;
            export declare const LanguageId;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDate;
            export declare const TenantId;
            export declare const IsActive;
            export declare const EnumValueEnumName: string;
            export declare const EnumValueInsertUserId: string;
            export declare const EnumValueInsertDate: string;
            export declare const EnumValueUpdateUserId: string;
            export declare const EnumValueUpdateDate: string;
            export declare const EnumValueTenantId: string;
            export declare const EnumValueIsActive: string;
        }

        ['EnumLocaleId', 'EnumValue', 'DisplayName', 'LanguageId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'TenantId', 'IsActive', 'EnumValueEnumName', 'EnumValueInsertUserId', 'EnumValueInsertDate', 'EnumValueUpdateUserId', 'EnumValueUpdateDate', 'EnumValueTenantId', 'EnumValueIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

