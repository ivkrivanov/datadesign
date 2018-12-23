var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TenantForm = /** @class */ (function (_super) {
            __extends(TenantForm, _super);
            function TenantForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TenantForm.init) {
                    TenantForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(TenantForm, [
                        'TenantName', w0
                    ]);
                }
                return _this;
            }
            TenantForm.formKey = 'Administration.Tenant';
            return TenantForm;
        }(Serenity.PrefixedContext));
        Administration.TenantForm = TenantForm;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TenantRow;
        (function (TenantRow) {
            TenantRow.idProperty = 'TenantId';
            TenantRow.nameProperty = 'TenantName';
            TenantRow.localTextPrefix = 'Administration.Tenant';
            TenantRow.lookupKey = 'Administration.Tenant';
            function getLookup() {
                return Q.getLookup('Administration.Tenant');
            }
            TenantRow.getLookup = getLookup;
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TenantService;
        (function (TenantService) {
            TenantService.baseUrl = 'Administration/Tenant';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TenantService[x] = function (r, s, o) {
                    return Q.serviceRequest(TenantService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TenantService = Administration.TenantService || (Administration.TenantService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    var w4 = s.LookupEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0,
                        'TenantId', w4
                    ]);
                }
                return _this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Modules;
    (function (Modules) {
        var Store;
        (function (Store) {
            var Customer;
            (function (Customer) {
                var CustomerGrossSalesRow;
                (function (CustomerGrossSalesRow) {
                    CustomerGrossSalesRow.nameProperty = 'ContactName';
                    CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
                })(CustomerGrossSalesRow = Customer.CustomerGrossSalesRow || (Customer.CustomerGrossSalesRow = {}));
            })(Customer = Store.Customer || (Store.Customer = {}));
        })(Store = Modules.Store || (Modules.Store = {}));
    })(Modules = Warehouse.Modules || (Warehouse.Modules = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoriesForm, [
                        'CategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'Store.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        Store.CategoriesForm = CategoriesForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'CategoryId';
            CategoriesRow.isActiveProperty = 'IsActive';
            CategoriesRow.nameProperty = 'CategoryName';
            CategoriesRow.localTextPrefix = 'Store.Categories';
            CategoriesRow.lookupKey = 'Store.Categories';
            function getLookup() {
                return Q.getLookup('Store.Categories');
            }
            CategoriesRow.getLookup = getLookup;
        })(CategoriesRow = Store.CategoriesRow || (Store.CategoriesRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'Store/Categories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = Store.CategoriesService || (Store.CategoriesService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Store.CategoryLang';
        })(CategoryLangRow = Store.CategoryLangRow || (Store.CategoryLangRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Store/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = Store.CategoryLangService || (Store.CategoryLangService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Store.CustomerDetails';
        })(CustomerDetailsRow = Store.CustomerDetailsRow || (Store.CustomerDetailsRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Store.NotesEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.EmailEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Representatives', w1,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'NoteList', w2,
                        'LastContactDate', w3,
                        'LastContactedBy', w1,
                        'Email', w4,
                        'SendBulletin', w5
                    ]);
                }
                return _this;
            }
            CustomerForm.formKey = 'Store.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Store.CustomerForm = CustomerForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'Store.CustomerRepresentatives';
        })(CustomerRepresentativesRow = Store.CustomerRepresentativesRow || (Store.CustomerRepresentativesRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'Id';
            CustomerRow.isActiveProperty = 'IsActive';
            CustomerRow.nameProperty = 'CustomerID';
            CustomerRow.localTextPrefix = 'Store.Customer';
            CustomerRow.lookupKey = 'Store.Customer';
            function getLookup() {
                return Q.getLookup('Store.Customer');
            }
            CustomerRow.getLookup = getLookup;
        })(CustomerRow = Store.CustomerRow || (Store.CustomerRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Store/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Store.CustomerService || (Store.CustomerService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeForm = /** @class */ (function (_super) {
            __extends(EmployeeForm, _super);
            function EmployeeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeeForm.init) {
                    EmployeeForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(EmployeeForm, [
                        'LastName', w0,
                        'FirstName', w0,
                        'Title', w0,
                        'TitleOfCourtesy', w0,
                        'BirthDate', w1,
                        'HireDate', w1,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'HomePhone', w0,
                        'Extension', w0,
                        'Photo', w0,
                        'Notes', w0,
                        'ReportsTo', w2,
                        'PhotoPath', w0
                    ]);
                }
                return _this;
            }
            EmployeeForm.formKey = 'Store.Employee';
            return EmployeeForm;
        }(Serenity.PrefixedContext));
        Store.EmployeeForm = EmployeeForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.isActiveProperty = 'IsActive';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Store.Employee';
            EmployeeRow.lookupKey = 'Store.Employee';
            function getLookup() {
                return Q.getLookup('Store.Employee');
            }
            EmployeeRow.getLookup = getLookup;
        })(EmployeeRow = Store.EmployeeRow || (Store.EmployeeRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeService;
        (function (EmployeeService) {
            EmployeeService.baseUrl = 'Store/Employee';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeeService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeeService = Store.EmployeeService || (Store.EmployeeService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Store.Gender || (Store.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'Warehouse.Store.Gender', 'Warehouse.Store.Entities.Gender');
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoriesLangRow;
        (function (ItemCategoriesLangRow) {
            ItemCategoriesLangRow.idProperty = 'Id';
            ItemCategoriesLangRow.nameProperty = 'ItemCategoryName';
            ItemCategoriesLangRow.localTextPrefix = 'Store.ItemCategoriesLang';
        })(ItemCategoriesLangRow = Store.ItemCategoriesLangRow || (Store.ItemCategoriesLangRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoriesLangService;
        (function (ItemCategoriesLangService) {
            ItemCategoriesLangService.baseUrl = 'Store/ItemCategoriesLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemCategoriesLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemCategoriesLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemCategoriesLangService = Store.ItemCategoriesLangService || (Store.ItemCategoriesLangService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoryForm = /** @class */ (function (_super) {
            __extends(ItemCategoryForm, _super);
            function ItemCategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ItemCategoryForm.init) {
                    ItemCategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    Q.initFormType(ItemCategoryForm, [
                        'ItemCategoryCode', w0,
                        'ItemCategoryName', w0,
                        'ItemCatImage', w1,
                        'ItemCatDescription', w0
                    ]);
                }
                return _this;
            }
            ItemCategoryForm.formKey = 'Store.ItemCategory';
            return ItemCategoryForm;
        }(Serenity.PrefixedContext));
        Store.ItemCategoryForm = ItemCategoryForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoryRow;
        (function (ItemCategoryRow) {
            ItemCategoryRow.idProperty = 'ItemCategoryID';
            ItemCategoryRow.isActiveProperty = 'IsActive';
            ItemCategoryRow.nameProperty = 'ItemCategoryName';
            ItemCategoryRow.localTextPrefix = 'Store.ItemCategory';
            ItemCategoryRow.lookupKey = 'Store.ItemCategory';
            function getLookup() {
                return Q.getLookup('Store.ItemCategory');
            }
            ItemCategoryRow.getLookup = getLookup;
        })(ItemCategoryRow = Store.ItemCategoryRow || (Store.ItemCategoryRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoryService;
        (function (ItemCategoryService) {
            ItemCategoryService.baseUrl = 'Store/ItemCategory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemCategoryService = Store.ItemCategoryService || (Store.ItemCategoryService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemForm = /** @class */ (function (_super) {
            __extends(ItemForm, _super);
            function ItemForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ItemForm.init) {
                    ItemForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = s.IntegerEditor;
                    var w5 = s.DecimalEditor;
                    Q.initFormType(ItemForm, [
                        'ItemCategoryID', w0,
                        'ItemCode', w1,
                        'ItemBarcode', w1,
                        'ItemLabel', w1,
                        'ItemName', w1,
                        'ItemImage', w2,
                        'Discontinued', w3,
                        'SupplierID', w0,
                        'MeasureID', w4,
                        'QuantityPerUnit', w4,
                        'UnitPrice', w5,
                        'AccountID', w4
                    ]);
                }
                return _this;
            }
            ItemForm.formKey = 'Store.Item';
            return ItemForm;
        }(Serenity.PrefixedContext));
        Store.ItemForm = ItemForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemLangRow;
        (function (ItemLangRow) {
            ItemLangRow.idProperty = 'Id';
            ItemLangRow.nameProperty = 'ItemName';
            ItemLangRow.localTextPrefix = 'Store.ItemLang';
        })(ItemLangRow = Store.ItemLangRow || (Store.ItemLangRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemLangService;
        (function (ItemLangService) {
            ItemLangService.baseUrl = 'Store/ItemLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemLangService = Store.ItemLangService || (Store.ItemLangService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemRow;
        (function (ItemRow) {
            ItemRow.idProperty = 'ItemID';
            ItemRow.isActiveProperty = 'IsActive';
            ItemRow.nameProperty = 'ItemName';
            ItemRow.localTextPrefix = 'Store.Item';
            ItemRow.lookupKey = 'Store.Item';
            function getLookup() {
                return Q.getLookup('Store.Item');
            }
            ItemRow.getLookup = getLookup;
        })(ItemRow = Store.ItemRow || (Store.ItemRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemService;
        (function (ItemService) {
            ItemService.baseUrl = 'Store/Item';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'RetrieveLocalization',
                'List'
            ].forEach(function (x) {
                ItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemService = Store.ItemService || (Store.ItemService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var MeasureForm = /** @class */ (function (_super) {
            __extends(MeasureForm, _super);
            function MeasureForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeasureForm.init) {
                    MeasureForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(MeasureForm, [
                        'MeasureName', w0,
                        'InsertDate', w1,
                        'InsertUserId', w2,
                        'UpdateDate', w1,
                        'UpdateUserId', w2,
                        'IsActive', w2,
                        'TenantId', w2
                    ]);
                }
                return _this;
            }
            MeasureForm.formKey = 'Store.Measure';
            return MeasureForm;
        }(Serenity.PrefixedContext));
        Store.MeasureForm = MeasureForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var MeasureRow;
        (function (MeasureRow) {
            MeasureRow.idProperty = 'MeasureId';
            MeasureRow.isActiveProperty = 'IsActive';
            MeasureRow.nameProperty = 'MeasureName';
            MeasureRow.localTextPrefix = 'Store.Measure';
            MeasureRow.lookupKey = 'Store.Measure';
            function getLookup() {
                return Q.getLookup('Store.Measure');
            }
            MeasureRow.getLookup = getLookup;
        })(MeasureRow = Store.MeasureRow || (Store.MeasureRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var MeasureService;
        (function (MeasureService) {
            MeasureService.baseUrl = 'Store/Measure';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MeasureService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeasureService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeasureService = Store.MeasureService || (Store.MeasureService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Store.Note';
        })(NoteRow = Store.NoteRow || (Store.NoteRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            OrderDetailForm.formKey = 'Store.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Store.OrderDetailForm = OrderDetailForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.isActiveProperty = 'IsActive';
            OrderDetailRow.localTextPrefix = 'Store.OrderDetail';
        })(OrderDetailRow = Store.OrderDetailRow || (Store.OrderDetailRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Store/OrderDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Store.OrderDetailService || (Store.OrderDetailService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = Store.CustomerEditor;
                    var w1 = s.DateEditor;
                    var w2 = s.LookupEditor;
                    var w3 = Store.OrderDetailsEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.StringEditor;
                    Q.initFormType(OrderForm, [
                        'CustomerID', w0,
                        'OrderDate', w1,
                        'RequiredDate', w1,
                        'EmployeeID', w2,
                        'DetailList', w3,
                        'ShippedDate', w1,
                        'ShipVia', w2,
                        'Freight', w4,
                        'ShipName', w5,
                        'ShipAddress', w5,
                        'ShipCity', w5,
                        'ShipRegion', w5,
                        'ShipPostalCode', w5,
                        'ShipCountry', w5
                    ]);
                }
                return _this;
            }
            OrderForm.formKey = 'Store.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Store.OrderForm = OrderForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.isActiveProperty = 'IsActive';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Store.Order';
        })(OrderRow = Store.OrderRow || (Store.OrderRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Store/Order';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Store.OrderService || (Store.OrderService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Store.OrderShippingState || (Store.OrderShippingState = {}));
        Serenity.Decorators.registerEnumType(OrderShippingState, 'Warehouse.Store.OrderShippingState', 'Store.OrderShippingState');
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDetailForm = /** @class */ (function (_super) {
            __extends(ProductDetailForm, _super);
            function ProductDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductDetailForm.init) {
                    ProductDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ProductDetailForm, [
                        'ItemID', w0,
                        'Quantity', w1,
                        'ProductQuantity', w1,
                        'Reduction', w1,
                        'PlanPrice', w1
                    ]);
                }
                return _this;
            }
            ProductDetailForm.formKey = 'Store.ProductDetail';
            return ProductDetailForm;
        }(Serenity.PrefixedContext));
        Store.ProductDetailForm = ProductDetailForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDetailRow;
        (function (ProductDetailRow) {
            ProductDetailRow.idProperty = 'DetailID';
            ProductDetailRow.isActiveProperty = 'IsActive';
            ProductDetailRow.localTextPrefix = 'Store.ProductDetail';
        })(ProductDetailRow = Store.ProductDetailRow || (Store.ProductDetailRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDetailService;
        (function (ProductDetailService) {
            ProductDetailService.baseUrl = 'Store/ProductDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductDetailService = Store.ProductDetailService || (Store.ProductDetailService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = Store.ProductDetailsEditor;
                    var w5 = s.DecimalEditor;
                    var w6 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w3,
                        'DetailList', w4,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w5,
                        'UnitsInStock', w6,
                        'UnitsOnOrder', w6,
                        'ReorderLevel', w6
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Store.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Store.ProductForm = ProductForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Store.ProductLang';
        })(ProductLangRow = Store.ProductLangRow || (Store.ProductLangRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Store/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = Store.ProductLangService || (Store.ProductLangService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Store.ProductLog';
        })(ProductLogRow = Store.ProductLogRow || (Store.ProductLogRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.isActiveProperty = 'IsActive';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Store.Product';
            ProductRow.lookupKey = 'Store.Product';
            function getLookup() {
                return Q.getLookup('Store.Product');
            }
            ProductRow.getLookup = getLookup;
        })(ProductRow = Store.ProductRow || (Store.ProductRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Store/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'RetrieveLocalization',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Store.ProductService || (Store.ProductService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ShipperForm = /** @class */ (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShipperForm.init) {
                    ShipperForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Store.PhoneEditor;
                    Q.initFormType(ShipperForm, [
                        'CompanyName', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
            }
            ShipperForm.formKey = 'Store.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Store.ShipperForm = ShipperForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.isActiveProperty = 'IsActive';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Store.Shipper';
            ShipperRow.lookupKey = 'Store.Shipper';
            function getLookup() {
                return Q.getLookup('Store.Shipper');
            }
            ShipperRow.getLookup = getLookup;
        })(ShipperRow = Store.ShipperRow || (Store.ShipperRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Store/Shipper';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipperService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipperService = Store.ShipperService || (Store.ShipperService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'City', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Store.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Store.SupplierForm = SupplierForm;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.isActiveProperty = 'IsActive';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Store.Supplier';
            SupplierRow.lookupKey = 'Store.Supplier';
            function getLookup() {
                return Q.getLookup('Store.Supplier');
            }
            SupplierRow.getLookup = getLookup;
        })(SupplierRow = Store.SupplierRow || (Store.SupplierRow = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Store/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Store.SupplierService || (Store.SupplierService = {}));
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Texts;
    (function (Texts) {
        Warehouse['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1, TenantId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Tenant: { TenantId: 1, TenantName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Northwind: { CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 } }, Store: { Categories: { CategoryId: 1, CategoryName: 1, Description: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Picture: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Customer: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, CustomerID: 1, Email: 1, Fax: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, CustomerDetails: { Email: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, TenantId: 1, Title: 1, TitleOfCourtesy: 1, UpdateDate: 1, UpdateUserId: 1 }, Item: { AccountID: 1, Discontinued: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ItemBarcode: 1, ItemCatDescription: 1, ItemCatImage: 1, ItemCategoryCode: 1, ItemCategoryID: 1, ItemCategoryName: 1, ItemCode: 1, ItemID: 1, ItemImage: 1, ItemLabel: 1, ItemName: 1, MeasureID: 1, QuantityPerUnit: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, TenantID: 1, UnitPrice: 1, UpdateDate: 1, UpdateUserId: 1 }, ItemCategoriesLang: { Description: 1, Id: 1, ItemCategoryId: 1, ItemCategoryName: 1, LanguageId: 1 }, ItemCategory: { InsertDate: 1, InsertUserId: 1, IsActive: 1, ItemCatDescription: 1, ItemCatImage: 1, ItemCategoryCode: 1, ItemCategoryID: 1, ItemCategoryName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, ItemLang: { Description: 1, Id: 1, ItemId: 1, ItemName: 1, LanguageId: 1 }, Measure: { InsertDate: 1, InsertUserId: 1, IsActive: 1, MeasureId: 1, MeasureName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, OrderDetail: { DetailID: 1, Discount: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, TenantId: 1, UnitPrice: 1, UpdateDate: 1, UpdateUserId: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, DetailList: 1, Discontinued: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, TenantId: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductDetail: { DetailID: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, ItemID: 1, ItemItemCode: 1, ItemItemName: 1, PlanPrice: 1, ProductDiscontinued: 1, ProductID: 1, ProductProductName: 1, ProductQuantity: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, Reduction: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Shipper: { CompanyName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, ShipperID: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Warehouse.Texts || (Warehouse.Texts = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Warehouse.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Warehouse.LanguageList || (Warehouse.LanguageList = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Warehouse;
(function (Warehouse) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Warehouse');
        Serenity.EntityDialog.defaultLanguageList = Warehouse.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Warehouse.ScriptInitialization || (Warehouse.ScriptInitialization = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TenantDialog = /** @class */ (function (_super) {
            __extends(TenantDialog, _super);
            function TenantDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.TenantForm(_this.idPrefix);
                return _this;
            }
            TenantDialog.prototype.getFormKey = function () { return Administration.TenantForm.formKey; };
            TenantDialog.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantDialog.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantDialog.prototype.getNameProperty = function () { return Administration.TenantRow.nameProperty; };
            TenantDialog.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantDialog);
            return TenantDialog;
        }(Serenity.EntityDialog));
        Administration.TenantDialog = TenantDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TenantGrid = /** @class */ (function (_super) {
            __extends(TenantGrid, _super);
            function TenantGrid(container) {
                return _super.call(this, container) || this;
            }
            TenantGrid.prototype.getColumnsKey = function () { return 'Administration.Tenant'; };
            TenantGrid.prototype.getDialogType = function () { return Administration.TenantDialog; };
            TenantGrid.prototype.getIdProperty = function () { return Administration.TenantRow.idProperty; };
            TenantGrid.prototype.getLocalTextPrefix = function () { return Administration.TenantRow.localTextPrefix; };
            TenantGrid.prototype.getService = function () { return Administration.TenantService.baseUrl; };
            TenantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantGrid);
            return TenantGrid;
        }(Serenity.EntityGrid));
        Administration.TenantGrid = TenantGrid;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog.prototype.getPropertyItems = function () {
                var items = _super.prototype.getPropertyItems.call(this);
                if (!Q.Authorization.hasPermission("Administration:Tenants"))
                    items = items.filter(function (x) { return x.name != "TenantId" /* TenantId */; });
                return items;
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = Warehouse.Administration || (Warehouse.Administration = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    Warehouse.BasicProgressDialog = BasicProgressDialog;
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Warehouse.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = Warehouse.DialogUtils || (Warehouse.DialogUtils = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    Warehouse.StaticTextBlock = StaticTextBlock;
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = Warehouse.Common || (Warehouse.Common = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoriesDialog = /** @class */ (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.CategoriesForm(_this.idPrefix);
                return _this;
            }
            CategoriesDialog.prototype.getFormKey = function () { return Store.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return Store.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return Store.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return Store.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return Store.CategoriesService.baseUrl; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        Store.CategoriesDialog = CategoriesDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'Store.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return Store.CategoriesDialog; };
            CategoriesGrid.prototype.getIdProperty = function () { return Store.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return Store.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return Store.CategoriesService.baseUrl; };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        Store.CategoriesGrid = CategoriesGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoryLangDialog = /** @class */ (function (_super) {
            __extends(CategoryLangDialog, _super);
            function CategoryLangDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CategoryLangForm(_this.idPrefix);
                return _this;
            }
            CategoryLangDialog.prototype.getFormKey = function () { return CategoryLangForm.formKey; };
            CategoryLangDialog.prototype.getIdProperty = function () { return Store.CategoryLangRow.idProperty; };
            CategoryLangDialog.prototype.getLocalTextPrefix = function () { return Store.CategoryLangRow.localTextPrefix; };
            CategoryLangDialog.prototype.getNameProperty = function () { return Store.CategoryLangRow.nameProperty; };
            CategoryLangDialog.prototype.getService = function () { return Store.CategoryLangService.baseUrl; };
            CategoryLangDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryLangDialog);
            return CategoryLangDialog;
        }(Serenity.EntityDialog));
        Store.CategoryLangDialog = CategoryLangDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CategoryLangGrid = /** @class */ (function (_super) {
            __extends(CategoryLangGrid, _super);
            function CategoryLangGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryLangGrid.prototype.getColumnsKey = function () { return 'Store.CategoryLang'; };
            CategoryLangGrid.prototype.getDialogType = function () { return Store.CategoryLangDialog; };
            CategoryLangGrid.prototype.getIdProperty = function () { return Store.CategoryLangRow.idProperty; };
            CategoryLangGrid.prototype.getLocalTextPrefix = function () { return Store.CategoryLangRow.localTextPrefix; };
            CategoryLangGrid.prototype.getService = function () { return Store.CategoryLangService.baseUrl; };
            CategoryLangGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryLangGrid);
            return CategoryLangGrid;
        }(Serenity.EntityGrid));
        Store.CategoryLangGrid = CategoryLangGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Store.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Warehouse.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Store.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Store.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Store.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Store.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Store.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Store.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Store.CustomerDialog = CustomerDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerEditor = /** @class */ (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return Store.CustomerRow.lookupKey;
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Store.CustomerEditor = CustomerEditor;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return 'Store.Customer'; };
            CustomerGrid.prototype.getDialogType = function () { return Store.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Store.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Store.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Store.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Warehouse.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Store/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(Warehouse.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Store.CustomerGrid = CustomerGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.OrderForm(_this.idPrefix);
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Store.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Store.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Store.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Store.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Store.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Warehouse.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Store.OrderDetail',
                    getParams: function () { return ({
                        OrderID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Store.OrderDialog = OrderDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../Order/OrderDialog.ts" />
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerOrderDialog = /** @class */ (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                return _super.call(this) || this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Store.OrderDialog));
        Store.CustomerOrderDialog = CustomerOrderDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return 'Store.Order'; };
            OrderGrid.prototype.getDialogType = function () { return Store.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Store.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Store.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Store.OrderService.baseUrl; };
            OrderGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Store.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (w) {
                        _this.view.params.ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Warehouse.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Warehouse.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: function (ctx) { return '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>'; },
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
                return columns;
            };
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        Warehouse.Common.ReportHelper.execute({
                            reportKey: 'Store.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Store.OrderGrid = OrderGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../Order/OrderGrid.ts" />
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Store.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CustomerCompanyName" /* CustomerCompanyName */; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Store.OrderGrid));
        Store.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeListFormatter = /** @class */ (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Store.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Store.EmployeeListFormatter = EmployeeListFormatter;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerDetailsDialog = /** @class */ (function (_super) {
            __extends(CustomerDetailsDialog, _super);
            function CustomerDetailsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new CustomerDetailsForm(_this.idPrefix);
                return _this;
            }
            CustomerDetailsDialog.prototype.getFormKey = function () { return CustomerDetailsForm.formKey; };
            CustomerDetailsDialog.prototype.getIdProperty = function () { return Store.CustomerDetailsRow.idProperty; };
            CustomerDetailsDialog.prototype.getLocalTextPrefix = function () { return Store.CustomerDetailsRow.localTextPrefix; };
            CustomerDetailsDialog.prototype.getNameProperty = function () { return Store.CustomerDetailsRow.nameProperty; };
            CustomerDetailsDialog.prototype.getService = function () { return CustomerDetailsService.baseUrl; };
            CustomerDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDetailsDialog);
            return CustomerDetailsDialog;
        }(Serenity.EntityDialog));
        Store.CustomerDetailsDialog = CustomerDetailsDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var CustomerDetailsGrid = /** @class */ (function (_super) {
            __extends(CustomerDetailsGrid, _super);
            function CustomerDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerDetailsGrid.prototype.getColumnsKey = function () { return 'Store.CustomerDetails'; };
            CustomerDetailsGrid.prototype.getDialogType = function () { return Store.CustomerDetailsDialog; };
            CustomerDetailsGrid.prototype.getIdProperty = function () { return Store.CustomerDetailsRow.idProperty; };
            CustomerDetailsGrid.prototype.getLocalTextPrefix = function () { return Store.CustomerDetailsRow.localTextPrefix; };
            CustomerDetailsGrid.prototype.getService = function () { return CustomerDetailsService.baseUrl; };
            CustomerDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDetailsGrid);
            return CustomerDetailsGrid;
        }(Serenity.EntityGrid));
        Store.CustomerDetailsGrid = CustomerDetailsGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeDialog = /** @class */ (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return Store.EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return Store.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return Store.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return Store.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return Store.EmployeeService.baseUrl; };
            EmployeeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDialog);
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        Store.EmployeeDialog = EmployeeDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeFormatter = /** @class */ (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Store.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Store.EmployeeFormatter = EmployeeFormatter;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var EmployeeGrid = /** @class */ (function (_super) {
            __extends(EmployeeGrid, _super);
            function EmployeeGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeeGrid.prototype.getColumnsKey = function () { return 'Store.Employee'; };
            EmployeeGrid.prototype.getDialogType = function () { return Store.EmployeeDialog; };
            EmployeeGrid.prototype.getIdProperty = function () { return Store.EmployeeRow.idProperty; };
            EmployeeGrid.prototype.getLocalTextPrefix = function () { return Store.EmployeeRow.localTextPrefix; };
            EmployeeGrid.prototype.getService = function () { return Store.EmployeeService.baseUrl; };
            EmployeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeGrid);
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        Store.EmployeeGrid = EmployeeGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemDialog = /** @class */ (function (_super) {
            __extends(ItemDialog, _super);
            function ItemDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.ItemForm(_this.idPrefix);
                return _this;
            }
            ItemDialog.prototype.getFormKey = function () { return Store.ItemForm.formKey; };
            ItemDialog.prototype.getIdProperty = function () { return Store.ItemRow.idProperty; };
            ItemDialog.prototype.getLocalTextPrefix = function () { return Store.ItemRow.localTextPrefix; };
            ItemDialog.prototype.getNameProperty = function () { return Store.ItemRow.nameProperty; };
            ItemDialog.prototype.getService = function () { return Store.ItemService.baseUrl; };
            ItemDialog.prototype.getLanguages = function () { return Warehouse.LanguageList.getValue(); };
            ItemDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ItemDialog);
            return ItemDialog;
        }(Serenity.EntityDialog));
        Store.ItemDialog = ItemDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemGrid = /** @class */ (function (_super) {
            __extends(ItemGrid, _super);
            function ItemGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ItemGrid.prototype.getColumnsKey = function () { return 'Store.Item'; };
            ItemGrid.prototype.getDialogType = function () { return Store.ItemDialog; };
            ItemGrid.prototype.getIdProperty = function () { return Store.ItemRow.idProperty; };
            ItemGrid.prototype.getLocalTextPrefix = function () { return Store.ItemRow.localTextPrefix; };
            ItemGrid.prototype.getService = function () { return Store.ItemService.baseUrl; };
            ItemGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Warehouse.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.ItemService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Warehouse.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Item List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ItemID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ItemGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ItemGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ItemID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ItemGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ItemID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ItemGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ItemID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ItemGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ItemID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ItemGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var itemcategory = Q.first(columns, function (x) { return x.field === "ItemCategoryName" /* ItemCategoryName */; });
                itemcategory.referencedFields = ["ItemCategoryID" /* ItemCategoryID */];
                itemcategory.format = function (ctx) { return _this.selectFormatter(ctx, "ItemCategoryID" /* ItemCategoryID */, Store.ItemCategoryRow.getLookup()); };
                //var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
                //supplier.referencedFields = [fld.SupplierID];
                //supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.getLookup());
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                //    //Q.first(columns, x => x.field === fld.UnitsInStock).format = num;
                //    //Q.first(columns, x => x.field === fld.UnitsOnOrder).format = num;
                //    //Q.first(columns, x => x.field === fld.ReorderLevel).format = num;
                return columns;
            };
            ItemGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ItemID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ItemID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ItemGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ItemGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ItemID = key;
                    Q.serviceRequest('Warehouse/Item/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ItemGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "ItemCategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ItemGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ItemGrid);
            return ItemGrid;
        }(Serenity.EntityGrid));
        Store.ItemGrid = ItemGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoriesLangDialog = /** @class */ (function (_super) {
            __extends(ItemCategoriesLangDialog, _super);
            function ItemCategoriesLangDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ItemCategoriesLangForm(_this.idPrefix);
                return _this;
            }
            ItemCategoriesLangDialog.prototype.getFormKey = function () { return ItemCategoriesLangForm.formKey; };
            ItemCategoriesLangDialog.prototype.getIdProperty = function () { return Store.ItemCategoriesLangRow.idProperty; };
            ItemCategoriesLangDialog.prototype.getLocalTextPrefix = function () { return Store.ItemCategoriesLangRow.localTextPrefix; };
            ItemCategoriesLangDialog.prototype.getNameProperty = function () { return Store.ItemCategoriesLangRow.nameProperty; };
            ItemCategoriesLangDialog.prototype.getService = function () { return Store.ItemCategoriesLangService.baseUrl; };
            ItemCategoriesLangDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemCategoriesLangDialog);
            return ItemCategoriesLangDialog;
        }(Serenity.EntityDialog));
        Store.ItemCategoriesLangDialog = ItemCategoriesLangDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoriesLangGrid = /** @class */ (function (_super) {
            __extends(ItemCategoriesLangGrid, _super);
            function ItemCategoriesLangGrid(container) {
                return _super.call(this, container) || this;
            }
            ItemCategoriesLangGrid.prototype.getColumnsKey = function () { return 'Store.ItemCategoriesLang'; };
            ItemCategoriesLangGrid.prototype.getDialogType = function () { return Store.ItemCategoriesLangDialog; };
            ItemCategoriesLangGrid.prototype.getIdProperty = function () { return Store.ItemCategoriesLangRow.idProperty; };
            ItemCategoriesLangGrid.prototype.getLocalTextPrefix = function () { return Store.ItemCategoriesLangRow.localTextPrefix; };
            ItemCategoriesLangGrid.prototype.getService = function () { return Store.ItemCategoriesLangService.baseUrl; };
            ItemCategoriesLangGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemCategoriesLangGrid);
            return ItemCategoriesLangGrid;
        }(Serenity.EntityGrid));
        Store.ItemCategoriesLangGrid = ItemCategoriesLangGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoryDialog = /** @class */ (function (_super) {
            __extends(ItemCategoryDialog, _super);
            function ItemCategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.ItemCategoryForm(_this.idPrefix);
                return _this;
            }
            ItemCategoryDialog.prototype.getFormKey = function () { return Store.ItemCategoryForm.formKey; };
            ItemCategoryDialog.prototype.getIdProperty = function () { return Store.ItemCategoryRow.idProperty; };
            ItemCategoryDialog.prototype.getLocalTextPrefix = function () { return Store.ItemCategoryRow.localTextPrefix; };
            ItemCategoryDialog.prototype.getNameProperty = function () { return Store.ItemCategoryRow.nameProperty; };
            ItemCategoryDialog.prototype.getService = function () { return Store.ItemCategoryService.baseUrl; };
            ItemCategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemCategoryDialog);
            return ItemCategoryDialog;
        }(Serenity.EntityDialog));
        Store.ItemCategoryDialog = ItemCategoryDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemCategoryGrid = /** @class */ (function (_super) {
            __extends(ItemCategoryGrid, _super);
            function ItemCategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            ItemCategoryGrid.prototype.getColumnsKey = function () { return 'Store.ItemCategory'; };
            ItemCategoryGrid.prototype.getDialogType = function () { return Store.ItemCategoryDialog; };
            ItemCategoryGrid.prototype.getIdProperty = function () { return Store.ItemCategoryRow.idProperty; };
            ItemCategoryGrid.prototype.getLocalTextPrefix = function () { return Store.ItemCategoryRow.localTextPrefix; };
            ItemCategoryGrid.prototype.getService = function () { return Store.ItemCategoryService.baseUrl; };
            ItemCategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemCategoryGrid);
            return ItemCategoryGrid;
        }(Serenity.EntityGrid));
        Store.ItemCategoryGrid = ItemCategoryGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemLangDialog = /** @class */ (function (_super) {
            __extends(ItemLangDialog, _super);
            function ItemLangDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ItemLangForm(_this.idPrefix);
                return _this;
            }
            ItemLangDialog.prototype.getFormKey = function () { return ItemLangForm.formKey; };
            ItemLangDialog.prototype.getIdProperty = function () { return Store.ItemLangRow.idProperty; };
            ItemLangDialog.prototype.getLocalTextPrefix = function () { return Store.ItemLangRow.localTextPrefix; };
            ItemLangDialog.prototype.getNameProperty = function () { return Store.ItemLangRow.nameProperty; };
            ItemLangDialog.prototype.getService = function () { return Store.ItemLangService.baseUrl; };
            ItemLangDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemLangDialog);
            return ItemLangDialog;
        }(Serenity.EntityDialog));
        Store.ItemLangDialog = ItemLangDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ItemLangGrid = /** @class */ (function (_super) {
            __extends(ItemLangGrid, _super);
            function ItemLangGrid(container) {
                return _super.call(this, container) || this;
            }
            ItemLangGrid.prototype.getColumnsKey = function () { return 'Store.ItemLang'; };
            ItemLangGrid.prototype.getDialogType = function () { return Store.ItemLangDialog; };
            ItemLangGrid.prototype.getIdProperty = function () { return Store.ItemLangRow.idProperty; };
            ItemLangGrid.prototype.getLocalTextPrefix = function () { return Store.ItemLangRow.localTextPrefix; };
            ItemLangGrid.prototype.getService = function () { return Store.ItemLangService.baseUrl; };
            ItemLangGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ItemLangGrid);
            return ItemLangGrid;
        }(Serenity.EntityGrid));
        Store.ItemLangGrid = ItemLangGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var MeasureDialog = /** @class */ (function (_super) {
            __extends(MeasureDialog, _super);
            function MeasureDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.MeasureForm(_this.idPrefix);
                return _this;
            }
            MeasureDialog.prototype.getFormKey = function () { return Store.MeasureForm.formKey; };
            MeasureDialog.prototype.getIdProperty = function () { return Store.MeasureRow.idProperty; };
            MeasureDialog.prototype.getLocalTextPrefix = function () { return Store.MeasureRow.localTextPrefix; };
            MeasureDialog.prototype.getNameProperty = function () { return Store.MeasureRow.nameProperty; };
            MeasureDialog.prototype.getService = function () { return Store.MeasureService.baseUrl; };
            MeasureDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeasureDialog);
            return MeasureDialog;
        }(Serenity.EntityDialog));
        Store.MeasureDialog = MeasureDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var MeasureGrid = /** @class */ (function (_super) {
            __extends(MeasureGrid, _super);
            function MeasureGrid(container) {
                return _super.call(this, container) || this;
            }
            MeasureGrid.prototype.getColumnsKey = function () { return 'Store.Measure'; };
            MeasureGrid.prototype.getDialogType = function () { return Store.MeasureDialog; };
            MeasureGrid.prototype.getIdProperty = function () { return Store.MeasureRow.idProperty; };
            MeasureGrid.prototype.getLocalTextPrefix = function () { return Store.MeasureRow.localTextPrefix; };
            MeasureGrid.prototype.getService = function () { return Store.MeasureService.baseUrl; };
            MeasureGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeasureGrid);
            return MeasureGrid;
        }(Serenity.EntityGrid));
        Store.MeasureGrid = MeasureGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.EntityDialog));
        Store.NoteDialog = NoteDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var NoteGrid = /** @class */ (function (_super) {
            __extends(NoteGrid, _super);
            function NoteGrid(container) {
                return _super.call(this, container) || this;
            }
            NoteGrid.prototype.getColumnsKey = function () { return 'Store.Note'; };
            NoteGrid.prototype.getDialogType = function () { return Store.NoteDialog; };
            NoteGrid.prototype.getIdProperty = function () { return Store.NoteRow.idProperty; };
            NoteGrid.prototype.getLocalTextPrefix = function () { return Store.NoteRow.localTextPrefix; };
            NoteGrid.prototype.getService = function () { return NoteService.baseUrl; };
            NoteGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteGrid);
            return NoteGrid;
        }(Serenity.EntityGrid));
        Store.NoteGrid = NoteGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Store.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: Warehouse.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Store.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Store.NotesEditor = NotesEditor;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var FreightFormatter = /** @class */ (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Store.FreightFormatter = FreightFormatter;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Store.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Store.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Store.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(Warehouse.Common.GridEditorDialog));
        Store.OrderDetailDialog = OrderDetailDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDetailGrid = /** @class */ (function (_super) {
            __extends(OrderDetailGrid, _super);
            function OrderDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailGrid.prototype.getColumnsKey = function () { return 'Store.OrderDetail'; };
            OrderDetailGrid.prototype.getDialogType = function () { return Store.OrderDetailDialog; };
            OrderDetailGrid.prototype.getIdProperty = function () { return Store.OrderDetailRow.idProperty; };
            OrderDetailGrid.prototype.getLocalTextPrefix = function () { return Store.OrderDetailRow.localTextPrefix; };
            OrderDetailGrid.prototype.getService = function () { return Store.OrderDetailService.baseUrl; };
            OrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailGrid);
            return OrderDetailGrid;
        }(Serenity.EntityGrid));
        Store.OrderDetailGrid = OrderDetailGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Store.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Store.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Store.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Store.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(Warehouse.Common.GridEditorBase));
        Store.OrderDetailsEditor = OrderDetailsEditor;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Store.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Store.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Store.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Store.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Store.ProductService.baseUrl; };
            ProductDialog.prototype.getLanguages = function () { return Warehouse.LanguageList.getValue(); };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Store.ProductDialog = ProductDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return 'Store.Product'; };
            ProductGrid.prototype.getDialogType = function () { return Store.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Store.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Store.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Store.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Warehouse.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Warehouse.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Store.CategoriesRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                supplier.referencedFields = ["SupplierID" /* SupplierID */];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Store.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Warehouse/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Store.ProductGrid = ProductGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDetailDialog = /** @class */ (function (_super) {
            __extends(ProductDetailDialog, _super);
            function ProductDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.ProductDetailForm(_this.idPrefix);
                _this.form.ItemID.changeSelect2(function (e) {
                    var ItemID = Q.toId(_this.form.ItemID.value);
                    if (ItemID != null) {
                        _this.form.PlanPrice.value = Store.ProductRow.getLookup().itemById[ItemID].UnitPrice;
                    }
                });
                return _this;
            }
            ProductDetailDialog.prototype.getFormKey = function () { return Store.ProductDetailForm.formKey; };
            //protected getIdProperty() { return ProductDetailRow.idProperty; }
            ProductDetailDialog.prototype.getLocalTextPrefix = function () { return Store.ProductDetailRow.localTextPrefix; };
            ProductDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDetailDialog);
            return ProductDetailDialog;
        }(Serenity.EntityDialog));
        Store.ProductDetailDialog = ProductDetailDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDetailsEditor = /** @class */ (function (_super) {
            __extends(ProductDetailsEditor, _super);
            function ProductDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            ProductDetailsEditor.prototype.getColumsKey = function () { return "Store.ProductDetail"; };
            Object.defineProperty(ProductDetailsEditor.prototype, "DialogType", {
                get: function () { return Store.ProductDetailDialog; },
                enumerable: true,
                configurable: true
            });
            ProductDetailsEditor.prototype.getLocalTextPrefix = function () { return Store.ProductDetailRow.localTextPrefix; };
            ProductDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ItemID = Q.toId(row.ItemID);
                var sameItem = Q.tryFirst(this.view.getItems(), function (x) { return x.ItemID === row.ItemID; });
                if (sameItem && this.id(sameItem) !== id) {
                    Q.alert('This item is already in product details!');
                    return false;
                }
                row.ItemName = Store.ItemRow.getLookup().itemById[row.ItemID].ItemName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            ProductDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDetailsEditor);
            return ProductDetailsEditor;
        }(Warehouse.Common.GridEditorBase));
        Store.ProductDetailsEditor = ProductDetailsEditor;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductDetailGrid = /** @class */ (function (_super) {
            __extends(ProductDetailGrid, _super);
            function ProductDetailGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductDetailGrid.prototype.getColumnsKey = function () { return 'Store.ProductDetail'; };
            ProductDetailGrid.prototype.getDialogType = function () { return Store.ProductDetailDialog; };
            ProductDetailGrid.prototype.getIdProperty = function () { return Store.ProductDetailRow.idProperty; };
            ProductDetailGrid.prototype.getLocalTextPrefix = function () { return Store.ProductDetailRow.localTextPrefix; };
            ProductDetailGrid.prototype.getService = function () { return Store.ProductDetailService.baseUrl; };
            ProductDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDetailGrid);
            return ProductDetailGrid;
        }(Serenity.EntityGrid));
        Store.ProductDetailGrid = ProductDetailGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductLangDialog = /** @class */ (function (_super) {
            __extends(ProductLangDialog, _super);
            function ProductLangDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new ProductLangForm(_this.idPrefix);
                return _this;
            }
            ProductLangDialog.prototype.getFormKey = function () { return ProductLangForm.formKey; };
            ProductLangDialog.prototype.getIdProperty = function () { return Store.ProductLangRow.idProperty; };
            ProductLangDialog.prototype.getLocalTextPrefix = function () { return Store.ProductLangRow.localTextPrefix; };
            ProductLangDialog.prototype.getNameProperty = function () { return Store.ProductLangRow.nameProperty; };
            ProductLangDialog.prototype.getService = function () { return Store.ProductLangService.baseUrl; };
            ProductLangDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLangDialog);
            return ProductLangDialog;
        }(Serenity.EntityDialog));
        Store.ProductLangDialog = ProductLangDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ProductLangGrid = /** @class */ (function (_super) {
            __extends(ProductLangGrid, _super);
            function ProductLangGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductLangGrid.prototype.getColumnsKey = function () { return 'Store.ProductLang'; };
            ProductLangGrid.prototype.getDialogType = function () { return Store.ProductLangDialog; };
            ProductLangGrid.prototype.getIdProperty = function () { return Store.ProductLangRow.idProperty; };
            ProductLangGrid.prototype.getLocalTextPrefix = function () { return Store.ProductLangRow.localTextPrefix; };
            ProductLangGrid.prototype.getService = function () { return Store.ProductLangService.baseUrl; };
            ProductLangGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductLangGrid);
            return ProductLangGrid;
        }(Serenity.EntityGrid));
        Store.ProductLangGrid = ProductLangGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.StorePhoneMultiple' : 'Validation.StorePhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            var PhoneEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Store.PhoneEditor = PhoneEditor;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ShipperDialog = /** @class */ (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Store.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Store.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Store.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Store.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Store.ShipperService.baseUrl; };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Store.ShipperDialog = ShipperDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ShipperFormatter = /** @class */ (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Store.ShipperFormatter = ShipperFormatter;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var ShipperGrid = /** @class */ (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return 'Store.Shipper'; };
            ShipperGrid.prototype.getDialogType = function () { return Store.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Store.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Store.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Store.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Store.ShipperGrid = ShipperGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Store.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Store.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Store.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Store.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Store.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return Warehouse.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Store.SupplierDialog = SupplierDialog;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Store;
    (function (Store) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return 'Store.Supplier'; };
            SupplierGrid.prototype.getDialogType = function () { return Store.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Store.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Store.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Store.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Store.SupplierGrid = SupplierGrid;
    })(Store = Warehouse.Store || (Warehouse.Store = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Warehouse.Authorization || (Warehouse.Authorization = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
var Warehouse;
(function (Warehouse) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = Warehouse.Membership || (Warehouse.Membership = {}));
})(Warehouse || (Warehouse = {}));
//# sourceMappingURL=Warehouse.Web.js.map