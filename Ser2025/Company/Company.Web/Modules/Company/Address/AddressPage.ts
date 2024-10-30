import { gridPageInit } from "@serenity-is/corelib";
import { initFullHeightGridPage } from '@serenity-is/corelib';
import { AddressGrid } from './AddressGrid';

export default () => gridPageInit(AddressGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new AddressGrid($('#GridDiv')).element);
//}