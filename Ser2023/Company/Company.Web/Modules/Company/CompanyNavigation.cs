using Serenity.Navigation;
using MyPages = Company.Company.Pages;

[assembly: NavigationLink(int.MaxValue, "Company/Address Type", typeof(MyPages.AddressTypePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Address", typeof(MyPages.AddressPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Address", typeof(MyPages.AddressPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Country", typeof(MyPages.CountryPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/State Province", typeof(MyPages.StateProvincePage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Company/Business Entity", typeof(MyPages.BusinessEntityPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Business Entity Address", typeof(MyPages.BusinessEntityAddressPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Business Entity Contact", typeof(MyPages.BusinessEntityContactPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Contact Type", typeof(MyPages.ContactTypePage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Person", typeof(MyPages.PersonPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Phone Number Type", typeof(MyPages.PhoneNumberTypePage), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Company/Person View", typeof(MyPages.PersonViewPage), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Company/Business Entity", typeof(MyPages.BusinessEntityPage), icon: null)]