namespace CoreStore.Store {
    declare namespace StorePermissionKeys {
        export const General = "Store:General";

        namespace Customer {
            export const Delete = "Store:Customer:Delete";
            export const Modify = "Store:Customer:Modify";
            export const View = "Store:Customer:View";
        }

        namespace Supplier {
            export const Delete = "Store:Supplier:Delete";
            export const Modify = "Store:Supplier:Modify";
            export const View = "Store:Supplier:View";
        }

        namespace Counterparty {
            export const Delete = "Store:Counterparty:Delete";
            export const Modify = "Store:Counterparty:Modify";
            export const View = "Store:Counterparty:View";
        }

        namespace Wares {
            export const Delete = "Store:Wares:Delete";
            export const Modify = "Store:Wares:Modify";
            export const View = "Store:Wares:View";
        }

        namespace Product {
            export const Delete = "Store:Product:Delete";
            export const Modify = "Store:Product:Modify";
            export const View = "Store:Product:View";
        }
    }
}
