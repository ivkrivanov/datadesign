﻿using Serenity.Services;
using MyRequest = Serenity.Services.SaveRequest<Company.Administration.LanguageRow>;
using MyResponse = Serenity.Services.SaveResponse;
using MyRow = Company.Administration.LanguageRow;


namespace Company.Administration
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