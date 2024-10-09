import { LookupEditor, DateEditor, DecimalEditor, StringEditor, PrefixedContext } from "@serenity-is/corelib";
import { CounterpartiesEditor } from "@/Store/Counterparties/CounterpartiesEditor";
import { OrderDetailEditor } from "@/Store/OrderDetail/OrderDetailEditor";
import { initFormType } from "@serenity-is/corelib/q";

export interface OrderForm {
    OperationTypeId: LookupEditor;
    OrderDate: DateEditor;
    ShopId: LookupEditor;
    CounterpartyId: CounterpartiesEditor;
    EmployeeId: LookupEditor;
    RequiredDate: DateEditor;
    DetailList: OrderDetailEditor;
    Value: DecimalEditor;
    VAT: DecimalEditor;
    Total: DecimalEditor;
    DocumentTypeId: LookupEditor;
    DocumentNumber: StringEditor;
    DocumentDate: DateEditor;
    ShipperId: LookupEditor;
    ShippedDate: DateEditor;
}

export class OrderForm extends PrefixedContext {
    static formKey = 'Store.Order';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!OrderForm.init)  {
            OrderForm.init = true;

            var w0 = LookupEditor;
            var w1 = DateEditor;
            var w2 = CounterpartiesEditor;
            var w3 = OrderDetailEditor;
            var w4 = DecimalEditor;
            var w5 = StringEditor;

            initFormType(OrderForm, [
                'OperationTypeId', w0,
                'OrderDate', w1,
                'ShopId', w0,
                'CounterpartyId', w2,
                'EmployeeId', w0,
                'RequiredDate', w1,
                'DetailList', w3,
                'Value', w4,
                'VAT', w4,
                'Total', w4,
                'DocumentTypeId', w0,
                'DocumentNumber', w5,
                'DocumentDate', w1,
                'ShipperId', w0,
                'ShippedDate', w1
            ]);
        }
    }
}