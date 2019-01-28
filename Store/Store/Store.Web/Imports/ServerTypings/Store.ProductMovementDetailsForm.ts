namespace Store.Store {
    export interface ProductMovementDetailsForm {
        ProductID: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class ProductMovementDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductMovementDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductMovementDetailsForm.init)  {
                ProductMovementDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(ProductMovementDetailsForm, [
                    'ProductID', w0,
                    'Quantity', w1,
                    'SalePrice', w1,
                    'Discount', w1
                ]);
            }
        }
    }
}

