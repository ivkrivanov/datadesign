namespace Store.Store {
    export interface ProductForm {
        ProductCode: Serenity.StringEditor;
        CategoryID: Serenity.LookupEditor;
        ProductBarcode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ProductLabel: Serenity.StringEditor;
        MeasureID: Serenity.LookupEditor;
        CounterpartyID: CounterpartyEditor;
        Discontinued: Serenity.BooleanEditor;
        ProductImage: Serenity.ImageUploadEditor;
        DetailList: ProductDetailsEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }

    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Product';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductForm.init)  {
                ProductForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = CounterpartyEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.ImageUploadEditor;
                var w5 = ProductDetailsEditor;
                var w6 = s.DecimalEditor;
                var w7 = s.IntegerEditor;

                Q.initFormType(ProductForm, [
                    'ProductCode', w0,
                    'CategoryID', w1,
                    'ProductBarcode', w0,
                    'ProductName', w0,
                    'ProductLabel', w0,
                    'MeasureID', w1,
                    'CounterpartyID', w2,
                    'Discontinued', w3,
                    'ProductImage', w4,
                    'DetailList', w5,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w6,
                    'UnitsInStock', w7,
                    'UnitsOnOrder', w7,
                    'ReorderLevel', w7
                ]);
            }
        }
    }
}

