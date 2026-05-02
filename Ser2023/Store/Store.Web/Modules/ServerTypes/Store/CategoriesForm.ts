import { CategoriesTypeDialog } from "@/Store/CategoriesType/CategoriesTypeDialog";
import { LookupEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CategoriesForm {
    CategoryTypeId: LookupEditor;
    CategoryCode: LookupEditor;
    CategoryName: StringEditor;
    Description: StringEditor;
    Picture: StringEditor;
}

export class CategoriesForm extends PrefixedContext {
    static formKey = 'Store.Categories';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!CategoriesForm.init)  {
            CategoriesForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;

            initFormType(CategoriesForm, [
                'CategoryTypeId', w0,
                'CategoryCode', w0,
                'CategoryName', w1,
                'Description', w1,
                'Picture', w1
            ]);
        }
    }
}

[CategoriesTypeDialog]; // referenced types
