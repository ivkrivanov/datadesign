/// <reference types="jqueryui" />
import { TemplatedDialog } from "../Dialogs/TemplatedDialog";
import { ToolButton } from "../Widgets/Toolbar";
import { IDataGrid } from "./IDataGrid";
export declare class ColumnPickerDialog extends TemplatedDialog<any> {
    private ulVisible;
    private ulHidden;
    private colById;
    allColumns: Slick.Column[];
    visibleColumns: string[];
    defaultColumns: string[];
    done: () => void;
    constructor();
    static createToolButton(grid: IDataGrid): ToolButton;
    protected getDialogButtons(): {
        text: string;
        click: () => void;
    }[];
    protected getDialogOptions(): JQueryUI.DialogOptions;
    private getTitle;
    private allowHide;
    private createLI;
    private updateListStates;
    protected setupColumns(): void;
    protected onDialogOpen(): void;
    protected getTemplate(): string;
}
