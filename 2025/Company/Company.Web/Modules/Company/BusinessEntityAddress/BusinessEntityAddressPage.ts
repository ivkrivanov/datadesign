import { gridPageInit, initFullHeightGridPage } from '@serenity-is/corelib';
import { BusinessEntityAddressGrid } from './BusinessEntityAddressGrid';

export default () => gridPageInit(BusinessEntityAddressGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new BusinessEntityAddressGrid($('#GridDiv')).element);
//}