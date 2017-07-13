namespace Store.Infra {
    export interface SupportTypeStringRow {
        EnumLocaleId?: number;
        EnumValue?: number;
        DisplayName?: string;
        LanguageId?: number;
        LanguageName?: string;
        TenantId?: number;
        IsActive?: number;
        EnumValueEnumName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace SupportTypeStringRow {
        export const idProperty = 'EnumLocaleId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'Infra.SupportTypeString';
        export const lookupKey = 'Infra.SupportTypeString';

        export function getLookup(): Q.Lookup<SupportTypeStringRow> {
            return Q.getLookup<SupportTypeStringRow>('Infra.SupportTypeString');
        }

        export namespace Fields {
            export declare const EnumLocaleId: string;
            export declare const EnumValue: string;
            export declare const DisplayName: string;
            export declare const LanguageId: string;
            export declare const LanguageName: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const EnumValueEnumName: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EnumLocaleId', 'EnumValue', 'DisplayName', 'LanguageId', 'LanguageName', 'TenantId', 'IsActive', 'EnumValueEnumName', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

