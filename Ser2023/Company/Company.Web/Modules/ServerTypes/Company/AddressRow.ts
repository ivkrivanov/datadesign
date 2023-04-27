import { fieldsProxy } from "@serenity-is/corelib/q";

export interface AddressRow {
    AddressId?: number;
    AddressLine1?: string;
    AddressLine2?: string;
    City?: string;
    StateProvinceId?: number;
    PostalCode?: string;
    Rowguid?: string;
    IsActive?: number;
    TenantId?: number;
    StateProvinceCode?: string;
    StateProvinceName?: string;
    InsertUserId?: number;
    InsertDate?: string;
    UpdateUserId?: number;
    UpdateDate?: string;
}

export abstract class AddressRow {
    static readonly idProperty = 'AddressId';
    static readonly isActiveProperty = 'IsActive';
    static readonly nameProperty = 'AddressLine1';
    static readonly localTextPrefix = 'Company.Address';
    static readonly deletePermission = 'Administration:General';
    static readonly insertPermission = 'Administration:General';
    static readonly readPermission = 'Administration:General';
    static readonly updatePermission = 'Administration:General';

    static readonly Fields = fieldsProxy<AddressRow>();
}