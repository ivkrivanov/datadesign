
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
        SupportTypeTenantId?: number;
        SupportTypeIsActive?: number;
    }

    export namespace SupportRow {
        export const idProperty = 'SupportId';
        export const nameProperty = 'SupportCode';
        export const localTextPrefix = 'Infra.Support';

        export namespace Fields {
            export declare const SupportId;
            export declare const Guid;
            export declare const SupportTypeId;
            export declare const SupportCode;
            export declare const Name;
            export declare const Description;
            export declare const TenantId;
            export declare const IsActive;
            export declare const SupportTypeEnumValue: string;
            export declare const SupportTypeDisplayName: string;
            export declare const SupportTypeLocale: string;
            export declare const SupportTypeTenantId: string;
            export declare const SupportTypeIsActive: string;
        }

        ['SupportId', 'Guid', 'SupportTypeId', 'SupportCode', 'Name', 'Description', 'TenantId', 'IsActive', 'SupportTypeEnumValue', 'SupportTypeDisplayName', 'SupportTypeLocale', 'SupportTypeTenantId', 'SupportTypeIsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

