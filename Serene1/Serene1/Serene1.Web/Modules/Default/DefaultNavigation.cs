using Serenity.Navigation;
//using MyPages = Serene1.Default.Pages;
using MyPages = Serene1.Default.Infra.Pages;
using MyPages = Serene1.Default.Pages;
using MyPages = Serene1.Default.Infra.Default.Pages;
using Serene1.Default.Employees.Pages;

[assembly: NavigationLink(int.MaxValue, "Default/Infra/Addresses", typeof(MyPages.AddressesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Infra/Address Type", typeof(MyPages.AddressTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Infra/Address Type String", typeof(MyPages.AddressTypeStringController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Default/Infra/Employees Addresses", typeof(MyPages.EmployeesAddressesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Default/Address Type Lang", typeof(MyPages.AddressTypeLangController), icon: null)]