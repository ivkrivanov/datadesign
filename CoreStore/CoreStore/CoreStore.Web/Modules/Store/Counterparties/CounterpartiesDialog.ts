
namespace CoreStore.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CounterpartiesDialog extends Serenity.EntityDialog<CounterpartiesRow, any> {
        protected getFormKey() { return CounterpartiesForm.formKey; }
        protected getIdProperty() { return CounterpartiesRow.idProperty; }
        protected getLocalTextPrefix() { return CounterpartiesRow.localTextPrefix; }
        protected getNameProperty() { return CounterpartiesRow.nameProperty; }
        protected getService() { return CounterpartiesService.baseUrl; }
        protected getDeletePermission() { return CounterpartiesRow.deletePermission; }
        protected getInsertPermission() { return CounterpartiesRow.insertPermission; }
        protected getUpdatePermission() { return CounterpartiesRow.updatePermission; }

        protected form = new CounterpartiesForm(this.idPrefix);

        //private ProductMoveGrid: CounterpartyProductMovementGrid;
        //private WaresMoveGrid: CounterpartyWaresMovementGrid;
        private loadedState: string;

        constructor() {
            super();

            //this.ProductMoveGrid = new CounterpartyProductMovementGrid(this.byId('ProductMovementGrid'));
            //this.WaresMoveGrid = new CounterpartyWaresMovementGrid(this.byId('WaresMovementGrid'));
            /// force order dialog to open in Dialog mode instead of Panel mode
            /// which is set as default on OrderDialog with @panelAttribute
            //this.ProductMoveGrid.openDialogsAsPanel = false;
            //this.WaresMoveGrid.openDialogsAsPanel = false;

            this.byId('NotesList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
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

        //loadEntity(entity: CounterpartiesRow) {
        //    super.loadEntity(entity);

        //    Serenity.TabsExtensions.setDisabled(this.tabs, 'Product Movement', this.isNewOrDeleted());
        //    Serenity.TabsExtensions.setDisabled(this.tabs, 'Wares Movement', this.isNewOrDeleted());

        //    this.ProductMoveGrid.counterpartyID = entity.CounterpartyID;
        //    this.WaresMoveGrid.counterpartyID = entity.CounterpartyID;
        //}

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('Store.Counterparties');
        }
    }
}