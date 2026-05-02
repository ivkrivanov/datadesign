
namespace Address.Address
{
    using System.ComponentModel;
    using Serenity.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Address")]
    public class PermissionKeys
    {
        [DisplayName("Address")]
        public class Address
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Address:Address:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Address:Address:Modify";
            public const string View = "Address:Address:View";
        }

        [DisplayName("Address Type")]
        public class AddressType
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Address:AddressType:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Address:AddressType:Modify";
            public const string View = "Address:AddressType:View";
        }

        [DisplayName("Country")]
        public class Country
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Address:Country:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Address:Country:Modify";
            public const string View = "Address:Country:View";
        }

        [DisplayName("StateProvince")]
        public class StateProvince
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Address:StateProvince:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Address:StateProvince:Modify";
            public const string View = "Address:StateProvince:View";
        }


        [Description("[General]")]
        public const string General = "Address:General";

    }
}

