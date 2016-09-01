namespace Ledger.Infra {
    export interface EmailRow {
        EmailId?: number;
        EmailAddress?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmailRow {
        export const idProperty = 'EmailId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'EmailAddress';
        export const localTextPrefix = 'Infra.Email';
        export const lookupKey = 'Infra.Email';

        export function getLookup(): Q.Lookup<EmailRow> {
            return Q.getLookup<EmailRow>('Infra.Email');
        }

        export namespace Fields {
            export declare const EmailId: string;
            export declare const EmailAddress: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EmailId', 'EmailAddress', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

