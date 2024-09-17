
namespace Store.Store
{
    using Serenity.Services;
    using MyRequest = Serenity.Services.SaveRequest<Entities.MeasuresRow>;
    using MyResponse = Serenity.Services.SaveResponse;
    using MyRow = Entities.MeasuresRow;
    public interface IMeasuresSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> {}

    public class MeasuresSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, IMeasuresSaveHandler
    {
        public MeasuresSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}