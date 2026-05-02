import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface AccountTypeRow {
    AccountTypeId?: number;
    Description?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class AccountTypeRow {
    static readonly idProperty = 'AccountTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Sales.AccountType';
    static readonly lookupKey = 'Sales.AccountType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AccountTypeRow>('Sales.AccountType') }
    static async getLookupAsync() { return getLookupAsync<AccountTypeRow>('Sales.AccountType') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<AccountTypeRow>();
}