namespace Store.Store {
    export interface StoreAverageForm {
        FileName: Serenity.ImageUploadEditor;
    }

    export class StoreAverageForm extends Serenity.PrefixedContext {
        static formKey = 'Store.StoreAverage';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!StoreAverageForm.init)  {
                StoreAverageForm.init = true;

                var s = Serenity;
                var w0 = s.ImageUploadEditor;

                Q.initFormType(StoreAverageForm, [
                    'FileName', w0
                ]);
            }
        }
    }
}
