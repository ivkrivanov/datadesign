
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class WaresCategoriesDialog extends Serenity.EntityDialog<WaresCategoriesRow, any> {
        protected getFormKey() { return WaresCategoriesForm.formKey; }
        protected getIdProperty() { return WaresCategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return WaresCategoriesRow.localTextPrefix; }
        protected getNameProperty() { return WaresCategoriesRow.nameProperty; }
        protected getService() { return WaresCategoriesService.baseUrl; }

        protected form = new WaresCategoriesForm(this.idPrefix);

        protected getLanguages(): string[][] {
            return LanguageList.getValue();
        }
    }
}