namespace Ledger.HR {
    export interface EmployeeEmailRow {
        EmployeeEmailId?: number;
        EmployeeId?: number;
        EmailId?: number;
        EmailType?: string;
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
        EmailAddress?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeEmailRow {
        export const idProperty = 'EmployeeEmailId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'EmailType';
        export const localTextPrefix = 'HR.EmployeeEmail';

        export namespace Fields {
            export declare const EmployeeEmailId: string;
            export declare const EmployeeId: string;
            export declare const EmailId: string;
            export declare const EmailType: string;
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
            export declare const EmailAddress: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EmployeeEmailId', 'EmployeeId', 'EmailId', 'EmailType', 'TenantId', 'IsActive', 'EmployeeFirstName', 'EmployeeMiddleName', 'EmployeeSurName', 'FullName', 'EmployeeGender', 'EmployeeEgn', 'EmployeeHireDate', 'EmployeeLengthOfService', 'EmployeePhoto', 'EmployeeSalary', 'EmailAddress', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

