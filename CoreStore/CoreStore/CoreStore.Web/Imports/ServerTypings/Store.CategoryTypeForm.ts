namespace CoreStore.Store {
    export interface CategoryTypeForm {
        Type: Serenity.IntegerEditor;
        CategoryType: Serenity.StringEditor;
    }

    export class CategoryTypeForm extends Serenity.PrefixedContext {
        static formKey = 'Store.CategoryType';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryTypeForm.init)  {
                CategoryTypeForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CategoryTypeForm, [
                    'Type', w0,
                    'CategoryType', w1
                ]);
            }
        }
    }
}
