import { StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface MeasuresForm {
    MeasureName: StringEditor;
}

export class MeasuresForm extends PrefixedContext {
    static formKey = 'Store.Measures';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MeasuresForm.init)  {
            MeasuresForm.init = true;

            var w0 = StringEditor;

            initFormType(MeasuresForm, [
                'MeasureName', w0
            ]);
        }
    }
}
