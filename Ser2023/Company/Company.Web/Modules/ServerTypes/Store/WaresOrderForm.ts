import { LookupEditor, DateEditor, StringEditor, DecimalEditor, Widget, PrefixedContext } from "@serenity-is/corelib";
import { CounterpartiesEditor } from "@/Store/Counterparties/CounterpartiesEditor";
import { initFormType } from "@serenity-is/corelib/q";

export interface WaresOrderForm {
    OperationTypeId: LookupEditor;
    OrderDate: DateEditor;
    ShopId: LookupEditor;
    CounterpartyId: CounterpartiesEditor;
    EmployeeId: LookupEditor;
    RequiredDate: DateEditor;
    ShipperId: LookupEditor;
    ShippedDate: DateEditor;
    DocumentTypeId: LookupEditor;
    DocumentNumber: StringEditor;
    DocumentDate: DateEditor;
    Total: DecimalEditor;
    DetailList: Widget;
}

export class WaresOrderForm extends PrefixedContext {
    static formKey = 'Store.WaresMovement';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!WaresOrderForm.init)  {
            WaresOrderForm.init = true;

            var w0 = LookupEditor;
            var w1 = DateEditor;
            var w2 = CounterpartiesEditor;
            var w3 = StringEditor;
            var w4 = DecimalEditor;
            var w5 = Widget;

            initFormType(WaresOrderForm, [
                'OperationTypeId', w0,
                'OrderDate', w1,
                'ShopId', w0,
                'CounterpartyId', w2,
                'EmployeeId', w0,
                'RequiredDate', w1,
                'ShipperId', w0,
                'ShippedDate', w1,
                'DocumentTypeId', w0,
                'DocumentNumber', w3,
                'DocumentDate', w1,
                'Total', w4,
                'DetailList', w5
            ]);
        }
    }
}