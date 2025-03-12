import { initFullHeightGridPage } from '@serenity-is/corelib';
import { EmailAddressGrid } from './EmailAddressGrid';

export default function pageInit() {
    initFullHeightGridPage(new EmailAddressGrid($('#GridDiv')).element);
}