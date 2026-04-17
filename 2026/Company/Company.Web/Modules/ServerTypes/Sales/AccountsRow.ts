import { fieldsProxy, getLookup, getLookupAsync } from "@serenity-is/corelib";

export interface AccountsRow {
    AccountId?: number;
    Account?: number;
    SubAccount?: number;
    AccountTypeId?: number;
    Description?: string;
    StartDate?: string;
    EndDate?: string;
    IsActive?: number;
    TenantId?: number;
    AccountTypeDescription?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class AccountsRow {
    static readonly idProperty = 'AccountId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Description';
    static readonly localTextPrefix = 'Sales.Accounts';
    static readonly lookupKey = 'Sales.Accounts';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AccountsRow>('Sales.Accounts') }
    static async getLookupAsync() { return getLookupAsync<AccountsRow>('Sales.Accounts') }

    static readonly deletePermission = 'Company:Currency:Delete';
    static readonly insertPermission = 'Company:Currency:Modify';
    static readonly readPermission = 'Company:Currency:View';
    static readonly updatePermission = 'Company:Currency:Modify';

    static readonly Fields = fieldsProxy<AccountsRow>();
}