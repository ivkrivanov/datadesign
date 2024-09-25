import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ShippersGrid } from './ShippersGrid';

$(function() {
    initFullHeightGridPage(new ShippersGrid($('#GridDiv')).element);
});