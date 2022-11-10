namespace Store.Store {
    export interface CategoriesTypeForm {
        Type: Serenity.IntegerEditor;
        CategoryType: Serenity.StringEditor;
    }

    export class CategoriesTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Store.CategoriesType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesTypeForm.init)  {
                CategoriesTypeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CategoriesTypeForm, [
                    'Type', w0,
                    'CategoryType', w1
                ]);
            }
        }
    }
}
