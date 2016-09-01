namespace Ledger.HR {
    export interface EmployeePhoneRow {
        EmployeePhoneId?: number;
        EmployeeId?: number;
        PhoneId?: number;
        PhoneType?: string;
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
        PhonePhoneNumber?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeePhoneRow {
        export const idProperty = 'EmployeePhoneId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'PhoneType';
        export const localTextPrefix = 'HR.EmployeePhone';

        export namespace Fields {
            export declare const EmployeePhoneId: string;
            export declare const EmployeeId: string;
            export declare const PhoneId: string;
            export declare const PhoneType: string;
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
            export declare const PhonePhoneNumber: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EmployeePhoneId', 'EmployeeId', 'PhoneId', 'PhoneType', 'TenantId', 'IsActive', 'EmployeeFirstName', 'EmployeeMiddleName', 'EmployeeSurName', 'FullName', 'EmployeeGender', 'EmployeeEgn', 'EmployeeHireDate', 'EmployeeLengthOfService', 'EmployeePhoto', 'EmployeeSalary', 'PhonePhoneNumber', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

