import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { OperationTypeGrid } from './OperationTypeGrid';

$(function() {
    initFullHeightGridPage(new OperationTypeGrid($('#GridDiv')).element);
});