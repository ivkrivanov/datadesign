import { initFullHeightGridPage } from '@serenity-is/corelib';
import { BusinessEntityContactGrid } from './BusinessEntityContactGrid';

export default function pageInit() {
    initFullHeightGridPage(new BusinessEntityContactGrid($('#GridDiv')).element);
}