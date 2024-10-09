import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { MeasuresColumns, MeasuresRow, MeasuresService } from '../../ServerTypes/Store';
import { MeasuresDialog } from './MeasuresDialog';

@Decorators.registerClass('Company.Store.MeasuresGrid')
export class MeasuresGrid extends EntityGrid<MeasuresRow, any> {
    protected getColumnsKey() { return MeasuresColumns.columnsKey; }
    protected getDialogType() { return MeasuresDialog; }
    protected getIdProperty() { return MeasuresRow.idProperty; }
    protected getInsertPermission() { return MeasuresRow.insertPermission; }
    protected getLocalTextPrefix() { return MeasuresRow.localTextPrefix; }
    protected getService() { return MeasuresService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    protected getDefaultSortBy() {
        return [MeasuresRow.Fields.MeasureId];
    }
}