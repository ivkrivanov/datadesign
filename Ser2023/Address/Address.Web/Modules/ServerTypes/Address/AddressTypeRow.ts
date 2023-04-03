import { getLookup, getLookupAsync, fieldsProxy } from "@serenity-is/corelib/q";

export interface AddressTypeRow {
    AddressTypeId?: number;
    Name?: string;
    Rowguid?: string;
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
    static readonly localTextPrefix = 'Address.AddressType';
    static readonly lookupKey = 'Address.AddressType';

    /** @deprecated use getLookupAsync instead */
    static getLookup() { return getLookup<AddressTypeRow>('Address.AddressType') }
    static async getLookupAsync() { return getLookupAsync<AddressTypeRow>('Address.AddressType') }

    static readonly deletePermission = 'Address:AddressType:Delete';
    static readonly insertPermission = 'Address:AddressType:Modify';
    static readonly readPermission = 'Address:AddressType:View';
    static readonly updatePermission = 'Address:AddressType:Modify';

    static readonly Fields = fieldsProxy<AddressTypeRow>();
}
