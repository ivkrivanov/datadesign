﻿
namespace CoreStore.Store.Repositories
{
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ProductMovementRow;

    public class ProductMovementRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ProductMovementListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }
        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return GetNextNumberHelper.GetNextNumber(connection, request, fld.ProductMoveId);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> { }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            protected override void ExecuteDelete()
            {
                try
                {
                    base.ExecuteDelete();
                }
                catch (Exception e)
                {
                    SqlExceptionHelper.HandleDeleteForeignKeyException(e);
                    throw;
                }
            }
        }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, ProductMovementListRequest>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.ProductId != null)
                {
                    var pm = Entities.ProductMovementDetailsRow.Fields.As("pm");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                        .Select("1")
                        .From(pm)
                        .Where(
                            pm.ProductMoveId == fld.ProductMoveId &
                            pm.ProductId == Request.ProductId.Value).ToString()));
                }
            }
        }
    }
}