import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { OrderForm, OrderRow, OrderService } from '../../ServerTypes/Store';
import { ReportHelper } from "@serenity-is/extensions";

@Decorators.registerClass('Company.Store.OrderDialog')
export class OrderDialog extends EntityDialog<OrderRow, any> {
    protected getFormKey() { return OrderForm.formKey; }
    protected getRowDefinition() { return OrderRow; }
    protected getService() { return OrderService.baseUrl; }

    protected form = new OrderForm(this.idPrefix);

    getToolbarButtons() {
        var buttons = super.getToolbarButtons();

        buttons.push(ReportHelper.createToolButton({
            title: 'Invoice',
            cssClass: 'export-pdf-button',
            reportKey: 'Northwind.OrderDetail',
            getParams: () => ({
                OrderID: this.entityId
            })
        }));

        return buttons;
    }

    protected updateInterface() {
        super.updateInterface();

        this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
    }
}