
namespace Address.Administration
{
    using Serenity.Data;
    using Serenity.Services;
    using MyRequest = Serenity.Services.RetrieveRequest;
    using MyResponse = Serenity.Services.RetrieveResponse<RoleRow>;
    using MyRow = RoleRow;

    public interface IRoleRetrieveHandler : IRetrieveHandler<MyRow, MyRequest, MyResponse> { }
    public class RoleRetrieveHandler : RetrieveRequestHandler<MyRow, MyRequest, MyResponse>, IRoleRetrieveHandler
    {
        private static MyRow.RowFields Fld { get { return MyRow.Fields; } }

        public RoleRetrieveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}