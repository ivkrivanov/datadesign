
namespace Serene1.Default.Infra.Default {
    export interface AddressTypeLangRow {
        Id?: number;
        EnumValue?: number;
        LanguageId?: number;
        EnumName?: string;
    }

    export namespace AddressTypeLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'EnumName';
        export const localTextPrefix = 'Default.AddressTypeLang';

        export namespace Fields {
            export declare const Id;
            export declare const EnumValue;
            export declare const LanguageId;
            export declare const EnumName;
        }

        [
            'Id',
            'EnumValue',
            'LanguageId',
            'EnumName'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}