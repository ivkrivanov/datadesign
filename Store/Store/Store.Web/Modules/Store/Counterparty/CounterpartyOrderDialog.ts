/// <reference path="../Order/OrderDialog.ts" />

namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class CounterpartyOrderDialog extends OrderDialog {

        constructor() {
            super();
        }

        UpdateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CounterpartyID, true);
        }
    }
}