namespace Ledger.Infra {
    export interface CurrencyRow {
        CurrencyId?: number;
        Code?: string;
        Description?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CurrencyRow {
        export const idProperty = 'CurrencyId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Code';
        export const localTextPrefix = 'Infra.Currency';
        export const lookupKey = 'Infra.Currency';

        export function getLookup(): Q.Lookup<CurrencyRow> {
            return Q.getLookup<CurrencyRow>('Infra.Currency');
        }

        export namespace Fields {
            export declare const CurrencyId: string;
            export declare const Code: string;
            export declare const Description: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['CurrencyId', 'Code', 'Description', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

