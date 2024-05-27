
import { Decorators, EntityDialog } from "@serenity-is/corelib";
import { CategoriesTypeForm, CategoriesTypeRow, CategoriesTypeService } from "../../ServerTypes/Store";

    @Decorators.registerClass('Store.Store.CategoriesTypeDialog')
    export class CategoriesTypeDialog extends EntityDialog<CategoriesTypeRow, any> {
        protected getFormKey() { return CategoriesTypeForm.formKey; }
        protected getIdProperty() { return CategoriesTypeRow.idProperty; }
        protected getLocalTextPrefix() { return CategoriesTypeRow.localTextPrefix; }
        protected getNameProperty() { return CategoriesTypeRow.nameProperty; }
        protected getService() { return CategoriesTypeService.baseUrl; }
        protected getDeletePermission() { return CategoriesTypeRow.deletePermission; }
        protected getInsertPermission() { return CategoriesTypeRow.insertPermission; }
        protected getUpdatePermission() { return CategoriesTypeRow.updatePermission; }

        protected form = new CategoriesTypeForm(this.idPrefix);
    }
