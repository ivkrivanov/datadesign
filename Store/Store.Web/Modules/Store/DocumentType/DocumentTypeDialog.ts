
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class DocumentTypeDialog extends Serenity.EntityDialog<DocumentTypeRow, any> {
        protected getFormKey() { return DocumentTypeForm.formKey; }
        protected getIdProperty() { return DocumentTypeRow.idProperty; }
        protected getLocalTextPrefix() { return DocumentTypeRow.localTextPrefix; }
        protected getNameProperty() { return DocumentTypeRow.nameProperty; }
        protected getService() { return DocumentTypeService.baseUrl; }

        protected form = new DocumentTypeForm(this.idPrefix);

    }
}