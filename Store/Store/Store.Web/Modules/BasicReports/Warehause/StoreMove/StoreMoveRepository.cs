
namespace Store.BasicReports.Repositories
{
    using global::Store.Store.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using MyRow = Store.Entities.StoreMoveRow;

    public class StoreMoveRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public ListResponse<MyRow> List(IDbConnection connection,
            StoreMoveListRequest request)
        {

            var user = (UserDefinition)Authorization.UserDefinition;
            int tn = user.TenantId;

            var data = connection.Query<MyRow>("usp_StoreMove",
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

            foreach (var item in response.Entities)
            {
                item.InitialQuantity = item.RestQuantity - item.IncomeQuantity + item.ExpenceQuantity;
                item.InitialValue = (item.RestValue - item.IncomeValue + item.ExpenceValue);
                if (item.InitialQuantity != 0)
                    item.InitialSinglePrice = item.InitialValue / item.InitialQuantity;
                else
                    item.InitialSinglePrice = 0;
                if (item.IncomeQuantity != 0)
                    item.IncomeSinglePrice = item.IncomeValue / item.IncomeQuantity;
                else
                    item.IncomeSinglePrice = 0;
                if (item.ExpenceQuantity != 0)
                    item.ExpenceSinglePrice = item.ExpenceValue / item.ExpenceQuantity;
                else
                    item.ExpenceSinglePrice = 0;
                if (item.RestQuantity != 0)
                    item.RestSinglePrice = item.RestValue / item.RestQuantity;
                else
                    item.RestSinglePrice = 0;
            }

            return response;
        }
    }
}