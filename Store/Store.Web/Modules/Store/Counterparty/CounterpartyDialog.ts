
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CounterpartyDialog extends Serenity.EntityDialog<CounterpartyRow, any> {
        protected getFormKey() { return CounterpartyForm.formKey; }
        protected getIdProperty() { return CounterpartyRow.idProperty; }
        protected getLocalTextPrefix() { return CounterpartyRow.localTextPrefix; }
        protected getNameProperty() { return CounterpartyRow.nameProperty; }
        protected getService() { return CounterpartyService.baseUrl; }

        protected form = new CounterpartyForm(this.idPrefix);

        private ProductMoveGrid: CounterpartyProductMovementGrid;
        private WaresMoveGrid: CounterpartyWaresMovementGrid;
        private loadedState: string;

        constructor() {
            super();

            this.ProductMoveGrid = new CounterpartyProductMovementGrid(this.byId('ProductMovementGrid'));
            this.WaresMoveGrid = new CounterpartyWaresMovementGrid(this.byId('WaresMovementGrid'));
            // force order dialog to open in Dialog mode instead of Panel mode
            // which is set as default on OrderDialog with @panelAttribute
            this.ProductMoveGrid.openDialogsAsPanel = false;
            this.WaresMoveGrid.openDialogsAsPanel = false;

            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: CounterpartyRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Product Movement', this.isNewOrDeleted());
            Serenity.TabsExtensions.setDisabled(this.tabs, 'Wares Movement', this.isNewOrDeleted());

            this.ProductMoveGrid.counterpartyID = entity.CounterpartyID;
            this.WaresMoveGrid.counterpartyID = entity.CounterpartyID;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('Store.Counterparty');
        }
    }
}