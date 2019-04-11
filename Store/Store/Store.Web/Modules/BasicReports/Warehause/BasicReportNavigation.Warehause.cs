using Store.BasicReports.Pages;
using Serenity.Navigation;

[assembly: NavigationMenu(7950, "BasicReports/Warehause")]
[assembly: NavigationLink(7950, "BasicReports/Warehause/StoreMove", typeof(BasicReportsController), action: "StoreMove")]
[assembly: NavigationLink(7950, "BasicReports/Warehause/WaresFile", typeof(BasicReportsController), action: "WaresFile")]
