import { EntityGrid } from '@serenity-is/corelib';
import { MeasuresColumns, MeasuresRow, MeasuresService } from '../../ServerTypes/Sales';
import { MeasuresDialog } from './MeasuresDialog';

export class MeasuresGrid extends EntityGrid<MeasuresRow> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getColumnsKey() { return MeasuresColumns.columnsKey; }
    protected override getDialogType() { return MeasuresDialog; }
    protected override getRowDefinition() { return MeasuresRow; }
    protected override getService() { return MeasuresService.baseUrl; }
}