
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ShopsGrid extends Serenity.EntityGrid<ShopsRow, any> {
        protected getColumnsKey() { return 'Store.Shops'; }
        protected getDialogType() { return ShopsDialog; }
        protected getIdProperty() { return ShopsRow.idProperty; }
        protected getInsertPermission() { return ShopsRow.insertPermission; }
        protected getLocalTextPrefix() { return ShopsRow.localTextPrefix; }
        protected getService() { return ShopsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}