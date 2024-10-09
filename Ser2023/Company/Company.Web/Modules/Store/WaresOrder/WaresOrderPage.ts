import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { WaresOrderGrid } from './WaresOrderGrid';

$(function () {
    initFullHeightGridPage(new WaresOrderGrid($('#GridDiv')).element);
});