import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ProductDetailsGrid } from './ProductDetailsGrid';

$(function() {
    initFullHeightGridPage(new ProductDetailsGrid($('#GridDiv')).element);
});