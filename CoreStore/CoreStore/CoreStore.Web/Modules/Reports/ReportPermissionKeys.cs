
namespace CoreStore.Reports
{
    using Serenity.Extensibility;
    using System.ComponentModel;

    [NestedPermissionKeys]
    [DisplayName("Reports")]
    public class ReportPermissionKeys
    {
        [Description("[General]")]
        public const string General = "Reports:General";
    }
}
