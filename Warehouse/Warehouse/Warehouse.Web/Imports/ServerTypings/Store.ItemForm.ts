namespace Warehouse.Store {
    export interface ItemForm {
        ItemCode: Serenity.StringEditor;
        ItemBarcode: Serenity.StringEditor;
        ItemLabel: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        ItemImage: Serenity.StringEditor;
        SupplierID: Serenity.IntegerEditor;
        CategoryID: Serenity.IntegerEditor;
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
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;

                Q.initFormType(ItemForm, [
                    'ItemCode', w0,
                    'ItemBarcode', w0,
                    'ItemLabel', w0,
                    'ItemName', w0,
                    'ItemImage', w0,
                    'SupplierID', w1,
                    'CategoryID', w1,
                    'MeasureID', w1,
                    'QuantityPerUnit', w1,
                    'UnitPrice', w2,
                    'AccountID', w1
                ]);
            }
        }
    }
}

