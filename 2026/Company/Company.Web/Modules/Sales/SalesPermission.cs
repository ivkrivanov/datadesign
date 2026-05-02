namespace Company.Sales;

[NestedPermissionKeys]
[DisplayName("Sales")]
public class SalesPermissionKeys
{
    [DisplayName("Currency")]
    public class Currency
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:Currency:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:Currency:Modify";
        public const string View = "Company:Currency:View";
    }

    [DisplayName("CurrencyRate")]
    public class CurrencyRate
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:CurrencyRate:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:CurrencyRate:Modify";
        public const string View = "Company:CurrencyRate:View";
    }

    [DisplayName("Categories")]
    public class Categories
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:Categories:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:Categories:Modify";
        public const string View = "Company:Categories:View";
    }

    [DisplayName("Accounts")]
    public class Accounts
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:Accounts:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:Accounts:Modify";
        public const string View = "Company:Accounts:View";
    }


    [Description("[General]")]
    public const string General = "Company:General";
}
