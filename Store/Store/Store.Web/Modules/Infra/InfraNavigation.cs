using Serenity.Navigation;
using Infra = Store.Infra.Pages;

[assembly: NavigationMenu(9000, "Infra", icon: "fa-sitemap")]
[assembly: NavigationLink(9000, "Infra/Support Type", typeof(Infra.SupportTypeController), icon: "fa-sitemap")]
[assembly: NavigationLink(9000, "Infra/Support Type String", typeof(Infra.SupportTypeStringController), icon: "fa-address-book")]