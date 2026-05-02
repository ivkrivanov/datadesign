import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CountryColumns, CountryRow, CountryService } from '@/ServerTypes/Company';
import { CountryDialog } from './CountryDialog';

@Decorators.registerClass('Company.Company.CountryGrid')
export class CountryGrid extends EntityGrid<CountryRow, any> {
    protected getColumnsKey() { return CountryColumns.columnsKey; }
    protected getDialogType() { return CountryDialog; }
    protected getIdProperty() { return CountryRow.idProperty; }
    protected getInsertPermission() { return CountryRow.insertPermission; }
    protected getLocalTextPrefix() { return CountryRow.localTextPrefix; }
    protected getRowDefinition() { return CountryRow; }
    protected getService() { return CountryService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}