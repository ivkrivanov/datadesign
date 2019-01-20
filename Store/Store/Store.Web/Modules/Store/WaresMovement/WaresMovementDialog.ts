
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class WaresMovementDialog extends Serenity.EntityDialog<WaresMovementRow, any> {
        protected getFormKey() { return WaresMovementForm.formKey; }
        protected getIdProperty() { return WaresMovementRow.idProperty; }
        protected getLocalTextPrefix() { return WaresMovementRow.localTextPrefix; }
        protected getNameProperty() { return WaresMovementRow.nameProperty; }
        protected getService() { return WaresMovementService.baseUrl; }

        protected form = new WaresMovementForm(this.idPrefix);

    }
}