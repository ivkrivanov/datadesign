import { Decorators } from "@serenity-is/corelib";
import { toId} from '@serenity-is/corelib/q';
import { GridEditorDialog } from "@serenity-is/extensions";
import { OrderDetailForm, OrderDetailRow, ProductsRow } from '../../ServerTypes/Store';
//import { WidgetProps } from "@serenity-is/corelib/ui/widgets/widgetutils";

@Decorators.registerClass('Company.Store.OrderDetailDialog')
export class OrderDetailDialog extends GridEditorDialog<OrderDetailRow> {
    protected getFormKey() { return OrderDetailForm.formKey; }
    protected getLocalTextPrefix() { return OrderDetailRow.localTextPrefix; }

    //protected getRowDefinition() { return OrderDetailRow; }
    //protected getService() { return OrderDetailService.baseUrl; }
    //protected getDeletePermission() { return OrderDetailRow.deletePermission; }
    //protected getInsertPermission() { return OrderDetailRow.insertPermission; }
    //protected getUpdatePermission() { return OrderDetailRow.updatePermission; }

    protected form: OrderDetailForm;

    //constructor(props: WidgetProps<any>) {
    //    super(props);
    constructor() {
        super();

        this.form = new OrderDetailForm(this.idPrefix);

        this.form.ProductId.changeSelect2(async e => {
            var productId = toId(this.form.ProductId.value);
            if (productId != null) {
                this.form.SinglePrice.value = (await ProductsRow.getLookupAsync()).itemById[productId].UnitPrice;
                this.form.SalePrice.value = (await ProductsRow.getLookupAsync()).itemById[productId].SalePrice;
            }
        });

        this.form.Discount.addValidationRule(this.uniqueName, e => {
            var price = this.form.SinglePrice.value;
            var quantity = this.form.Quantity.value;
            var discount = this.form.Discount.value;
            if (price != null && quantity != null && discount != null &&
                discount > 0 && discount >= price * quantity) {
                return "Discount can't be higher than total price!";
            }
        });
    }
}