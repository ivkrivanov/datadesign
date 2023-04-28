import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { BusinessEntityContactGrid } from './BusinessEntityContactGrid';

export default function pageInit() {
    initFullHeightGridPage(new BusinessEntityContactGrid($('#GridDiv')).element);
}