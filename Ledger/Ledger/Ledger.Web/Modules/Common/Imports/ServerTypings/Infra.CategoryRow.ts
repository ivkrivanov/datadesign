namespace Ledger.Infra {
    export interface CategoryRow {
        CategoryId?: number;
        CategoryCode?: string;
        CategoryType?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CategoryRow {
        export const idProperty = 'CategoryId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CategoryCode';
        export const localTextPrefix = 'Infra.Category';
        export const lookupKey = 'Infra.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Infra.Category');
        }

        export namespace Fields {
            export declare const CategoryId: string;
            export declare const CategoryCode: string;
            export declare const CategoryType: string;
            export declare const CategoryName: string;
            export declare const Description: string;
            export declare const Picture: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['CategoryId', 'CategoryCode', 'CategoryType', 'CategoryName', 'Description', 'Picture', 'IsActive', 'TenantId', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

