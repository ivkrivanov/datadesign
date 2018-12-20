
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ItemCategoriesLangDialog extends Serenity.EntityDialog<ItemCategoriesLangRow, any> {
        protected getFormKey() { return ItemCategoriesLangForm.formKey; }
        protected getIdProperty() { return ItemCategoriesLangRow.idProperty; }
        protected getLocalTextPrefix() { return ItemCategoriesLangRow.localTextPrefix; }
        protected getNameProperty() { return ItemCategoriesLangRow.nameProperty; }
        protected getService() { return ItemCategoriesLangService.baseUrl; }

        protected form = new ItemCategoriesLangForm(this.idPrefix);

    }
}