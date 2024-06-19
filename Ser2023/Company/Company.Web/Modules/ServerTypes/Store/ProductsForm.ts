import { LookupEditor, StringEditor, ImageUploadEditor, BooleanEditor, DecimalEditor, IntegerEditor, PrefixedContext } from "@serenity-is/corelib";
import { MeasuresDialog } from "@/Store/Measures/MeasuresDialog";
import { ProductDetailsEditor } from "@/Store/ProductDetails/ProductDetailsEditor";
import { initFormType } from "@serenity-is/corelib/q";

export interface ProductsForm {
    CategoryId: LookupEditor;
    ProductName: StringEditor;
    ProductCode: StringEditor;
    ProductBarcode: StringEditor;
    ProductLabel: StringEditor;
    MeasureId: LookupEditor;
    ProductImage: ImageUploadEditor;
    Discontinued: BooleanEditor;
    UnitPrice: DecimalEditor;
    QuantityPerUnit: StringEditor;
    DetailList: ProductDetailsEditor;
    UnitsInStock: IntegerEditor;
    UnitsOnOrder: IntegerEditor;
    ReorderLevel: IntegerEditor;
}

export class ProductsForm extends PrefixedContext {
    static formKey = 'Store.Products';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!ProductsForm.init)  {
            ProductsForm.init = true;

            var w0 = LookupEditor;
            var w1 = StringEditor;
            var w2 = ImageUploadEditor;
            var w3 = BooleanEditor;
            var w4 = DecimalEditor;
            var w5 = ProductDetailsEditor;
            var w6 = IntegerEditor;

            initFormType(ProductsForm, [
                'CategoryId', w0,
                'ProductName', w1,
                'ProductCode', w1,
                'ProductBarcode', w1,
                'ProductLabel', w1,
                'MeasureId', w0,
                'ProductImage', w2,
                'Discontinued', w3,
                'UnitPrice', w4,
                'QuantityPerUnit', w1,
                'DetailList', w5,
                'UnitsInStock', w6,
                'UnitsOnOrder', w6,
                'ReorderLevel', w6
            ]);
        }
    }
}

[MeasuresDialog]; // referenced types