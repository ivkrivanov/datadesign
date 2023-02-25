import { CategoriesDialog } from "@/Store/Categories/CategoriesDialog";
import { LookupEditor, StringEditor, IntegerEditor, ImageUploadEditor, BooleanEditor, DecimalEditor, PrefixedContext } from "@serenity-is/corelib";
import { initFormType } from "@serenity-is/corelib/q";

export interface WaresForm {
    CategoryId: LookupEditor;
    WaresCode: StringEditor;
    WaresBarcode: StringEditor;
    WaresLabel: StringEditor;
    WaresName: StringEditor;
    MeasureId: IntegerEditor;
    WaresImage: ImageUploadEditor;
    Discontinued: BooleanEditor;
    CounterpartyId: StringEditor;
    QuantityPerUnit: DecimalEditor;
    UnitPrice: DecimalEditor;
    AccountId: IntegerEditor;
}

export class WaresForm extends PrefixedContext {
    static formKey = 'Store.Wares';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!WaresForm.init)  {
            WaresForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;
            var w2 = IntegerEditor;
            var w3 = ImageUploadEditor;
            var w4 = BooleanEditor;
            var w5 = DecimalEditor;

            initFormType(WaresForm, [
                'CategoryId', w0,
                'WaresCode', w1,
                'WaresBarcode', w1,
                'WaresLabel', w1,
                'WaresName', w1,
                'MeasureId', w2,
                'WaresImage', w3,
                'Discontinued', w4,
                'CounterpartyId', w1,
                'QuantityPerUnit', w5,
                'UnitPrice', w5,
                'AccountId', w2
            ]);
        }
    }
}

[CategoriesDialog]; // referenced types
