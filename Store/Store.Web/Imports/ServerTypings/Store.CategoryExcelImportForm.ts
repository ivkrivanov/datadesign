namespace Store.Store {
    export interface CategoryExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class CategoryExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Store.CategoryExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryExcelImportForm.init)  {
                CategoryExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(CategoryExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}

