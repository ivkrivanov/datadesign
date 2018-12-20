﻿namespace Warehouse.Store {
    export interface ItemForm {
        ItemCategoryID: Serenity.IntegerEditor;
        ItemCode: Serenity.StringEditor;
        ItemBarcode: Serenity.StringEditor;
        ItemLabel: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        ItemImage: Serenity.ImageUploadEditor;
        SupplierID: Serenity.IntegerEditor;
        MeasureID: Serenity.IntegerEditor;
        QuantityPerUnit: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ItemForm, [
                    'ItemCategoryID', w0,
                    'ItemCode', w1,
                    'ItemBarcode', w1,
                    'ItemLabel', w1,
                    'ItemName', w1,
                    'ItemImage', w2,
                    'SupplierID', w0,
                    'MeasureID', w0,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w3,
                    'AccountID', w0
                ]);
            }
        }
    }
}

