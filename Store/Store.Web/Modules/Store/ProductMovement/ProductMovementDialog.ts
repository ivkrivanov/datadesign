
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class ProductMovementDialog extends Serenity.EntityDialog<ProductMovementRow, any> {
        protected getFormKey() { return ProductMovementForm.formKey; }
        protected getIdProperty() { return ProductMovementRow.idProperty; }
        protected getLocalTextPrefix() { return ProductMovementRow.localTextPrefix; }
        protected getNameProperty() { return ProductMovementRow.nameProperty; }
        protected getService() { return ProductMovementService.baseUrl; }

        protected form = new ProductMovementForm(this.idPrefix);

        constructor() {
            super();
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Store.ProductMovementDetails',
                getParams: () => ({
                    ProductMoveID: this.get_entityId()
                })
            }));

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}