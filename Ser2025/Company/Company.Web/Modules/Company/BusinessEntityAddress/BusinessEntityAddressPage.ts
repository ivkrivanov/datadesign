import { initFullHeightGridPage } from '@serenity-is/corelib';
import { BusinessEntityAddressGrid } from './BusinessEntityAddressGrid';

export default function pageInit() {
    initFullHeightGridPage(new BusinessEntityAddressGrid($('#GridDiv')).element);
}