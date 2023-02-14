export declare namespace Data {
    interface GroupItemMetadataProvider {
        getGroupRowMetadata(item: any): any;
        getTotalsRowMetadata(item: any): any;
    }
}
export declare class RemoteView<TEntity> {
    constructor(options: Slick.RemoteViewOptions);
}
