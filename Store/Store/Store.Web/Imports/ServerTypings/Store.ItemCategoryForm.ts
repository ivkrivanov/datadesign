namespace Store.Store {
    export interface ItemCategoryForm {
        ItemCategoryCode: Serenity.StringEditor;
        ItemCategoryName: Serenity.StringEditor;
        ItemCategoryDescription: Serenity.StringEditor;
        ItemCategoryImage: Serenity.ImageUploadEditor;
    }

    export class ItemCategoryForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ItemCategory';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemCategoryForm.init)  {
                ItemCategoryForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.ImageUploadEditor;

                Q.initFormType(ItemCategoryForm, [
                    'ItemCategoryCode', w0,
                    'ItemCategoryName', w0,
                    'ItemCategoryDescription', w0,
                    'ItemCategoryImage', w1
                ]);
            }
        }
    }
}

