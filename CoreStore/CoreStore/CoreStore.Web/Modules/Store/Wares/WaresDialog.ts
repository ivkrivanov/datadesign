
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class WaresDialog extends Serenity.EntityDialog<WaresRow, any> {
        protected getFormKey() { return WaresForm.formKey; }
        protected getIdProperty() { return WaresRow.idProperty; }
        protected getLocalTextPrefix() { return WaresRow.localTextPrefix; }
        protected getNameProperty() { return WaresRow.nameProperty; }
        protected getService() { return WaresService.baseUrl; }
        protected getDeletePermission() { return WaresRow.deletePermission; }
        protected getInsertPermission() { return WaresRow.insertPermission; }
        protected getUpdatePermission() { return WaresRow.updatePermission; }

        protected form = new WaresForm(this.idPrefix);

        constructor() {
            super();
        }

        protected UpdateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.WaresCode, true);
        }

    }
}