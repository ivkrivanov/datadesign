
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class WaresDialog extends Serenity.EntityDialog<WaresRow, any> {
        protected getFormKey() { return WaresForm.formKey; }
        protected getIdProperty() { return WaresRow.idProperty; }
        protected getLocalTextPrefix() { return WaresRow.localTextPrefix; }
        protected getNameProperty() { return WaresRow.nameProperty; }
        protected getService() { return WaresService.baseUrl; }
        protected getLanguages(): string[][] { return LanguageList.getValue(); }

        protected form = new WaresForm(this.idPrefix);

    }
}