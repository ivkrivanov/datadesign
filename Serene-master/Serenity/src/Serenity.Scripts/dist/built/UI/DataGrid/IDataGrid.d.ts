import { FilterStore } from "../Filtering/FilterStore";
export interface IDataGrid {
    getElement(): JQuery;
    getGrid(): Slick.Grid;
    getView(): Slick.RemoteView<any>;
    getFilterStore(): FilterStore;
}
declare global {
    namespace Slick {
        interface Column {
            sourceItem?: Serenity.PropertyItem;
        }
    }
}
