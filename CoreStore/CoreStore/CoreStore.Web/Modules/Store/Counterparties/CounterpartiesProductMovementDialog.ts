/// <reference path="../ProductMovement/ProductMovementDialog.ts" />

namespace CoreStore.Store {

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