import { StoreAverageForm } from "@/ServerTypes/Store";
import { Decorators, PropertyDialog } from "@serenity-is/corelib";
import { DialogButton } from "@serenity-is/corelib/q";

@Decorators.registerClass('Company.Store.StoreAverageDialog')
export class StoreAverageDialog<P = {}> extends PropertyDialog<any, P> {

    //private form: StoreAverageForm;

    protected fofm = new StoreAverageForm(this.idPrefix);

    protected getDialogTitle(): string {
        return "Warehouse";
    }

    protected getDialogButtons(): DialogButton[] {
        return [
            {
                text: 'Import',
                click: () => {
                    if (!this.validateBeforeSave())
                        return;

                    //if (this.form.FileName.value == null ||
                    //    Q.isEmptyOrNull(this.form.FileName.value.Filename)) {
                    //    Q.notifyError("Please select a file!");
                    //    return;
                    //}

                    //StoreService.Warehouse({
                    //    //FileName: this.form.FileName.value.Filename
                    //}, response => {
                    //    notifyInfo(
                    //        'Inserted: ' + (response.Inserted || 0) +
                    //        ', Updated: ' + (response.Updated || 0));

                    //    if (response.ErrorList != null && response.ErrorList.length > 0) {
                    //        notifyError(response.ErrorList.join(',\r\n '));
                    //    }

                    //    this.dialogClose();
                    //});
                },
            },
            {
                text: 'Cancel',
                click: () => this.dialogClose()
            }
        ];
    }

}
