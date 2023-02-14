/// <reference types="jquery" />
declare namespace Slick {
    interface AutoTooltipsOptions {
        enableForHeaderCells?: boolean;
        enableForCells?: boolean;
        maxToolTipLength?: number;
    }
    class AutoTooltips {
        constructor(options: AutoTooltipsOptions);
    }
    type Format = (ctx: Slick.FormatterContext) => string;
    type AsyncPostRender = (cellNode: any, row: number, item: any, column: Column, clean?: boolean) => void;
    type ColumnFormatter = (row: number, cell: number, value: any, column: Column, item: any) => string;
    interface Column {
        asyncPostRender?: AsyncPostRender;
        behavior?: any;
        cannotTriggerInsert?: boolean;
        cssClass?: string;
        defaultSortAsc?: boolean;
        editor?: Function;
        field: string;
        focusable?: boolean;
        formatter?: ColumnFormatter;
        headerCssClass?: string;
        id?: string;
        maxWidth?: any;
        minWidth?: number;
        name?: string;
        rerenderOnResize?: boolean;
        resizable?: boolean;
        selectable?: boolean;
        sortable?: boolean;
        toolTip?: string;
        width?: number;
        format?: (ctx: Slick.FormatterContext) => string;
        referencedFields?: string[];
        sortOrder?: number;
        groupTotalsFormatter?: (p1?: GroupTotals<any>, p2?: Column) => string;
        visible?: boolean;
    }
    interface ColumnSort {
        columnId?: string;
        sortAsc?: boolean;
    }
    class Event<TArgs = any> {
        subscribe(handler: Handler<TArgs>): void;
        unsubscribe(handler: Handler<TArgs>): void;
        notify(args?: TArgs, e?: IEventData, scope?: any): void;
        clear(): void;
    }
    type Handler<TArgs> = (e: JQueryEventObject, args: TArgs) => void;
    interface IEventData {
        isPropagationStopped(): boolean;
        isImmediatePropagationStopped(): boolean;
    }
    interface Event<TArgs = any> {
        subscribe(handler: Handler<TArgs>): void;
        unsubscribe(handler: Handler<TArgs>): void;
        notify(args?: TArgs, e?: IEventData, scope?: any): void;
        clear(): void;
    }
    interface EventHandler<TArgs = any> {
        subscribe<TArgs>(event: Event<TArgs>, handler: Handler<TArgs>): EventHandler<TArgs>;
        unsubscribe<TArgs>(event: Event<TArgs>, handler: Handler<TArgs>): EventHandler<TArgs>;
        unsubscribeAll(): EventHandler<TArgs>;
    }
    interface EventData {
        isPropagationStopped(): boolean;
        isImmediatePropagationStopped(): boolean;
    }
    class EventData {
        constructor();
        isPropagationStopped(): boolean;
        isImmediatePropagationStopped(): boolean;
    }
    class EventHandler<TArgs = any> {
        subscribe<TArgs>(event: Event<TArgs>, handler: Handler<TArgs>): EventHandler<TArgs>;
        unsubscribe<TArgs>(event: Event<TArgs>, handler: Handler<TArgs>): EventHandler<TArgs>;
        unsubscribeAll(): EventHandler<TArgs>;
    }
    interface FormatterContext {
        row?: number;
        cell?: number;
        value?: any;
        column?: any;
        item?: any;
    }
    interface Formatter {
        format(ctx: FormatterContext): string;
    }
    interface GridOptions {
        asyncEditorLoading?: boolean;
        asyncEditorLoadDelay?: number;
        asyncPostRenderDelay?: number;
        asyncPostRenderCleanupDelay?: number;
        autoEdit?: boolean;
        autoHeight?: boolean;
        cellFlashingCssClass?: string;
        cellHighlightCssClass?: string;
        dataItemColumnValueExtractor?: () => void;
        groupingPanel?: boolean;
        groupingPanelHeight?: number;
        setGroupingPanelVisibility?: (value: boolean) => void;
        defaultColumnWidth?: number;
        defaultFormatter?: () => void;
        editable?: boolean;
        editCommandHandler?: () => void;
        editorFactory?: () => void;
        editorLock?: any;
        enableAddRow?: boolean;
        enableAsyncPostRender?: boolean;
        enableAsyncPostRenderCleanup?: boolean;
        enableCellRangeSelection?: boolean;
        enableCellNavigation?: boolean;
        enableColumnReorder?: boolean;
        enableRowReordering?: boolean;
        enableTextSelectionOnCells?: boolean;
        explicitInitialization?: boolean;
        forceFitColumns?: boolean;
        forceSyncScrolling?: boolean;
        formatterFactory?: () => void;
        fullWidthRows?: boolean;
        frozenColumn?: number;
        frozenRow?: number;
        frozenBottom?: boolean;
        headerRowHeight?: number;
        leaveSpaceForNewRows?: boolean;
        minBuffer?: number;
        multiColumnSort?: boolean;
        multiSelect?: boolean;
        renderAllCells?: boolean;
        rowHeight?: number;
        selectedCellCssClass?: string;
        showHeaderRow?: boolean;
        showFooterRow?: boolean;
        syncColumnCellResize?: boolean;
        topPanelHeight?: number;
    }
    class Grid {
        constructor(container: JQuery, data: any, columns: Column[], options: GridOptions);
    }
    interface Grid {
        init(): void;
        destroy(): void;
        getData(): any[];
        getDataItem(index: number): any;
        setData(data: any[], scrollToTop: boolean): void;
        getDataLength(): number;
        getOptions(): GridOptions;
        setOptions(options: GridOptions): void;
        getSelectedRows(): any;
        getSelectionModel(): any;
        setSelectionModel(model: any): any;
        setSelectedRows(rows: any): void;
        autoSizeColumns(): void;
        getColumnIndex(id: string): number;
        getColumns(): Slick.Column[];
        getUID(): string;
        setColumns(columns: Slick.Column[]): void;
        setSortColumn(columnId: string, ascending: boolean): void;
        setSortColumns(cols: ColumnSort[]): void;
        updateColumnHeader(columnId: string, title: string, toolTip: string): void;
        addCellCssStyles(key: string, hash: any): void;
        canCellBeActive(row: number, col: number): boolean;
        canCellBeSelected(row: number, col: number): boolean;
        editActiveCell(editor: Function): void;
        flashCell(row: number, cell: number, speed: number): void;
        getActiveCell(): RowCell;
        getActiveCellNode(): any;
        getActiveCellPosition(): PositionInfo;
        getCellCssStyles(key: string): any;
        getCellEditor(): any;
        getCellFromEvent(e: any): RowCell;
        getCellFromPoint(x: number, y: number): RowCell;
        getCellNode(row: number, cell: number): any;
        getCellNodeBox(row: number, cell: number): PositionInfo;
        goToCell(row: number, cell: number, forceEdit: boolean): void;
        navigateDown(): void;
        navigateLeft(): void;
        navigateNext(): void;
        navigatePrev(): void;
        navigateRight(): void;
        navigateUp(): void;
        removeCellCssStyles(key: string): void;
        resetActiveCell(): void;
        registerPlugin(plugin: any): void;
        setActiveCell(row: number, cell: number): void;
        setCellCssStyles(key: string, hash: any): void;
        getCanvasNode(): any;
        getGridPosition(): PositionInfo;
        getRenderedRange(viewportTop: number, viewportLeft: number): RangeInfo;
        getViewport(viewportTop: number, viewportLeft: number): RangeInfo;
        getViewport(): RangeInfo;
        invalidate(): void;
        invalidateAllRows(): void;
        invalidateRow(row: number): void;
        invalidateRows(rows: any): void;
        render(): void;
        resizeCanvas(): void;
        scrollCellIntoView(row: number, cell: number): void;
        scrollRowIntoView(row: number, doPaging: boolean): void;
        scrollRowToTop(row: number): void;
        updateCell(row: number, cell: number): void;
        updateRow(row: number): void;
        updateRowCount(): void;
        updateColumnHeader(columnId: string, title?: string, toolTip?: string): void;
        getGroupingPanel(): HTMLDivElement;
        getHeaderRow(): any;
        getEditorLock(): any;
        getHeaderRowColumn(columnId: string): any;
        getSortColumns(): any;
        getTopPanel(): any;
        setHeaderRowVisibility(visible: boolean): void;
        onScroll?: Event;
        onSort?: Event;
        onHeaderContextMenu?: Event;
        onHeaderClick?: Event;
        onMouseEnter?: Event;
        onMouseLeave?: Event;
        onClick?: Event;
        onDblClick?: Event;
        onContextMenu?: Event;
        onKeyDown?: Event;
        onAddNewRow?: Event;
        onValidationError?: Event;
        onViewportChanged?: Event;
        onColumnsReordered?: Event;
        onColumnsResized?: Event;
        onCellChange?: Event;
        onBeforeEditCell?: Event;
        onBeforeCellEditorDestroy?: Event;
        onHeaderCellRendered?: Event;
        onBeforeHeaderCellDestroy?: Event;
        onBeforeDestroy?: Event;
        onActiveCellChanged?: Event;
        onActiveCellPositionChanged?: Event;
        onDragInit?: Event;
        onDragStart?: Event;
        onDrag?: Event;
        onDragEnd?: Event;
        onSelectedRowsChanged?: Event;
        onCellCssStylesChanged?: Event;
    }
    interface GroupItemMetadataProvider {
        getGroupRowMetadata(item: any): any;
        getTotalsRowMetadata(item: any): any;
    }
    class Group<TEntity> {
        isGroup: boolean;
        level: number;
        count: number;
        value: any;
        title: string;
        collapsed: boolean;
        totals: any;
        rows: any;
        groups: Group<TEntity>[];
        groupingKey: string;
    }
    class GroupTotals<TEntity> {
        isGroupTotals: boolean;
        group: Group<TEntity>;
        initialized: boolean;
        sum: any;
        avg: any;
        min: any;
        max: any;
    }
    interface GroupInfo<TItem> {
        getter?: any;
        formatter?: (p1: Group<TItem>) => string;
        comparer?: (a: Group<TItem>, b: Group<TItem>) => number;
        aggregators?: any[];
        aggregateCollapsed?: boolean;
        lazyTotalsCalculation?: boolean;
    }
    class NonDataRow {
        __nonDataRow: boolean;
    }
    interface PagerOptions {
        view?: any;
        showRowsPerPage?: boolean;
        rowsPerPage?: number;
        rowsPerPageOptions?: number[];
        onChangePage?: (newPage: number) => void;
        onRowsPerPageChange?: (n: number) => void;
    }
    interface RowCell {
        row: number;
        cell: number;
    }
    interface PositionInfo {
        bottom: number;
        height: number;
        left: number;
        right: number;
        top: number;
        visible: boolean;
        width: number;
    }
    interface RangeInfo {
        top?: number;
        bottom?: number;
        leftPx?: number;
        rightPx?: number;
    }
    interface RowMoveManagerOptions {
        cancelEditOnDrag: boolean;
    }
    class RowMoveManager {
        constructor(options: RowMoveManagerOptions);
        onBeforeMoveRows: Event;
        onMoveRows: Event;
    }
    class RowSelectionModel {
    }
    namespace Data {
        class GroupItemMetadataProvider implements GroupItemMetadataProvider {
            constructor();
            getGroupRowMetadata(item: any): any;
            getTotalsRowMetadata(item: any): any;
        }
    }
}
