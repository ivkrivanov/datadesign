using Serenity.Navigation;
using MyPages = Company.Company.Pages;

[assembly: NavigationLink(int.MaxValue, "Company/Business Entity", typeof(MyPages.BusinessEntityPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Person", typeof(MyPages.PersonPage), icon: null)]