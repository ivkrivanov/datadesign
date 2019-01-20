namespace Store.Store {
    export interface ProductDetailForm {
        WaresID: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        ProductQuantity: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class ProductDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductDetailForm.init)  {
                ProductDetailForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ProductDetailForm, [
                    'WaresID', w0,
                    'Quantity', w1,
                    'ProductQuantity', w1,
                    'Discount', w1
                ]);
            }
        }
    }
}

