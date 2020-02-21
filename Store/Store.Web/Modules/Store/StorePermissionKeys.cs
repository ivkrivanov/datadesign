
namespace Store.Store
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Store")]
    public class StorePermissionKeys
    {
        [DisplayName("Customers")]
        public class Customer
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Customer:Modify";
            public const string View = "Store:Customer:View";
        }
        [DisplayName("Suppliers")]
        public class Supplier
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Supplier:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Supplier:Modify";
            public const string View = "Store:Supplier:View";
        }
        [DisplayName("Counterparty")]
        public class Counterparty
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Counterparty:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Counterparty:Modify";
            public const string View = "Store:Counterparty:View";
        }
        [DisplayName("Wares")]
        public class Wares
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Wares:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Wares:Modify";
            public const string View = "Store:Wares:View";
        }
        [DisplayName("Product")]
        public class Product
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Product:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Product:Modify";
            public const string View = "Store:Product:View";
        }
        [Description("[General]")]
        public const string General = "Store:General";
    }
}