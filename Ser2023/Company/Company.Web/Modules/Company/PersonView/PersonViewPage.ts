import { initFullHeightGridPage } from '@serenity-is/corelib';
import { PersonViewGrid } from './PersonViewGrid';

export default function pageInit() {
    initFullHeightGridPage(new PersonViewGrid($('#GridDiv')).element);
}