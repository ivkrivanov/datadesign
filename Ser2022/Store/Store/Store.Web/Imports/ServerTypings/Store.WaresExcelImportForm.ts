namespace Store.Store {
    export interface WaresExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class WaresExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Store.WaresExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaresExcelImportForm.init)  {
                WaresExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(WaresExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
