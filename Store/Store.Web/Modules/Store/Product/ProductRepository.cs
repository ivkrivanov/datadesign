
namespace Store.Store.Repositories
{
    using global::Store.Store.Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ProductRow;

    public class ProductRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveWithLocalizationRequest<MyRow> request)
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

        public RetrieveLocalizationResponse<MyRow> RetrieveLocalization(IDbConnection connection, RetrieveLocalizationRequest request)
        {
            return new LocalizationRowHandler<MyRow>().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ProductListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow, SaveWithLocalizationRequest<MyRow>, SaveResponse>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Request.Localizations != null)
                    foreach (var pair in Request.Localizations)
                    {
                        pair.Value.ProductID = Row.ProductID.Value;
                        new LocalizationRowHandler<MyRow>().Update<Entities.ProductLangRow>(
                            this.UnitOfWork, pair.Value, Convert.ToInt32(pair.Key));
                    }
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, ProductListRequest>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.WaresID != null)
                    {
                    var pd = ProductDetailRow.Fields.As("pd");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                            .Select("1")
                            .From(pd)
                            .Where(
                                pd.ProductID == fld.ProductID &
                                pd.WaresID == Request.WaresID.Value)
                                .ToString()));
                }


                var user = (UserDefinition)Authorization.UserDefinition;
                if (!Authorization.HasPermission(Administration.PermissionKeys.Tenants))
                    query.Where(fld.TenantId == user.TenantId);
            }
        }
    }
}