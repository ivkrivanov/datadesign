import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AddressTypeGrid } from './AddressTypeGrid';

$(function() {
    initFullHeightGridPage(new AddressTypeGrid($('#GridDiv')).element);
});