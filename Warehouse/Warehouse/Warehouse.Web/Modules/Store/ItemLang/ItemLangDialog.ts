
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class ItemLangDialog extends Serenity.EntityDialog<ItemLangRow, any> {
        protected getFormKey() { return ItemLangForm.formKey; }
        protected getIdProperty() { return ItemLangRow.idProperty; }
        protected getLocalTextPrefix() { return ItemLangRow.localTextPrefix; }
        protected getNameProperty() { return ItemLangRow.nameProperty; }
        protected getService() { return ItemLangService.baseUrl; }

        protected form = new ItemLangForm(this.idPrefix);

    }
}