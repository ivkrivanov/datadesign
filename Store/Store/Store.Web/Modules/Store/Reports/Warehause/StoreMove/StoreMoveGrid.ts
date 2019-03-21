namespace Store.Store {
    @Serenity.Decorators.registerClass()
    export class StoreMove extends Serenity.EntityGrid<StoreMoveRow, any> {

        protected getColumnsKey() { return "Store.StoreMoves"; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return StoreMoveRow.nameProperty; }
        protected getLocalTextPrefix() { return StoreMoveRow.localTextPrefix; }
        protected getService() { return StoreMoveService.baseUrl; }

        private nextId = 1;

        constructor(container: JQuery) {
            super(container);
        }

        protected getButtons() {
            var buttons = [];

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: StoreMoveService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }

        protected getQuickFilters() {
            var filters = super.getQuickFilters();




            return filters;
        }
    }
}