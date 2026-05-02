using Serenity.Navigation;
using MyPages = Company.Sales.Pages;

[assembly: NavigationLink(int.MaxValue, "Sales/Currency", typeof(MyPages.CurrencyPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Currency Rate", typeof(MyPages.CurrencyRatePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Document Type", typeof(MyPages.DocumentTypePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Measures", typeof(MyPages.MeasuresPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Operation Type", typeof(MyPages.OperationTypePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Accounts", typeof(MyPages.AccountsPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Account Type", typeof(MyPages.AccountTypePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Sales/Categories Type", typeof(MyPages.CategoriesTypePage), icon: null)]
