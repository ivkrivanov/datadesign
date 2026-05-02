import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface DocumentTypeForm {
    DocumentName: StringEditor;
}

export class DocumentTypeForm extends PrefixedContext {
    static readonly formKey = 'Sales.DocumentType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DocumentTypeForm.init) {
            DocumentTypeForm.init = true;

            var w0 = StringEditor;

            initFormType(DocumentTypeForm, [
                'DocumentName', w0
            ]);
        }
    }
}