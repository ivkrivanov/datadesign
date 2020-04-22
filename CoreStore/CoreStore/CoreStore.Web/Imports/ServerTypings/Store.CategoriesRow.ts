
namespace CoreStore.Store {
    export interface CategoriesRow {
        CategoryId?: number;
        CategoryTypeId?: number;
        CategoryCode?: string;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        TenantId?: number;
        CategoryTypeType?: number;
        CategoryType?: string;
        CategoryTypeInsertDate?: string;
        CategoryTypeInsertUserId?: number;
        CategoryTypeUpdateDate?: string;
        CategoryTypeUpdateUserId?: number;
        CategoryTypeIsActive?: number;
        CategoryTypeTenantId?: number;
    }

    export namespace CategoriesRow {
        export const idProperty = 'CategoryId';
        export const nameProperty = 'CategoryCode';
        export const localTextPrefix = 'Store.Categories';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export namespace Fields {
            export declare const CategoryId;
            export declare const CategoryTypeId;
            export declare const CategoryCode;
            export declare const CategoryName;
            export declare const Description;
            export declare const Picture;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const IsActive;
            export declare const TenantId;
            export declare const CategoryTypeType;
            export declare const CategoryType;
            export declare const CategoryTypeInsertDate;
            export declare const CategoryTypeInsertUserId;
            export declare const CategoryTypeUpdateDate;
            export declare const CategoryTypeUpdateUserId;
            export declare const CategoryTypeIsActive;
            export declare const CategoryTypeTenantId;
        }

        [
            'CategoryId',
            'CategoryTypeId',
            'CategoryCode',
            'CategoryName',
            'Description',
            'Picture',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'IsActive',
            'TenantId',
            'CategoryTypeType',
            'CategoryType',
            'CategoryTypeInsertDate',
            'CategoryTypeInsertUserId',
            'CategoryTypeUpdateDate',
            'CategoryTypeUpdateUserId',
            'CategoryTypeIsActive',
            'CategoryTypeTenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}