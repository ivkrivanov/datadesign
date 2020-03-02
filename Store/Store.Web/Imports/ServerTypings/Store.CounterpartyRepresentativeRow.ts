namespace Store.Store {
    export interface CounterpartyRepresentativeRow {
        RepresentativeID?: number;
        CounterpartyID?: number;
        EmployeeID?: number;
    }

    export namespace CounterpartyRepresentativeRow {
        export const idProperty = 'RepresentativeID';
        export const localTextPrefix = 'Store.CounterpartyRepresentative';

        export declare const enum Fields {
            RepresentativeID = "RepresentativeID",
            CounterpartyID = "CounterpartyID",
            EmployeeID = "EmployeeID"
        }
    }
}

