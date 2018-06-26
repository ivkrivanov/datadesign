
namespace Serene1.Default/Infra {
    export interface AddressTypeStringRow {
        EnumLocaleId?: number;
        EnumValue?: number;
        DisplayName?: string;
        Language?: number;
        TenantId?: number;
        IsActive?: number;
        EnumValueEnumName?: string;
        EnumValueTenantId?: number;
        EnumValueIsActive?: number;
    }

    export namespace AddressTypeStringRow {
        export const idProperty = 'EnumLocaleId';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'Default/Infra.AddressTypeString';

        export namespace Fields {
            export declare const EnumLocaleId;
            export declare const EnumValue;
            export declare const DisplayName;
            export declare const Language;
            export declare const TenantId;
            export declare const IsActive;
            export declare const EnumValueEnumName;
            export declare const EnumValueTenantId;
            export declare const EnumValueIsActive;
        }

        [
            'EnumLocaleId',
            'EnumValue',
            'DisplayName',
            'Language',
            'TenantId',
            'IsActive',
            'EnumValueEnumName',
            'EnumValueTenantId',
            'EnumValueIsActive'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}