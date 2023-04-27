using Serenity.Navigation;
using MyPages = Company.Company.Pages;

[assembly: NavigationLink(int.MaxValue, "Company/Address Type", typeof(MyPages.AddressTypePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Address", typeof(MyPages.AddressPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Address", typeof(MyPages.AddressPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Country", typeof(MyPages.CountryPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/State Province", typeof(MyPages.StateProvincePage), icon: null)]