import { initFullHeightGridPage } from '@serenity-is/corelib';
import { AddressTypeGrid } from './AddressTypeGrid';

export default function pageInit() {
    initFullHeightGridPage(new AddressTypeGrid($('#GridDiv')).element);
}