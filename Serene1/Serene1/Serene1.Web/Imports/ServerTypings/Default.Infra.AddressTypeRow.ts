namespace Serene1.Default.Infra {
    export interface AddressTypeRow {
        EnumValue?: number;
        EnumName?: string;
        TenantId?: number;
        IsActive?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }

    export namespace AddressTypeRow {
        export const idProperty = 'EnumValue';
        export const isActiveProperty = 'IsActive';
        export const nameProperty = 'EnumName';
        export const localTextPrefix = 'Default.AddressType';

        export declare const enum Fields {
            EnumValue = "EnumValue",
            EnumName = "EnumName",
            TenantId = "TenantId",
            IsActive = "IsActive",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}

