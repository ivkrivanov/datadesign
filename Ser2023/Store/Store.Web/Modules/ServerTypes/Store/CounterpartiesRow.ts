import { NotesRow } from "./NotesRow";
import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface CounterpartiesRow {
    Id?: number;
    CounterpartyId?: string;
    CompanyName?: string;
    ContactName?: string;
    ContactTitle?: string;
    Address?: string;
    City?: string;
    Region?: string;
    PostalCode?: string;
    Country?: string;
    Phone?: string;
    IsActive?: number;
    TenantId?: number;
    NotesList?: NotesRow[];
    Representatives?: number[];
    LastContactDate?: string;
    LastContactedBy?: number;
    Email?: string;
    SendBulletin?: boolean;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class CounterpartiesRow {
    static readonly idProperty = 'Id';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'CounterpartyId';
    static readonly localTextPrefix = 'Store.Counterparties';
    static readonly lookupKey = 'Store.Counterparties';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<CounterpartiesRow>('Store.Counterparties') }
    static async getLookupAsync() { return getLookupAsync<CounterpartiesRow>('Store.Counterparties') }

    static readonly deletePermission = 'Store:Counterparties:Delete';
    static readonly insertPermission = 'Store:Counterparties:Modify';
    static readonly readPermission = 'Store:Counterparties:View';
    static readonly updatePermission = 'Store:Counterparties:Modify';

    static readonly Fields = fieldsProxy<CounterpartiesRow>();
}
