/// <reference path="../ProductMovement/ProductMovementDialog.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class CounterpartyProductMovementDialog extends ProductMovementDialog {

        constructor() {
            super();
        }

        UpdateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CounterpartyID, true);
        }
    }
}