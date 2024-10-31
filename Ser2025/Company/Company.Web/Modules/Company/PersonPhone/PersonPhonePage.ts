import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { PersonPhoneGrid } from './PersonPhoneGrid';

export default () => gridPageInit(PersonPhoneGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new PersonPhoneGrid($('#GridDiv')).element);
//}