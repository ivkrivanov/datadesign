namespace CoreStore.Store {
    export interface CategoryTypeRow {
        CategoryTypeID?: number;
        Type?: number;
        CategoryType?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace CategoryTypeRow {
        export const idProperty = 'CategoryTypeID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CategoryType';
        export const localTextPrefix = 'Store.CategoryType';
        export const lookupKey = 'Store.CategoryType';

        export function getLookup(): Q.Lookup<CategoryTypeRow> {
            return Q.getLookup<CategoryTypeRow>('Store.CategoryType');
        }
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export declare const enum Fields {
            CategoryTypeID = "CategoryTypeID",
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
