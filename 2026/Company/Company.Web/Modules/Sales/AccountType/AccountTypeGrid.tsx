import { EntityGrid } from '@serenity-is/corelib';
import { AccountTypeColumns, AccountTypeRow, AccountTypeService } from '../../ServerTypes/Sales';
import { AccountTypeDialog } from './AccountTypeDialog';

export class AccountTypeGrid extends EntityGrid<AccountTypeRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return AccountTypeColumns.columnsKey; }
    protected override getDialogType() { return AccountTypeDialog; }
    protected override getRowDefinition() { return AccountTypeRow; }
    protected override getService() { return AccountTypeService.baseUrl; }
}