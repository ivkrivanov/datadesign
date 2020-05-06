
namespace CoreStore.Store {
    export interface ProductsRow {
        ProductId?: number;
        ProductCode?: string;
        ProductBarcode?: string;
        ProductLabel?: string;
        ProductName?: string;
        ProductImage?: string;
        SupplierId?: number;
        CounterpartyId?: string;
        CategoryId?: number;
        MeasureId?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        Discontinued?: boolean;
        IsActive?: number;
        TenantId?: number;
        SupplierSupplierStat?: string;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierHomePage?: string;
        SupplierIsActive?: number;
        SupplierTenantId?: number;
        CounterpartyId1?: number;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyAddress?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyPostalCode?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        CounterpartyIsActive?: number;
        CounterpartyTenantId?: number;
        CategoryCategoryTypeId?: number;
        CategoryCategoryCode?: string;
        CategoryCategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
        CategoryIsActive?: number;
        CategoryTenantId?: number;
        MeasureMeasureName?: string;
        MeasureIsActive?: number;
        MeasureTenantId?: number;
    }

    export namespace ProductsRow {
        export const idProperty = 'ProductId';
        export const nameProperty = 'ProductCode';
        export const localTextPrefix = 'Store.Products';
        export const deletePermission = 'Store:General';
        export const insertPermission = 'Store:General';
        export const readPermission = 'Store:General';
        export const updatePermission = 'Store:General';

        export namespace Fields {
            export declare const ProductId;
            export declare const ProductCode;
            export declare const ProductBarcode;
            export declare const ProductLabel;
            export declare const ProductName;
            export declare const ProductImage;
            export declare const SupplierId;
            export declare const CounterpartyId;
            export declare const CategoryId;
            export declare const MeasureId;
            export declare const QuantityPerUnit;
            export declare const UnitPrice;
            export declare const UnitsInStock;
            export declare const UnitsOnOrder;
            export declare const ReorderLevel;
            export declare const Discontinued;
            export declare const IsActive;
            export declare const TenantId;
            export declare const SupplierSupplierStat;
            export declare const SupplierCompanyName;
            export declare const SupplierContactName;
            export declare const SupplierContactTitle;
            export declare const SupplierAddress;
            export declare const SupplierCity;
            export declare const SupplierRegion;
            export declare const SupplierPostalCode;
            export declare const SupplierCountry;
            export declare const SupplierPhone;
            export declare const SupplierFax;
            export declare const SupplierEmail;
            export declare const SupplierHomePage;
            export declare const SupplierIsActive;
            export declare const SupplierTenantId;
            export declare const CounterpartyId1;
            export declare const CounterpartyCompanyName;
            export declare const CounterpartyContactName;
            export declare const CounterpartyContactTitle;
            export declare const CounterpartyAddress;
            export declare const CounterpartyCity;
            export declare const CounterpartyRegion;
            export declare const CounterpartyPostalCode;
            export declare const CounterpartyCountry;
            export declare const CounterpartyPhone;
            export declare const CounterpartyIsActive;
            export declare const CounterpartyTenantId;
            export declare const CategoryCategoryTypeId;
            export declare const CategoryCategoryCode;
            export declare const CategoryCategoryName;
            export declare const CategoryDescription;
            export declare const CategoryPicture;
            export declare const CategoryIsActive;
            export declare const CategoryTenantId;
            export declare const MeasureMeasureName;
            export declare const MeasureIsActive;
            export declare const MeasureTenantId;
        }

        [
            'ProductId',
            'ProductCode',
            'ProductBarcode',
            'ProductLabel',
            'ProductName',
            'ProductImage',
            'SupplierId',
            'CounterpartyId',
            'CategoryId',
            'MeasureId',
            'QuantityPerUnit',
            'UnitPrice',
            'UnitsInStock',
            'UnitsOnOrder',
            'ReorderLevel',
            'Discontinued',
            'IsActive',
            'TenantId',
            'SupplierSupplierStat',
            'SupplierCompanyName',
            'SupplierContactName',
            'SupplierContactTitle',
            'SupplierAddress',
            'SupplierCity',
            'SupplierRegion',
            'SupplierPostalCode',
            'SupplierCountry',
            'SupplierPhone',
            'SupplierFax',
            'SupplierEmail',
            'SupplierHomePage',
            'SupplierIsActive',
            'SupplierTenantId',
            'CounterpartyId1',
            'CounterpartyCompanyName',
            'CounterpartyContactName',
            'CounterpartyContactTitle',
            'CounterpartyAddress',
            'CounterpartyCity',
            'CounterpartyRegion',
            'CounterpartyPostalCode',
            'CounterpartyCountry',
            'CounterpartyPhone',
            'CounterpartyIsActive',
            'CounterpartyTenantId',
            'CategoryCategoryTypeId',
            'CategoryCategoryCode',
            'CategoryCategoryName',
            'CategoryDescription',
            'CategoryPicture',
            'CategoryIsActive',
            'CategoryTenantId',
            'MeasureMeasureName',
            'MeasureIsActive',
            'MeasureTenantId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}