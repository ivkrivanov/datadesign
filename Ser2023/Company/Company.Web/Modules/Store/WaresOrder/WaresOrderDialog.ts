import { WaresOrderForm, WaresOrderRow, WaresOrderService } from "@/ServerTypes/Store";
import { Decorators, EntityDialog } from "@serenity-is/corelib";
import { ReportHelper } from "../../Common/Reporting/ReportHelper";

@Decorators.registerClass('Company.Store.WaresOrderDialog')
export class WaresOrderDialog<P = {}> extends EntityDialog<WaresOrderRow, P> {
    protected getFormKey() { return WaresOrderForm.formKey; }
    protected getRowDefinition() { return WaresOrderRow; }
    protected getService() { return WaresOrderService.baseUrl; }

    protected form = new WaresOrderForm(this.idPrefix);

    getToolbarButtons() {
        var buttons = super.getToolbarButtons();

        buttons.push(ReportHelper.createToolButton({
            title: 'Invoice',
            cssClass: 'export-pdf-button',
            reportKey: 'Northwind.OrderDetail',
            getParams: () => ({
                WaresOrderID: this.entityId
            })
        }));

        return buttons;
    }

    protected updateInterface() {
        super.updateInterface();

        this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
    }
}
