import { fieldsProxy } from "@serenity-is/corelib";

export interface AddressTypeRow {
    AddressTypeId?: number;
    AddressTypeName?: string;
    IsActive?: number;
    TenantId?: number;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class AddressTypeRow {
    static readonly idProperty = 'AddressTypeId';
    static readonly nameProperty = 'AddressTypeName';
    static readonly localTextPrefix = 'Company.AddressType';
    static readonly deletePermission = 'PermissionKeys.AddressType';
    static readonly insertPermission = 'PermissionKeys.AddressType';
    static readonly readPermission = 'PermissionKeys.AddressType';
    static readonly updatePermission = 'PermissionKeys.AddressType';

    static readonly Fields = fieldsProxy<AddressTypeRow>();
}