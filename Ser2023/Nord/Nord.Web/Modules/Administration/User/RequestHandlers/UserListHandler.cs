using Serenity.Services;
using MyRequest = Nord.Administration.UserListRequest;
using MyResponse = Serenity.Services.ListResponse<Nord.Administration.UserRow>;
using MyRow = Nord.Administration.UserRow;

namespace Nord.Administration
{
    public interface IUserListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

    public class UserListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IUserListHandler
    {
        public UserListHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}