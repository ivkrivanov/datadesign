import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { AddressTypeGrid } from './AddressTypeGrid';

export default function pageInit() {
    initFullHeightGridPage(new AddressTypeGrid($('#GridDiv')).element);
}