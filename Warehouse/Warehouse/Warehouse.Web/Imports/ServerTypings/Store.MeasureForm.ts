namespace Warehouse.Store {
    export interface MeasureForm {
        MeasureName: Serenity.StringEditor;
    }

    export class MeasureForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Measure';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MeasureForm.init)  {
                MeasureForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(MeasureForm, [
                    'MeasureName', w0
                ]);
            }
        }
    }
}

