import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { BusinessEntityGrid } from './BusinessEntityGrid';

export default function pageInit() {
    initFullHeightGridPage(new BusinessEntityGrid($('#GridDiv')).element);
}