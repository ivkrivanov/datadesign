using Serenity.Data;
using Serenity.Services;
using MyRequest = Company.Store.OrderListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.OrderRow>;
using MyRow = Company.Store.OrderRow;
using System.Linq;

namespace Company.Store;

public interface IOrderListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class OrderListHandler
    : ListRequestHandler<MyRow, MyRequest, MyResponse>, IOrderListHandler
{
    public OrderListHandler(IRequestContext context)
            : base(context)
    {
    }

    protected override void ApplyFilters(SqlQuery query)
    {
        base .ApplyFilters(query);

        if (Request.ProductId != null)
        {
            var od = OrderDetailRow.Fields.As("od");

            query.Where(Criteria.Exists(
                query.SubQuery()
                    .Select("1")
                    .From(od)
                    .Where(
                        od.OrderId == MyRow.Fields.OrderId &
                        od.ProductId == Request.ProductId.Value).ToString()));
        }

        if (Permissions.HasPermission(Administration.PermissionKeys.Tenants)) return;

        query.Where(MyRow.Fields.TenantId == User.GetTenantId());
    }
}