import { DataGrid } from "./DataGrid";
/**
 * A mixin that can be applied to a DataGrid for tree functionality
 */
export declare class TreeGridMixin<TItem> {
    private options;
    private dataGrid;
    private getId;
    constructor(options: TreeGridMixinOptions<TItem>);
    /**
     * Expands / collapses all rows in a grid automatically
     */
    toggleAll(): void;
    collapseAll(): void;
    expandAll(): void;
    /**
     * Reorders a set of items so that parents comes before their children.
     * This method is required for proper tree ordering, as it is not so easy to perform with SQL.
     * @param items list of items to be ordered
     * @param getId a delegate to get ID of a record (must return same ID with grid identity field)
     * @param getParentId a delegate to get parent ID of a record
     */
    static applyTreeOrdering<TItem>(items: TItem[], getId: (item: TItem) => any, getParentId: (item: TItem) => any): TItem[];
}
export interface TreeGridMixinOptions<TItem> {
    grid: DataGrid<TItem, any>;
    getParentId: (item: TItem) => any;
    toggleField: string;
    initialCollapse?: () => boolean;
}
