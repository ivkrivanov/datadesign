import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { CounterpartiesColumns, CounterpartiesRow, CounterpartiesService } from '../../ServerTypes/Store';
import { CounterpartiesDialog } from './CounterpartiesDialog';

@Decorators.registerClass('Company.Store.CounterpartiesGrid')
export class CounterpartiesGrid extends EntityGrid<CounterpartiesRow, any> {
    protected getColumnsKey() { return CounterpartiesColumns.columnsKey; }
    protected getDialogType() { return CounterpartiesDialog; }
    protected getIdProperty() { return CounterpartiesRow.idProperty; }
    protected getInsertPermission() { return CounterpartiesRow.insertPermission; }
    protected getLocalTextPrefix() { return CounterpartiesRow.localTextPrefix; }
    protected getService() { return CounterpartiesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    //getButtons() {
    //    var buttons = super.getButtons();

    //    buttons.push(Common.ExcelExportHelper.createToolButton({
    //        grid: this,
    //        onViewSubmit: () => this.onViewSubmit(),
    //        service: 'Store/Counterparties/ListExcel',
    //        separator: true
    //    }));

    //    buttons.push(Common.PdfExportHelper.createToolButton({
    //        grid: this,
    //        onViewSubmit: () => this.onViewSubmit()
    //    }));

    //    return buttons
    //}
}