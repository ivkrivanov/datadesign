﻿using Microsoft.Extensions.DependencyInjection;
using Serenity.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Serenity.Navigation
{
    public class NavigationHelper
    {
        public static List<NavigationItem> GetNavigationItems(IPermissionService permissions, 
            ITypeSource typeSource, IServiceProvider serviceProvider, 
            Func<string, string> resolveUrl = null, 
            Func<NavigationItemAttribute, bool> filter = null)
        {
            var menuItems = GetNavigationItemAttributes(typeSource, serviceProvider, filter);
            return ConvertToNavigationItems(permissions, menuItems, resolveUrl);
        }

        public static List<NavigationItem> ConvertToNavigationItems(IPermissionService permissions, 
            ILookup<string, NavigationItemAttribute> attrByCategory, Func<string, string> resolveUrl)
        {
            if (permissions == null)
                throw new ArgumentNullException(nameof(permissions));

            var result = new List<NavigationItem>();

            void processAttr(List<NavigationItem> parent, NavigationItemAttribute attr)
            {
                var item = new NavigationItem
                {
                    Title = (attr.Title ?? "").Replace("//", "/", StringComparison.Ordinal),
                    FullPath = attr.FullPath,
                    Url = (!string.IsNullOrEmpty(attr.Url) && resolveUrl != null) ? resolveUrl(attr.Url) : attr.Url,
                    IconClass = attr.IconClass.TrimToNull(),
                    ItemClass = attr.ItemClass.TrimToNull(),
                    Target = attr.Target.TrimToNull()
                };

                bool isAuthorizedSection = !attr.Url.IsEmptyOrNull() &&
                    (attr.Permission.IsEmptyOrNull() || permissions.HasPermission(attr.Permission));

                var path = attr.Category.IsEmptyOrNull() ? "" : (attr.Category + "/");
                path += attr.Title ?? "";

                var children = attrByCategory[path];
                foreach (var child in children)
                    processAttr(item.Children, child);

                if (item.Children.Count > 0 || isAuthorizedSection)
                    parent.Add(item);
            }

            foreach (var menu in attrByCategory[""])
                processAttr(result, menu);

            return result;
        }

        private static ILookup<string, NavigationItemAttribute> GetNavigationItemAttributes(
            ITypeSource typeSource, IServiceProvider serviceProvider, 
            Func<NavigationItemAttribute, bool> filter)
        {
            var list = new List<NavigationItemAttribute>();

            foreach (NavigationItemAttribute attr in typeSource
                .GetAssemblyAttributes<NavigationItemAttribute>())
            {
                if (filter == null || filter(attr))
                    list.Add(attr);
            }

            foreach (var navItemType in typeSource.GetTypesWithInterface(typeof(INavigationItemSource))
                .Where(x => !x.IsAbstract && !x.IsInterface))
            {
                var navItem = (INavigationItemSource)ActivatorUtilities.CreateInstance(
                    serviceProvider, navItemType);
                foreach (var item in navItem.GetItems())
                {
                    if (filter == null || filter(item))
                        list.Add(item);
                }
            }

            return ByCategory(list);
        }

        public static ILookup<string, NavigationItemAttribute> ByCategory(
            IEnumerable<NavigationItemAttribute> list)
        {
            var result = list.OrderBy(x => x.Category ?? "")
                .ThenBy(x => x.Order)
                .ToLookup(x => x.Category ?? "");

            var missing = new Dictionary<string, NavigationItemAttribute>();
            foreach (var group in result)
            {
                string path = group.Key;
                while (!string.IsNullOrEmpty(path) && !missing.ContainsKey(path))
                {
                    var idx = path.Replace("//", "\x1\x1", StringComparison.Ordinal).LastIndexOf('/');
                    string parent;
                    string title;
                    if (idx < 0)
                    {
                        parent = "";
                        title = path;
                    }
                    else
                    {
                        parent = path.Substring(0, idx);
                        title = path[(idx + 1)..];
                    }

                    if (!result[parent].Any(x => x.Title == title))
                        missing.Add(path, new NavigationMenuAttribute(group.Min(x => x.Order), path));

                    path = parent;
                }
            }

            if (missing.Count > 0)
                return list.Concat(missing.Values)
                    .OrderBy(x => x.Category ?? "")
                    .ThenBy(x => x.Order)
                    .ToLookup(x => x.Category ?? "");

            return result;
        }
    }
}