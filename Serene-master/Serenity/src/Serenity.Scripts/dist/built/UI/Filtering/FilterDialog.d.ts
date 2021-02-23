import { TemplatedDialog } from "../Dialogs/TemplatedDialog";
import { FilterPanel } from "./FilterPanel";
export declare class FilterDialog extends TemplatedDialog<any> {
    private filterPanel;
    constructor();
    get_filterPanel(): FilterPanel;
    protected getTemplate(): string;
    protected getDialogButtons(): {
        text: string;
        click: () => void;
    }[];
}
