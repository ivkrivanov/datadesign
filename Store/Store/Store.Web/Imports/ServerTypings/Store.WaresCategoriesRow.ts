namespace Store.Store {
    export interface WaresCategoriesRow {
        WaresCategoryID?: number;
        WaresCategoryCode?: string;
        WaresCategoryName?: string;
        WaresCategoryDescription?: string;
        WaresCategoryImage?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WaresCategoriesRow {
        export const idProperty = 'WaresCategoryID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'WaresCategoryName';
        export const localTextPrefix = 'Store.WaresCategories';
        export const lookupKey = 'Store.WaresCategories';

        export function getLookup(): Q.Lookup<WaresCategoriesRow> {
            return Q.getLookup<WaresCategoriesRow>('Store.WaresCategories');
        }

        export declare const enum Fields {
            WaresCategoryID = "WaresCategoryID",
            WaresCategoryCode = "WaresCategoryCode",
            WaresCategoryName = "WaresCategoryName",
            WaresCategoryDescription = "WaresCategoryDescription",
            WaresCategoryImage = "WaresCategoryImage",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

