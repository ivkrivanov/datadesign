namespace Store.Store {
    export interface CategoriesExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class CategoriesExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Store.CategoriesExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesExcelImportForm.init)  {
                CategoriesExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(CategoriesExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
