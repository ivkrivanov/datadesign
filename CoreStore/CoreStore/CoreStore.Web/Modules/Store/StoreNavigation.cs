using Serenity.Navigation;
using MyPages = CoreStore.Store.Pages;

[assembly: NavigationLink(int.MaxValue, "Store/Categories Type", typeof(MyPages.CategoriesTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Categories", typeof(MyPages.CategoriesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Operation Type", typeof(MyPages.OperationTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Measures", typeof(MyPages.MeasuresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Document Type", typeof(MyPages.DocumentTypeController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Shops", typeof(MyPages.ShopsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Wares", typeof(MyPages.WaresController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Counterparties", typeof(MyPages.CounterpartiesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Product Details", typeof(MyPages.ProductDetailsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Store/Products", typeof(MyPages.ProductsController), icon: null)]