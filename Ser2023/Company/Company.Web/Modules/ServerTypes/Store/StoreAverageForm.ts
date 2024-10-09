import { ImageUploadEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface StoreAverageForm {
    FileName: ImageUploadEditor;
}

export class StoreAverageForm extends PrefixedContext {
    static formKey = 'Store.StoreAverage';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!StoreAverageForm.init)  {
            StoreAverageForm.init = true;

            var w0 = ImageUploadEditor;

            initFormType(StoreAverageForm, [
                'FileName', w0
            ]);
        }
    }
}