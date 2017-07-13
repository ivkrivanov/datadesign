namespace Store.Infra {
    export interface SupportTypeRow {
        EnumValue?: number;
        EnumName?: string;
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
        export const nameProperty = 'EnumName';
        export const localTextPrefix = 'Infra.SupportType';
        export const lookupKey = 'Infra.SupportType';

        export function getLookup(): Q.Lookup<SupportTypeRow> {
            return Q.getLookup<SupportTypeRow>('Infra.SupportType');
        }

        export namespace Fields {
            export declare const EnumValue: string;
            export declare const EnumName: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EnumValue', 'EnumName', 'TenantId', 'IsActive', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

