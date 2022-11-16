﻿
namespace Store.Store.Repositories
{
    using Serenity.Services;
    using System.Data;
    using MyRow = Entities.ProductDetailsRow;

    public class ProductDetailsRepository : BaseRepository
    {
        public ProductDetailsRepository(IRequestContext context)
            : base(context)
        { 
        }

        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler(Context).Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyListHandler(Context).Process(connection, request);
        }

        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> 
        {
            public MyRetrieveHandler(IRequestContext context)
                : base(context)
            { 
            }
        }
        private class MyListHandler : ListRequestHandler<MyRow> 
        {
            public MyListHandler(IRequestContext context)
                : base(context)
            { 
            }
        }
    }
}