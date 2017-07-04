
namespace Store.Infra {
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
    }

    export namespace SupportTypeStringRow {
        export const idProperty = 'EnumLocaleId';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'Infra.SupportTypeString';

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
        }

        ['EnumLocaleId', 'EnumValue', 'DisplayName', 'LanguageId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'TenantId', 'IsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

