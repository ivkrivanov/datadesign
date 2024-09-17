import { fieldsProxy } from "@serenity-is/corelib/q";

export interface CounterpartyRepresentativesRow {
    RepresentativeId?: number;
    CounterpartyId?: number;
    EmployeeId?: number;
}

export abstract class CounterpartyRepresentativesRow {
    static readonly idProperty = 'RepresentativeId';
    static readonly localTextPrefix = 'Store.CounterpartyRepresentatives';
    static readonly deletePermission = 'Store:Counterparties:Delete';
    static readonly insertPermission = 'Store:Counterparties:Modify';
    static readonly readPermission = 'Store:Counterparties:View';
    static readonly updatePermission = 'Store:Counterparties:Modify';

    static readonly Fields = fieldsProxy<CounterpartyRepresentativesRow>();
}
