import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AddressGrid } from './AddressGrid';

$(function() {
    initFullHeightGridPage(new AddressGrid($('#GridDiv')).element);
});