namespace CoreStore.Store {
    export interface WaresMovementForm {
        OperationTypeId: OperationTypeEditor;
        OrderDate: Serenity.DateEditor;
        ShopId: ShopsEditor;
        CounterpartyId: CounterpartiesEditor;
        EmployeeId: Serenity.LookupEditor;
        RequiredDate: Serenity.DateEditor;
        ShipperId: Serenity.LookupEditor;
        ShippedDate: Serenity.DateEditor;
        DocumentTypeId: Serenity.LookupEditor;
        DocumentNumber: Serenity.StringEditor;
        DocumentDate: Serenity.DateEditor;
        Value: Serenity.DecimalEditor;
        VAT: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
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
                var w3 = CounterpartiesEditor;
                var w4 = s.LookupEditor;
                var w5 = s.StringEditor;
                var w6 = s.DecimalEditor;
                var w7 = WaresMovementDetailsEditor;

                Q.initFormType(WaresMovementForm, [
                    'OperationTypeId', w0,
                    'OrderDate', w1,
                    'ShopId', w2,
                    'CounterpartyId', w3,
                    'EmployeeId', w4,
                    'RequiredDate', w1,
                    'ShipperId', w4,
                    'ShippedDate', w1,
                    'DocumentTypeId', w4,
                    'DocumentNumber', w5,
                    'DocumentDate', w1,
                    'Value', w6,
                    'VAT', w6,
                    'Total', w6,
                    'DetailList', w7
                ]);
            }
        }
    }
}
