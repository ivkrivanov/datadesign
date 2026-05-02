import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { BusinessEntityAddressGrid } from './BusinessEntityAddressGrid';

export default function pageInit() {
    initFullHeightGridPage(new BusinessEntityAddressGrid($('#GridDiv')).element);
}