using Company.Administration;

namespace Company.AppServices;

public class PermissionKeyLister(ITwoLevelCache cache, ITypeSource typeSource)
    : BasePermissionKeyLister(cache, typeSource)
{
    protected override string GetCacheGroupKey()
    {
        return RoleRow.Fields.GenerationKey;
    }
    protected override IEnumerable<string> GetPrivatePermissions()
    {
        return [
            .. base.GetPrivatePermissions(),
            PermissionKeys.Tenants
        ];
    }
}