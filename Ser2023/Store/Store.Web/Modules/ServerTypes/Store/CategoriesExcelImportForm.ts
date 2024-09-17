import { ImageUploadEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CategoriesExcelImportForm {
    FileName: ImageUploadEditor;
}

export class CategoriesExcelImportForm extends PrefixedContext {
    static formKey = 'Store.CategoriesExcelImport';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CategoriesExcelImportForm.init)  {
            CategoriesExcelImportForm.init = true;

            var w0 = ImageUploadEditor;

            initFormType(CategoriesExcelImportForm, [
                'FileName', w0
            ]);
        }
    }
}
