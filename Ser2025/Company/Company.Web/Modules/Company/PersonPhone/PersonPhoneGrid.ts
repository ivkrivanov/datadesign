import { PersonPhoneColumns, PersonPhoneRow, PersonPhoneService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonPhoneDialog } from './PersonPhoneDialog';

@Decorators.registerClass('Company.Company.PersonPhoneGrid')
export class PersonPhoneGrid extends EntityGrid<PersonPhoneRow, any> {
    protected getColumnsKey() { return PersonPhoneColumns.columnsKey; }
    protected getDialogType() { return PersonPhoneDialog; }
    protected getRowDefinition() { return PersonPhoneRow; }
    protected getService() { return PersonPhoneService.baseUrl; }

    constructor(props: any) {
        super(props);
    }
}