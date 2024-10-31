import { initFullHeightGridPage, gridPageInit } from '@serenity-is/corelib';
import { CurrencyRateGrid } from './CurrencyRateGrid';

export default () => gridPageInit(CurrencyRateGrid);

//export default function pageInit() {
//    initFullHeightGridPage(new CurrencyRateGrid($('#GridDiv')).element);
//}