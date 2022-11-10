namespace CoreStore.Store {
    export interface ProductDetailsForm {
        WaresId: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        ProductQuantity: Serenity.DecimalEditor;
        PlanPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class ProductDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductDetailsForm.init)  {
                ProductDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ProductDetailsForm, [
                    'WaresId', w0,
                    'Quantity', w1,
                    'ProductQuantity', w1,
                    'PlanPrice', w1,
                    'Discount', w1
                ]);
            }
        }
    }
}
