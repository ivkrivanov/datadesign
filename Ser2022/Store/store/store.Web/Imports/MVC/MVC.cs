
namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Tenant
            {
                public const string TenantIndex = "~/Modules/Administration/Tenant/TenantIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _Sidebar = "~/Views/Shared/_Sidebar.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
        }

        public static class Store
        {
            public static class Categories
            {
                public const string CategoriesIndex = "~/Modules/Store/Categories/CategoriesIndex.cshtml";
            }

            public static class CategoriesType
            {
                public const string CategoriesTypeIndex = "~/Modules/Store/CategoriesType/CategoriesTypeIndex.cshtml";
            }

            public static class Counterparties
            {
                public const string CounterpartiesIndex = "~/Modules/Store/Counterparties/CounterpartiesIndex.cshtml";
            }

            public static class DocumentType
            {
                public const string DocumentTypeIndex = "~/Modules/Store/DocumentType/DocumentTypeIndex.cshtml";
            }

            public static class Measures
            {
                public const string MeasuresIndex = "~/Modules/Store/Measures/MeasuresIndex.cshtml";
            }

            public static class OperationType
            {
                public const string OperationTypeIndex = "~/Modules/Store/OperationType/OperationTypeIndex.cshtml";
            }

            public static class ProductDetails
            {
                public const string ProductDetailsIndex = "~/Modules/Store/ProductDetails/ProductDetailsIndex.cshtml";
            }

            public static class Products
            {
                public const string ProductsIndex = "~/Modules/Store/Products/ProductsIndex.cshtml";
            }

            public static class Shippers
            {
                public const string ShippersIndex = "~/Modules/Store/Shippers/ShippersIndex.cshtml";
            }

            public static class Shops
            {
                public const string ShopsIndex = "~/Modules/Store/Shops/ShopsIndex.cshtml";
            }

            public static class Wares
            {
                public const string WaresIndex = "~/Modules/Store/Wares/WaresIndex.cshtml";
            }

            public static class WaresMovement
            {
                public const string WaresMovementIndex = "~/Modules/Store/WaresMovement/WaresMovementIndex.cshtml";
            }

            public static class WaresMovementDetails
            {
                public const string WaresMovementDetailsIndex = "~/Modules/Store/WaresMovementDetails/WaresMovementDetailsIndex.cshtml";
            }

        }

    }
}
