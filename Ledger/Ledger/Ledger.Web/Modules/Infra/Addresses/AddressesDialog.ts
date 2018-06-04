namespace Ledger.Infra {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class AddressesDialog extends Serenity.EntityDialog<AddressesRow, any> {

        protected getFormKey() { return AddressesForm.formKey; }
        protected getIdProperty() { return AddressesRow.idProperty; }
        protected getLocalTextPrefix() { return AddressesRow.localTextPrefix; }
        protected getNameProperty() { return AddressesRow.nameProperty; }
        protected getService() { return AddressesService.baseUrl; }

        protected form = new AddressesForm(this.idPrefix);

        protected getLanguages(): string[][] {
            return LanguageList.getValue();
        }
    }
}