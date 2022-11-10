import { Widget } from "./Widget";
export declare class TemplatedWidget<TOptions> extends Widget<TOptions> {
    protected idPrefix: string;
    private static templateNames;
    constructor(container: JQuery, options?: TOptions);
    protected byId(id: string): JQuery;
    private byID;
    private static noGeneric;
    private getDefaultTemplateName;
    protected getTemplateName(): string;
    protected getFallbackTemplate(): string;
    protected getTemplate(): string;
}
