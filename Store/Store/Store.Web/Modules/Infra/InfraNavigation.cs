using Serenity.Navigation;
using Infra = Store.Infra.Pages;

[assembly: NavigationMenu(9000, "Infra", icon: "fa-sitemap")]
[assembly: NavigationLink(9000, "Support Type", typeof(Infra.SupportTypeController), icon: "fa-sitemap")]
[assembly: NavigationLink(9000, "Support Type String", typeof(Infra.SupportTypeStringController), icon: "fa-address-book")]