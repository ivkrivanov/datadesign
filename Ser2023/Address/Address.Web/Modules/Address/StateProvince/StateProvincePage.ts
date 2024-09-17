import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { StateProvinceGrid } from './StateProvinceGrid';

$(function() {
    initFullHeightGridPage(new StateProvinceGrid($('#GridDiv')).element);
});