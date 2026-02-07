using Serenity.Navigation;
using MyPages = Company.Sales.Pages;

[assembly: NavigationLink(int.MaxValue, "Sales/Currency", typeof(MyPages.CurrencyPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Currency Rate", typeof(MyPages.CurrencyRatePage), icon: null)]