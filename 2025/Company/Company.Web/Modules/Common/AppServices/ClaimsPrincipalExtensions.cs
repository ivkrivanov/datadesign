using System.Security.Claims;

namespace Company;

public static class ClaimsPrincipalExtensions
{
    public static int? GetTenantId(this ClaimsPrincipal user)
    {
        ArgumentNullException.ThrowIfNull(user);

        var tenantClaim = user.Claims.FirstOrDefault(x => x.Type == "TenantId");
        if (tenantClaim is null)
            throw new NullReferenceException("TenantId claim not found");

        return int.Parse(tenantClaim.Value);
    }
}