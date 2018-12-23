
namespace Warehouse.Store {

    @Serenity.Decorators.registerClass()
    export class MeasureDialog extends Serenity.EntityDialog<MeasureRow, any> {
        protected getFormKey() { return MeasureForm.formKey; }
        protected getIdProperty() { return MeasureRow.idProperty; }
        protected getLocalTextPrefix() { return MeasureRow.localTextPrefix; }
        protected getNameProperty() { return MeasureRow.nameProperty; }
        protected getService() { return MeasureService.baseUrl; }

        protected form = new MeasureForm(this.idPrefix);

    }
}