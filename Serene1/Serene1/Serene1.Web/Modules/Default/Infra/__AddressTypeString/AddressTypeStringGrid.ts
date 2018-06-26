
namespace Serene1.Default.Infra {

    @Serenity.Decorators.registerClass()
    export class AddressTypeStringGrid extends Serenity.EntityGrid<AddressTypeStringRow, any> {
        protected getColumnsKey() { return 'Default.Infra.AddressTypeString'; }
        protected getDialogType() { return AddressTypeStringDialog; }
        protected getIdProperty() { return AddressTypeStringRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeStringRow.localTextPrefix; }
        protected getService() { return AddressTypeStringService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}