﻿

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Infra/Category", typeof(Ledger.Infra.Pages.CategoryController))]

namespace Ledger.Infra.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Infra/Category"), Route("{action=index}")]
    public class CategoryController : Controller
    {
        [PageAuthorize(Infra.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View("~/Modules/Infra/Category/CategoryIndex.cshtml");
        }
    }
}