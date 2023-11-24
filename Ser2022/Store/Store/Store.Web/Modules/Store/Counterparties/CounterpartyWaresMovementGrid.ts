/// <reference path="../WaresMovement/WaresMovementGrid.ts" />

namespace Store.Store {

    import fld = WaresMovementRow.Fields;

    @Serenity.Decorators.registerClass()
    export class CounterpartiesWaresMovementGrid extends WaresMovementGrid {
        protected getDialogType() { return CounterpartiesWaresMovementDialog; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns(): Slick.Column[] {
            return super.getColumns().filter(x => x.field !== fld.CounterpartyCompanyName && x.field !== fld.CounterpartyId);
        }

        protected initEntityDialog(itemType, dialog) {
            super.initEntityDialog(itemType, dialog);
            Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
        }

        protected AddButtonClick() {
            this.editItem({ CounterpartyId: this.counterpartyId });
        }

        protected getInitialTitle() {
            return null;
        }

        protected getGridCanLoad() {
            return super.getGridCanLoad() && !!this.counterpartyId;
        }

        private _counterpartyId: string;

        get counterpartyId() {
            return this._counterpartyId;
        }

        set counterpartyId(value: string) {
            if (this._counterpartyId !== value) {
                this._counterpartyId = value;
                this.setEquality('CounterpartyId', value);
                this.refresh();
            }
        }
    }
}