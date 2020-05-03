namespace CoreStore.Store {
    export interface CounterpartyRepresentativesRow {
        RepresentativeId?: number;
        CounterpartyId?: number;
        EmployeeId?: number;
    }

    export namespace CounterpartyRepresentativesRow {
        export const idProperty = 'RepresentativeId';
        export const localTextPrefix = 'Store.CounterpartyRepresentatives';
        export const deletePermission = 'Store:Counterparty:Delete';
        export const insertPermission = 'Store:Counterparty:Modify';
        export const readPermission = 'Store:Counterparty:View';
        export const updatePermission = 'Store:Counterparty:Modify';

        export declare const enum Fields {
            RepresentativeId = "RepresentativeId",
            CounterpartyId = "CounterpartyId",
            EmployeeId = "EmployeeId"
        }
    }
}
