using Serenity.Navigation;
using Infra = Store.Infra.Pages;

[assembly: NavigationMenu(6000, "Infra", icon: "fa-sitemap")]
[assembly: NavigationLink(6100, "Infra/Support", typeof(Infra.SupportController), icon: "fa-sitemap")]
[assembly: NavigationLink(6200, "Infra/Support Type", typeof(Infra.SupportTypeController), icon: "fa-sitemap")]
[assembly: NavigationLink(6300, "Infra/Support Type String", typeof(Infra.SupportTypeStringController), icon: "fa-address-book")]