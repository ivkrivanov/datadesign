import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { EmailAddressGrid } from './EmailAddressGrid';

export default () => gridPageInit(EmailAddressGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new EmailAddressGrid($('#GridDiv')).element);
//}