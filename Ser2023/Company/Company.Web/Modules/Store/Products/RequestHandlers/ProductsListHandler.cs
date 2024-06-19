using Serenity.Data;
using Serenity.Services;
using System.Linq;
using MyRequest = Company.Store.ProductsListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Store.ProductsRow>;
using MyRow = Company.Store.ProductsRow;

namespace Company.Store;

public interface IProductsListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class ProductsListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IProductsListHandler
{
    public ProductsListHandler(IRequestContext context)
         : base(context)
    {
    }

    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        if (Request.WaresId != null)
        {
            var pd = ProductDetailsRow.Fields.As("pd");

            query.Where(Criteria.Exists(
                query.SubQuery()
                    .Select("1")
                    .From(pd)
                    .Where(
                        pd.ProductId == MyRow.Fields.ProductId &
                        pd.WaresId == Request.WaresId.Value).ToString()));
        }

        if (Permissions.HasPermission(Administration.PermissionKeys.Tenants))
            return;

        query.Where(MyRow.Fields.TenantId == User.GetTenantId());
    }
}