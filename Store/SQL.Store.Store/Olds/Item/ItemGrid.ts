﻿
namespace Store.Store {

    import fld = ItemRow.Fields;

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class ItemGrid extends Serenity.EntityGrid<ItemRow, any> {
        protected getColumnsKey() { return 'Store.Item'; }
        protected getDialogType() { return ItemDialog; }
        protected getIdProperty() { return ItemRow.idProperty; }
        protected getLocalTextPrefix() { return ItemRow.localTextPrefix; }
        protected getService() { return ItemService.baseUrl; }

        private pendingChanges: Q.Dictionary<any> = {};

        constructor(container: JQuery) {
            super(container);

            this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(Common.ExcelExportHelper.createToolButton({
                grid: this,
                service: ItemService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            buttons.push(Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                reportTitle: 'Item List',
                columnTitles: {
                    'Discontinued': 'Dis.',
                },
                tableOptions: {
                    columnStyles: {
                        ItemID: {
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
            var item = ctx.item as ItemRow;
            var pending = this.pendingChanges[item.ItemID];

            if (pending && pending[ctx.column.field] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, ctx.column.field) as number;

            return "<input type='text' class='" + klass +
                "' data-field='" + ctx.column.field +
                "' value='" + Q.formatNumber(value, '0.##') + "'/>";
        }

        private stringInputFormatter(ctx) {
            var klass = 'edit string';
            var item = ctx.item as ItemRow;
            var pending = this.pendingChanges[item.ItemID];
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
            var item = ctx.item as ItemRow;
            var pending = this.pendingChanges[item.ItemID];
            var column = ctx.column as Slick.Column;

            if (pending && pending[idField] !== undefined) {
                klass += ' dirty';
            }

            var value = this.getEffectiveValue(item, idField);
            var markup = "<select class='" + klass +
                "' data-field='" + idField +
                "' style='width: 100%; max-width: 100%'>";
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
            var pending = this.pendingChanges[item.ItemID];
            if (pending && pending[field] !== undefined) {
                return pending[field];
            }

            return item[field];
        }

        protected getColumns() {
            var columns = super.getColumns();
            var num = ctx => this.numericInputFormatter(ctx);
            var str = ctx => this.stringInputFormatter(ctx);

            Q.first(columns, x => x.field === 'QuantityPerUnit').format = str;

            var itemcategory = Q.first(columns, x => x.field === fld.ItemCategoryItemCategoryName);
            itemcategory.referencedFields = [fld.ItemCategoryID];
            itemcategory.format = ctx => this.selectFormatter(ctx, fld.ItemCategoryID, ItemCategoryRow.getLookup());

            //var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
            //supplier.referencedFields = [fld.SupplierID];
            //supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.getLookup());

            Q.first(columns, x => x.field === fld.UnitPrice).format = num;
            Q.first(columns, x => x.field === fld.QuantityPerUnit).format = num;
            Q.first(columns, x => x.field === fld.MeasureMeasureName).format = str;
            //    //Q.first(columns, x => x.field === fld.ReorderLevel).format = num;

            return columns;
        }

        private inputsChange(e: JQueryEventObject) {
            var cell = this.slickGrid.getCellFromEvent(e);
            var item = this.itemAt(cell.row);
            var input = $(e.target);
            var field = input.data('field');
            var text = Q.coalesce(Q.trimToNull(input.val()), '0');
            var pending = this.pendingChanges[item.ItemID];

            var effective = this.getEffectiveValue(item, field);
            var oldText: string;
            if (input.hasClass("numeric"))
                oldText = Q.formatNumber(effective, '0.##');
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
                this.pendingChanges[item.ItemID] = pending = {};
            }

            pending[field] = value;
            item[field] = value;
            this.view.refresh();

            if (input.hasClass("numeric"))
                value = Q.formatNumber(value, '0.##');

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
                entity.ItemID = key;
                Q.serviceRequest('Store/Item/Update', {
                    EntityId: key,
                    Entity: entity
                }, (response) => {
                    delete self.pendingChanges[key];
                    saveNext();
                });
            })();
        }

        protected getQuickFilters() {
            var flt = super.getQuickFilters();

            var q = Q.parseQueryString();
            if (q["cat"]) {
                var category = Q.tryFirst(flt, x => x.field == "ItemCategoryID");
                category.init = e => {
                    e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                };
            }

            return flt;
        }
    }
}