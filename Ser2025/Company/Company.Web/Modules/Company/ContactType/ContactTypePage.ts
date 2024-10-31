import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { ContactTypeGrid } from './ContactTypeGrid';

export default () => gridPageInit(ContactTypeGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new ContactTypeGrid(('#GridDiv')).element);
//}