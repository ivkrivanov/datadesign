import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ShopsGrid } from './ShopsGrid';

$(function() {
    initFullHeightGridPage(new ShopsGrid($('#GridDiv')).element);
});