namespace Store.Store {
    export interface CategoriesRow {
        CategoryId?: number;
        CategoryTypeId?: number;
        CategoryCode?: string;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
        IsActive?: number;
        TenantId?: number;
        Type?: number;
        CategoryType?: string;
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
        export const deletePermission = 'Store:Categories:Delete';
        export const insertPermission = 'Store:Categories:Modify';
        export const readPermission = 'Store:Categories:View';
        export const updatePermission = 'Store:Categories:Modify';

        export declare const enum Fields {
            CategoryId = "CategoryId",
            CategoryTypeId = "CategoryTypeId",
            CategoryCode = "CategoryCode",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture",
            IsActive = "IsActive",
            TenantId = "TenantId",
            Type = "Type",
            CategoryType = "CategoryType",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
