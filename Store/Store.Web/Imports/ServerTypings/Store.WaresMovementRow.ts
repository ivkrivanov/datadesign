﻿namespace Store.Store {
    export interface WaresMovementRow {
        WaresMoveID?: number;
        ShopID?: string;
        CounterpartyID?: string;
        EmployeeID?: number;
        ShipperID?: number;
        OperationTypeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        DocumentTypeID?: number;
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
        OperationTypeOpCode?: WaresMovementOperations;
        OperationTypeOperation?: string;
        Total?: number;
        DetailList?: WaresMovementDetailsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace WaresMovementRow {
        export const idProperty = 'WaresMoveID';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'CounterpartyID';
        export const localTextPrefix = 'Store.WaresMovement';
        export const lookupKey = 'Store.WaresMovement';

        export function getLookup(): Q.Lookup<WaresMovementRow> {
            return Q.getLookup<WaresMovementRow>('Store.WaresMovement');
        }

        export declare const enum Fields {
            WaresMoveID = "WaresMoveID",
            ShopID = "ShopID",
            CounterpartyID = "CounterpartyID",
            EmployeeID = "EmployeeID",
            ShipperID = "ShipperID",
            OperationTypeID = "OperationTypeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            DocumentTypeID = "DocumentTypeID",
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

