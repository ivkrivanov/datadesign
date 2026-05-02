namespace Company.Company;

[NestedPermissionKeys]
[DisplayName("Company")]
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

    [DisplayName("Province")]
    public class Province
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:Province:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:Province:Modify";
        public const string View = "Company:Province:View";
    }

    [DisplayName("BusinessEntity")]
    public class BusinessEntity
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:BusinessEntity:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:BusinessEntity:Modify";
        public const string View = "Company:BusinessEntity:View";
    }

    [DisplayName("BusinessEntityAddress")]
    public class BusinessEntityAddress
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:BusinessEntityAddress:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:BusinessEntityAddress:Modify";
        public const string View = "Company:BusinessEntityAddress:View";
    }

    [DisplayName("BusinessEntityContact")]
    public class BusinessEntityContact
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:BusinessEntityContact:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:BusinessEntityContact:Modify";
        public const string View = "Company:BusinessEntityContact:View";
    }

    [DisplayName("ContactType")]
    public class ContactType
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:ContactType:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:ContactType:Modify";
        public const string View = "Company:ContactType:View";
    }

    [DisplayName("EmailAddress")]
    public class EmailAddress
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:EmailAddress:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:EmailAddress:Modify";
        public const string View = "Company:EmailAddress:View";
    }

    [DisplayName("PersonPhone")]
    public class PersonPhone
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:PersonPhone:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:PersonPhone:Modify";
        public const string View = "Company:PersonPhone:View";
    }

    [DisplayName("Person")]
    public class Person
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:Person:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:Person:Modify";
        public const string View = "Company:Person:View";
    }

    [DisplayName("PhoneNumberType")]
    public class PhoneNumberType
    {
        [Description("Delete"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Delete = "Company:PhoneNumberType:Delete";

        [Description("Create/Update"), ImplicitPermission(General), ImplicitPermission(View)]
        public const string Modify = "Company:PhoneNumberType:Modify";
        public const string View = "Company:PhoneNumberType:View";
    }

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

    [Description("[General]")]
    public const string General = "Company:General";
}

