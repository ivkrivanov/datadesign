using Serenity;
using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Store.Administration.RoleRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Store.Administration.RoleRow;


namespace Store.Administration
{
    public interface IRoleSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class RoleSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IRoleSaveHandler
    {
        public RoleSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}