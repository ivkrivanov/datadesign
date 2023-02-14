import { DataChangeInfo } from "../../Types/DataChangeInfo";
import { Widget } from "../Widgets/Widget";
export declare namespace SubDialogHelper {
    function bindToDataChange(dialog: any, owner: Widget<any>, dataChange: (p1: any, p2: DataChangeInfo) => void, useTimeout?: boolean): any;
    function triggerDataChange(dialog: Widget<any>): any;
    function triggerDataChanged(element: JQuery): JQuery;
    function bubbleDataChange(dialog: any, owner: Widget<any>, useTimeout?: boolean): any;
    function cascade(cascadedDialog: any, ofElement: JQuery): any;
    function cascadedDialogOffset(element: JQuery): any;
}
