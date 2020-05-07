namespace CoreStore.Store {
    export interface ProductsForm {
        CategoryId: Serenity.LookupEditor;
        ProductCode: Serenity.StringEditor;
        ProductBarcode: Serenity.StringEditor;
        ProductLabel: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        MeasureId: Serenity.LookupEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        CounterpartyId: CounterpartiesEditor;
        UnitPrice: Serenity.DecimalEditor;
        DetailList: ProductDetailsEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }

    export class ProductsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.Products';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductsForm.init)  {
                ProductsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;
                var w4 = CounterpartiesEditor;
                var w5 = s.DecimalEditor;
                var w6 = ProductDetailsEditor;
                var w7 = s.IntegerEditor;

                Q.initFormType(ProductsForm, [
                    'CategoryId', w0,
                    'ProductCode', w1,
                    'ProductBarcode', w1,
                    'ProductLabel', w1,
                    'ProductName', w1,
                    'MeasureId', w0,
                    'ProductImage', w2,
                    'Discontinued', w3,
                    'CounterpartyId', w4,
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
