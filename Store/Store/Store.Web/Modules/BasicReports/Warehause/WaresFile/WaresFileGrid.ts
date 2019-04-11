namespace Store.BasicReports {
    @Serenity.Decorators.registerClass()
    export class WaresFileGrid extends Serenity.EntityGrid<Store.WaresFileRow, any> {

        protected getColumnsKey() { return "BasicReports.WaresFile"; }
        protected getIdProperty() { return "__id"; }
        protected getNameProperty() { return Store.WaresFileRow.nameProperty; }
        protected getLocalTextPrefix() { return Store.WaresFileRow.localTextPrefix; }
        protected getService() { return WaresFileService.baseUrl; }

        private nextId = 1;

        constructor(container: JQuery) {
            super(container);
        }

        protected onViewProcessData(response: Serenity.ListResponse<Store.WaresFileRow>) {
            response = super.onViewProcessData(response);

            for (var x of response.Entities) {
                (x as any).__id = this.nextId++;
            }
            return response;
        }

        protected getButtons() {
            var buttons = [];

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: WaresFileService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    //new Slick.Aggregators.Sum('InitialValue'),
                    new Slick.Aggregators.Sum('IncomeValue'),
                    new Slick.Aggregators.Sum('ExpenceValue'),
                    new Slick.Aggregators.Sum('RestValue')
                ]
            });

            this.view.setGrouping(
                [{
                    getter: 'ShopName'
                }]);

            return grid;
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

            var orderDate = this.dateRangeQuickFilter('Date', 'Date');

            orderDate.handler = args => {

                var start = args.widget.value;

                var end = args.widget.element.nextAll('.s-DateEditor')
                    .getWidget(Serenity.DateEditor).value;

                (args.request as WaresFileListRequest).StartDate = start;
                (args.request as WaresFileListRequest).EndDate = end;

                args.active = !Q.isEmptyOrNull(start) || !Q.isEmptyOrNull(end);
            };

            filters.push(orderDate);

            return filters;
        }
    }
}