import { LookupEditor, StringEditor, DecimalEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ProductDetailsForm {
    WaresId: LookupEditor;
    WaresName: StringEditor;
    Quantity: DecimalEditor;
    ProductQuantity: DecimalEditor;
    PlanPrice: DecimalEditor;
    Discount: DecimalEditor;
}

export class ProductDetailsForm extends PrefixedContext {
    static formKey = 'Store.ProductDetails';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ProductDetailsForm.init)  {
            ProductDetailsForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;
            var w2 = DecimalEditor;

            initFormType(ProductDetailsForm, [
                'WaresId', w0,
                'WaresName', w1,
                'Quantity', w2,
                'ProductQuantity', w2,
                'PlanPrice', w2,
                'Discount', w2
            ]);
        }
    }
}