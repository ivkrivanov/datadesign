
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementDetailsGrid extends Serenity.EntityGrid<ProductMovementDetailsRow, any> {
        protected getColumnsKey() { return 'Store.ProductMovementDetails'; }
        protected getDialogType() { return ProductMovementDetailsDialog; }
        protected getIdProperty() { return ProductMovementDetailsRow.idProperty; }
        protected getInsertPermission() { return ProductMovementDetailsRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductMovementDetailsRow.localTextPrefix; }
        protected getService() { return ProductMovementDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}