/// <reference types="jquery" />
import { TemplatedDialog } from "../Dialogs/TemplatedDialog";
import { PropertyGrid } from "./PropertyGrid";
import { Widget } from "./Widget";
export declare namespace Reporting {
    interface ReportDialogOptions {
        reportKey?: string;
    }
    class ReportDialog extends TemplatedDialog<ReportDialogOptions> {
        constructor(opt: ReportDialogOptions);
        protected propertyGrid: PropertyGrid;
        protected propertyItems: Serenity.PropertyItem[];
        protected reportKey: string;
        protected createPropertyGrid(): void;
        loadReport(reportKey: string): void;
        executeReport(targetFrame: string, exportType: string): void;
        protected getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportExecuteRequest extends Serenity.ServiceRequest {
        ExportType?: string;
        ReportKey?: string;
        DesignId?: string;
        Parameters?: any;
    }
    class ReportPage extends Widget<any> {
        constructor(div: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: JQueryEventObject): void;
        protected reportLinkClick(e: JQueryEventObject): void;
    }
    interface ReportRetrieveRequest extends Serenity.ServiceRequest {
        ReportKey?: string;
    }
    interface ReportRetrieveResponse extends Serenity.ServiceResponse {
        ReportKey?: string;
        Properties?: Serenity.PropertyItem[];
        Title?: string;
        InitialSettings?: any;
        IsDataOnlyReport?: boolean;
    }
}
