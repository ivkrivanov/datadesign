
namespace Company.Company
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
            public const string Delete = "Company:Address:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Company:Address:Modify";
            public const string View = "Company:Address:View";
        }

        [DisplayName("Address Type")]
        public class AddressType
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Company:AddressType:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Company:AddressType:Modify";
            public const string View = "Company:AddressType:View";
        }

        [DisplayName("Country")]
        public class Country
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Company:Country:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Company:Country:Modify";
            public const string View = "Company:Country:View";
        }

        [DisplayName("StateProvince")]
        public class StateProvince
        {
            [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Company:StateProvince:Delete";

            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Company:StateProvince:Modify";
            public const string View = "Company:StateProvince:View";
        }


        [Description("[General]")]
        public const string General = "Company:General";

    }
}

