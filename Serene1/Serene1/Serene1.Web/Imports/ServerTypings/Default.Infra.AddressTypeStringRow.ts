namespace Serene1.Default.Infra {
    export interface AddressTypeStringRow {
        EnumLocaleId?: number;
        EnumValue?: number;
        DisplayName?: string;
        Language?: number;
        LanguageName?: string;
        TenantId?: number;
        IsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AddressTypeStringRow {
        export const idProperty = 'EnumLocaleId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'Default.AddressTypeString';

        export declare const enum Fields {
            EnumLocaleId = "EnumLocaleId",
            EnumValue = "EnumValue",
            DisplayName = "DisplayName",
            Language = "Language",
            LanguageName = "LanguageName",
            TenantId = "TenantId",
            IsActive = "IsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

