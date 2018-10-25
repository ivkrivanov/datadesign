
namespace Serene1.Default.Infra.Default {

    @Serenity.Decorators.registerClass()
    export class AddressTypeLangGrid extends Serenity.EntityGrid<AddressTypeLangRow, any> {
        protected getColumnsKey() { return 'Default.AddressTypeLang'; }
        protected getDialogType() { return AddressTypeLangDialog; }
        protected getIdProperty() { return AddressTypeLangRow.idProperty; }
        protected getLocalTextPrefix() { return AddressTypeLangRow.localTextPrefix; }
        protected getService() { return AddressTypeLangService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}