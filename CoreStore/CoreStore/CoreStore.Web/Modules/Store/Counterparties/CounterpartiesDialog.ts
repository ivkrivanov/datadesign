
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class CounterpartiesDialog extends Serenity.EntityDialog<CounterpartiesRow, any> {
        protected getFormKey() { return CounterpartiesForm.formKey; }
        protected getIdProperty() { return CounterpartiesRow.idProperty; }
        protected getLocalTextPrefix() { return CounterpartiesRow.localTextPrefix; }
        protected getNameProperty() { return CounterpartiesRow.nameProperty; }
        protected getService() { return CounterpartiesService.baseUrl; }
        protected getDeletePermission() { return CounterpartiesRow.deletePermission; }
        protected getInsertPermission() { return CounterpartiesRow.insertPermission; }
        protected getUpdatePermission() { return CounterpartiesRow.updatePermission; }

        protected form = new CounterpartiesForm(this.idPrefix);

    }
}