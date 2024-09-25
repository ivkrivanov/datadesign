import { IntegerEditor, DecimalEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface WaresOrderDetailForm {
    WaresID: IntegerEditor;
    SinglePrice: DecimalEditor;
    Quantity: DecimalEditor;
    Discount: DecimalEditor;
}

export class WaresOrderDetailForm extends PrefixedContext {
    static formKey = 'Store.WaresOrderDetails';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!WaresOrderDetailForm.init)  {
            WaresOrderDetailForm.init = true;

            var w0 = IntegerEditor;
            var w1 = DecimalEditor;

            initFormType(WaresOrderDetailForm, [
                'WaresID', w0,
                'SinglePrice', w1,
                'Quantity', w1,
                'Discount', w1
            ]);
        }
    }
}