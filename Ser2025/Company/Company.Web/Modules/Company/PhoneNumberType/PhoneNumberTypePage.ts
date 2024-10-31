import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { PhoneNumberTypeGrid } from './PhoneNumberTypeGrid';

export default () => gridPageInit(PhoneNumberTypeGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new PhoneNumberTypeGrid($('#GridDiv')).element);
//}