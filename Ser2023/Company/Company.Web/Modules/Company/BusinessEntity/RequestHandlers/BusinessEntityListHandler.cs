using Serenity.Data;
using Serenity.Services;
using MyRequest = Company.Company.BusinessEntityListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.BusinessEntityRow>;
using MyRow = Company.Company.BusinessEntityRow;

namespace Company.Company;

public interface IBusinessEntityListHandler : IListHandler<MyRow, MyRequest, MyResponse> {}

public class BusinessEntityListHandler : ListRequestHandler<MyRow, MyRequest, MyResponse>, IBusinessEntityListHandler
{
    public BusinessEntityListHandler(IRequestContext context)
        : base(context)
    {
    }
    protected override void ApplyFilters(SqlQuery query) { 

        base.ApplyFilters(query);

        if (Request.AddressId != null)
        {
            var od = AddressRow.Fields.As("od");

            query.Where(Criteria.Exists(
                query.SubQuery()
                .Select("1")
                .From(od)
                .Where(
                    od.AddressId == MyRow.Fields.AddressId)
                    .ToString()));
        }

        if (Request.AddressTypeId != null)
        {
            var od = AddressTypeRow.Fields.As("od");

            query.Where(Criteria.Exists(
                query.SubQuery()
                .Select("1")
                .From(od)
                .Where(
                    od.AddressTypeId == MyRow.Fields.AddressTypeId)
                    .ToString()));
        }

        if (Permissions.HasPermission(Administration.PermissionKeys.Tenants)) return;

        query.Where(MyRow.Fields.TenantId == User.GetTenantId());
    }
}

