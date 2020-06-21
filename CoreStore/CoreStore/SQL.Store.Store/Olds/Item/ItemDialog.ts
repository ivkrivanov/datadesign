
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ItemDialog extends Serenity.EntityDialog<ItemRow, any> {
        protected getFormKey() { return ItemForm.formKey; }
        protected getIdProperty() { return ItemRow.idProperty; }
        protected getLocalTextPrefix() { return ItemRow.localTextPrefix; }
        protected getNameProperty() { return ItemRow.nameProperty; }
        protected getService() { return ItemService.baseUrl; }
        protected getLanguages(): string[][] { return LanguageList.getValue(); }

        protected form = new ItemForm(this.idPrefix);

    }
}