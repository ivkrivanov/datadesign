namespace Ledger.Infra {
    export interface SupportTypeRow {
        EnumValue?: number;
        DisplayName?: string;
        TenantId?: number;
        IsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace SupportTypeRow {
        export const idProperty = 'EnumValue';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'DisplayName';
        export const localTextPrefix = 'Infra.SupportType';

        export namespace Fields {
            export declare const EnumValue: string;
            export declare const DisplayName: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EnumValue', 'DisplayName', 'TenantId', 'IsActive', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

