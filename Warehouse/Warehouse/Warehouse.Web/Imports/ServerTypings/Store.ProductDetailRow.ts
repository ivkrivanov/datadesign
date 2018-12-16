
namespace Warehouse.Store {
    export interface ProductDetailRow {
        DetailId?: number;
        ProductId?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Reduction?: number;
        PlanPrice?: number;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        TenantId?: number;
    }

    export namespace ProductDetailRow {
        export const idProperty = 'DetailId';
        export const localTextPrefix = 'Store.ProductDetail';

        export namespace Fields {
            export declare const DetailId;
            export declare const ProductId;
            export declare const Quantity;
            export declare const ProductQuantity;
            export declare const Reduction;
            export declare const PlanPrice;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const IsActive;
            export declare const TenantId;
        }

        [
            'DetailId',
            'ProductId',
            'Quantity',
            'ProductQuantity',
            'Reduction',
            'PlanPrice',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'IsActive',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}