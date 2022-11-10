namespace Store.Store {
    export interface CategoriesTypeRow {
        CategoryTypeId?: number;
        Type?: number;
        CategoryType?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CategoriesTypeRow {
        export const idProperty = 'CategoryTypeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'Type';
        export const localTextPrefix = 'Store.CategoriesType';
        export const lookupKey = 'Store.CategoriesType';

        export function getLookup(): Q.Lookup<CategoriesTypeRow> {
            return Q.getLookup<CategoriesTypeRow>('Store.CategoriesType');
        }
        export const deletePermission = 'Store:CategoriesType:Delete';
        export const insertPermission = 'Store:CategoriesType:Modify';
        export const readPermission = 'Store:CategoriesType:View';
        export const updatePermission = 'Store:CategoriesType:Modify';

        export declare const enum Fields {
            CategoryTypeId = "CategoryTypeId",
            Type = "Type",
            CategoryType = "CategoryType",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
