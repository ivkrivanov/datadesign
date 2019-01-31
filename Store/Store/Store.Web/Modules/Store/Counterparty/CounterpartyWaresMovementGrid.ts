/// <reference path="../WaresMovement/WaresMovementGrid.ts" />

namespace Store.Store {

    import fld = WaresMovementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CounterpartyWaresMovementGrid extends WaresMovementGrid {
        protected getDialogType() { return CounterpartyWaresMovementDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.CounterpartyCompanyName);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected AddButtonClick() {
            this.editItem({ CounterpartyID: this.counterpartyID });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.counterpartyID;
        }

        private _counterpartyID: string;

        get counterpartyID() {
            return this._counterpartyID;
        }

        set counterpartyID(value: string) {
            if (this._counterpartyID !== value) {
                this._counterpartyID = value;
                this.setEquality('CounterpartyID', value);
                this.refresh();
            }
        }
    }
}