namespace Warehouse.Store {
    export interface ItemCategoryRow {
        ItemCategoryID?: number;
        ItemCategoryCode?: string;
        ItemCategoryName?: string;
        ItemDescription?: string;
        ItemCatImage?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ItemCategoryRow {
        export const idProperty = 'ItemCategoryID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ItemCategoryName';
        export const localTextPrefix = 'Store.ItemCategory';
        export const lookupKey = 'Store.ItemCategories';

        export function getLookup(): Q.Lookup<ItemCategoryRow> {
            return Q.getLookup<ItemCategoryRow>('Store.ItemCategories');
        }

        export declare const enum Fields {
            ItemCategoryID = "ItemCategoryID",
            ItemCategoryCode = "ItemCategoryCode",
            ItemCategoryName = "ItemCategoryName",
            ItemDescription = "ItemDescription",
            ItemCatImage = "ItemCatImage",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

