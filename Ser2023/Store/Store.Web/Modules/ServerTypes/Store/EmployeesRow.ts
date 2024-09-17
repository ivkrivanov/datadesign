import { Gender } from "./Gender";
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface EmployeesRow {
    EmployeeId?: number;
    LastName?: string;
    FirstName?: string;
    FullName?: string;
    Title?: string;
    TitleOfCourtesy?: string;
    BirthDate?: string;
    HireDate?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    HomePhone?: string;
    Extension?: string;
    Photo?: number[];
    Notes?: string;
    ReportsTo?: number;
    PhotoPath?: string;
    IsActive?: number;
    TenantId?: number;
    ReportsToFullName?: string;
    ReportsToLastName?: string;
    ReportsToFirstName?: string;
    ReportsToTitle?: string;
    ReportsToTitleOfCourtesy?: string;
    ReportsToBirthDate?: string;
    ReportsToHireDate?: string;
    ReportsToAddress?: string;
    ReportsToCity?: string;
    ReportsToRegion?: string;
    ReportsToPostalCode?: string;
    ReportsToCountry?: string;
    ReportsToHomePhone?: string;
    ReportsToExtension?: string;
    ReportsToPhoto?: number[];
    ReportsToNotes?: string;
    ReportsToReportsTo?: number;
    ReportsToPhotoPath?: string;
    Gender?: Gender;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class EmployeesRow {
    static readonly idProperty = 'EmployeeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'LastName';
    static readonly localTextPrefix = 'Store.Employees';
    static readonly lookupKey = 'Store.Employees';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<EmployeesRow>('Store.Employees') }
    static async getLookupAsync() { return getLookupAsync<EmployeesRow>('Store.Employees') }

    static readonly deletePermission = 'Store:General';
    static readonly insertPermission = 'Store:General';
    static readonly readPermission = 'Store:General';
    static readonly updatePermission = 'Store:General';

    static readonly Fields = fieldsProxy<EmployeesRow>();
}
