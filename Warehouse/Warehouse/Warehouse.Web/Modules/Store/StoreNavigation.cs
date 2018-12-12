using Serenity.Navigation;
using MyPages = Warehouse.Store.Pages;

[assembly: NavigationLink(int.MaxValue, "Store/Categories", typeof(MyPages.CategoriesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Category Lang", typeof(MyPages.CategoryLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Employee", typeof(MyPages.EmployeeController), icon: null)]