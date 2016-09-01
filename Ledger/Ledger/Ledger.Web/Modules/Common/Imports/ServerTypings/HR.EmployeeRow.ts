namespace Ledger.HR {
    export interface EmployeeRow {
        EmployeeId?: number;
        FirstName?: string;
        MiddleName?: string;
        SurName?: string;
        FullName?: string;
        Gender?: Gender;
        Egn?: string;
        HireDate?: string;
        LengthOfService?: string;
        Photo?: string;
        Salary?: number;
        IsActive?: number;
        TenantId?: number;
        AddressList?: EmployeeAddressRow[];
        EmailList?: EmployeeEmailRow[];
        PhoneList?: EmployeePhoneRow[];
        NotesList?: Infra.NoteRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace EmployeeRow {
        export const idProperty = 'EmployeeId';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'HR.Employee';
        export const lookupKey = 'HR.Employee';

        export function getLookup(): Q.Lookup<EmployeeRow> {
            return Q.getLookup<EmployeeRow>('HR.Employee');
        }

        export namespace Fields {
            export declare const EmployeeId: string;
            export declare const FirstName: string;
            export declare const MiddleName: string;
            export declare const SurName: string;
            export declare const FullName: string;
            export declare const Gender: string;
            export declare const Egn: string;
            export declare const HireDate: string;
            export declare const LengthOfService: string;
            export declare const Photo: string;
            export declare const Salary: string;
            export declare const IsActive: string;
            export declare const TenantId: string;
            export declare const AddressList: string;
            export declare const EmailList: string;
            export declare const PhoneList: string;
            export declare const NotesList: string;
            export declare const InsertUserId: string;
            export declare const InsertDate: string;
            export declare const UpdateUserId: string;
            export declare const UpdateDate: string;
        }

        ['EmployeeId', 'FirstName', 'MiddleName', 'SurName', 'FullName', 'Gender', 'Egn', 'HireDate', 'LengthOfService', 'Photo', 'Salary', 'IsActive', 'TenantId', 'AddressList', 'EmailList', 'PhoneList', 'NotesList', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(x => (<any>Fields)[x] = x);
    }
}

