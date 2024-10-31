import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { CurrencyGrid } from './CurrencyGrid';

export default () => gridPageInit(CurrencyGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new CurrencyGrid($('#GridDiv')).element);
//}