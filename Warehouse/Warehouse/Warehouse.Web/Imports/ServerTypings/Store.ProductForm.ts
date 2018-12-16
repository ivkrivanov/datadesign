namespace Warehouse.Store {
    export interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
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
                var w1 = s.ImageUploadEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.LookupEditor;
                var w4 = ProductDetailsEditor;
                var w5 = s.DecimalEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(ProductForm, [
                    'ProductName', w0,
                    'ProductImage', w1,
                    'Discontinued', w2,
                    'SupplierID', w3,
                    'CategoryID', w3,
                    'DetailList', w4,
                    'QuantityPerUnit', w0,
                    'UnitPrice', w5,
                    'UnitsInStock', w6,
                    'UnitsOnOrder', w6,
                    'ReorderLevel', w6
                ]);
            }
        }
    }
}

