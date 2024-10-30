import { fieldsProxy } from '@serenity-is/corelib';

export interface AddressTypeRow {
    AddressTypeId?: number;
    AddressTypeName?: string;
    IsActive?: number;
    TenantId?: number;
}

export abstract class AddressTypeRow {
    static readonly idProperty = 'AddressTypeId';
    static readonly nameProperty = 'AddressTypeName';
    static readonly localTextPrefix = 'Company.AddressType';

    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AddressTypeRow>();
}