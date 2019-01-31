/// <reference path="../WaresMovement/WaresMovementDialog.ts" />

namespace Store.Store {
    @Serenity.Decorators.registerClass()
    export class CounterpartyWaresMovementDialog extends WaresMovementDialog {

        constructor() {
            super();
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CounterpartyID, true);
        }
    }
}
