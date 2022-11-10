namespace Store.Store {
    export interface CategoriesForm {
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
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CategoriesForm, [
                    'CategoryTypeId', w0,
                    'CategoryCode', w1,
                    'CategoryName', w1,
                    'Description', w1
                ]);
            }
        }
    }
}
