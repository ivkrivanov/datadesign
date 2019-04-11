namespace Store.Store {
    export interface WaresMovementForm {
        OperationTypeID: OperationTypeEditor;
        OrderDate: Serenity.DateEditor;
        ShopID: ShopsEditor;
        CounterpartyID: CounterpartyEditor;
        EmployeeID: Serenity.LookupEditor;
        RequiredDate: Serenity.DateEditor;
        ShipperID: Serenity.LookupEditor;
        ShippedDate: Serenity.DateEditor;
        DocumentTypeID: Serenity.LookupEditor;
        DocumentNumber: Serenity.StringEditor;
        DocumentDate: Serenity.DateEditor;
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
                var w1 = s.DateEditor;
                var w2 = ShopsEditor;
                var w3 = CounterpartyEditor;
                var w4 = s.LookupEditor;
                var w5 = s.StringEditor;
                var w6 = WaresMovementDetailsEditor;

                Q.initFormType(WaresMovementForm, [
                    'OperationTypeID', w0,
                    'OrderDate', w1,
                    'ShopID', w2,
                    'CounterpartyID', w3,
                    'EmployeeID', w4,
                    'RequiredDate', w1,
                    'ShipperID', w4,
                    'ShippedDate', w1,
                    'DocumentTypeID', w4,
                    'DocumentNumber', w5,
                    'DocumentDate', w1,
                    'DetailList', w6
                ]);
            }
        }
    }
}

