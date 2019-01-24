using System;

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
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }

        public static class Store
        {
            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Store/Category/CategoryIndex.cshtml";
            }

            public static class CategoryType
            {
                public const string CategoryTypeIndex = "~/Modules/Store/CategoryType/CategoryTypeIndex.cshtml";
            }

            public static class Counterparty
            {
                public const string CounterpartyIndex = "~/Modules/Store/Counterparty/CounterpartyIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Store/Customer/CustomerIndex.cshtml";
            }

            public static class Employee
            {
                public const string EmployeeIndex = "~/Modules/Store/Employee/EmployeeIndex.cshtml";
            }

            public static class Item
            {
                public const string ItemIndex = "~/Modules/Store/Item/ItemIndex.cshtml";
            }

            public static class ItemCategory
            {
                public const string ItemCategoryIndex = "~/Modules/Store/ItemCategory/ItemCategoryIndex.cshtml";
            }

            public static class Measure
            {
                public const string MeasureIndex = "~/Modules/Store/Measure/MeasureIndex.cshtml";
            }

            public static class OperationType
            {
                public const string OperationTypeIndex = "~/Modules/Store/OperationType/OperationTypeIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderIndex = "~/Modules/Store/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Store/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class OrderProduct
            {
                public const string OrderProductIndex = "~/Modules/Store/OrderProduct/OrderProductIndex.cshtml";
            }

            public static class OrderProductDetail
            {
                public const string OrderProductDetailIndex = "~/Modules/Store/OrderProductDetail/OrderProductDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Store/Product/ProductIndex.cshtml";
            }

            public static class ProductDetail
            {
                public const string ProductDetailIndex = "~/Modules/Store/ProductDetail/ProductDetailIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Store/Shipper/ShipperIndex.cshtml";
            }

            public static class Shops
            {
                public const string ShopsIndex = "~/Modules/Store/Shops/ShopsIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Store/Supplier/SupplierIndex.cshtml";
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

