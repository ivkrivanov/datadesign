using Serenity.Services;

namespace Company.Company;

public class BusinessEntityListRequest: ListRequest
{
    public int? AddressId { get; set; }
    public int? AddressTypeId { get; set; }
}
