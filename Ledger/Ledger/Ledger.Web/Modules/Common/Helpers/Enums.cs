namespace Ledger.HR
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("HR.Gender")]
    public enum Gender
    {
        [Description("Male")]
        Male = 1,
        [Description("Female")]
        Female = 2
    }

    [EnumKey("HR.AddressType")]
    public enum AddressTypeId
    {
        [Description("Home Address")]
        HomeAddress = 1,
        [Description("Postal Address")]
        PostalAddress = 2,
        [Description("Work Address")]
        WorkAddress = 3
    }
}