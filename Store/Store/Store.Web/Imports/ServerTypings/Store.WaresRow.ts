namespace Store.Store {
    export interface WaresRow {
        WaresID?: number;
        WaresCode?: string;
        WaresBarcode?: string;
        WaresLabel?: string;
        WaresName?: string;
        WaresImage?: string;
        CounterpartyID?: string;
        SupplierID?: number;
        CategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        Discontinued?: boolean;
        AccountID?: number;
        IsActive?: number;
        TenantId?: number;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        Type?: number;
        CategoryCategoryName?: string;
        CategoryDescription?: string;
        MeasureName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WaresRow {
        export const idProperty = 'WaresID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'WaresName';
        export const localTextPrefix = 'Store.Wares';
        export const lookupKey = 'Store.Wares';

        export function getLookup(): Q.Lookup<WaresRow> {
            return Q.getLookup<WaresRow>('Store.Wares');
        }

        export declare const enum Fields {
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresBarcode = "WaresBarcode",
            WaresLabel = "WaresLabel",
            WaresName = "WaresName",
            WaresImage = "WaresImage",
            CounterpartyID = "CounterpartyID",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            Discontinued = "Discontinued",
            AccountID = "AccountID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            Type = "Type",
            CategoryCategoryName = "CategoryCategoryName",
            CategoryDescription = "CategoryDescription",
            MeasureName = "MeasureName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

