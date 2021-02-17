
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class ItemCategoryDialog extends Serenity.EntityDialog<ItemCategoryRow, any> {
        protected getFormKey() { return ItemCategoryForm.formKey; }
        protected getIdProperty() { return ItemCategoryRow.idProperty; }
        protected getLocalTextPrefix() { return ItemCategoryRow.localTextPrefix; }
        protected getNameProperty() { return ItemCategoryRow.nameProperty; }
        protected getService() { return ItemCategoryService.baseUrl; }

        protected form = new ItemCategoryForm(this.idPrefix);

        protected getLanguages(): string[][] {
            return LanguageList.getValue();
        }
    }
}