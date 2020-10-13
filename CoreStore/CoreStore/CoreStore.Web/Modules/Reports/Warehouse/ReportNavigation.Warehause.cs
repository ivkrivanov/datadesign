using CoreStore.Reports.Pages;
using Serenity.Navigation;

[assembly: NavigationMenu(7950, "Reports/Warehause")]
[assembly: NavigationLink(7950, "Reports/Warehause/StoreMove", typeof(ReportsController), action: "StoreMove")]
[assembly: NavigationLink(7950, "Reports/Warehause/WaresFile", typeof(ReportsController), action: "WaresFile")]
