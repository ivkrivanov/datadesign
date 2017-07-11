
namespace Store.Store {
    export interface SupportTypeRow {
        EnumValue?: number;
        EnumName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
        TenantId?: number;
        IsActive?: number;
    }

    export namespace SupportTypeRow {
        export const idProperty = 'EnumValue';
        export const nameProperty = 'EnumName';
        export const localTextPrefix = 'Store.SupportType';

        export namespace Fields {
            export declare const EnumValue;
            export declare const EnumName;
            export declare const InsertUserId;
            export declare const InsertDate;
            export declare const UpdateUserId;
            export declare const UpdateDate;
            export declare const TenantId;
            export declare const IsActive;
        }

        ['EnumValue', 'EnumName', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate', 'TenantId', 'IsActive'].forEach(x => (<any>Fields)[x] = x);
    }
}

