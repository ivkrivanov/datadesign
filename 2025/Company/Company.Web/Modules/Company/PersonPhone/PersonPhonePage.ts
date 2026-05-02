import { initFullHeightGridPage } from '@serenity-is/corelib';
import { PersonPhoneGrid } from './PersonPhoneGrid';

export default function pageInit() {
    initFullHeightGridPage(new PersonPhoneGrid($('#GridDiv')).element);
}