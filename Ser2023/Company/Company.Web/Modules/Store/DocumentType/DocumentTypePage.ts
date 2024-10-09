import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { DocumentTypeGrid } from './DocumentTypeGrid';

export default function pageInit() {
    initFullHeightGridPage(new DocumentTypeGrid($('#GridDiv')).element);
}