using Serenity.Navigation;
//using MyPages = Serene1.Default.Pages;
using MyPages = Serene1.Default.Infra.Pages;


[assembly: NavigationLink(int.MaxValue, "Default/Infra/Addresses", typeof(MyPages.AddressesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Infra/AddressType", typeof(MyPages.AddressTypeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Infra/AddressTypeString", typeof(MyPages.AddressTypeStringController), icon: null)]
