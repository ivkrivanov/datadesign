using MyRow = Company.Company.PersonRow;

namespace Company.Company;

public interface IPersonGetNextNumberHandler : IRequestHandler
{
    GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request);
}

public class PersonGetNextNumberHandler : IPersonGetNextNumberHandler
{
    public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
    {
        return GetNextNumberHelper.GetNextNumber(connection, request, MyRow.Fields.BusinessEntityId);
    }
}


