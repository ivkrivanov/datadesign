
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CounterpartyGrid extends Serenity.EntityGrid<CounterpartyRow, any> {
        protected getColumnsKey() { return 'Store.Counterparty'; }
        protected getDialogType() { return CounterpartyDialog; }
        protected getIdProperty() { return CounterpartyRow.idProperty; }
        protected getLocalTextPrefix() { return CounterpartyRow.localTextPrefix; }
        protected getService() { return CounterpartyService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Store/Counterparty/ListExcel',
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons
        }
    }
}