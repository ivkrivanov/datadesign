import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { ContactTypeGrid } from './ContactTypeGrid';

export default function pageInit() {
    initFullHeightGridPage(new ContactTypeGrid($('#GridDiv')).element);
}