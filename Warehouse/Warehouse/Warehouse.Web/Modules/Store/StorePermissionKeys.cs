﻿
namespace Warehouse.Store
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

        [Description("[General]")]
        public const string General = "Store:General";
    }
}