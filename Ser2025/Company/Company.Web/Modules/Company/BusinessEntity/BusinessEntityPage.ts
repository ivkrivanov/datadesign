import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { BusinessEntityGrid } from './BusinessEntityGrid';

export default () => gridPageInit(BusinessEntityGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new BusinessEntityGrid($('#GridDiv')).element);
//}