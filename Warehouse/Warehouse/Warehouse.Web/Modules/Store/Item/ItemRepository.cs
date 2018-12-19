﻿
namespace Warehouse.Store.Repositories
{
    using Serenity.Data;
    using Serenity.Services;
    using System;
    using System.Data;
    using MyRow = Entities.ItemRow;

    public class ItemRepository
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

        public ListResponse<MyRow> List(IDbConnection connection, ItemListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void AfterSave()
            {
                base.AfterSave();

                if (Request.Localizations != null)
                    foreach (var pair in Request.Localizations)
                    {
                        pair.Value.ItemID = Row.ItemID.Value;
                        new LocalizationRowHandler<MyRow>().
                            Update<Entities.ItemLangRow>(this.UnitOfWork, pair.Value,
                            Convert.ToInt32(pair.Key));
                    }
            }


        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }
        private class MyListHandler : ListRequestHandler<MyRow, ItemListRequest>
        {
            //protected override void ApplyFilters(SqlQuery query)
            //{
            //    base.ApplyFilters(query);

            //    if (Request.ItemID != null)
            //    {
            //        var pd = Entities.ItemDetailRow.Fields.As("pd");

            //        query.Where(Criteria.Exists(
            //            query.SubQuery()
            //                .Select("1")
            //                .From(pd)
            //                .Where(
            //                    pd.DetailID == fld.ItemID &
            //                    pd.ProductID == Request.ItemID.Value)
            //                    .ToString()));
            //    }
            //}
        }
    }
}