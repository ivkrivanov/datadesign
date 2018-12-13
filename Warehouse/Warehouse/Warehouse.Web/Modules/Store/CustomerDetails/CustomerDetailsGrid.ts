
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class CustomerDetailsGrid extends Serenity.EntityGrid<CustomerDetailsRow, any> {
        protected getColumnsKey() { return 'Store.CustomerDetails'; }
        protected getDialogType() { return CustomerDetailsDialog; }
        protected getIdProperty() { return CustomerDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerDetailsRow.localTextPrefix; }
        protected getService() { return CustomerDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}