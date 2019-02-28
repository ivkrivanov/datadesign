
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

            //var warehouse = uow.Connection.Query(
            //    new SqlQuery()
            //        .From(s)
            //        .Select(s.Position)
            //        .Select(s.WaresMode)
            //        .Select(s.MoveID)
            //        .Select(s.ShopID)
            //        .Select(s.WaresID)
            //        .Select(s.Key)
            //        .Select(s.Date)
            //        .Select(s.OperationID)
            //        .Select(s.IncomeQuantity)
            //        .Select(s.IncomeSinglePrice)
            //        .Select(s.IncomeValue)
            //        .Select(s.ExpenceQuantity)
            //        .Select(s.ExpenceSinglePrice)
            //        .Select(s.ExpenceValue)
            //        .Select(s.RestQuantity)
            //        .Select(s.RestSinglePrice)
            //        .Select(s.RestValue)
            //        .Select(s.ReCost)
            //        .Select(s.Mistake)
            //        .OrderBy(s.ShopID, s.Key, s.Date, s.OperationID, s.MoveID));


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

            var warehouse = uow.Connection.TryFirst<StoreRow>(q => q
                    .Select(s.Position)
                    .Select(s.WaresMode)
                    .Select(s.MoveID)
                    .Select(s.ShopID)
                    .Select(s.WaresID)
                    .Select(s.Key)
                    .Select(s.Date)
                    .Select(s.OperationID)
                    .Select(s.IncomeQuantity)
                    .Select(s.IncomeSinglePrice)
                    .Select(s.IncomeValue)
                    .Select(s.ExpenceQuantity)
                    .Select(s.ExpenceSinglePrice)
                    .Select(s.ExpenceValue)
                    .Select(s.RestQuantity)
                    .Select(s.RestSinglePrice)
                    .Select(s.RestValue)
                    .Select(s.ReCost)
                    .Select(s.Mistake)
                    .OrderBy(s.ShopID, s.Key, s.Date, s.OperationID, s.MoveID));

            //foreach (MyRow Row in warehouse)
            for (var i = 0; i <= warehouse.FieldCount; i++)
            {
                warehouse.Position = Position;


                Position = i;
            }



            return response;
        }
    }
}
