import { CategoriesTypeDialog } from "@/Store/CategoriesType/CategoriesTypeDialog";
import { LookupEditor, StringEditor, ImageUploadEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface CategoriesForm {
    CategoryTypeId: LookupEditor;
    CategoryCode: StringEditor;
    CategoryName: StringEditor;
    Description: StringEditor;
    Picture: ImageUploadEditor;
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
            var w2 = ImageUploadEditor;

            initFormType(CategoriesForm, [
                'CategoryTypeId', w0,
                'CategoryCode', w1,
                'CategoryName', w1,
                'Description', w1,
                'Picture', w2
            ]);
        }
    }
}

[CategoriesTypeDialog]; // referenced types