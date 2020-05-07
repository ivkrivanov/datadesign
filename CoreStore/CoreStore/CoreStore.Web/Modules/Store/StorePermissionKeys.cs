
namespace CoreStore.Store
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Store")]
    public class PermissionKeys
    {
        [DisplayName("Categories")]
        public class Categories
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Categories:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Categories:Modify";
            public const string View = "Store:Categories:View";
        }

        [DisplayName("Categories Type")]
        public class CategoriesType
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:CategoriesType:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:CategoriesType:Modify";
            public const string View = "Store:CategoriesType:View";
        }

        [DisplayName("Shops")]
        public class Shops
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Shops:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Shops:Modify";
            public const string View = "Store:Shops:View";
        }

        [DisplayName("Documents")]
        public class DocumentType
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:DocumentType:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:DocumentType:Modify";
            public const string View = "Store:DocumentType:View";
        }

        [DisplayName("Measures")]
        public class Measures
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Measures:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Measures:Modify";
            public const string View = "Store:Measures:View";
        }

        [DisplayName("OperationType")]
        public class OperationType
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:OperationType:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:OperationType:Modify";
            public const string View = "Store:OperationType:View";
        }

        //[DisplayName("Customers")]
        //public class Customer
        //{
        //    [ImplicitPermission(General), ImplicitPermission(View)]
        //    public const string Delete = "Store:Customer:Delete";
        //    [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        //    public const string Modify = "Store:Customer:Modify";
        //    public const string View = "Store:Customer:View";
        //}
        //[DisplayName("Suppliers")]
        //public class Supplier
        //{
        //    [ImplicitPermission(General), ImplicitPermission(View)]
        //    public const string Delete = "Store:Supplier:Delete";
        //    [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        //    public const string Modify = "Store:Supplier:Modify";
        //    public const string View = "Store:Supplier:View";
        //}
        [DisplayName("Counterparty")]
        public class Counterparties
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Store:Counterparty:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Store:Counterparty:Modify";
            public const string View = "Store:Counterparty:View";
        }
        [DisplayName("Wares")]
        public class Wares
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
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

