import { WaresDialog } from "@/Store/Wares/WaresDialog";
import { LookupEditor, DecimalEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface ProductDetailsForm {
    WaresId: LookupEditor;
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
            var w1 = DecimalEditor;

            initFormType(ProductDetailsForm, [
                'WaresId', w0,
                'Quantity', w1,
                'ProductQuantity', w1,
                'PlanPrice', w1,
                'Discount', w1
            ]);
        }
    }
}

[WaresDialog]; // referenced types
