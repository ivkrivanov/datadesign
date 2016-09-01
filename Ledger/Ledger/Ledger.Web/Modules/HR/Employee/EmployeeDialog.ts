
namespace Ledger.HR {
    
    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {

        protected getFormKey() {
            return EmployeeForm.formKey;
        }

        protected getIdProperty() {
            return EmployeeRow.idProperty;
        }

        protected getLocalTextPrefix() {
            return EmployeeRow.localTextPrefix;
        }

        protected getNameProperty() {
            return EmployeeRow.nameProperty;
        }

        protected getService() {
            return EmployeeService.baseUrl;
        }

        protected form = new EmployeeForm(this.idPrefix);

        private loadedState: string;

        constructor() {
            super();

            this.byId('NotesList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));

            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.tabs.bind('tabsactivate', () => this.arrange());
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponce(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: EmployeeRow) {
            super.loadEntity(entity);
        }

        onSaveSuccess(responce) {
            super.onSaveSuccess(responce);

            Q.reloadLookup('HR.Employee');
        }
    }
}