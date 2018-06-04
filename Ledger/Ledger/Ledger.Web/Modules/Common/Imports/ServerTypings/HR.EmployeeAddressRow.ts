namespace Ledger.HR {
    export interface EmployeeAddressRow {
        EmployeeAddressId?: number;
        EmployeeId?: number;
        AddressId?: number;
        AddressType?: string;
        AddressTypeId?: AddressTypeId;
        TenantId?: number;
        IsActive?: number;
        EmployeeFirstName?: string;
        EmployeeMiddleName?: string;
        EmployeeSurName?: string;
        FullName?: string;
        EmployeeGender?: number;
        EmployeeEgn?: string;
        EmployeeHireDate?: string;
        EmployeeLengthOfService?: string;
        EmployeePhoto?: string;
        EmployeeSalary?: number;
        Address?: string;
        AddressZipCode?: string;
        AddressCity?: string;
        AddressState?: string;
        AddressCountry?: string;
        StreetAddress?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeAddressRow {
        export const idProperty = 'EmployeeAddressId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'AddressType';
        export const localTextPrefix = 'HR.EmployeeAddress';
        export const lookupKey = 'HR.EmployeeAddress';

        export function getLookup(): Q.Lookup<EmployeeAddressRow> {
            return Q.getLookup<EmployeeAddressRow>('HR.EmployeeAddress');
        }

        export namespace Fields {
            export declare const EmployeeAddressId: string;
            export declare const EmployeeId: string;
            export declare const AddressId: string;
            export declare const AddressType: string;
            export declare const AddressTypeId: string;
            export declare const TenantId: string;
            export declare const IsActive: string;
            export declare const EmployeeFirstName: string;
            export declare const EmployeeMiddleName: string;
            export declare const EmployeeSurName: string;
            export declare const FullName: string;
            export declare const EmployeeGender: string;
            export declare const EmployeeEgn: string;
            export declare const EmployeeHireDate: string;
            export declare const EmployeeLengthOfService: string;
            export declare const EmployeePhoto: string;
            export declare const EmployeeSalary: string;
            export declare const Address: string;
            export declare const AddressZipCode: string;
            export declare const AddressCity: string;
            export declare const AddressState: string;
            export declare const AddressCountry: string;
            export declare const StreetAddress: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EmployeeAddressId', 'EmployeeId', 'AddressId', 'AddressType', 'AddressTypeId', 'TenantId', 'IsActive', 'EmployeeFirstName', 'EmployeeMiddleName', 'EmployeeSurName', 'FullName', 'EmployeeGender', 'EmployeeEgn', 'EmployeeHireDate', 'EmployeeLengthOfService', 'EmployeePhoto', 'EmployeeSalary', 'Address', 'AddressZipCode', 'AddressCity', 'AddressState', 'AddressCountry', 'StreetAddress', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

