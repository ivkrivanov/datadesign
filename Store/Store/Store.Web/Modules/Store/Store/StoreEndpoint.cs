
namespace Store.Store.Endpoints
{
    using global::Store.Store.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Data.SqlClient;
    using System.Web.Mvc;
    using MyRepository = Repositories.StoreRepository;
    using MyRow = Entities.StoreRow;
    using Store;
    using System.Configuration;

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
 
            var response = new WarehouseResponse();
            response.ErrorList = new List<string>();

            DataSet ds = new DataSet();
            DataTable dt = new DataTable();

            var user = (UserDefinition)Authorization.UserDefinition;
            int tn = user.TenantId;


            List<MyRow> Items = new List<MyRow>();
            SqlDataAdapter adapter = new SqlDataAdapter();

            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["Store"].ToString()))
            {
                using (SqlCommand cmd = new SqlCommand("sp_MakeStore", conn))
                {
                    try
                    {
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("Tenant", SqlDbType.Int).Value = tn;

                        conn.Open();
                        cmd.ExecuteNonQuery();
                    }
                    catch (SqlException sqlException)
                    {
                        response.ErrorList.Add("Exception: " + sqlException.Message);
                    }
                }

                adapter = DAL.StoreAdapter(conn, tn);
                adapter.Fill(dt);
                adapter.DeleteCommand.ExecuteNonQuery();

                foreach (DataRow row in dt.Rows)
                {
                    MyRow obj = row.ToObject<MyRow>();
                    Items.Add(obj);
                }

                Average(Items);

                dt = DAL.ConvertTo(Items);
                adapter.Update(dt);
                adapter.Dispose();

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
                    //case 101:
                    case (int)WaresMovementOperations.InitialBalance:
                        RestQuantity = (decimal)item.RestQuantity;
                        RestSinglePrice = (decimal)item.RestSinglePrice;
                        RestValue = (decimal)item.RestValue;
                        break;

                    case 102://WaresMovementOperations.StockDelivery
                    case 103://WaresMovementOperations.SurplusGoods
                    case 105://WaresMovementOperations.ExchangeRevenue
                        if (RestQuantity >= 0)
                            RestValue = RestValue + (decimal)item.IncomeValue;
                        else
                            RestValue = (RestQuantity + (decimal)item.IncomeQuantity) * (decimal)item.IncomeSinglePrice;

                        RestQuantity = RestQuantity + (decimal)item.IncomeQuantity;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;
                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 109://WaresMovementOperations.UnsubscriptionOfGoods
                        item.IncomeSinglePrice = RestSinglePrice;
                        item.IncomeValue = item.IncomeQuantity * RestSinglePrice;

                        if ((double)(RestQuantity + item.IncomeQuantity) < (-0.0001))
                            item.Mistake = true;

                        if (RestQuantity >= 0)
                            RestValue = RestValue + (decimal)item.IncomeValue;
                        else
                            RestValue = (RestQuantity + (decimal)item.IncomeQuantity) * (decimal)item.IncomeSinglePrice;

                        RestQuantity = RestQuantity + (decimal)item.IncomeQuantity;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;
                    //case 102://WaresMovementOperations.StockDelivery
                    //case 103://WaresMovementOperations.SurplusGoods
                    //case 105://WaresMovementOperations.ExchangeRevenue
                    case 202://ProductMovementOperations.StockDelivery
                    case 203://ProductMovementOperations.SurplusGoods
                        if (WaresMode)
                        {
                            if (RestQuantity >= 0)
                                RestValue = RestValue + (decimal)item.IncomeValue;
                            else
                                RestValue = (RestQuantity + (decimal)item.IncomeQuantity) * (decimal)item.IncomeSinglePrice;

                            RestQuantity = RestQuantity + (decimal)item.IncomeQuantity;

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
                            RestQuantity = RestQuantity - (decimal)item.ExpenceQuantity;
                            RestValue = RestValue - (decimal)item.ExpenceValue;

                            if (RestQuantity != 0)
                                RestSinglePrice = RestValue / RestQuantity;
                            else
                                RestSinglePrice = 0;

                            item.RestQuantity = RestQuantity;
                            item.RestSinglePrice = RestSinglePrice;
                            item.RestValue = RestValue;
                        }
                        break;

                    case 301://WaresMovementOperations.SaleOfArticles
                    case 302://WaresMovementOperations.LackOfItems
                    case 303://WaresMovementOperations.Scrappingarticles
                    case 304:
                    case 305://WaresMovementOperations.ExchangeExpense
                    case 401://ProductMovementOperations.SaleOfArticles
                    case 402://ProductMovementOperations.LackOfItems
                    case 403://ProductMovementOperations.ScrappingЬrticles
                    case 404:
                        if ((double)(RestQuantity - item.ExpenceQuantity) < (-0.0001))
                        {
                            item.Mistake = true;
                        }

                        item.ExpenceSinglePrice = RestSinglePrice;
                        item.ExpenceValue = item.ExpenceQuantity * item.ExpenceSinglePrice;
                        RestQuantity = RestQuantity - (decimal)item.ExpenceQuantity;
                        RestValue = RestValue - (decimal)item.ExpenceValue;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        item.RestQuantity = RestQuantity;
                        item.RestSinglePrice = RestSinglePrice;
                        item.RestValue = RestValue;
                        break;

                    case 500://WaresMovementOperations.Inventory
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
                        item.ExpenceValue = item.ExpenceQuantity * item.ExpenceSinglePrice;
                        item.ReCost = item.RestValue - (RestValue - item.ExpenceValue);
                        RestQuantity = (decimal)item.RestQuantity;
                        RestValue = (decimal)item.RestValue;

                        if (RestQuantity != 0)
                            RestSinglePrice = RestValue / RestQuantity;
                        else
                            RestSinglePrice = 0;

                        break;
                }
                Position = Position + 1;
            }
        }
    }
}
