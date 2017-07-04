namespace Store.Infra
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    public class InfraPermissionKeys
    {
        [NestedPermissionKeys]
        public class PermissionKeys
        {
            [Description("[General]")]
            public const string General = "Infra:General";

            [DisplayName("Infra Support typs")]
            public class SupportType
            {
                public const string Management = "Infra:Support:Management";
            }

        }
    }
}