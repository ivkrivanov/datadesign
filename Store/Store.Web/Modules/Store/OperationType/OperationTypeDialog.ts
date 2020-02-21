
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class OperationTypeDialog extends Serenity.EntityDialog<OperationTypeRow, any> {
        protected getFormKey() { return OperationTypeForm.formKey; }
        protected getIdProperty() { return OperationTypeRow.idProperty; }
        protected getLocalTextPrefix() { return OperationTypeRow.localTextPrefix; }
        protected getNameProperty() { return OperationTypeRow.nameProperty; }
        protected getService() { return OperationTypeService.baseUrl; }

        protected form = new OperationTypeForm(this.idPrefix);

    }
}