
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class WaresMovementDialog extends Serenity.EntityDialog<WaresMovementRow, any> {
        protected getFormKey() { return WaresMovementForm.formKey; }
        protected getIdProperty() { return WaresMovementRow.idProperty; }
        protected getLocalTextPrefix() { return WaresMovementRow.localTextPrefix; }
        protected getNameProperty() { return WaresMovementRow.nameProperty; }
        protected getService() { return WaresMovementService.baseUrl; }

        protected form = new WaresMovementForm(this.idPrefix);

        constructor() {
            super();
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Store.StoremovementDetails',
                getParams: () => ({
                    StoreMovementID: this.get_entityId()
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