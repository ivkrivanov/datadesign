import { initFullHeightGridPage } from '@serenity-is/corelib';
import { BusinessEntityAddressGrid } from './BusinessEntityAddressGrid';
import { gridPageInit } from "@serenity-is/corelib";

export default () => gridPageInit(BusinessEntityAddressGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new BusinessEntityAddressGrid($('#GridDiv')).element);
//}