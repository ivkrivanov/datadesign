import { Widget } from "../Widgets/Widget";
export declare class SlickPager extends Widget<Slick.PagerOptions> {
    constructor(div: JQuery, o: Slick.PagerOptions);
    _changePage(ctype: string): boolean;
    _updatePager(): void;
}
