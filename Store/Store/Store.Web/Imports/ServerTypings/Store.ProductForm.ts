namespace Store.Store {
    export interface ProductForm {
        CategoryID: Serenity.LookupEditor;
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
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
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.ImageUploadEditor;
                var w3 = s.BooleanEditor;
                var w4 = ProductDetailsEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(ProductForm, [
                    'CategoryID', w0,
                    'ProductName', w1,
                    'ProductImage', w2,
                    'Discontinued', w3,
                    'SupplierID', w0,
                    'DetailList', w4,
                    'QuantityPerUnit', w1,
                    'UnitPrice', w5,
                    'UnitsInStock', w6,
                    'UnitsOnOrder', w6,
                    'ReorderLevel', w6
                ]);
            }
        }
    }
}

