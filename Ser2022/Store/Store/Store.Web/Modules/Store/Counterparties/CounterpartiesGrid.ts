
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CounterpartiesGrid extends Serenity.EntityGrid<CounterpartiesRow, any> {
        protected getColumnsKey() { return 'Store.Counterparties'; }
        protected getDialogType() { return CounterpartiesDialog; }
        protected getIdProperty() { return CounterpartiesRow.idProperty; }
        protected getInsertPermission() { return CounterpartiesRow.insertPermission; }
        protected getLocalTextPrefix() { return CounterpartiesRow.localTextPrefix; }
        protected getService() { return CounterpartiesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Store/Counterparties/ListExcel',
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