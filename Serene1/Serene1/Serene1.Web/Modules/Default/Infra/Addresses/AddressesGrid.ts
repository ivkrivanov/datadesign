
namespace Serene1.Default.Infra {

    @Serenity.Decorators.registerClass()
    export class AddressesGrid extends Serenity.EntityGrid<AddressesRow, any> {
        protected getColumnsKey() { return 'Default.Infra.Addresses'; }
        protected getDialogType() { return AddressesDialog; }
        protected getIdProperty() { return AddressesRow.idProperty; }
        protected getLocalTextPrefix() { return AddressesRow.localTextPrefix; }
        protected getService() { return AddressesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}