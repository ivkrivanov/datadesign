using Serenity.Navigation;
using MyPages = Warehouse.Store.Pages;

[assembly: NavigationLink(4000, "Store/Customer", typeof(MyPages.CustomerController), icon: "fa-credit-card")]
[assembly: NavigationLink(4100, "Store/Order", typeof(MyPages.OrderController), icon: "fa-shopping-cart")]
[assembly: NavigationLink(4200, "Store/Product", typeof(MyPages.ProductController), icon: "fa-cube")]
[assembly: NavigationLink(4300, "Store/Supplier", typeof(MyPages.SupplierController), icon: "fa-truck")]
[assembly: NavigationLink(4400, "Store/Shipper", typeof(MyPages.ShipperController), icon: "fa-ship")]
[assembly: NavigationLink(int.MaxValue, "Store/Categories", typeof(MyPages.CategoriesController), icon: "fa-folder-o")]






//[assembly: NavigationLink(int.MaxValue, "Store/Category Lang", typeof(MyPages.CategoryLangController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Employee", typeof(MyPages.EmployeeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Customer Details", typeof(MyPages.CustomerDetailsController), icon: null)]

//[assembly: NavigationLink(int.MaxValue, "Store/Note", typeof(MyPages.NoteController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Order Detail", typeof(MyPages.OrderDetailController), icon: null)]

//[assembly: NavigationLink(int.MaxValue, "Store/Product Lang", typeof(MyPages.ProductLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Product Detail", typeof(MyPages.ProductDetailController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Item", typeof(MyPages.ItemController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Item Lang", typeof(MyPages.ItemLangController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Item Category", typeof(MyPages.ItemCategoryController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Item Categories Lang", typeof(MyPages.ItemCategoriesLangController), icon: null)]