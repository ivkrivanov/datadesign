import { fieldsProxy } from "@serenity-is/corelib/q";

export interface CounterpartyDetailsRow {
    Id?: number;
    LastContactDate?: string;
    LastContactedBy?: number;
    Email?: string;
    SendBulletin?: boolean;
    LastContactedByFullName?: string;
    LastContactedByTitle?: string;
    LastContactedByTitleOfCourtesy?: string;
    LastContactedByBirthDate?: string;
    LastContactedByHireDate?: string;
    LastContactedByAddress?: string;
    LastContactedByCity?: string;
    LastContactedByRegion?: string;
    LastContactedByPostalCode?: string;
    LastContactedByCountry?: string;
    LastContactedByHomePhone?: string;
    LastContactedByExtension?: string;
    LastContactedByPhoto?: number[];
    LastContactedByNotes?: string;
    LastContactedByReportsTo?: number;
    LastContactedByPhotoPath?: string;
}

export abstract class CounterpartyDetailsRow {
    static readonly idProperty = 'Id';
    static readonly nameProperty = 'Email';
    static readonly localTextPrefix = 'Store.CounterpartyDetails';
    static readonly deletePermission = 'Store:Counterparties:Delete';
    static readonly insertPermission = 'Store:Counterparties:Modify';
    static readonly readPermission = 'Store:Counterparties:View';
    static readonly updatePermission = 'Store:Counterparties:Modify';

    static readonly Fields = fieldsProxy<CounterpartyDetailsRow>();
}