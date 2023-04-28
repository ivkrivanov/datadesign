import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonColumns, PersonRow, PersonService } from '../../ServerTypes/Company';
import { PersonDialog } from './PersonDialog';

@Decorators.registerClass('Company.Company.PersonGrid')
export class PersonGrid extends EntityGrid<PersonRow, any> {
    protected getColumnsKey() { return PersonColumns.columnsKey; }
    protected getDialogType() { return PersonDialog; }
    protected getRowDefinition() { return PersonRow; }
    protected getService() { return PersonService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}