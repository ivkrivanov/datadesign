
namespace Store.Store {
    export interface StoreRow {
        Position?: number;
        WaresMode?: boolean;
        MoveId?: number;
        ShopId?: number;
        WaresId?: number;
        Key?: string;
        Date?: string;
        OperationId?: number;
        IncomeQuantity?: number;
        IncomeSinglePrice?: number;
        IncomeValue?: number;
        AIncomeSinglePrice?: number;
        AIncomeValue?: number;
        ExpenceQuantity?: number;
        ExpenceSinglePrice?: number;
        ExpenceValue?: number;
        AExpenceSinglePrice?: number;
        AExpenceValue?: number;
        RestQuantity?: number;
        RestSinglePrice?: number;
        RestValue?: number;
        ARestQuantity?: number;
        ARestSinglePrice?: number;
        ARestValue?: number;
        ReCost?: number;
        AReCost?: number;
        Mistake?: boolean;
        AMistake?: boolean;
        InsertDate?: string;
        InsertUserId?: number;
        UpdateDate?: string;
        UpdateUserId?: number;
        IsActive?: number;
        TenantId?: number;
    }

    export namespace StoreRow {
        export const idProperty = 'MoveId';
        export const nameProperty = 'Key';
        export const localTextPrefix = 'Store.Store';

        export namespace Fields {
            export declare const Position;
            export declare const WaresMode;
            export declare const MoveId;
            export declare const ShopId;
            export declare const WaresId;
            export declare const Key;
            export declare const Date;
            export declare const OperationId;
            export declare const IncomeQuantity;
            export declare const IncomeSinglePrice;
            export declare const IncomeValue;
            export declare const AIncomeSinglePrice;
            export declare const AIncomeValue;
            export declare const ExpenceQuantity;
            export declare const ExpenceSinglePrice;
            export declare const ExpenceValue;
            export declare const AExpenceSinglePrice;
            export declare const AExpenceValue;
            export declare const RestQuantity;
            export declare const RestSinglePrice;
            export declare const RestValue;
            export declare const ARestQuantity;
            export declare const ARestSinglePrice;
            export declare const ARestValue;
            export declare const ReCost;
            export declare const AReCost;
            export declare const Mistake;
            export declare const AMistake;
            export declare const InsertDate;
            export declare const InsertUserId;
            export declare const UpdateDate;
            export declare const UpdateUserId;
            export declare const IsActive;
            export declare const TenantId;
        }

        [
            'Position',
            'WaresMode',
            'MoveId',
            'ShopId',
            'WaresId',
            'Key',
            'Date',
            'OperationId',
            'IncomeQuantity',
            'IncomeSinglePrice',
            'IncomeValue',
            'AIncomeSinglePrice',
            'AIncomeValue',
            'ExpenceQuantity',
            'ExpenceSinglePrice',
            'ExpenceValue',
            'AExpenceSinglePrice',
            'AExpenceValue',
            'RestQuantity',
            'RestSinglePrice',
            'RestValue',
            'ARestQuantity',
            'ARestSinglePrice',
            'ARestValue',
            'ReCost',
            'AReCost',
            'Mistake',
            'AMistake',
            'InsertDate',
            'InsertUserId',
            'UpdateDate',
            'UpdateUserId',
            'IsActive',
            'TenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}