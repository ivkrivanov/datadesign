using Serenity.Navigation;
//using MyPages = Serene1.Default.Pages;
using MyPages = Serene1.Default.Infra.Pages;


[assembly: NavigationLink(int.MaxValue, "Default/Infra/Addresses", typeof(MyPages.AddressesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Infra/Address Type", typeof(MyPages.AddressTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Infra/Address Type String", typeof(MyPages.AddressTypeStringController), icon: null)]
