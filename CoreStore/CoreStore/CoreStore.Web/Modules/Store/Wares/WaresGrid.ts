
namespace CoreStore.Store {

    import fld = WaresRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class WaresGrid extends Serenity.EntityGrid<WaresRow, any> {
        protected getColumnsKey() { return 'Store.Wares'; }
        protected getDialogType() { return WaresDialog; }
        protected getIdProperty() { return WaresRow.idProperty; }
        protected getInsertPermission() { return WaresRow.insertPermission; }
        protected getLocalTextPrefix() { return WaresRow.localTextPrefix; }
        protected getService() { return WaresService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getQuickFilters() {
            var flt = super.getQuickFilters();

            var q = Q.parseQueryString();
            if (q["cat"]) {
                var category = Q.tryFirst(flt, x => x.field == "CategoryId");
                category.init = e => {
                    e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                };
            }

            return flt;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                title: 'Export To Excel',
                grid: this,
                service: WaresService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push({
                title: 'Import From Excel',
                cssClass: 'export-xlsx-button',
                onClick: () => {
                    // open import dialog, let it handle rest
                    var dialog = new WaresExcelImportDialog();
                    dialog.element.on('dialogclose', () => {
                        this.refresh();
                        dialog = null;
                    });
                    dialog.dialogOpen();
                }
            });

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Wares List',
                columnTitles: {
                    'Discontinued': 'Dis.',
                },
                tableOptions: {
                    columnStyles: {
                        WaresID: {
                            columnWidth: 25,
                            halign: 'right'
                        },
                        Discountinued: {
                            columnWidth: 25
                        }
                    }
                }
            }));

            buttons.push({
                title: 'Save Changes',
                cssClass: 'apply-changes-button disabled',
                onClick: e => this.saveClick(),
                separator: true
            });

            return buttons;
        }

        protected onViewProcessData(response) {
            this.pendingChanges = {};
            this.setSaveButtonState();
            return super.onViewProcessData(response);
        }

        private numericInputFormatter(ctx) {
            var klass = 'edit numeric';
            var item = ctx.item as WaresRow;
            var pending = this.pendingChanges[item.WaresId];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            return "<input type='text' style='text - align:right' class='" + klass +
                "' data-field='" + ctx.column.field +
                "' value='" + Q.formatNumber(value, '0.####') + "'/>";
        }

        private moneyInputFormatter(ctx) {
            var klass = 'edit numeric';
            var item = ctx.item as WaresRow;
            var pending = this.pendingChanges[item.WaresId];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            return "<input type='text' style='text - align:right' class='" + klass +
                "' data-field='" + ctx.column.field +
                "' value='" + Q.formatNumber(value, '0.0000') + "'/>";
        }

        private stringInputFormatter(ctx) {
            var klass = 'edit string';
            var item = ctx.item as WaresRow;
            var pending = this.pendingChanges[item.WaresId];
            var column = ctx.column as Slick.Column;

            if (pending && pending[column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, column.field) as string;

            return "<input type='text' class='" + klass +
                "' data-field='" + column.field +
                "' value='" + Q.attrEncode(value) +
                "' maxlength='" + column.sourceItem.maxLength + "'/>";
        }

        private selectFormatter(ctx: Slick.FormatterContext, idField: string, lookup: Q.Lookup<any>) {
            var klass = 'edit';
            var item = ctx.item as WaresRow;
            var pending = this.pendingChanges[item.WaresId];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField +
                "' style='width: 100%; max-width: 100%; text-align:right'>";
            for (var c of lookup.items) {
                let id = c[lookup.idField];
                markup += "<option value='" + Q.attrEncode(id) + "'"
                if (id == value) {
                    markup += " selected";
                }
                markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
            }
            return markup + "</select>";
        }

        private getEffectiveValue(item, field): any {
            var pending = this.pendingChanges[item.WaresID];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        protected getColumns(): Slick.Column[] {
            var columns = super.getColumns();
            var num = ctx => this.numericInputFormatter(ctx);
            var str = ctx => this.stringInputFormatter(ctx);
            var mon = ctx => this.moneyInputFormatter(ctx);

            //Q.first(columns, x => x.field === 'QuantityPerUnit').format = str;

            var warescategory = Q.first(columns, x => x.field === fld.CategoryCategoryName);
            warescategory.referencedFields = [fld.CategoryId];
            warescategory.format = ctx => this.selectFormatter(ctx, fld.CategoryId, CategoriesRow.getLookup());

            //var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
            //supplier.referencedFields = [fld.SupplierID];
            //supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.getLookup());

            Q.first(columns, x => x.field === fld.UnitPrice).format = mon;
            Q.first(columns, x => x.field == fld.UnitPrice).cssClass += " col-unit-price";
            Q.first(columns, x => x.field === fld.QuantityPerUnit).format = num;
            Q.first(columns, x => x.field === fld.MeasureName).format = str;
            //Q.first(columns, x => x.field === fld.ReorderLevel).format = num;

            return columns;
        }

        /**
        * This method is called for all rows
        * @param item Data item for current row
        * @param index Index of the row in grid
        */
        protected getItemCssClass(item: Store.WaresRow, index: number): string {
            let klass: string = "";

            if (item.Discontinued == true)
                klass += " discontinued";
            else if (item.UnitsInStock <= 0)
                klass += " out-of-stock";
            else if (item.UnitsInStock < 20)
                klass += " critical-stock";
            else if (item.UnitsInStock > 50)
                klass += " needs-reorder";

            if (item.UnitPrice >= 50)
                klass += " high-price";
            else if (item.UnitPrice >= 20)
                klass += " medium-price";
            else
                klass += " low-price";

            return Q.trimToNull(klass);
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.WaresId];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.####');
            else
                oldText = effective as string;

            var value;
            if (field === 'UnitPrice') {
                value = Q.parseDecimal(text);
                if (value == null || isNaN(value)) {
                    Q.notifyError(Q.text('Validation.Decimal'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
            }
            else if (input.hasClass("numeric")) {
                var i = Q.parseInteger(text);
                if (isNaN(i) || i > 32767 || i < 0) {
                    Q.notifyError(Q.text('Validation.Integer'), '', null);
                    input.val(oldText);
                    input.focus();
                    return;
                }
                value = i;
            }
            else
                value = text;

            if (!pending) {
                this.pendingChanges[item.WaresId] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.####');

            input.val(value).addClass('dirty');

            this.setSaveButtonState();
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                Object.keys(this.pendingChanges).length === 0);
        }

        private saveClick() {
            if (Object.keys(this.pendingChanges).length === 0) {
                return;
            }

            // this calls save service for all modified rows, one by one
            // you could write a batch update service
            var keys = Object.keys(this.pendingChanges);
            var current = -1;
            var self = this;

            (function saveNext() {
                if (++current >= keys.length) {
                    self.refresh();
                    return;
                }

                var key = keys[current];
                var entity = Q.deepClone(self.pendingChanges[key]);
                entity.WaresID = key;
                Q.serviceRequest('Store/Wares/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }
    }
}