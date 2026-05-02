import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ContactTypeColumns, ContactTypeRow, ContactTypeService } from '../../ServerTypes/Company';
import { ContactTypeDialog } from './ContactTypeDialog';

@Decorators.registerClass('Company.Company.ContactTypeGrid')
export class ContactTypeGrid extends EntityGrid<ContactTypeRow, any> {
    protected getColumnsKey() { return ContactTypeColumns.columnsKey; }
    protected getDialogType() { return ContactTypeDialog; }
    protected getRowDefinition() { return ContactTypeRow; }
    protected getService() { return ContactTypeService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}