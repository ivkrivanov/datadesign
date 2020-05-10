namespace CoreStore.Store {
    export interface ProductMovementForm {
        ShopId: Serenity.StringEditor;
        CounterpartyId: Serenity.StringEditor;
        EmployeeId: Serenity.IntegerEditor;
        ShipperId: Serenity.IntegerEditor;
        OperationTypeId: Serenity.IntegerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.DateEditor;
        ShippedDate: Serenity.DateEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class ProductMovementForm extends Serenity.PrefixedContext {
        static formKey = 'Store.ProductMovement';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProductMovementForm.init)  {
                ProductMovementForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DateEditor;

                Q.initFormType(ProductMovementForm, [
                    'ShopId', w0,
                    'CounterpartyId', w0,
                    'EmployeeId', w1,
                    'ShipperId', w1,
                    'OperationTypeId', w1,
                    'OrderDate', w2,
                    'RequiredDate', w2,
                    'ShippedDate', w2,
                    'IsActive', w1,
                    'TenantId', w1
                ]);
            }
        }
    }
}
