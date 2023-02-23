import { Decorators, EntityGrid, LookupEditor } from '@serenity-is/corelib';
import { toId } from '@serenity-is/corelib/q';
import { ExcelExportHelper } from '../../Common/Helpers/ExcelExportHelper';
import { CategoriesColumns, CategoriesRow, CategoriesService, CategoriesTypeRow } from '../../ServerTypes/Store';
import { CategoriesListRequest } from '../../ServerTypes/Store/CategoriesListRequest';
import { CategoriesDialog } from './CategoriesDialog';

@Decorators.registerClass('Store.Store.CategoriesGrid')
export class CategoriesGrid extends EntityGrid<CategoriesRow, any> {
    protected getColumnsKey() { return CategoriesColumns.columnsKey; }
    protected getDialogType() { return CategoriesDialog; }
    protected getIdProperty() { return CategoriesRow.idProperty; }
    protected getInsertPermission() { return CategoriesRow.insertPermission; }
    protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
    protected getService() { return CategoriesService.baseUrl; }

    constructor(container: JQuery) {
        super(container);
    }

    //protected getQuickFilters() {
    //    var filters = super.getQuickFilters();

    //    filters.push({
    //        type: LookupEditor,
    //        options: {
    //            lookupKey: CategoriesTypeRow.lookupKey
    //        },
    //        field: 'CategoriesID',
    //        title: 'CategoriesType',
    //        handler: w => {
    //            (this.view.params as CategoriesListRequest).CategoryId = toId(w.value);
    //        },
    //        cssClass: 'hidden-xs'
    //    });

    //    return filters;
    //}

    protected getDefaultSortBy() {
        return [CategoriesRow.Fields.CategoryCode];
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

        return buttons;
    }
}