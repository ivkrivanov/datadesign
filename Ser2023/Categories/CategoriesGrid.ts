
import { Decorators, EntityGrid, EnumEditor, LookupEditor, ToolButton } from "@serenity-is/corelib";
import { toId } from "@serenity-is/corelib/q";
import { ExcelExportHelper, PdfExportHelper, ReportHelper } from "@serenity-is/extensions";
import { CategoriesColumns, CategoriesRow, CategoriesService } from "../../ServerTypes/Store";
import { CategoriesListRequest } from "../../ServerTypes/Store/CategoriesListRequest";
import { CategoriesDialog } from "./CategoriesDialog";

const fld = CategoriesRow.Fields;

@Decorators.registerClass('Store.Store.CategoriesGrid')
@Decorators.filterable()
export class CategoriesGrid extends EntityGrid<CategoriesRow, any> {
    protected getColumnsKey() { return CategoriesColumns.columnsKey; }
    protected getDialogType() { return <any>CategoriesDialog; }
    protected getIdProperty() { return CategoriesRow.idProperty; }
    protected getInsertPermission() { return CategoriesRow.insertPermission; }
    protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
    protected getService() { return CategoriesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);

             //this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
        }

        //protected getQuickFilters() {
        //    var flt = super.getQuickFilters();

        //    var q = Q.parseQueryString();
        //    if (q["cattype"]) {
        //        var cattype = Q.tryFirst(flt, x => x.field == "CategoriesType");
        //        cattype.init = e => {
        //            e.element.getWidget(LookupEditor).value = q["cattype"];
        //        };
        //    }

        //    return flt;
        //}

        protected getQuickFilters() {
        var filters = super.getQuickFilters();

        filters.push({
            type: LookupEditor,
            options: {
                lookupKey: CategoriesRow.lookupKey
            },
            field: 'ProductID',
            title: 'Contains Product in Details',
            handler: w => {
                (this.view.params as CategoriesListRequest).CategoryId = toId(w.value);
            },
            cssClass: 'hidden-xs'
        });

        return filters;
    }
        //protected getQuickFilters(): Serenity.QuickSearchField[] {
        //    return [
        //        { name: "CategoriesTypeID", title: "cattype" }];

        //}

        protected getDefaultSortBy() {
            return [CategoriesRow.Fields.CategoryName];
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push(ExcelExportHelper.createToolButton({
                title: 'Export To Excel',
                grid: this,
                service: CategoriesService.baseUrl + '/ListExcel',
                onViewSubmit: () => this.onViewSubmit(),
                separator: true
            }));

            //buttons.push({
            //    title: 'Import From Excel',
            //    cssClass: 'export-xlsx-button',
            //    onClick: () => {
            //        // open import dialog, let it handle rest
            //        var dialog = new CategoriesExcelImportDialog();
            //        dialog.element.on('dialogclose', () => {
            //            this.refresh();
            //            dialog = null;
            //        });
            //        dialog.dialogOpen();
            //    }
            //});

            buttons.push(PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            return buttons;
        }
    }
