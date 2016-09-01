namespace Ledger.Infra {
    export interface PhoneRow {
        PhoneId?: number;
        PhoneNumber?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace PhoneRow {
        export const idProperty = 'PhoneId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'PhoneNumber';
        export const localTextPrefix = 'Infra.Phone';
        export const lookupKey = 'Infra.Email';

        export function getLookup(): Q.Lookup<PhoneRow> {
            return Q.getLookup<PhoneRow>('Infra.Email');
        }

        export namespace Fields {
            export declare const PhoneId: string;
            export declare const PhoneNumber: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['PhoneId', 'PhoneNumber', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

