
namespace Address.Administration
{
    using Serenity.Services;
    public class UserRoleListRequest : ServiceRequest
    {
        public int? UserID { get; set; }
    }
}