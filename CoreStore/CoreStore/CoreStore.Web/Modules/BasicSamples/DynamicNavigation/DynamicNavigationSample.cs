using CoreStore.Store.Entities;
using Serenity.Data;
using Serenity.Navigation;
using System.Collections.Generic;

namespace CoreStore.BasicSamples
{
    public class DynamicNavigationSample : INavigationItemSource
    {
        public List<NavigationItemAttribute> GetItems()
        {
            var items = new List<NavigationItemAttribute>
            {
                new NavigationMenuAttribute(7970, "Basic Samples/Dynamic Navigation", "icon-paper-plane")
            };

            // Add product categories as dynamic navigation items for demo purpose
            using (var connection = SqlConnections.NewByKey("Store"))
            {
                var categories = connection.List<CategoryRow>();
                foreach (var category in categories)
                    items.Add(new NavigationLinkAttribute(7970,
                        path: "Basic Samples/Dynamic Navigation/" + category.CategoryName.Replace("/", "//"),
                        url: "~/Store/Product?cat=" + category.CategoryID,
                        permission: Store.PermissionKeys.General,
                        icon: "icon-folder-alt"));
            }

            return items;
        }
    }
}