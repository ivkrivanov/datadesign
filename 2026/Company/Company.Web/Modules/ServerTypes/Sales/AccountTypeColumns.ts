import { ColumnsBase, fieldsProxy } from "@serenity-is/corelib";
import { Column } from "@serenity-is/sleekgrid";
import { AccountTypeRow } from "./AccountTypeRow";

export interface AccountTypeColumns {
    AccountTypeId: Column<AccountTypeRow>;
    Description: Column<AccountTypeRow>;
}

export class AccountTypeColumns extends ColumnsBase<AccountTypeRow> {
    static readonly columnsKey = 'Sales.AccountType';
    static readonly Fields = fieldsProxy<AccountTypeColumns>();
}