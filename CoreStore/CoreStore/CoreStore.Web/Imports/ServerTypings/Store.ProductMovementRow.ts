namespace CoreStore.Store {
    export interface ProductMovementRow {
        ProductMoveId?: number;
        ShopId?: string;
        CounterpartyId?: string;
        EmployeeId?: number;
        ShipperId?: number;
        OperationTypeId?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        DocumentTypeId?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        IsActive?: number;
        TenantId?: number;
        ShopShopName?: string;
        ShopContactName?: string;
        ShopContactTitle?: string;
        ShopAddress?: string;
        ShopCity?: string;
        ShopRegion?: string;
        ShopPostalCode?: string;
        ShopCountry?: string;
        ShopPhone?: string;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipperCompanyName?: string;
        ShipperPhone?: string;
        ShippingState?: ShippingState;
        OperationTypeOpCode?: ProductMovementOperations;
        OperationTypeOperation?: string;
        Total?: number;
        DetailList?: ProductMovementDetailsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductMovementRow {
        export const idProperty = 'ProductMoveId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'ShopId';
        export const localTextPrefix = 'Store.ProductMovement';
        export const lookupKey = 'Store.ProductMovement';

        export function getLookup(): Q.Lookup<ProductMovementRow> {
            return Q.getLookup<ProductMovementRow>('Store.ProductMovement');
        }
        export const deletePermission = 'Store:Product:Delete';
        export const insertPermission = 'Store:Product:Modify';
        export const readPermission = 'Store:Product:View';
        export const updatePermission = 'Store:Product:Modify';

        export declare const enum Fields {
            ProductMoveId = "ProductMoveId",
            ShopId = "ShopId",
            CounterpartyId = "CounterpartyId",
            EmployeeId = "EmployeeId",
            ShipperId = "ShipperId",
            OperationTypeId = "OperationTypeId",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            DocumentTypeId = "DocumentTypeId",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ShopShopName = "ShopShopName",
            ShopContactName = "ShopContactName",
            ShopContactTitle = "ShopContactTitle",
            ShopAddress = "ShopAddress",
            ShopCity = "ShopCity",
            ShopRegion = "ShopRegion",
            ShopPostalCode = "ShopPostalCode",
            ShopCountry = "ShopCountry",
            ShopPhone = "ShopPhone",
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            EmployeeFullName = "EmployeeFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipperCompanyName = "ShipperCompanyName",
            ShipperPhone = "ShipperPhone",
            ShippingState = "ShippingState",
            OperationTypeOpCode = "OperationTypeOpCode",
            OperationTypeOperation = "OperationTypeOperation",
            Total = "Total",
            DetailList = "DetailList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
