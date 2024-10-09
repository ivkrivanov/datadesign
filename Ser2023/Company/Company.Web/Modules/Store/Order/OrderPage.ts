import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { OrderGrid } from './OrderGrid';

export default function pageInit() {
    initFullHeightGridPage(new OrderGrid($('#GridDiv')).element);
}