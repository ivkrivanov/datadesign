
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class ProductMovementGrid extends Serenity.EntityGrid<ProductMovementRow, any> {
        protected getColumnsKey() { return 'Store.ProductMovement'; }
        protected getDialogType() { return ProductMovementDialog; }
        protected getIdProperty() { return ProductMovementRow.idProperty; }
        protected getInsertPermission() { return ProductMovementRow.insertPermission; }
        protected getLocalTextPrefix() { return ProductMovementRow.localTextPrefix; }
        protected getService() { return ProductMovementService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}