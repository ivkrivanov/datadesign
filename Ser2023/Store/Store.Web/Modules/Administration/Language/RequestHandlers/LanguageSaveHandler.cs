using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Store.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Store.Administration.LanguageRow;


namespace Store.Administration
{
    public interface ILanguageSaveHandler : ISaveHandler<MyRow, MyRequest, MyResponse> { }
    public class LanguageSaveHandler : SaveRequestHandler<MyRow, MyRequest, MyResponse>, ILanguageSaveHandler
    {
        public LanguageSaveHandler(IRequestContext context)
             : base(context)
        {
        }
    }
}