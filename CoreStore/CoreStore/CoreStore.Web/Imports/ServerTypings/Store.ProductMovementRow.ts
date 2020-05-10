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
        IsActive?: number;
        TenantId?: number;
        ShopId1?: number;
        ShopShopName?: string;
        ShopContactName?: string;
        ShopContactTitle?: string;
        ShopAddress?: string;
        ShopCity?: string;
        ShopRegion?: string;
        ShopPostalCode?: string;
        ShopCountry?: string;
        ShopPhone?: string;
        ShopIsActive?: number;
        ShopTenantId?: number;
        CounterpartyId1?: number;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyAddress?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyPostalCode?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        CounterpartyIsActive?: number;
        CounterpartyTenantId?: number;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        EmployeeIsActive?: number;
        EmployeeTenantId?: number;
        ShipperCompanyName?: string;
        ShipperPhone?: string;
        ShipperIsActive?: number;
        ShipperTenantId?: number;
        OperationTypeOpCode?: number;
        OperationTypeOperation?: string;
        OperationTypeIsActive?: number;
        OperationTypeTenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace ProductMovementRow {
        export const idProperty = 'ProductMoveId';
        export const nameProperty = 'ShopId';
        export const localTextPrefix = 'Store.ProductMovement';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

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
            IsActive = "IsActive",
            TenantId = "TenantId",
            ShopId1 = "ShopId1",
            ShopShopName = "ShopShopName",
            ShopContactName = "ShopContactName",
            ShopContactTitle = "ShopContactTitle",
            ShopAddress = "ShopAddress",
            ShopCity = "ShopCity",
            ShopRegion = "ShopRegion",
            ShopPostalCode = "ShopPostalCode",
            ShopCountry = "ShopCountry",
            ShopPhone = "ShopPhone",
            ShopIsActive = "ShopIsActive",
            ShopTenantId = "ShopTenantId",
            CounterpartyId1 = "CounterpartyId1",
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyAddress = "CounterpartyAddress",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyPostalCode = "CounterpartyPostalCode",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            CounterpartyIsActive = "CounterpartyIsActive",
            CounterpartyTenantId = "CounterpartyTenantId",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeTenantId = "EmployeeTenantId",
            ShipperCompanyName = "ShipperCompanyName",
            ShipperPhone = "ShipperPhone",
            ShipperIsActive = "ShipperIsActive",
            ShipperTenantId = "ShipperTenantId",
            OperationTypeOpCode = "OperationTypeOpCode",
            OperationTypeOperation = "OperationTypeOperation",
            OperationTypeIsActive = "OperationTypeIsActive",
            OperationTypeTenantId = "OperationTypeTenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
