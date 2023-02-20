
namespace Store.Administration.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Administration.User")]
    [BasedOnRow(typeof(Entities.UserRow), CheckNames = true)]
    public class UserColumns
    {
        [EditLink, AlignRight, Width(55)]
        public String UserId { get; set; }
        [EditLink, Width(150)]
        public String Username { get; set; }
        [Width(150)]
        public String DisplayName { get; set; }
        [Width(250)]
        public String Email { get; set; }
        [Width(80)]
        public String Source { get; set; }
        [QuickFilter, Width(300)]
        public string Roles { get; set; }
    }
}
