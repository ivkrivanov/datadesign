using Serenity.Navigation;
using MyPages = Store.Store.Pages;

[assembly: NavigationLink(int.MaxValue, "Store/CategoriesType", typeof(MyPages.CategoriesTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/OperationType", typeof(MyPages.OperationTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Measures", typeof(MyPages.MeasuresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/DocumentType", typeof(MyPages.DocumentTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Shops", typeof(MyPages.ShopsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Shippers", typeof(MyPages.ShippersController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Counterparties", typeof(MyPages.CounterpartiesController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Product Details", typeof(MyPages.ProductDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Wares", typeof(MyPages.WaresController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Products", typeof(MyPages.ProductsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Wares Movement Details", typeof(MyPages.WaresMovementDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/WaresMovement", typeof(MyPages.WaresMovementController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Product Movement Details", typeof(MyPages.ProductMovementDetailsController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/ProductMovement", typeof(MyPages.ProductMovementController), icon: null)]
//[assembly: NavigationLink(int.MaxValue, "Store/Warehouse", typeof(MyPages.WarehouseController), icon: null)]