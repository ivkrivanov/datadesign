import { EmailAddressColumns, EmailAddressRow, EmailAddressService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { EmailAddressDialog } from './EmailAddressDialog';

@Decorators.registerClass('Company.Company.EmailAddressGrid')
export class EmailAddressGrid extends EntityGrid<EmailAddressRow, any> {
    protected getColumnsKey() { return EmailAddressColumns.columnsKey; }
    protected getDialogType() { return EmailAddressDialog; }
    protected getRowDefinition() { return EmailAddressRow; }
    protected getService() { return EmailAddressService.baseUrl; }

    constructor(props: any) {
        super(props);
    }
}