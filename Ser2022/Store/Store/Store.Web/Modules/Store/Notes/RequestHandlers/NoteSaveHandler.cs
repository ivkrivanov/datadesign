using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Store.Store.Entities.NotesRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Store.Store.Entities.NotesRow;

namespace Store.Store
{

    public interface INoteSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }

    public class NoteSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, INoteSaveHandler
    {
        public NoteSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}
