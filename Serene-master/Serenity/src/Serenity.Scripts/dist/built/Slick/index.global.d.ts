
declare namespace Slick {
    namespace Aggregators {
        function Avg(field: string): void;
        function WeightedAvg(field: string, weightedField: string): void;
        function Min(field: string): void;
        function Max(field: string): void;
        function Sum(field: string): void;
    }

    namespace Data {
        interface GroupItemMetadataProvider {
            getGroupRowMetadata(item: any): any;
            getTotalsRowMetadata(item: any): any;
        }
    }
    class RemoteView<TEntity> {
        constructor(options: Slick.RemoteViewOptions);
    }
}
