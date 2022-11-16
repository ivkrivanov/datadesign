namespace Store.Store {
    export interface ProductsExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class ProductsExcelImportForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductsExcelImport';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsExcelImportForm.init)  {
                ProductsExcelImportForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(ProductsExcelImportForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
