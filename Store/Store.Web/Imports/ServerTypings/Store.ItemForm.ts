namespace Store.Store {
    export interface ItemForm {
        ItemCategoryID: Serenity.LookupEditor;
        ItemCode: Serenity.StringEditor;
        ItemBarcode: Serenity.StringEditor;
        ItemLabel: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        ItemImage: Serenity.ImageUploadEditor;
        SupplierID: Serenity.LookupEditor;
        MeasureID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
        AccountID: Serenity.IntegerEditor;
    }

    export class ItemForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Item';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ItemForm.init)  {
                ItemForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.IntegerEditor;
                var w4 = s.DecimalEditor;
                var w5 = s.BooleanEditor;

                Q.initFormType(ItemForm, [
                    'ItemCategoryID', w0,
                    'ItemCode', w1,
                    'ItemBarcode', w1,
                    'ItemLabel', w1,
                    'ItemName', w1,
                    'ItemImage', w2,
                    'SupplierID', w0,
                    'MeasureID', w0,
                    'QuantityPerUnit', w3,
                    'UnitPrice', w4,
                    'Discontinued', w5,
                    'AccountID', w3
                ]);
            }
        }
    }
}

