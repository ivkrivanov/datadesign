import { Decorators, PropertyDialog } from "@serenity-is/corelib";
import { DialogButton, isEmptyOrNull, notifyError, notifyInfo } from "@serenity-is/corelib/q";
import { toId } from '@serenity-is/corelib/q';
import { CategoriesExcelImportForm, CategoriesService } from "../../ServerTypes/Store";


@Decorators.registerClass('Store.Store.CategoriesExcelImportDialog')
export class CategoriesExcelImportDialog extends PropertyDialog<any, any>{

    protected form: CategoriesExcelImportForm;

    constructor() {
        super();

        this.form = new CategoriesExcelImportForm(this.idPrefix);
    }

    protected getDialogTitle(): string {
        return "Excel Import";
    }

    protected getDialogButtons(): DialogButton[] {
        return [
            {
                text: 'Import',
                click: () => {
                    if (!this.validateBeforeSave())
                        return;

                    if (this.form.FileName.value == null ||
                        isEmptyOrNull(this.form.FileName.value.Filename)) {
                        notifyError("Please select a file!");
                        return;
                    }

                    CategoriesService.ExcelImport({
                        FileName: this.form.FileName.value.Filename
                    }, response => {
                        notifyInfo(
                            'Inserted: ' + (response.Inserted || 0) +
                            ', Updated: ' + (response.Updated || 0));

                        if (response.ErrorList != null && response.ErrorList.length > 0) {
                            notifyError(response.ErrorList.join(',\r\n '));
                        }

                        this.dialogClose();
                    });
                },
            },
            {
                text: 'Cancel',
                click: () => this.dialogClose()
            }
        ];
    }
}

