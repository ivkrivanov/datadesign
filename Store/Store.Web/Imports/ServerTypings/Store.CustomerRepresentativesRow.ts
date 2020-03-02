namespace Store.Store {
    export interface CustomerRepresentativesRow {
        RepresentativeID?: number;
        CustomerID?: number;
        EmployeeID?: number;
    }

    export namespace CustomerRepresentativesRow {
        export const idProperty = 'RepresentativeID';
        export const localTextPrefix = 'Store.CustomerRepresentatives';

        export declare const enum Fields {
            RepresentativeID = "RepresentativeID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID"
        }
    }
}

