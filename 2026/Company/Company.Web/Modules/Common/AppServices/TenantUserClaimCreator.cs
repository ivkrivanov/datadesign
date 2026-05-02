using System.Security.Claims;

namespace Company.AppServices;

public class TenantUserClaimCreator(IUserRetrieveService userRetriever) : DefaultUserClaimCreator(userRetriever)
{
    protected override void AddClaims(ClaimsIdentity identity, IUserDefinition userDefinition)
    {
        base.AddClaims(identity, userDefinition);
        identity.AddClaim(new Claim("TenantId", (userDefinition as UserDefinition).TenantId.ToString()));
    }
}