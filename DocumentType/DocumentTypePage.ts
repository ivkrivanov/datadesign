import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { DocumentTypeGrid } from './DocumentTypeGrid';

$(function () {
    initFullHeightGridPage(new DocumentTypeGrid($('#GridDiv')).element);
});
