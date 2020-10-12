using CoreStore.Reports.Pages;
using Serenity.Navigation;

[assembly: NavigationMenu(7950, "BasicReports/Warehause")]
[assembly: NavigationLink(7950, "BasicReports/Warehause/StoreMove", typeof(ReportsController), action: "StoreMove")]
[assembly: NavigationLink(7950, "BasicReports/Warehause/WaresFile", typeof(ReportsController), action: "WaresFile")]
