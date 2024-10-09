import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ProductsGrid } from './ProductsGrid';

$(function() {
    initFullHeightGridPage(new ProductsGrid($('#GridDiv')).element);
});