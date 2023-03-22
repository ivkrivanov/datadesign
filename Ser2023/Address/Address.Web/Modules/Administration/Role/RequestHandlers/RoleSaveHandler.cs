using Serenity;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Address.Administration.RoleRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Address.Administration.RoleRow;


namespace Address.Administration
{
    public interface IRoleSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class RoleSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRoleSaveHandler
    {
        public RoleSaveHandler(IRequestContext context)
             : base(context)
        {
        }

        protected override void InvalidateCacheOnCommit()
        {
            base.InvalidateCacheOnCommit();

            Cache.InvalidateOnCommit(UnitOfWork, UserPermissionRow.Fields);
            Cache.InvalidateOnCommit(UnitOfWork, RolePermissionRow.Fields);
        }

        //protected override void SetInternalFields()
        //{
        //    base.SetInternalFields();

        //    if (IsCreate)
        //        Row.TenantId = User.GetTenantId();
        //}

        //protected override void ValidateRequest()
        //{
        //    base.ValidateRequest();

        //    if (IsUpdate)
        //    {
        //        if (Old.TenantId != User.GetTenantId())
        //            Permissions.ValidatePermission(PermissionKeys.Tenants, Localizer);
        //    }
        //}
    }
}