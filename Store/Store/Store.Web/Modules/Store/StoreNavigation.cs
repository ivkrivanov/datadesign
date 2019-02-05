using Serenity.Navigation;
using MyPages = Store.Store.Pages;

[assembly: NavigationMenu(2000, "Warehouse", icon: "fa-desktop")]
[assembly: NavigationLink(2000, "Store/Category Type", typeof(MyPages.CategoryTypeController), icon: "fa-folder-o")]
[assembly: NavigationLink(2100, "Store/Category", typeof(MyPages.CategoryController), icon: "fa-folder-o")]
[assembly: NavigationLink(2200, "Store/Wares", typeof(MyPages.WaresController), icon: "fa-cube")]
[assembly: NavigationLink(2300, "Store/Product", typeof(MyPages.ProductController), icon: "fa-cube")]
[assembly: NavigationLink(2400, "Store/Counterparty", typeof(MyPages.CounterpartyController), icon: "fa-credit-card")]
[assembly: NavigationLink(2500, "Store/Shops", typeof(MyPages.ShopsController), icon: "fa-ship")]
[assembly: NavigationLink(2600, "Store/Shipper", typeof(MyPages.ShipperController), icon: "fa-ship")]

[assembly: NavigationLink(3000, "Store/Measure", typeof(MyPages.MeasureController), icon: null)]
//[assembly: NavigationLink(3100, "Store/Operation Type", typeof(MyPages.OperationTypeController), icon: null)]
[assembly: NavigationLink(3200, "Store/Wares Movement", typeof(MyPages.WaresMovementController), icon: "fa-shopping-cart")]
[assembly: NavigationLink(3300, "Store/Product Movement", typeof(MyPages.ProductMovementController), icon: "fa-shopping-cart")]

[assembly: NavigationLink(5000, "Store/Supplier", typeof(MyPages.SupplierController), icon: "fa-truck")]




//[assembly: NavigationLink(6000, "Store/Order", typeof(MyPages.OrderController), icon: null)]

//[assembly: NavigationLink(7000, "Store/Order Product Detail", typeof(MyPages.OrderProductDetailController), icon: null)]
//[assembly: NavigationLink(8000, "Store/Order Product", typeof(MyPages.OrderProductController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Product Detail", typeof(MyPages.ProductDetailController), icon: null)]



//[assembly: NavigationLink(int.MaxValue, "Store/Note", typeof(MyPages.NoteController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Employee", typeof(MyPages.EmployeeController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Order Detail", typeof(MyPages.OrderDetailController), icon: null)]

//[assembly: NavigationLink(int.MaxValue, "Store/Wares Movement Details", typeof(MyPages.WaresMovementDetailsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Product Movement Details", typeof(MyPages.ProductMovementDetailsController), icon: null)]