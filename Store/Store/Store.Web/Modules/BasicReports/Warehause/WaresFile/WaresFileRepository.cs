
namespace Store.BasicReports.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Store.Entities.WaresFileRow;

    public class WaresFileRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection,
            WaresFileListRequest request)
        {

            var user = (UserDefinition)Authorization.UserDefinition;
            int tn = user.TenantId;

            var data = connection.Query<MyRow>("usp_StoreFile",
                param: new
                {
                    dateFrom = request.StartDate,
                    dateTill = request.EndDate,
                    shopid = 1,
                    Tenant = tn
                },
                commandType: CommandType.StoredProcedure);

            var response = new ListResponse<MyRow>();

            response.Entities = (List<MyRow>)data;


            return response;
        }
    }
}