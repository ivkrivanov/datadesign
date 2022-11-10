export {};
export declare namespace LayoutTimer {
    function store(key: number): void;
    function trigger(key: number): void;
    function onSizeChange(element: () => HTMLElement, handler: () => void, width?: boolean, height?: boolean): number;
    function onWidthChange(element: () => HTMLElement, handler: () => void): number;
    function onHeightChange(element: () => HTMLElement, handler: () => void): number;
    function onShown(element: () => HTMLElement, handler: () => void): number;
    function off(key: number): number;
}
