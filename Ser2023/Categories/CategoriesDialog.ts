
import { Decorators, EntityDialog } from "@serenity-is/corelib";
import { CategoriesForm, CategoriesRow, CategoriesService } from "../../ServerTypes/Store";

@Decorators.registerClass('Store.Store.CategoriesDialog')
    export class CategoriesDialog extends EntityDialog<CategoriesRow, any> {
        protected getFormKey() { return CategoriesForm.formKey; }
        protected getIdProperty() { return CategoriesRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesRow.nameProperty; }
        protected getService() { return CategoriesService.baseUrl; }
        protected getDeletePermission() { return CategoriesRow.deletePermission; }
        protected getInsertPermission() { return CategoriesRow.insertPermission; }
        protected getUpdatePermission() { return CategoriesRow.updatePermission; }

        protected form = new CategoriesForm(this.idPrefix);

    }
