import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { CategoriesGrid } from './CategoriesGrid';

$(function() {
    initFullHeightGridPage(new CategoriesGrid($('#GridDiv')).element);
});