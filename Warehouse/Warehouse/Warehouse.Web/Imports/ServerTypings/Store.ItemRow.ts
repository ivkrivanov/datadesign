﻿namespace Warehouse.Store {
    export interface ItemRow {
        ItemID?: number;
        ItemCode?: string;
        ItemBarcode?: string;
        ItemLabel?: string;
        ItemName?: string;
        ItemImage?: number[];
        SupplierID?: number;
        CategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        AccountID?: number;
        IsActive?: number;
        TenantID?: number;
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
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
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
            CategoryID = "CategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            AccountID = "AccountID",
            IsActive = "IsActive",
            TenantID = "TenantID",
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
            SupplierHomePage = "SupplierHomePage",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryPicture = "CategoryPicture",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

