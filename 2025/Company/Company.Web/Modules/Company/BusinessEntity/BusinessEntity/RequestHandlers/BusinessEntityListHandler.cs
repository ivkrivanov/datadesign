using MyRequest = Serenity.Services.ListRequest;
using MyResponse = Serenity.Services.ListResponse<Company.Company.BusinessEntityRow>;
using MyRow = Company.Company.BusinessEntityRow;

namespace Company.Company;

public interface IBusinessEntityListHandler : IListHandler<MyRow, MyRequest, MyResponse> { }

public class BusinessEntityListHandler(IRequestContext context) :
    ListRequestHandler<MyRow, MyRequest, MyResponse>(context), IBusinessEntityListHandler
{
    //public BusinessEntityListHandler(IRequestContext context)
    //        : base(context)
    //{
    //}

    protected override void ApplyFilters(SqlQuery query)
    {
        base.ApplyFilters(query);

        //if (Request.BusinessEntityAddressId != null)
        //{
        //    var od = BusinessEntityAddressRow.Fields.As("od");

        //    query.Where(Criteria.Exists(
        //        query.SubQuery()
        //        .Select("1")
        //        .From(od)
        //        .Where(
        //            od.BusinessEntityId == MyRow.Fields.BusinessEntityId).ToString()));
        //}
    }
}