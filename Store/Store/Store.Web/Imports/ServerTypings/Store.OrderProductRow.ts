namespace Store.Store {
    export interface OrderProductRow {
        OrderProductId?: number;
        OperationTypeId?: number;
        CounterpartyId?: string;
        EmployeeId?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        ShipName?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        TenantId?: number;
        OperationTypeOpCode?: number;
        OperationTypeOperation?: string;
        OperationTypeInsertDate?: string;
        OperationTypeInsertUserId?: number;
        OperationTypeUpdateDate?: string;
        OperationTypeUpdateUserId?: number;
        OperationTypeIsActive?: number;
        OperationTypeTenantId?: number;
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
        CounterpartyInsertDate?: string;
        CounterpartyInsertUserId?: number;
        CounterpartyUpdateDate?: string;
        CounterpartyUpdateUserId?: number;
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
        EmployeeInsertDate?: string;
        EmployeeInsertUserId?: number;
        EmployeeUpdateDate?: string;
        EmployeeUpdateUserId?: number;
        EmployeeIsActive?: number;
        EmployeeTenantId?: number;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShipViaInsertDate?: string;
        ShipViaInsertUserId?: number;
        ShipViaUpdateDate?: string;
        ShipViaUpdateUserId?: number;
        ShipViaIsActive?: number;
        ShipViaTenantId?: number;
    }

    export namespace OrderProductRow {
        export const idProperty = 'OrderProductId';
        export const nameProperty = 'CounterpartyId';
        export const localTextPrefix = 'Store.OrderProduct';

        export declare const enum Fields {
            OrderProductId = "OrderProductId",
            OperationTypeId = "OperationTypeId",
            CounterpartyId = "CounterpartyId",
            EmployeeId = "EmployeeId",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            ShipName = "ShipName",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            InsertDate = "InsertDate",
            InsertUserId = "InsertUserId",
            UpdateDate = "UpdateDate",
            UpdateUserId = "UpdateUserId",
            IsActive = "IsActive",
            TenantId = "TenantId",
            OperationTypeOpCode = "OperationTypeOpCode",
            OperationTypeOperation = "OperationTypeOperation",
            OperationTypeInsertDate = "OperationTypeInsertDate",
            OperationTypeInsertUserId = "OperationTypeInsertUserId",
            OperationTypeUpdateDate = "OperationTypeUpdateDate",
            OperationTypeUpdateUserId = "OperationTypeUpdateUserId",
            OperationTypeIsActive = "OperationTypeIsActive",
            OperationTypeTenantId = "OperationTypeTenantId",
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
            CounterpartyInsertDate = "CounterpartyInsertDate",
            CounterpartyInsertUserId = "CounterpartyInsertUserId",
            CounterpartyUpdateDate = "CounterpartyUpdateDate",
            CounterpartyUpdateUserId = "CounterpartyUpdateUserId",
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
            EmployeeInsertDate = "EmployeeInsertDate",
            EmployeeInsertUserId = "EmployeeInsertUserId",
            EmployeeUpdateDate = "EmployeeUpdateDate",
            EmployeeUpdateUserId = "EmployeeUpdateUserId",
            EmployeeIsActive = "EmployeeIsActive",
            EmployeeTenantId = "EmployeeTenantId",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShipViaInsertDate = "ShipViaInsertDate",
            ShipViaInsertUserId = "ShipViaInsertUserId",
            ShipViaUpdateDate = "ShipViaUpdateDate",
            ShipViaUpdateUserId = "ShipViaUpdateUserId",
            ShipViaIsActive = "ShipViaIsActive",
            ShipViaTenantId = "ShipViaTenantId"
        }
    }
}

