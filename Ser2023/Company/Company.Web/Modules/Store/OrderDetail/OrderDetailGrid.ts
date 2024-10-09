import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { OrderDetailColumns, OrderDetailRow, OrderDetailService } from '../../ServerTypes/Store';
import { OrderDetailDialog } from './OrderDetailDialog';

@Decorators.registerClass('Company.Store.OrderDetailGrid')
export class OrderDetailGrid extends EntityGrid<OrderDetailRow, any> {
    protected getColumnsKey() { return OrderDetailColumns.columnsKey; }
    protected getDialogType() { return OrderDetailDialog; }
    protected getRowDefinition() { return OrderDetailRow; }
    protected getService() { return OrderDetailService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}