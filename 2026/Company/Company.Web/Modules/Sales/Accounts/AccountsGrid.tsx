import { EntityGrid } from '@serenity-is/corelib';
import { AccountsColumns, AccountsRow, AccountsService } from '../../ServerTypes/Sales';
import { AccountsDialog } from './AccountsDialog';

export class AccountsGrid extends EntityGrid<AccountsRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return AccountsColumns.columnsKey; }
    protected override getDialogType() { return AccountsDialog; }
    protected override getRowDefinition() { return AccountsRow; }
    protected override getService() { return AccountsService.baseUrl; }
}