import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { CurrencyRateGrid } from './CurrencyRateGrid';

export default function pageInit() {
    initFullHeightGridPage(new CurrencyRateGrid($('#GridDiv')).element);
}