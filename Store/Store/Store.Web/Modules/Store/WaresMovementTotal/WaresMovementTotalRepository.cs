
namespace Store.Store.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Store.Entities.WaresMovementTotalRow;

    public class WaresMovementTotalRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection,
            WaresMovementTotalListRequest request)
        {
            var user = (UserDefinition)Authorization.UserDefinition;
            int tn = user.TenantId;

            var data = connection.Query<MyRow>("usp_WaresMovementTotal",
                param: new
                {
                    Tenant = tn
                },
                commandType: CommandType.StoredProcedure);

            var response = new ListResponse<MyRow>();

            response.Entities = (List<MyRow>)data;

            return response;
        }
    }
}