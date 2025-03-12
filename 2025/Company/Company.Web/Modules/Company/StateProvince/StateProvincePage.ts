import { initFullHeightGridPage } from '@serenity-is/corelib';
import { StateProvinceGrid } from './StateProvinceGrid';

export default function pageInit() {
    initFullHeightGridPage(new StateProvinceGrid($('#GridDiv')).element);
}