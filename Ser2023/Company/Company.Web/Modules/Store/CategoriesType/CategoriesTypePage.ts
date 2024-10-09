
import { initFullHeightGridPage } from "@serenity-is/corelib/q"
import { CategoriesTypeGrid } from "./CategoriesTypeGrid";

$(function () {
    initFullHeightGridPage(new CategoriesTypeGrid($('#GridDiv')).element);
});
