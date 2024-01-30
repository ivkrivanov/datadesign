import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface AddressTypeRow {
    AddressTypeId?: number;
    Name?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class AddressTypeRow {
    static readonly idProperty = 'AddressTypeId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Company.AddressType';
    static readonly lookupKey = 'Company.AddressType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AddressTypeRow>('Company.AddressType') }
    static async getLookupAsync() { return getLookupAsync<AddressTypeRow>('Company.AddressType') }

    static readonly deletePermission = 'Company:AddressType:Delete';
    static readonly insertPermission = 'Company:AddressType:Modify';
    static readonly readPermission = 'Company:AddressType:View';
    static readonly updatePermission = 'Company:AddressType:Modify';

    static readonly Fields = fieldsProxy<AddressTypeRow>();
}