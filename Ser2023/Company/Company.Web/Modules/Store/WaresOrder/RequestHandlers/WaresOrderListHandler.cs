using Serenity.Data;
using Serenity.Services;
using MyRequest = Company.Store.WaresOrderListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.WaresOrderRow>;
using MyRow = Company.Store.WaresOrderRow;
using System.Linq;

namespace Company.Store;

public interface IWaresOrderListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class WaresOrderListHandler
    : ListRequestHandler<MyRow, MyRequest, MyResponse>, IWaresOrderListHandler
{
    public WaresOrderListHandler(IRequestContext context)
        : base(context)
    {
    }

    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (Request.WaresId != null)
        {
            var od = WaresOrderDetailRow.Fields.As("od");

            query.Where(Criteria.Exists(
                query.SubQuery()
                    .Select("1")
                    .From(od)
                    .Where(
                        od.WaresOrderId == MyRow.Fields.WaresOrderId &
                        od.WaresId == Request.WaresId.Value).ToString()));
        }

        if (Permissions.HasPermission(Administration.PermissionKeys.Tenants)) return;

        query.Where(MyRow.Fields.TenantId == User.GetTenantId());
    }
}