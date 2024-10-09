import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { MeasuresGrid } from './MeasuresGrid';

$(function() {
    initFullHeightGridPage(new MeasuresGrid($('#GridDiv')).element);
});