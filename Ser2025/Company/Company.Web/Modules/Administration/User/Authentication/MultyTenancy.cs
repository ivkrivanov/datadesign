namespace Company
{
    using System;
    using System.Linq;
    using System.Security.Claims;

    public static class ClaimsPrincipalExtensions
    {
        public static int GetTenantId(this ClaimsPrincipal user)
        {
            if (user is null)
                throw new ArgumentNullException(nameof(user));

            var tenantClaim = user.Claims.FirstOrDefault(x => x.Type == "TenantId");
            return tenantClaim is null ? throw new NullReferenceException("TenantId claim not found") : int.Parse(tenantClaim.Value);
        }
    }
}
