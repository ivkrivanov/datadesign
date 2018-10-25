
namespace Serene1.Default {

    @Serenity.Decorators.registerClass()
    export class AddressTypeGrid extends Serenity.EntityGrid<AddressTypeRow, any> {
        protected getColumnsKey() { return "Default.Infra.AddressType"; }
        protected getDialogType() { return AddressTypeDialog; }
        protected getIdProperty() { return AddressTypeRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeRow.localTextPrefix; }
        protected getService() { return AddressTypeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}