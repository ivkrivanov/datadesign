import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { WaresGrid } from './WaresGrid';

$(function() {
    initFullHeightGridPage(new WaresGrid($('#GridDiv')).element);
});