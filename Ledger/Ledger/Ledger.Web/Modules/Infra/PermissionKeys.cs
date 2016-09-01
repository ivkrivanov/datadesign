
namespace Ledger.Infra
{
    /// <summary>
    /// This class contains some permission key constants solely for
    /// easy access and intellisense purposes.
    /// 
    /// Please note that adding a permission here won't show it
    /// in user permissions dialog. In fact, Serenity doesn't
    /// care about this class at all.
    /// 
    /// To show a new permission in user/role permission dialog, just use
    /// its string key with ReadPermission / ModifyPermission / 
    /// DeletePermission / PageAuthorize / ServiceAuthorize etc. attributes 
    /// and Serenity will auto discover them at application start.
    /// 
    /// Permission tree hierarchy in dialog is determined by colons (:)
    /// in permission keys.
    /// </summary>
    public class PermissionKeys
    {
        public const string General = "Infra:General";

        public class Addresses
        {
            public const string Delete = "Infra:Addresses:Delete";
            public const string Modify = "Infra:Addresses:Modify";
            public const string View = "Infra:Addresses:Viev";
        }

        public class Category
        {
            public const string Delete = "Infra:Category:Delete";
            public const string Modify = "Infra:Category:Modify";
            public const string View = "Infra:Category:Viev";
        }
    }
}
