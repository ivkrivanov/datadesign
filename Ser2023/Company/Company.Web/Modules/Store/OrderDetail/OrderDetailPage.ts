import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { OrderDetailGrid } from './OrderDetailGrid';

export default function pageInit() {
    initFullHeightGridPage(new OrderDetailGrid($('#GridDiv')).element);
}