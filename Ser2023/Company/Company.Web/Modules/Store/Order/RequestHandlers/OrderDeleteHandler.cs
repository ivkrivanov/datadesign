﻿using Serenity.Services;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.OrderRow;

namespace Company.Store;

public interface IOrderDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class OrderDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, IOrderDeleteHandler
{
    public OrderDeleteHandler(IRequestContext context)
            : base(context)
    {
    }
}