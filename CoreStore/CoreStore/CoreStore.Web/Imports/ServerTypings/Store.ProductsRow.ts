namespace CoreStore.Store {
    export interface ProductsRow {
        ProductId?: number;
        ProductCode?: string;
        ProductBarcode?: string;
        ProductLabel?: string;
        ProductName?: string;
        ProductImage?: string;
        CounterpartyId?: string;
        CategoryId?: number;
        MeasureId?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        Discontinued?: boolean;
        IsActive?: number;
        TenantId?: number;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        CategoryCategoryName?: string;
        CategoryDescription?: string;
        DetailList?: ProductDetailsRow[];
        MeasureMeasureName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Store.Products';
        export const lookupKey = 'Store.Product';

        export function getLookup(): Q.Lookup<ProductsRow> {
            return Q.getLookup<ProductsRow>('Store.Product');
        }
        export const deletePermission = 'Store:Product:Delete';
        export const insertPermission = 'Store:Product:Modify';
        export const readPermission = 'Store:Product:View';
        export const updatePermission = 'Store:Product:Modify';

        export declare const enum Fields {
            ProductId = "ProductId",
            ProductCode = "ProductCode",
            ProductBarcode = "ProductBarcode",
            ProductLabel = "ProductLabel",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            CounterpartyId = "CounterpartyId",
            CategoryId = "CategoryId",
            MeasureId = "MeasureId",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            Discontinued = "Discontinued",
            IsActive = "IsActive",
            TenantId = "TenantId",
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
