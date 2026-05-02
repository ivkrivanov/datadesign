import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PhoneNumberTypeColumns, PhoneNumberTypeRow, PhoneNumberTypeService } from '../../ServerTypes/Company';
import { PhoneNumberTypeDialog } from './PhoneNumberTypeDialog';

@Decorators.registerClass('Company.Company.PhoneNumberTypeGrid')
export class PhoneNumberTypeGrid extends EntityGrid<PhoneNumberTypeRow, any> {
    protected getColumnsKey() { return PhoneNumberTypeColumns.columnsKey; }
    protected getDialogType() { return PhoneNumberTypeDialog; }
    protected getRowDefinition() { return PhoneNumberTypeRow; }
    protected getService() { return PhoneNumberTypeService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}