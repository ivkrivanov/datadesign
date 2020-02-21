namespace Store.Store {
    export interface ProductRow {
        ProductID?: number;
        ProductCode?: string;
        ProductBarcode?: string;
        ProductLabel?: string;
        ProductName?: string;
        ProductImage?: string;
        CounterpartyID?: string;
        SupplierID?: number;
        CategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        Discontinued?: boolean;
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
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        CategoryCategoryName?: string;
        CategoryDescription?: string;
        DetailList?: ProductDetailRow[];
        MeasureMeasureName?: string;
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
            ProductCode = "ProductCode",
            ProductBarcode = "ProductBarcode",
            ProductLabel = "ProductLabel",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            CounterpartyID = "CounterpartyID",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            Discontinued = "Discontinued",
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
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            CategoryCategoryName = "CategoryCategoryName",
            CategoryDescription = "CategoryDescription",
            DetailList = "DetailList",
            MeasureMeasureName = "MeasureMeasureName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

