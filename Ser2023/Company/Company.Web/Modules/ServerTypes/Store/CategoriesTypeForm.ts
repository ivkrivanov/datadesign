import { IntegerEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CategoriesTypeForm {
    Type: IntegerEditor;
    CategoryType: StringEditor;
}

export class CategoriesTypeForm extends PrefixedContext {
    static formKey = 'Store.CategoriesType';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CategoriesTypeForm.init)  {
            CategoriesTypeForm.init = true;

            var w0 = IntegerEditor;
            var w1 = StringEditor;

            initFormType(CategoriesTypeForm, [
                'Type', w0,
                'CategoryType', w1
            ]);
        }
    }
}