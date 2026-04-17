import { EntityDialog } from '@serenity-is/corelib';
import { MeasuresForm, MeasuresRow, MeasuresService } from '../../ServerTypes/Sales';

export class MeasuresDialog extends EntityDialog<MeasuresRow, any> {
    static override [Symbol.typeInfo] = this.registerClass("Company.Sales.");

    protected override getFormKey() { return MeasuresForm.formKey; }
    protected override getRowDefinition() { return MeasuresRow; }
    protected override getService() { return MeasuresService.baseUrl; }

    protected form = new MeasuresForm(this.idPrefix);
}