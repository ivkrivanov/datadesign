/// <reference path="../WaresMovement/WaresMovementDialog.ts" />

namespace CoreStore.Store {
    @Serenity.Decorators.registerClass()
    export class CounterpartiesWaresMovementDialog extends WaresMovementDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CounterpartyId, true);
        }
    }
}