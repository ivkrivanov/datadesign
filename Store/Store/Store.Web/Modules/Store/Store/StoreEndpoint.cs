
namespace Store.Store.Endpoints
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Data;
    using System.Web.Mvc;
    using MyRepository = Repositories.StoreRepository;
    using MyRow = Entities.StoreRow;
    using global::Store.Store.Entities;
    using global::Store.Store.Repositories;
    using System.Collections.Generic;
    using System;

    [RoutePrefix("Services/Store/Store"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class StoreController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        [HttpPost]
        public WarehouseResponse Warehouse(IUnitOfWork uow, WarehouseRequest request)
        {
            request.CheckNotNull();
            //Check.NotNullOrWhiteSpace();
            //var fld = StoreRow.Fields;
            var w = WaresRow.Fields;
            var o = OperationTypeRow.Fields;
            var s = StoreRow.Fields;

            var response = new WarehouseResponse();
            response.ErrorList = new List<string>();

            List<StoreRow> Items = new List<StoreRow>();

            using (var conn = SqlConnections.NewFor<MyRow>())
            {
                Items = (conn.List<MyRow>());
                //Items.Sort();
            }

            Average(Items);

            foreach(MyRow row in Items)
            {
                try
                {
                    new MyRepository().Update(uow, new SaveRequest<MyRow>
                    {
                        Entity = row,
                        EntityId = row.Position.Value
                    });

                    response.Updated = response.Updated + 1;
                }
                catch (Exception ex)
                {
                    response.ErrorList.Add("Exception on Row " + row + ": " + ex.Message);
                }
            }

            return response;
        }

        // https://volkanceylan.gitbooks.io/serenity-guide/entities/entities_row.html

        public static void Average(List<StoreRow> items)
        {
            Int64 Position = 0;
            Boolean WaresMode = false;
            Int32 KeyShop = 0;
            Int32 KeyWares = 0;

            decimal ExpenceQuantity = 0;
            decimal ExpenceSinglePrice = 0;
            decimal ExpenceValue = 0;

            decimal RestQuantity = 0;
            decimal RestSinglePrice = 0;
            decimal RestValue = 0;

            KeyShop = 0;
            KeyWares = 0;

            if (items.Count > 0) { Position = 1; };

            foreach (StoreRow item in items)
            {
                item.Position = Position;
                if ((item.WaresID != KeyWares) || (item.ShopID != KeyShop))
                {
                    WaresMode = (bool)item.WaresMode;
                    KeyShop = (int)item.ShopID;
                    KeyWares = (int)item.WaresID;

                    ExpenceQuantity = 0;
                    ExpenceSinglePrice = 0;
                    ExpenceValue = 0;

                    RestQuantity = 0;
                    RestSinglePrice = 0;
                    RestValue = 0;
                }

                item.UpdateDate = (DateTime.Now);

                switch (item.OperationID)
                {
                    case 101:
                        RestQuantity = (int)item.RestQuantity;
                        RestSinglePrice = (int)item.RestSinglePrice;
                        RestValue = (int)item.RestValue;
                        break;

                    case 102:
                    case 103:
                    case 105:
                        if (RestQuantity >= 0)
                            RestValue = RestValue + (int)item.IncomeValue;
                        else
                            RestValue = (RestQuantity + (int)item.IncomeQuantity) * (int)item.IncomeSinglePrice;

                        RestQuantity = RestQuantity + (int)item.IncomeQuantity;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;
                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 109:
                        item.IncomeSinglePrice = RestSinglePrice;
                        item.IncomeValue = item.IncomeQuantity * RestSinglePrice;

                        if ((double)(RestQuantity + item.IncomeQuantity) < (-0.0001))
                            item.Mistake = true;

                        if (RestQuantity >= 0)
                            RestValue = RestValue + (int)item.IncomeValue;
                        else
                            RestValue = (RestQuantity + (int)item.IncomeQuantity) * (int)item.IncomeSinglePrice;

                        RestQuantity = RestQuantity + (int)item.IncomeQuantity;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 202:
                    case 203:
                        if (WaresMode)
                        {
                            if (RestQuantity >= 0)
                                RestValue = RestValue + (int)item.IncomeValue;
                            else
                                RestValue = (RestQuantity + (int)item.IncomeQuantity) * (int)item.IncomeSinglePrice;

                            RestQuantity = RestQuantity + (int)item.IncomeSinglePrice;

                            if (RestQuantity != 0)
                                RestSinglePrice = RestValue / RestQuantity;
                            else
                                RestSinglePrice = 0;

                            item.RestQuantity = RestQuantity;
                            item.RestSinglePrice = RestSinglePrice;
                            item.RestValue = RestValue;
                        }
                        else
                        {
                            if ((double)(RestQuantity - item.ExpenceQuantity) < (-0.0001))
                            {
                                item.Mistake = true;
                            }
                            item.ExpenceSinglePrice = RestSinglePrice;
                            item.ExpenceValue = item.ExpenceQuantity * item.ExpenceSinglePrice;
                            RestQuantity = RestQuantity - (int)item.ExpenceQuantity;
                            RestValue = RestValue - (int)item.ExpenceValue;
                            if (RestQuantity != 0)
                                RestSinglePrice = RestValue / RestQuantity;
                            else
                                RestSinglePrice = 0;

                            item.RestQuantity = RestQuantity;
                            item.RestSinglePrice = RestSinglePrice;
                            item.RestValue = RestValue;
                        }
                        break;

                    case 301:
                    case 302:
                    case 303:
                    case 304:
                    case 305:
                    case 401:
                    case 402:
                    case 403:
                    case 404:
                        if ((double)(RestQuantity - item.ExpenceQuantity) < (-0.0001))
                        {
                            item.Mistake = true;
                        }
                        item.ExpenceSinglePrice = RestSinglePrice;
                        item.ExpenceValue = item.ExpenceQuantity * item.ExpenceSinglePrice;
                        RestQuantity = RestQuantity - (int)item.ExpenceQuantity;
                        RestValue = RestValue - (int)item.ExpenceValue;
                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 500:
                        item.ExpenceQuantity = RestQuantity - item.RestQuantity;
                        if (RestQuantity > 0)
                            item.ExpenceSinglePrice = RestSinglePrice;
                        else
                        {
                            if (item.RestQuantity > 0)
                            {
                                ExpenceQuantity = ExpenceQuantity + RestQuantity;
                                ExpenceValue = ExpenceValue + RestValue;
                                if (ExpenceQuantity != 0)
                                    ExpenceSinglePrice = ExpenceValue / ExpenceQuantity;
                                else
                                    ExpenceSinglePrice = 0;

                                if (ExpenceQuantity != 0)
                                    item.ExpenceSinglePrice = (item.RestQuantity * ExpenceSinglePrice - RestValue) / (item.RestQuantity - RestQuantity);
                                else
                                {
                                    if (RestQuantity != 0)
                                        item.ExpenceSinglePrice = RestSinglePrice;
                                    else
                                        item.ExpenceSinglePrice = item.RestSinglePrice;
                                }
                            }
                            else
                            {
                                if (RestQuantity != 0)
                                    item.ExpenceSinglePrice = RestSinglePrice;
                                else
                                {
                                    if (ExpenceQuantity != 0)
                                        item.ExpenceSinglePrice = RestSinglePrice;
                                    else
                                        item.ExpenceSinglePrice = item.RestSinglePrice;
                                }
                            }
                        }
                        break;
                }
                Position = Position + 1;
            }
        }

    }
}
