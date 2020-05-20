namespace CoreStore.Store {
    export interface ProductMovementForm {
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
                var w3 = CounterpartiesEditor;
                var w4 = s.LookupEditor;
                var w5 = s.StringEditor;
                var w6 = s.DecimalEditor;
                var w7 = ProductMovementDetailsEditor;

                Q.initFormType(ProductMovementForm, [
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
                    'Total', w6,
                    'DetailList', w7
                ]);
            }
        }
    }
}
