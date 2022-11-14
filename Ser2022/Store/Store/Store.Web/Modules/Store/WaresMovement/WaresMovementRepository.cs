
namespace Store.Store.Repositories
{
    using Serenity.Data;
    using Serenity.Extensions;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.WaresMovementRow;

    public class WaresMovementRepository : BaseRepository
    {
        public WaresMovementRepository(IRequestContext context) 
            :base(context)
        {
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler(Context).Process(uow, request);
        }

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler(Context).Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, WaresMovementListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        public GetNextNumberResponse GetNextNumber(IDbConnection connection, GetNextNumberRequest request)
        {
            return GetNextNumberHelper.GetNextNumber(connection, request, fld.WaresMoveId);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow> 
        { 
            public MySaveHandler(IRequestContext context) : base(context) { }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow>
        {
            public MyDeleteHandler(IRequestContext context) 
                : base(context)
            {
            }

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
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> 
        {
            public MyUndeleteHandler(IRequestContext context) 
                : base(context)
            {
            }
        }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            public MyRetrieveHandler(IRequestContext context) : base(context) 
            { 
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow, WaresMovementListRequest>
        {
            public MyListHandler(IRequestContext context) 
                : base(context)
            {
            }
            
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.WaresId != null)
                {
                    var wm = Entities.WaresMovementDetailsRow.Fields.As("wm");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                        .Select("1")
                        .From(wm)
                        .Where(
                            wm.WaresMoveId == fld.WaresMoveId &
                            wm.WaresId == Request.WaresId.Value).ToString()));
                }
            }
        }
    }
}