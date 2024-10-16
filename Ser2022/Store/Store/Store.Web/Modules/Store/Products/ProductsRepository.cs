﻿
namespace Store.Store.Repositories
{
    using Entities;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ProductsRow;

    public class ProductsRepository : BaseRepository
    {
        public ProductsRepository(IRequestContext context)
            : base(context)
        { 
        }
        
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MySaveHandler(Context).Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
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

        public ListResponse<MyRow> List(IDbConnection connection, ProductsListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow, SaveRequest<MyRow>, SaveResponse>
        {
            public MySaveHandler(IRequestContext context)
                : base(context)
            {
            }
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
                    SqlExceptionHelper.HandleDeleteForeignKeyException(e, Localizer);
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
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            {
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow, ProductsListRequest>
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
                    var pd = ProductDetailsRow.Fields.As("pd");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                            .Select("1")
                            .From(pd)
                            .Where(
                                pd.ProductId == fld.ProductId &
                                pd.WaresId == Request.WaresId.Value).ToString()));
                }


                if (Permissions.HasPermission(Administration.PermissionKeys.Tenants))
                    return;

                query.Where(fld.TenantId == User.GetTenantId());
            }
        }
    }
}