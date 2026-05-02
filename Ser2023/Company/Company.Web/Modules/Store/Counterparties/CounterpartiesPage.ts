import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { CounterpartiesGrid } from './CounterpartiesGrid';

$(function() {
    initFullHeightGridPage(new CounterpartiesGrid($('#GridDiv')).element);
});