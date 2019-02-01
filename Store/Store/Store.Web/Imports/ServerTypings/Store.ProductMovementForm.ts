﻿namespace Store.Store {
    export interface ProductMovementForm {
        OperationTypeOpCode: Serenity.EnumEditor;
        CounterpartyID: CounterpartyEditor;
        ShopID: ShopsEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
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
                var w3 = s.DateEditor;
                var w4 = s.LookupEditor;
                var w5 = ProductMovementDetailsEditor;

                Q.initFormType(ProductMovementForm, [
                    'OperationTypeOpCode', w0,
                    'CounterpartyID', w1,
                    'ShopID', w2,
                    'OrderDate', w3,
                    'RequiredDate', w3,
                    'EmployeeID', w4,
                    'DetailList', w5,
                    'ShippedDate', w3,
                    'ShipperID', w4
                ]);
            }
        }
    }
}
