namespace Store.Store {
    export interface CategoryRow {
        CategoryID?: number;
        CategoryTypeID?: number;
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

    export namespace CategoryRow {
        export const idProperty = 'CategoryID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CategoryName';
        export const localTextPrefix = 'Store.Category';
        export const lookupKey = 'Store.Category';

        export function getLookup(): Q.Lookup<CategoryRow> {
            return Q.getLookup<CategoryRow>('Store.Category');
        }

        export declare const enum Fields {
            CategoryID = "CategoryID",
            CategoryTypeID = "CategoryTypeID",
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

