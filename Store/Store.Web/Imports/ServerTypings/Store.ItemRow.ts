namespace Store.Store {
    export interface ItemRow {
        ItemID?: number;
        ItemCode?: string;
        ItemBarcode?: string;
        ItemLabel?: string;
        ItemName?: string;
        ItemImage?: string;
        SupplierID?: number;
        ItemCategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        Discontinued?: boolean;
        AccountID?: number;
        IsActive?: number;
        TenantId?: number;
        SupplierSupplierStat?: string;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierHomePage?: string;
        ItemCategoryItemCategoryCode?: string;
        ItemCategoryItemCategoryName?: string;
        ItemCategoryItemCategoryDescription?: string;
        ItemCategoryItemCategoryImage?: string;
        MeasureMeasureName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ItemRow {
        export const idProperty = 'ItemID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ItemName';
        export const localTextPrefix = 'Store.Item';
        export const lookupKey = 'Store.Item';

        export function getLookup(): Q.Lookup<ItemRow> {
            return Q.getLookup<ItemRow>('Store.Item');
        }

        export declare const enum Fields {
            ItemID = "ItemID",
            ItemCode = "ItemCode",
            ItemBarcode = "ItemBarcode",
            ItemLabel = "ItemLabel",
            ItemName = "ItemName",
            ItemImage = "ItemImage",
            SupplierID = "SupplierID",
            ItemCategoryID = "ItemCategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            Discontinued = "Discontinued",
            AccountID = "AccountID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            SupplierSupplierStat = "SupplierSupplierStat",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierEmail = "SupplierEmail",
            SupplierHomePage = "SupplierHomePage",
            ItemCategoryItemCategoryCode = "ItemCategoryItemCategoryCode",
            ItemCategoryItemCategoryName = "ItemCategoryItemCategoryName",
            ItemCategoryItemCategoryDescription = "ItemCategoryItemCategoryDescription",
            ItemCategoryItemCategoryImage = "ItemCategoryItemCategoryImage",
            MeasureMeasureName = "MeasureMeasureName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

