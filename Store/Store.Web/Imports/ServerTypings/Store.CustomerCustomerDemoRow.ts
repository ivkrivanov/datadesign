namespace Store.Store {
    export interface CustomerCustomerDemoRow {
        Id?: number;
        CustomerId?: string;
        CustomerTypeId?: string;
        CustomerId1?: number;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerEmail?: string;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerIsActive?: number;
        CustomerTenantId?: number;
        CustomerTypeId1?: number;
        CustomerTypeCustomerDesc?: string;
    }

    export namespace CustomerCustomerDemoRow {
        export const idProperty = 'Id';
        export const nameProperty = 'CustomerId';
        export const localTextPrefix = 'Store.CustomerCustomerDemo';

        export declare const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            CustomerTypeId = "CustomerTypeId",
            CustomerId1 = "CustomerId1",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerEmail = "CustomerEmail",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerIsActive = "CustomerIsActive",
            CustomerTenantId = "CustomerTenantId",
            CustomerTypeId1 = "CustomerTypeId1",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}

