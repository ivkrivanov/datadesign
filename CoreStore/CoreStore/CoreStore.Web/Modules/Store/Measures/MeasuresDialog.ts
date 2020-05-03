
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    export class MeasuresDialog extends Serenity.EntityDialog<MeasuresRow, any> {
        protected getFormKey() { return MeasuresForm.formKey; }
        protected getIdProperty() { return MeasuresRow.idProperty; }
        protected getLocalTextPrefix() { return MeasuresRow.localTextPrefix; }
        protected getNameProperty() { return MeasuresRow.nameProperty; }
        protected getService() { return MeasuresService.baseUrl; }
        protected getDeletePermission() { return MeasuresRow.deletePermission; }
        protected getInsertPermission() { return MeasuresRow.insertPermission; }
        protected getUpdatePermission() { return MeasuresRow.updatePermission; }

        protected form = new MeasuresForm(this.idPrefix);

    }
}