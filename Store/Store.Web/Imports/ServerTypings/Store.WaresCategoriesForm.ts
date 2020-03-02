namespace Store.Store {
    export interface WaresCategoriesForm {
        WaresCategoryCode: Serenity.StringEditor;
        WaresCategoryName: Serenity.StringEditor;
        WaresCategoryDescription: Serenity.StringEditor;
        WaresCategoryImage: Serenity.ImageUploadEditor;
    }

    export class WaresCategoriesForm extends Serenity.PrefixedContext {
        static formKey = 'Store.WaresCategories';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaresCategoriesForm.init)  {
                WaresCategoriesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;

                Q.initFormType(WaresCategoriesForm, [
                    'WaresCategoryCode', w0,
                    'WaresCategoryName', w0,
                    'WaresCategoryDescription', w0,
                    'WaresCategoryImage', w1
                ]);
            }
        }
    }
}

