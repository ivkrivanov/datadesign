namespace Store.Store {
    export interface ProductForm {
        CategoryID: Serenity.LookupEditor;
        ProductCode: Serenity.StringEditor;
        ProductBarcode: Serenity.StringEditor;
        ProductLabel: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        MeasureID: Serenity.LookupEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        CounterpartyID: CounterpartyEditor;
        UnitPrice: Serenity.DecimalEditor;
        DetailList: ProductDetailsEditor;
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
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;
                var w4 = CounterpartyEditor;
                var w5 = s.DecimalEditor;
                var w6 = ProductDetailsEditor;
                var w7 = s.IntegerEditor;

                Q.initFormType(ProductForm, [
                    'CategoryID', w0,
                    'ProductCode', w1,
                    'ProductBarcode', w1,
                    'ProductLabel', w1,
                    'ProductName', w1,
                    'MeasureID', w0,
                    'ProductImage', w2,
                    'Discontinued', w3,
                    'CounterpartyID', w4,
                    'UnitPrice', w5,
                    'DetailList', w6,
                    'UnitsInStock', w7,
                    'UnitsOnOrder', w7,
                    'ReorderLevel', w7
                ]);
            }
        }
    }
}

