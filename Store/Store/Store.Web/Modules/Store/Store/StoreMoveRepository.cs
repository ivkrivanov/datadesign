﻿
namespace Store.Store.Repositories
{
    using Serenity.Data;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Entities.StoreMoveRow;

    public class StoreMoveRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection,
            StoreMoveListRequest request)
        {
            var data = connection.Query<MyRow>("usp_StoreMove",
                param: new
                {
                    @dateFrom = request.StartDate,
                    @dateTill = request.EndDate,
                    @shopid = 1,
                    @Tenant = 4
                },
                commandType: CommandType.StoredProcedure);

            var response = new ListResponse<MyRow>();
            response.Entities = (List<MyRow>)data;
            return response;
        }
    }
}