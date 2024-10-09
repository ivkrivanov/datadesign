import { Decorators  } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { GridEditorDialog } from "@serenity-is/extensions";
import { WaresOrderDetailForm, WaresOrderDetailRow, WaresRow } from "@/ServerTypes/Store";

@Decorators.registerClass('Company.Store.WaresOrderDetailDialog')
export class WaresOrderDetailDialog extends GridEditorDialog<WaresOrderDetailRow> {
    protected getFormKey() { return WaresOrderDetailForm.formKey; }
    protected getLocalTextPrefix() { return WaresOrderDetailRow.localTextPrefix; }

    protected form: WaresOrderDetailForm;

    //constructor(props: WidgetProps<any>) {
    //    super(props);
    constructor() {
        super();

        this.form = new WaresOrderDetailForm(this.idPrefix);

        this.form.WaresID.changeSelect2(async e => {
            var waresID = toId(this.form.WaresID.value);
            if (waresID != null) {
                this.form.SinglePrice.value = (await WaresRow.getLookupAsync()).itemById[waresID].UnitPrice;
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
