namespace Store.Store {
    export interface CategoryForm {
        CategoryTypeID: Serenity.LookupEditor;
        CategoryCode: Serenity.StringEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    export class CategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Category';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CategoryForm.init)  {
                CategoryForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(CategoryForm, [
                    'CategoryTypeID', w0,
                    'CategoryCode', w1,
                    'CategoryName', w1,
                    'Description', w1
                ]);
            }
        }
    }
}

