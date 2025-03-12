import { initFullHeightGridPage } from '@serenity-is/corelib';
import { CurrencyGrid } from './CurrencyGrid';

export default function pageInit() {
    initFullHeightGridPage(new CurrencyGrid($('#GridDiv')).element);
}