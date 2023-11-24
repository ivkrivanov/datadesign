namespace Store.Store {
    export interface CategoriesForm {
        CAtegoryId: Serenity.IntegerEditor;
        CategoryTypeId: Serenity.LookupEditor;
        CategoryCode: Serenity.StringEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Categories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoriesForm.init)  {
                CategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.StringEditor;

                Q.initFormType(CategoriesForm, [
                    'CAtegoryId', w0,
                    'CategoryTypeId', w1,
                    'CategoryCode', w2,
                    'CategoryName', w2,
                    'Description', w2
                ]);
            }
        }
    }
}
