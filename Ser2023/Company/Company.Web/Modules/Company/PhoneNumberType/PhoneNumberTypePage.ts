import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PhoneNumberTypeGrid } from './PhoneNumberTypeGrid';

export default function pageInit() {
    initFullHeightGridPage(new PhoneNumberTypeGrid($('#GridDiv')).element);
}