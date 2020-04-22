
namespace CoreStore.Store {
    export interface CategoriesTypeRow {
        CategoryTypeId?: number;
        Type?: number;
        CategoryType?: string;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        TenantId?: number;
    }

    export namespace CategoriesTypeRow {
        export const idProperty = 'CategoryTypeId';
        export const nameProperty = 'CategoryType';
        export const localTextPrefix = 'Store.CategoriesType';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CategoryTypeId;
            export declare const Type;
            export declare const CategoryType;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const IsActive;
            export declare const TenantId;
        }

        [
            'CategoryTypeId',
            'Type',
            'CategoryType',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'IsActive',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}