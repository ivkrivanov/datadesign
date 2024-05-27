using Serenity.Services;
using System;
using MyRequest = Serenity.Services.DeleteRequest;
using MyResponse = Serenity.Services.DeleteResponse;
using MyRow = Company.Store.CounterpartiesRow;

namespace Company.Store;

public interface ICounterpartiesDeleteHandler : IDeleteHandler<MyRow, MyRequest, MyResponse> {}

public class CounterpartiesDeleteHandler : DeleteRequestHandler<MyRow, MyRequest, MyResponse>, ICounterpartiesDeleteHandler
{
    public CounterpartiesDeleteHandler(IRequestContext context)
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