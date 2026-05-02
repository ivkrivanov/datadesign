import { PersonColumns, PersonRow, PersonService } from '../../ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { PersonDialog } from './PersonDialog';

@Decorators.registerClass('Company.Company.PersonGrid')
export class PersonGrid extends EntityGrid<PersonRow, any> {
    protected getColumnsKey() { return PersonColumns.columnsKey; }
    protected getDialogType() { return PersonDialog; }
    protected getRowDefinition() { return PersonRow; }
    protected getIdProperty() { return PersonRow.idProperty; }
    protected getLocalTextPrefix() { return PersonRow.localTextPrefix; }
    protected getService() { return PersonService.baseUrl; }

    protected afterInit() {
        super.afterInit();
    }

    protected getDefaultSortBy() {
        return [PersonRow.Fields.LastName];
    }
}