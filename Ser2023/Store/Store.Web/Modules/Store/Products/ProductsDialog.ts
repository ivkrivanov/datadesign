import { Decorators, EntityDialog } from '@serenity-is/corelib';
import { ReportHelper } from "@serenity-is/extensions";
import { ProductsForm, ProductsRow, ProductsService } from '../../ServerTypes/Store';

@Decorators.registerClass('Store.Store.ProductsDialog')
export class ProductsDialog extends EntityDialog<ProductsRow, any> {
    protected getFormKey() { return ProductsForm.formKey; }
    protected getIdProperty() { return ProductsRow.idProperty; }
    protected getLocalTextPrefix() { return ProductsRow.localTextPrefix; }
    protected getNameProperty() { return ProductsRow.nameProperty; }
    protected getService() { return ProductsService.baseUrl; }
    protected getDeletePermission() { return ProductsRow.deletePermission; }
    protected getInsertPermission() { return ProductsRow.insertPermission; }
    protected getUpdatePermission() { return ProductsRow.updatePermission; }

    protected form = new ProductsForm(this.idPrefix);

    constructor() {
        super();
    }

    getToolbarButtons() {
        var buttons = super.getToolbarButtons();

        buttons.push(ReportHelper.createToolButton({
            title: 'Invoice',
            cssClass: 'export-pdf-button',
            reportKey: 'Northwind.OrderDetail',
            getParams: () => ({
                OrderID: this.get_entityId()
            })
        }));

        return buttons;
    }

    protected updateInterface() {
        super.updateInterface();

        this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
    }
}