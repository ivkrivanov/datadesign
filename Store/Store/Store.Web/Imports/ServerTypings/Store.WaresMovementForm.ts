namespace Store.Store {
    export interface WaresMovementForm {
        OperationTypeID: OperationTypeEditor;
        CounterpartyID: CounterpartyEditor;
        ShopID: ShopsEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        EmployeeID: Serenity.LookupEditor;
        ShipperID: Serenity.LookupEditor;
        DetailList: WaresMovementDetailsEditor;
    }

    export class WaresMovementForm extends Serenity.PrefixedContext {
        static formKey = 'Store.WaresMovement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!WaresMovementForm.init)  {
                WaresMovementForm.init = true;

                var s = Serenity;
                var w0 = OperationTypeEditor;
                var w1 = CounterpartyEditor;
                var w2 = ShopsEditor;
                var w3 = s.DateEditor;
                var w4 = s.LookupEditor;
                var w5 = WaresMovementDetailsEditor;

                Q.initFormType(WaresMovementForm, [
                    'OperationTypeID', w0,
                    'CounterpartyID', w1,
                    'ShopID', w2,
                    'OrderDate', w3,
                    'RequiredDate', w3,
                    'ShippedDate', w3,
                    'EmployeeID', w4,
                    'ShipperID', w4,
                    'DetailList', w5
                ]);
            }
        }
    }
}

