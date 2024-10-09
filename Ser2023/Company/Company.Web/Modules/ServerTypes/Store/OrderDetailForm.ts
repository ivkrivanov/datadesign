import { ProductsDialog } from "@/Store/Products/ProductsDialog";
import { LookupEditor, DecimalEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface OrderDetailForm {
    ProductId: LookupEditor;
    SinglePrice: DecimalEditor;
    SalePrice: DecimalEditor;
    Quantity: DecimalEditor;
    Discount: DecimalEditor;
}

export class OrderDetailForm extends PrefixedContext {
    static formKey = 'Store.OrderDetail';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OrderDetailForm.init)  {
            OrderDetailForm.init = true;

            var w0 = LookupEditor;
            var w1 = DecimalEditor;

            initFormType(OrderDetailForm, [
                'ProductId', w0,
                'SinglePrice', w1,
                'SalePrice', w1,
                'Quantity', w1,
                'Discount', w1
            ]);
        }
    }
}

[ProductsDialog]; // referenced types