namespace Store.Store {
    export interface ProductMovementForm {
        OperationTypeOpCode: Serenity.EnumEditor;
        CounterpartyID: CounterpartyEditor;
        ShopID: ShopsEditor;
        EmployeeID: Serenity.LookupEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        DetailList: ProductMovementDetailsEditor;
        ShippedDate: Serenity.DateEditor;
        ShipperID: Serenity.LookupEditor;
    }

    export class ProductMovementForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductMovement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductMovementForm.init)  {
                ProductMovementForm.init = true;

                var s = Serenity;
                var w0 = s.EnumEditor;
                var w1 = CounterpartyEditor;
                var w2 = ShopsEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DateEditor;
                var w5 = ProductMovementDetailsEditor;

                Q.initFormType(ProductMovementForm, [
                    'OperationTypeOpCode', w0,
                    'CounterpartyID', w1,
                    'ShopID', w2,
                    'EmployeeID', w3,
                    'OrderDate', w4,
                    'RequiredDate', w4,
                    'DetailList', w5,
                    'ShippedDate', w4,
                    'ShipperID', w3
                ]);
            }
        }
    }
}

