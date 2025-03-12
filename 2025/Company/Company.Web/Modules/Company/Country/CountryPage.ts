import { initFullHeightGridPage } from '@serenity-is/corelib';
import { CountryGrid } from './CountryGrid';

export default function pageInit() {
    initFullHeightGridPage(new CountryGrid($('#GridDiv')).element);
}