namespace CoreStore.Store {
    export interface MeasuresForm {
        MeasureName: Serenity.StringEditor;
    }

    export class MeasuresForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Measures';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeasuresForm.init)  {
                MeasuresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeasuresForm, [
                    'MeasureName', w0
                ]);
            }
        }
    }
}
