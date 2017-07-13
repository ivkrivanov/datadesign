﻿namespace Store.Administration
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Administration")]
    public class PermissionKeys
    {
        [Description("User, Role Management and Permissions")]
        public const string Security = "Administration:Security";

        [Description("Languages and Translations")]
        public const string Translation = "Administration:Translation";

        [Description("Tenants")]
        public const string Tenants = "Administration:Tenants";
    }
}
