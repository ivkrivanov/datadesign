import { Decorators, EntityGrid } from '@serenity-is/corelib';
import { ProductDetailsColumns, ProductDetailsRow, ProductDetailsService } from '../../ServerTypes/Store';
import { ProductDetailsDialog } from './ProductDetailsDialog';

@Decorators.registerClass('Store.Store.ProductDetailsGrid')
export class ProductDetailsGrid extends EntityGrid<ProductDetailsRow, any> {
    protected getColumnsKey() { return ProductDetailsColumns.columnsKey; }
    protected getDialogType() { return ProductDetailsDialog; }
    protected getIdProperty() { return ProductDetailsRow.idProperty; }
    protected getInsertPermission() { return ProductDetailsRow.insertPermission; }
    protected getLocalTextPrefix() { return ProductDetailsRow.localTextPrefix; }
    protected getService() { return ProductDetailsService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }
}