import { initFullHeightGridPage } from '@serenity-is/corelib/q';
import { PersonViewGrid } from './PersonViewGrid';

export default function pageInit() {
    initFullHeightGridPage(new PersonViewGrid($('#GridDiv')).element);
}