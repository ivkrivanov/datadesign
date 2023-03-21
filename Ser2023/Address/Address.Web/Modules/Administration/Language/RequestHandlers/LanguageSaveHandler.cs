using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Address.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Address.Administration.LanguageRow;


namespace Address.Administration
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