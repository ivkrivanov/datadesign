namespace Store.Store {
    export interface ProductMovementForm {
        ShopID: ShopsEditor;
        CounterpartyID: CounterpartyEditor;
        EmployeeID: Serenity.LookupEditor;
        ShipperID: Serenity.LookupEditor;
        OperationTypeID: OperationTypeEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
    }

    export class ProductMovementForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductMovement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductMovementForm.init)  {
                ProductMovementForm.init = true;

                var s = Serenity;
                var w0 = ShopsEditor;
                var w1 = CounterpartyEditor;
                var w2 = s.LookupEditor;
                var w3 = OperationTypeEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ProductMovementForm, [
                    'ShopID', w0,
                    'CounterpartyID', w1,
                    'EmployeeID', w2,
                    'ShipperID', w2,
                    'OperationTypeID', w3,
                    'OrderDate', w4,
                    'RequiredDate', w4,
                    'ShippedDate', w4
                ]);
            }
        }
    }
}

