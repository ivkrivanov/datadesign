using Serenity.Navigation;
using MyPages = Warehouse.Store.Pages;

[assembly: NavigationLink(int.MaxValue, "Store/Categories", typeof(MyPages.CategoriesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Category Lang", typeof(MyPages.CategoryLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Employee", typeof(MyPages.EmployeeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Customer Details", typeof(MyPages.CustomerDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Customer", typeof(MyPages.CustomerController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Note", typeof(MyPages.NoteController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Order Detail", typeof(MyPages.OrderDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Order", typeof(MyPages.OrderController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Product Lang", typeof(MyPages.ProductLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Product", typeof(MyPages.ProductController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Supplier", typeof(MyPages.SupplierController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Shipper", typeof(MyPages.ShipperController), icon: null)]