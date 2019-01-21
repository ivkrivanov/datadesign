namespace Store.Store {
    export interface OrderProductDetailForm {
        OrderProductsId: Serenity.IntegerEditor;
        ProductId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
        InsertDate: Serenity.DateEditor;
        InsertUserId: Serenity.IntegerEditor;
        UpdateDate: Serenity.DateEditor;
        UpdateUserId: Serenity.IntegerEditor;
        IsActive: Serenity.IntegerEditor;
        TenantId: Serenity.IntegerEditor;
    }

    export class OrderProductDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Store.OrderProductDetail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderProductDetailForm.init)  {
                OrderProductDetailForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(OrderProductDetailForm, [
                    'OrderProductsId', w0,
                    'ProductId', w0,
                    'UnitPrice', w1,
                    'Quantity', w0,
                    'Discount', w1,
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

