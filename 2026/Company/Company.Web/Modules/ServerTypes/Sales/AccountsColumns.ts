import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { AccountsRow } from "./AccountsRow";

export interface AccountsColumns {
    AccountId: Column<AccountsRow>;
    Account: Column<AccountsRow>;
    SubAccount: Column<AccountsRow>;
    AccountTypeDescription: Column<AccountsRow>;
    Description: Column<AccountsRow>;
    StartDate: Column<AccountsRow>;
    EndDate: Column<AccountsRow>;
}

export class AccountsColumns extends ColumnsBase<AccountsRow> {
    static readonly columnsKey = 'Sales.Accounts';
    static readonly Fields = fieldsProxy<AccountsColumns>();
}