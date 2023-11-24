namespace Store.Store {
    export interface WaresRow {
        WaresId?: number;
        WaresCode?: string;
        WaresBarcode?: string;
        WaresLabel?: string;
        WaresName?: string;
        WaresImage?: string;
        CounterpartyId?: string;
        CategoryId?: number;
        MeasureId?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        Discontinued?: boolean;
        AccountId?: number;
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
        export const idProperty = 'WaresId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'WaresName';
        export const localTextPrefix = 'Store.Wares';
        export const lookupKey = 'Store.Wares';

        export function getLookup(): Q.Lookup<WaresRow> {
            return Q.getLookup<WaresRow>('Store.Wares');
        }
        export const deletePermission = 'Store:Wares:Delete';
        export const insertPermission = 'Store:Wares:Modify';
        export const readPermission = 'Store:Wares:View';
        export const updatePermission = 'Store:Wares:Modify';

        export declare const enum Fields {
            WaresId = "WaresId",
            WaresCode = "WaresCode",
            WaresBarcode = "WaresBarcode",
            WaresLabel = "WaresLabel",
            WaresName = "WaresName",
            WaresImage = "WaresImage",
            CounterpartyId = "CounterpartyId",
            CategoryId = "CategoryId",
            MeasureId = "MeasureId",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            Discontinued = "Discontinued",
            AccountId = "AccountId",
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
