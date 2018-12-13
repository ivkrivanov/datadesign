
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey() { return 'Store.Shipper'; }
        protected getDialogType() { return ShipperDialog; }
        protected getIdProperty() { return ShipperRow.idProperty; }
        protected getLocalTextPrefix() { return ShipperRow.localTextPrefix; }
        protected getService() { return ShipperService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}