namespace Store.Store {
    export interface ProductMovementForm {
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
        Total: Serenity.DecimalEditor;
        DetailList: ProductMovementDetailsEditor;
    }

    export class ProductMovementForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductMovement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductMovementForm.init)  {
                ProductMovementForm.init = true;

                var s = Serenity;
                var w0 = OperationTypeEditor;
                var w1 = s.DateEditor;
                var w2 = ShopsEditor;
                var w3 = CounterpartyEditor;
                var w4 = s.LookupEditor;
                var w5 = s.StringEditor;
                var w6 = s.DecimalEditor;
                var w7 = ProductMovementDetailsEditor;

                Q.initFormType(ProductMovementForm, [
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
                    'Total', w6,
                    'DetailList', w7
                ]);
            }
        }
    }
}

