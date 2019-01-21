namespace Store.Store {
    export interface WaresMovementDetailsForm {
        WaresID: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        IncomePrice: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        SinglePrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }

    export class WaresMovementDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Store.WaresMovementDetails';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaresMovementDetailsForm.init)  {
                WaresMovementDetailsForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DecimalEditor;

                Q.initFormType(WaresMovementDetailsForm, [
                    'WaresID', w0,
                    'Quantity', w1,
                    'IncomePrice', w1,
                    'SalePrice', w1,
                    'SinglePrice', w1,
                    'Discount', w1
                ]);
            }
        }
    }
}

