
namespace Address.Administration
{
    using Serenity.Data;
    using Serenity.Services;
    using MyRequest = Serenity.Services.ListRequest;
    using MyResponse = Serenity.Services.ListResponse<RoleRow>;
    using MyRow = RoleRow;

    public interface IRoleListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class RoleListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IRoleListHandler
    {
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }

        public RoleListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}