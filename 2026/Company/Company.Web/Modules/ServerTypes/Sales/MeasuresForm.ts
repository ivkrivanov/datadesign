import { initFormType, PrefixedContext, StringEditor } from "@serenity-is/corelib";

export interface MeasuresForm {
    MeasureName: StringEditor;
}

export class MeasuresForm extends PrefixedContext {
    static readonly formKey = 'Sales.Measures';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MeasuresForm.init) {
            MeasuresForm.init = true;

            var w0 = StringEditor;

            initFormType(MeasuresForm, [
                'MeasureName', w0
            ]);
        }
    }
}