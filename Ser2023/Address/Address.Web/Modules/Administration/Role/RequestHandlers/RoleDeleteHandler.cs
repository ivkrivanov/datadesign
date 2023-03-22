using Serenity;
using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Address.Administration.RoleRow;


namespace Address.Administration
{
    public interface IRoleDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> { }
    public class RoleDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IRoleDeleteHandler
    {
        public RoleDeleteHandler(IRequestContext context)
             : base(context)
        {
        }

        //protected override void ValidateRequest()
        //{
        //    base.ValidateRequest();

        //    if (Row.TenantId != User.GetTenantId())
        //        Permissions.ValidatePermission(PermissionKeys.Tenants, Localizer);
        //}
    }
}