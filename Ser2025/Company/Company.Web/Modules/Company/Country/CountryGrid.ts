import { CountryColumns, CountryRow, CountryService } from '@/ServerTypes/Company';
import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CountryDialog } from './CountryDialog';

@Decorators.registerClass('Company.Company.CountryGrid')
export class CountryGrid extends EntityGrid<CountryRow, any> {
    protected getColumnsKey() { return CountryColumns.columnsKey; }
    protected getDialogType() { return CountryDialog; }
    protected getRowDefinition() { return CountryRow; }
    protected getService() { return CountryService.baseUrl; }

    constructor(props: any) {
        super(props);
    }
}