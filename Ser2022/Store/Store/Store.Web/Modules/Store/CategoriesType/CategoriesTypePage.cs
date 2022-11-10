﻿
namespace Store.Store.Pages
{
    using Microsoft.AspNetCore.Mvc;
    using Serenity.Web;

    [PageAuthorize(typeof(Entities.CategoriesTypeRow))]
    public class CategoriesTypeController : Controller
    {
        [Route("Store/CategoriesType")]
        public ActionResult Index()
        {
            return View("~/Modules/Store/CategoriesType/CategoriesTypeIndex.cshtml");
        }
    }
}