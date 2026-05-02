import { PersonViewColumns, PersonViewRow, PersonViewService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonViewDialog } from './PersonViewDialog';

@Decorators.registerClass('Company.Company.PersonViewGrid')
export class PersonViewGrid extends EntityGrid<PersonViewRow, any> {
    protected getColumnsKey() { return PersonViewColumns.columnsKey; }
    protected getDialogType() { return PersonViewDialog; }
    protected getRowDefinition() { return PersonViewRow; }
    protected getService() { return PersonViewService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}