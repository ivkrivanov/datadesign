namespace Store.Store {
    export interface DocumentTypeForm {
        DocumentName: Serenity.StringEditor;
    }

    export class DocumentTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Store.DocumentType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DocumentTypeForm.init)  {
                DocumentTypeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DocumentTypeForm, [
                    'DocumentName', w0
                ]);
            }
        }
    }
}

