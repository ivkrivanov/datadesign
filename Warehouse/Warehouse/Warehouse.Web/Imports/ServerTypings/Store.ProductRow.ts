namespace Warehouse.Store {
    export interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        IsActive?: number;
        TenantId?: number;
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
        DetailList?: ProductDetailRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductRow {
        export const idProperty = 'ProductID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Store.Product';
        export const lookupKey = 'Store.Product';

        export function getLookup(): Q.Lookup<ProductRow> {
            return Q.getLookup<ProductRow>('Store.Product');
        }

        export declare const enum Fields {
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            IsActive = "IsActive",
            TenantId = "TenantId",
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
            DetailList = "DetailList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

