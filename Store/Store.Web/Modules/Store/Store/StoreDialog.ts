
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class StoreDialog extends Serenity.EntityDialog<StoreRow, any> {
        protected getFormKey() { return StoreForm.formKey; }
        protected getIdProperty() { return StoreRow.idProperty; }
        protected getLocalTextPrefix() { return StoreRow.localTextPrefix; }
        protected getNameProperty() { return StoreRow.nameProperty; }
        protected getService() { return StoreService.baseUrl; }

        protected form = new StoreForm(this.idPrefix);

    }
}