/// <reference path="../ProductMovement/ProductMovementDialog.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class CounterpartiesProductMovementDialog extends ProductMovementDialog {

        constructor() {
            super();
        }

        UpdateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CounterpartyId, true);
        }
    }
}