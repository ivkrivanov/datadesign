namespace Serene1.Default.Employees {
    export interface EmployeesAddressesRow {
        EmployeeAddressId?: number;
        EmployeeId?: number;
        AddressId?: number;
        AddressTypeId?: number;
        TenantId?: number;
        IsActive?: number;
        Address?: string;
        AddressZipCode?: string;
        AddressCity?: string;
        AddressState?: string;
        AddressCountry?: string;
        AddressIsActive?: number;
        AddressTenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeesAddressesRow {
        export const idProperty = 'EmployeeAddressId';
        export const localTextPrefix = 'Default.EmployeesAddresses';

        export declare const enum Fields {
            EmployeeAddressId = "EmployeeAddressId",
            EmployeeId = "EmployeeId",
            AddressId = "AddressId",
            AddressTypeId = "AddressTypeId",
            TenantId = "TenantId",
            IsActive = "IsActive",
            Address = "Address",
            AddressZipCode = "AddressZipCode",
            AddressCity = "AddressCity",
            AddressState = "AddressState",
            AddressCountry = "AddressCountry",
            AddressIsActive = "AddressIsActive",
            AddressTenantId = "AddressTenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

