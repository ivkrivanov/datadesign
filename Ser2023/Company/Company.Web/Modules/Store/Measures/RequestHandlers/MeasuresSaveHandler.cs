using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Store.MeasuresRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Store.MeasuresRow;

namespace Company.Store;

public interface IMeasuresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

public class MeasuresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresSaveHandler
{
    public MeasuresSaveHandler(IRequestContext context)
         : base(context)
    {
    }
}