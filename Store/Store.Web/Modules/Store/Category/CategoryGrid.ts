
namespace Store.Store {

    import fld = CategoryRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey() { return 'Store.Category'; }
        protected getDialogType() { return CategoryDialog; }
        protected getIdProperty() { return CategoryRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getService() { return CategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

            //this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getQuickFilters() {
            var flt = super.getQuickFilters();

            var q = Q.parseQueryString();
            if (q["cattype"]) {
                var cattype = Q.tryFirst(flt, x => x.field == "CategoryTypeID");
                cattype.init = e => {
                    e.element.getWidget(Serenity.LookupEditor).value = q["cattype"];
                };
            }

            return flt;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: 'Export To Excel',
                grid: this,
                service: CategoryService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new CategoryExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            return buttons;
        }
    }
}