import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { CountryGrid } from './CountryGrid';

$(function() {
    initFullHeightGridPage(new CountryGrid($('#GridDiv')).element);
});