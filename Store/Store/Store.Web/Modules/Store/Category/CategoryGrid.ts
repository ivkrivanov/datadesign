﻿
namespace Store.Store {

    @Serenity.Decorators.registerClass()
    export class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey() { return 'Store.Category'; }
        protected getDialogType() { return CategoryDialog; }
        protected getIdProperty() { return CategoryRow.idProperty; }
        protected getLocalTextPrefix() { return CategoryRow.localTextPrefix; }
        protected getService() { return CategoryService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}