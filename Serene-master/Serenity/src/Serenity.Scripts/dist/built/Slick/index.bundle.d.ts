declare namespace Aggregators {
    function Avg(field: string): void;
    function WeightedAvg(field: string, weightedField: string): void;
    function Min(field: string): void;
    function Max(field: string): void;
    function Sum(field: string): void;
}

declare namespace Data {
    interface GroupItemMetadataProvider {
        getGroupRowMetadata(item: any): any;
        getTotalsRowMetadata(item: any): any;
    }
}
declare class RemoteView<TEntity> {
    constructor(options: Slick.RemoteViewOptions);
}

export { Aggregators, Data, RemoteView };
