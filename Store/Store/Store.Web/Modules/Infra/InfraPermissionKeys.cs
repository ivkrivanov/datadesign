namespace Store.Infra
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Infra")]
    public class InfraPermissionKeys
    {
        [Description("[General]")]
        public const string General = "Infra:General";

        [Description("Infra Support typs")]
        public const string Support = "Infra:Support";

    }
}