namespace Warehouse.Store {
    export interface CategoriesRow {
        CategoryId?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CategoriesRow {
        export const idProperty = 'CategoryId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Store.Categories';
        export const lookupKey = 'Store.Categories';

        export function getLookup(): Q.Lookup<CategoriesRow> {
            return Q.getLookup<CategoriesRow>('Store.Categories');
        }

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

