namespace Store.Store {
    export interface OrderProductForm {
        OperationTypeId: Serenity.IntegerEditor;
        CounterpartyId: Serenity.StringEditor;
        EmployeeId: Serenity.IntegerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.IntegerEditor;
        Freight: Serenity.DecimalEditor;
        ShipName: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipRegion: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        ShipCountry: Serenity.StringEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class OrderProductForm extends Serenity.PrefixedContext {
        static formKey = 'Store.OrderProduct';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderProductForm.init)  {
                OrderProductForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(OrderProductForm, [
                    'OperationTypeId', w0,
                    'CounterpartyId', w1,
                    'EmployeeId', w0,
                    'OrderDate', w2,
                    'RequiredDate', w2,
                    'ShippedDate', w2,
                    'ShipVia', w0,
                    'Freight', w3,
                    'ShipName', w1,
                    'ShipAddress', w1,
                    'ShipCity', w1,
                    'ShipRegion', w1,
                    'ShipPostalCode', w1,
                    'ShipCountry', w1,
                    'InsertDate', w2,
                    'InsertUserId', w0,
                    'UpdateDate', w2,
                    'UpdateUserId', w0,
                    'IsActive', w0,
                    'TenantId', w0
                ]);
            }
        }
    }
}

