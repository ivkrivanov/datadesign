
namespace Store.Store
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Store")]
    public class PermissionKeys
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

        [Description("[General]")]
        public const string General = "Store:General";
    }
}