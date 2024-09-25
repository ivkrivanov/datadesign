import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface DocumentTypeForm {
    DocumentName: StringEditor;
}

export class DocumentTypeForm extends PrefixedContext {
    static formKey = 'Store.DocumentType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!DocumentTypeForm.init)  {
            DocumentTypeForm.init = true;

            var w0 = StringEditor;

            initFormType(DocumentTypeForm, [
                'DocumentName', w0
            ]);
        }
    }
}