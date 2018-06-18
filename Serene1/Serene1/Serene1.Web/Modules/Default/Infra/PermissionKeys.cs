namespace Serene1.Infra
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Ledger")]
    public class PermissionKeys
    {
        public class Addresses
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Infra:Addresses:Delete";
            [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
            public const string Modify = "Infra:Addresses:Modify";
            public const string View = "Infra:Addresses:Viev";
        }

        [Description("[General]")]
        public const string General = "Infra:General";
    }
}