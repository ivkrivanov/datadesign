var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var LanguageColumns = /** @class */ (function () {
            function LanguageColumns() {
            }
            LanguageColumns.columnsKey = 'Administration.Language';
            return LanguageColumns;
        }());
        Administration.LanguageColumns = LanguageColumns;
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.Security = "Administration:Security";
            PermissionKeys.Translation = "Administration:Translation";
            PermissionKeys.Tenants = "Administration:Tenants";
        })(PermissionKeys = Administration.PermissionKeys || (Administration.PermissionKeys = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var RoleColumns = /** @class */ (function () {
            function RoleColumns() {
            }
            RoleColumns.columnsKey = 'Administration.Role';
            return RoleColumns;
        }());
        Administration.RoleColumns = RoleColumns;
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var TenantColumns = /** @class */ (function () {
            function TenantColumns() {
            }
            TenantColumns.columnsKey = 'Administration.Tenant';
            return TenantColumns;
        }());
        Administration.TenantColumns = TenantColumns;
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
            TenantRow.deletePermission = 'Administration:Tenants';
            TenantRow.insertPermission = 'Administration:Tenants';
            TenantRow.readPermission = 'Administration:Tenants';
            TenantRow.updatePermission = 'Administration:Tenants';
        })(TenantRow = Administration.TenantRow || (Administration.TenantRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var UserColumns = /** @class */ (function () {
            function UserColumns() {
            }
            UserColumns.columnsKey = 'Administration.User';
            return UserColumns;
        }());
        Administration.UserColumns = UserColumns;
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailAddressEditor;
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
                    var w1 = s.EmailAddressEditor;
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store_1) {
    var Store;
    (function (Store) {
        var CategoriesColumns = /** @class */ (function () {
            function CategoriesColumns() {
            }
            CategoriesColumns.columnsKey = 'Store.Categories';
            return CategoriesColumns;
        }());
        Store.CategoriesColumns = CategoriesColumns;
    })(Store = Store_1.Store || (Store_1.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_2) {
    var Store;
    (function (Store) {
        var CategoriesExcelImportForm = /** @class */ (function (_super) {
            __extends(CategoriesExcelImportForm, _super);
            function CategoriesExcelImportForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesExcelImportForm.init) {
                    CategoriesExcelImportForm.init = true;
                    var s = Serenity;
                    var w0 = s.ImageUploadEditor;
                    Q.initFormType(CategoriesExcelImportForm, [
                        'FileName', w0
                    ]);
                }
                return _this;
            }
            CategoriesExcelImportForm.formKey = 'Store.CategoriesExcelImport';
            return CategoriesExcelImportForm;
        }(Serenity.PrefixedContext));
        Store.CategoriesExcelImportForm = CategoriesExcelImportForm;
    })(Store = Store_2.Store || (Store_2.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_3) {
    var Store;
    (function (Store) {
        var CategoriesForm = /** @class */ (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesForm.init) {
                    CategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoriesForm, [
                        'CategoryTypeId', w0,
                        'CategoryCode', w1,
                        'CategoryName', w1,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            CategoriesForm.formKey = 'Store.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        Store.CategoriesForm = CategoriesForm;
    })(Store = Store_3.Store || (Store_3.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_4) {
    var Store;
    (function (Store) {
        var CategoriesLangRow;
        (function (CategoriesLangRow) {
            CategoriesLangRow.idProperty = 'Id';
            CategoriesLangRow.nameProperty = 'CategoryName';
            CategoriesLangRow.localTextPrefix = 'Store.CategoriesLang';
            CategoriesLangRow.deletePermission = 'Store:General';
            CategoriesLangRow.insertPermission = 'Store:General';
            CategoriesLangRow.readPermission = 'Store:General';
            CategoriesLangRow.updatePermission = 'Store:General';
        })(CategoriesLangRow = Store.CategoriesLangRow || (Store.CategoriesLangRow = {}));
    })(Store = Store_4.Store || (Store_4.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_5) {
    var Store;
    (function (Store) {
        var CategoriesLangService;
        (function (CategoriesLangService) {
            CategoriesLangService.baseUrl = 'Store/CategoriesLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriesLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesLangService = Store.CategoriesLangService || (Store.CategoriesLangService = {}));
    })(Store = Store_5.Store || (Store_5.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_6) {
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
            CategoriesRow.deletePermission = 'Store:Categories:Delete';
            CategoriesRow.insertPermission = 'Store:Categories:Modify';
            CategoriesRow.readPermission = 'Store:Categories:View';
            CategoriesRow.updatePermission = 'Store:Categories:Modify';
        })(CategoriesRow = Store.CategoriesRow || (Store.CategoriesRow = {}));
    })(Store = Store_6.Store || (Store_6.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_7) {
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
                'List',
                'ExcelImport'
            ].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesService = Store.CategoriesService || (Store.CategoriesService = {}));
    })(Store = Store_7.Store || (Store_7.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_8) {
    var Store;
    (function (Store) {
        var CategoriesTypeColumns = /** @class */ (function () {
            function CategoriesTypeColumns() {
            }
            CategoriesTypeColumns.columnsKey = 'Store.CategoriesType';
            return CategoriesTypeColumns;
        }());
        Store.CategoriesTypeColumns = CategoriesTypeColumns;
    })(Store = Store_8.Store || (Store_8.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_9) {
    var Store;
    (function (Store) {
        var CategoriesTypeForm = /** @class */ (function (_super) {
            __extends(CategoriesTypeForm, _super);
            function CategoriesTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoriesTypeForm.init) {
                    CategoriesTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoriesTypeForm, [
                        'Type', w0,
                        'CategoryType', w1
                    ]);
                }
                return _this;
            }
            CategoriesTypeForm.formKey = 'Store.CategoriesType';
            return CategoriesTypeForm;
        }(Serenity.PrefixedContext));
        Store.CategoriesTypeForm = CategoriesTypeForm;
    })(Store = Store_9.Store || (Store_9.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_10) {
    var Store;
    (function (Store) {
        var CategoriesTypeRow;
        (function (CategoriesTypeRow) {
            CategoriesTypeRow.idProperty = 'CategoryTypeId';
            CategoriesTypeRow.isActiveProperty = 'IsActive';
            CategoriesTypeRow.nameProperty = 'Type';
            CategoriesTypeRow.localTextPrefix = 'Store.CategoriesType';
            CategoriesTypeRow.lookupKey = 'Store.CategoriesType';
            function getLookup() {
                return Q.getLookup('Store.CategoriesType');
            }
            CategoriesTypeRow.getLookup = getLookup;
            CategoriesTypeRow.deletePermission = 'Store:CategoriesType:Delete';
            CategoriesTypeRow.insertPermission = 'Store:CategoriesType:Modify';
            CategoriesTypeRow.readPermission = 'Store:CategoriesType:View';
            CategoriesTypeRow.updatePermission = 'Store:CategoriesType:Modify';
        })(CategoriesTypeRow = Store.CategoriesTypeRow || (Store.CategoriesTypeRow = {}));
    })(Store = Store_10.Store || (Store_10.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_11) {
    var Store;
    (function (Store) {
        var CategoriesTypeService;
        (function (CategoriesTypeService) {
            CategoriesTypeService.baseUrl = 'Store/CategoriesType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoriesTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoriesTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoriesTypeService = Store.CategoriesTypeService || (Store.CategoriesTypeService = {}));
    })(Store = Store_11.Store || (Store_11.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_12) {
    var Store;
    (function (Store) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.isActiveProperty = 'IsActive';
            EmployeesRow.nameProperty = 'LastName';
            EmployeesRow.localTextPrefix = 'Store.Employees';
            EmployeesRow.lookupKey = 'Store.Employees';
            function getLookup() {
                return Q.getLookup('Store.Employees');
            }
            EmployeesRow.getLookup = getLookup;
            EmployeesRow.deletePermission = 'Store:General';
            EmployeesRow.insertPermission = 'Store:General';
            EmployeesRow.readPermission = 'Store:General';
            EmployeesRow.updatePermission = 'Store:General';
        })(EmployeesRow = Store.EmployeesRow || (Store.EmployeesRow = {}));
    })(Store = Store_12.Store || (Store_12.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_13) {
    var Store;
    (function (Store) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Store.Gender || (Store.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'Store.Store.Gender', 'Store.Store.Entities.Gender');
    })(Store = Store_13.Store || (Store_13.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_14) {
    var Store;
    (function (Store) {
        var MeasuresColumns = /** @class */ (function () {
            function MeasuresColumns() {
            }
            MeasuresColumns.columnsKey = 'Store.Measures';
            return MeasuresColumns;
        }());
        Store.MeasuresColumns = MeasuresColumns;
    })(Store = Store_14.Store || (Store_14.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_15) {
    var Store;
    (function (Store) {
        var MeasuresForm = /** @class */ (function (_super) {
            __extends(MeasuresForm, _super);
            function MeasuresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MeasuresForm.init) {
                    MeasuresForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(MeasuresForm, [
                        'MeasureName', w0
                    ]);
                }
                return _this;
            }
            MeasuresForm.formKey = 'Store.Measures';
            return MeasuresForm;
        }(Serenity.PrefixedContext));
        Store.MeasuresForm = MeasuresForm;
    })(Store = Store_15.Store || (Store_15.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_16) {
    var Store;
    (function (Store) {
        var MeasuresRow;
        (function (MeasuresRow) {
            MeasuresRow.idProperty = 'MeasureId';
            MeasuresRow.isActiveProperty = 'IsActive';
            MeasuresRow.nameProperty = 'MeasureName';
            MeasuresRow.localTextPrefix = 'Store.Measures';
            MeasuresRow.lookupKey = 'Store.Measures';
            function getLookup() {
                return Q.getLookup('Store.Measures');
            }
            MeasuresRow.getLookup = getLookup;
            MeasuresRow.deletePermission = 'Store:Measures:Delete';
            MeasuresRow.insertPermission = 'Store:Measures:Modify';
            MeasuresRow.readPermission = 'Store:Measures:View';
            MeasuresRow.updatePermission = 'Store:Measures:Modify';
        })(MeasuresRow = Store.MeasuresRow || (Store.MeasuresRow = {}));
    })(Store = Store_16.Store || (Store_16.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_17) {
    var Store;
    (function (Store) {
        var MeasuresService;
        (function (MeasuresService) {
            MeasuresService.baseUrl = 'Store/Measures';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MeasuresService[x] = function (r, s, o) {
                    return Q.serviceRequest(MeasuresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MeasuresService = Store.MeasuresService || (Store.MeasuresService = {}));
    })(Store = Store_17.Store || (Store_17.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_18) {
    var Store;
    (function (Store) {
        var PermissionKeys;
        (function (PermissionKeys) {
            PermissionKeys.General = "Store:General";
            var Categories;
            (function (Categories) {
                Categories.Delete = "Store:Categories:Delete";
                Categories.Modify = "Store:Categories:Modify";
                Categories.View = "Store:Categories:View";
            })(Categories || (Categories = {}));
            var CategoriesType;
            (function (CategoriesType) {
                CategoriesType.Delete = "Store:CategoriesType:Delete";
                CategoriesType.Modify = "Store:CategoriesType:Modify";
                CategoriesType.View = "Store:CategoriesType:View";
            })(CategoriesType || (CategoriesType = {}));
            var Shops;
            (function (Shops) {
                Shops.Delete = "Store:Shops:Delete";
                Shops.Modify = "Store:Shops:Modify";
                Shops.View = "Store:Shops:View";
            })(Shops || (Shops = {}));
            var DocumentType;
            (function (DocumentType) {
                DocumentType.Delete = "Store:DocumentType:Delete";
                DocumentType.Modify = "Store:DocumentType:Modify";
                DocumentType.View = "Store:DocumentType:View";
            })(DocumentType || (DocumentType = {}));
            var Measures;
            (function (Measures) {
                Measures.Delete = "Store:Measures:Delete";
                Measures.Modify = "Store:Measures:Modify";
                Measures.View = "Store:Measures:View";
            })(Measures || (Measures = {}));
            var OperationType;
            (function (OperationType) {
                OperationType.Delete = "Store:OperationType:Delete";
                OperationType.Modify = "Store:OperationType:Modify";
                OperationType.View = "Store:OperationType:View";
            })(OperationType || (OperationType = {}));
            var Counterparties;
            (function (Counterparties) {
                Counterparties.Delete = "Store:Counterparty:Delete";
                Counterparties.Modify = "Store:Counterparty:Modify";
                Counterparties.View = "Store:Counterparty:View";
            })(Counterparties || (Counterparties = {}));
            var Wares;
            (function (Wares) {
                Wares.Delete = "Store:Wares:Delete";
                Wares.Modify = "Store:Wares:Modify";
                Wares.View = "Store:Wares:View";
            })(Wares || (Wares = {}));
            var Product;
            (function (Product) {
                Product.Delete = "Store:Product:Delete";
                Product.Modify = "Store:Product:Modify";
                Product.View = "Store:Product:View";
            })(Product || (Product = {}));
        })(PermissionKeys = Store.PermissionKeys || (Store.PermissionKeys = {}));
    })(Store = Store_18.Store || (Store_18.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_19) {
    var Store;
    (function (Store) {
        var ShopsColumns = /** @class */ (function () {
            function ShopsColumns() {
            }
            ShopsColumns.columnsKey = 'Store.Shops';
            return ShopsColumns;
        }());
        Store.ShopsColumns = ShopsColumns;
    })(Store = Store_19.Store || (Store_19.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_20) {
    var Store;
    (function (Store) {
        var ShopsForm = /** @class */ (function (_super) {
            __extends(ShopsForm, _super);
            function ShopsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShopsForm.init) {
                    ShopsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Store.PhoneEditor;
                    Q.initFormType(ShopsForm, [
                        'ShopId', w0,
                        'ShopName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Country', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
            }
            ShopsForm.formKey = 'Store.Shops';
            return ShopsForm;
        }(Serenity.PrefixedContext));
        Store.ShopsForm = ShopsForm;
    })(Store = Store_20.Store || (Store_20.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_21) {
    var Store;
    (function (Store) {
        var ShopsRow;
        (function (ShopsRow) {
            ShopsRow.idProperty = 'Id';
            ShopsRow.isActiveProperty = 'IsActive';
            ShopsRow.nameProperty = 'ShopName';
            ShopsRow.localTextPrefix = 'Store.Shops';
            ShopsRow.lookupKey = 'Store.Shops';
            function getLookup() {
                return Q.getLookup('Store.Shops');
            }
            ShopsRow.getLookup = getLookup;
            ShopsRow.deletePermission = 'Store:Shops:Delete';
            ShopsRow.insertPermission = 'Store:Shops:Modify';
            ShopsRow.readPermission = 'Store:Shops:View';
            ShopsRow.updatePermission = 'Store:Shops:Modify';
        })(ShopsRow = Store.ShopsRow || (Store.ShopsRow = {}));
    })(Store = Store_21.Store || (Store_21.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_22) {
    var Store;
    (function (Store) {
        var ShopsService;
        (function (ShopsService) {
            ShopsService.baseUrl = 'Store/Shops';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShopsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShopsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShopsService = Store.ShopsService || (Store.ShopsService = {}));
    })(Store = Store_22.Store || (Store_22.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_23) {
    var Texts;
    (function (Texts) {
        Store_23.Store['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1, TenantId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Tenant: { TenantId: 1, TenantName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Store: { Categories: { CategoryCode: 1, CategoryId: 1, CategoryName: 1, CategoryType: 1, CategoryTypeId: 1, Description: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Picture: 1, TenantId: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, CategoriesLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, CategoriesType: { CategoryType: 1, CategoryTypeId: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, TenantId: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, Employees: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeId: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, TenantId: 1, Title: 1, TitleOfCourtesy: 1, UpdateDate: 1, UpdateUserId: 1 }, Measures: { InsertDate: 1, InsertUserId: 1, IsActive: 1, MeasureId: 1, MeasureName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Shops: { Address: 1, City: 1, ContactName: 1, ContactTitle: 1, Country: 1, Id: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, PostalCode: 1, Region: 1, ShopId: 1, ShopName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Store_23.Texts || (Store_23.Texts = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
            TenantGrid.prototype.getDefaultSortBy = function () {
                return ["TenantName" /* TenantName */];
            };
            TenantGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TenantGrid);
            return TenantGrid;
        }(Serenity.EntityGrid));
        Administration.TenantGrid = TenantGrid;
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            return Q.Authorization.hasPermission(permissionKey);
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Store.Authorization || (Store.Authorization = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
                var keys = Q.getRemoteData('Administration.PermissionKeys');
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
                        cssClass: 'btn btn-primary',
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
                        cssClass: 'btn btn-primary',
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
    })(Administration = Store.Administration || (Store.Administration = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = Store.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = Store.LanguageList || (Store.LanguageList = {}));
})(Store || (Store = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var Store;
(function (Store) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('Store');
        Serenity.EntityDialog.defaultLanguageList = Store.LanguageList.getValue;
        Serenity.HtmlContentEditor.CKEditorBasePath = "~/Serenity.Assets/Scripts/ckeditor/";
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Store.ScriptInitialization || (Store.ScriptInitialization = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
                        doc.output(output);
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Membership;
    (function (Membership) {
        var LoginPanel = /** @class */ (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            _this.redirectToReturnUrl();
                        },
                        onError: function (response) {
                            if (response != null && response.Error != null && response.Error.Code == "RedirectUserTo") {
                                window.location.href = response.Error.Arguments;
                                return;
                            }
                            if (response != null && response.Error != null && !Q.isEmptyOrNull(response.Error.Message)) {
                                Q.notifyError(response.Error.Message);
                                $('#Password').focus();
                                return;
                            }
                            Q.ErrorHandling.showServiceError(response.Error);
                        }
                    });
                });
                return _this;
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel.prototype.redirectToReturnUrl = function () {
                var q = Q.parseQueryString();
                var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                if (returnUrl) {
                    var hash = window.location.hash;
                    if (hash != null && hash != '#')
                        returnUrl += hash;
                    window.location.href = returnUrl;
                }
                else {
                    window.location.href = Q.resolveUrl('~/');
                }
            };
            LoginPanel.prototype.getTemplate = function () {
                return "\n    <h2 class=\"text-center p-4\">\n        <img src=\"" + Q.resolveUrl("~/Content/site/images/serenity-logo-w-128.png") + "\"\n            class=\"rounded-circle p-1\" style=\"background-color: var(--s-sidebar-band-bg)\"\n            width=\"50\" height=\"50\" /> Store\n    </h2>\n\n    <div class=\"s-Panel p-4\">\n        <h5 class=\"text-center my-4\">" + Q.text("Forms.Membership.Login.LoginToYourAccount") + "</h5>\n        <form id=\"~_Form\" action=\"\">\n            <div id=\"~_PropertyGrid\"></div>\n            <div class=\"px-field\">\n                <a class=\"float-end text-decoration-none\" href=\"" + Q.resolveUrl('~/Account/ForgotPassword') + "\">\n                    " + Q.text("Forms.Membership.Login.ForgotPassword") + "\n                </a>\n            </div>\n            <div class=\"px-field\">\n                <button id=\"~_LoginButton\" type=\"submit\" class=\"btn btn-primary my-3 w-100\">\n                    " + Q.text("Forms.Membership.Login.SignInButton") + "\n                </button>\n            </div>\n        </form>\n    </div>\n\n    <div class=\"text-center mt-2\">\n        <a class=\"text-decoration-none\" href=\"" + Q.resolveUrl('~/Account/SignUp') + "\">" + Q.text("Forms.Membership.Login.SignUpButton") + "</a>\n    </div>   \n";
            };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
            ChangePasswordPanel.prototype.getTemplate = function () {
                return "<div class=\"s-Panel\">\n    <h3 class=\"page-title mb-4 text-center\">" + Q.text("Forms.Membership.ChangePassword.FormTitle") + "</h3>\n    <form id=\"~_Form\" action=\"\">\n        <div id=\"~_PropertyGrid\"></div>\n        <div class=\"px-field mt-4\">\n            <button id=\"~_SubmitButton\" type=\"submit\" class=\"btn btn-primary w-100\">\n                " + Q.text("Forms.Membership.ChangePassword.SubmitButton") + "\n            </button>\n        </div>\n    </form>\n</div>";
            };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.NewPassword.value.length < 7) {
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store_24) {
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
            CategoriesDialog.prototype.getDeletePermission = function () { return Store.CategoriesRow.deletePermission; };
            CategoriesDialog.prototype.getInsertPermission = function () { return Store.CategoriesRow.insertPermission; };
            CategoriesDialog.prototype.getUpdatePermission = function () { return Store.CategoriesRow.updatePermission; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        Store.CategoriesDialog = CategoriesDialog;
    })(Store = Store_24.Store || (Store_24.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_25) {
    var Store;
    (function (Store) {
        var CategoriesExcelImportDialog = /** @class */ (function (_super) {
            __extends(CategoriesExcelImportDialog, _super);
            function CategoriesExcelImportDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.CategoriesExcelImportForm(_this.idPrefix);
                return _this;
            }
            CategoriesExcelImportDialog.prototype.getDialogTitle = function () {
                return "Excel Import";
            };
            CategoriesExcelImportDialog.prototype.getDialogButtons = function () {
                var _this = this;
                return [
                    {
                        text: 'Import',
                        click: function () {
                            if (!_this.validateBeforeSave())
                                return;
                            if (_this.form.FileName.value == null ||
                                Q.isEmptyOrNull(_this.form.FileName.value.Filename)) {
                                Q.notifyError("Please select a file!");
                                return;
                            }
                            Store.CategoriesService.ExcelImport({
                                FileName: _this.form.FileName.value.Filename
                            }, function (response) {
                                Q.notifyInfo('Inserted: ' + (response.Inserted || 0) +
                                    ', Updated: ' + (response.Updated || 0));
                                if (response.ErrorList != null && response.ErrorList.length > 0) {
                                    Q.notifyError(response.ErrorList.join(',\r\n '));
                                }
                                _this.dialogClose();
                            });
                        },
                    },
                    {
                        text: 'Cancel',
                        click: function () { return _this.dialogClose(); }
                    }
                ];
            };
            CategoriesExcelImportDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesExcelImportDialog);
            return CategoriesExcelImportDialog;
        }(Serenity.PropertyDialog));
        Store.CategoriesExcelImportDialog = CategoriesExcelImportDialog;
    })(Store = Store_25.Store || (Store_25.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_26) {
    var Store;
    (function (Store) {
        var CategoriesGrid = /** @class */ (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                return _super.call(this, container) || this;
                //this.slickContainer.on('change', '.edit:input', (e) => this.inputsChange(e));
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'Store.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return Store.CategoriesDialog; };
            CategoriesGrid.prototype.getIdProperty = function () { return Store.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getInsertPermission = function () { return Store.CategoriesRow.insertPermission; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return Store.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return Store.CategoriesService.baseUrl; };
            CategoriesGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cattype"]) {
                    var cattype = Q.tryFirst(flt, function (x) { return x.field == "CategoriesTypeID"; });
                    cattype.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cattype"];
                    };
                }
                return flt;
            };
            CategoriesGrid.prototype.getDefaultSortBy = function () {
                return ["CategoryName" /* CategoryName */];
            };
            CategoriesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Store_26.Common.ExcelExportHelper.createToolButton({
                    title: 'Export To Excel',
                    grid: this,
                    service: Store.CategoriesService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push({
                    title: 'Import From Excel',
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        // open import dialog, let it handle rest
                        var dialog = new Store.CategoriesExcelImportDialog();
                        dialog.element.on('dialogclose', function () {
                            _this.refresh();
                            dialog = null;
                        });
                        dialog.dialogOpen();
                    }
                });
                return buttons;
            };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        Store.CategoriesGrid = CategoriesGrid;
    })(Store = Store_26.Store || (Store_26.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_27) {
    var Store;
    (function (Store) {
        var CategoriesTypeDialog = /** @class */ (function (_super) {
            __extends(CategoriesTypeDialog, _super);
            function CategoriesTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.CategoriesTypeForm(_this.idPrefix);
                return _this;
            }
            CategoriesTypeDialog.prototype.getFormKey = function () { return Store.CategoriesTypeForm.formKey; };
            CategoriesTypeDialog.prototype.getIdProperty = function () { return Store.CategoriesTypeRow.idProperty; };
            CategoriesTypeDialog.prototype.getLocalTextPrefix = function () { return Store.CategoriesTypeRow.localTextPrefix; };
            CategoriesTypeDialog.prototype.getNameProperty = function () { return Store.CategoriesTypeRow.nameProperty; };
            CategoriesTypeDialog.prototype.getService = function () { return Store.CategoriesTypeService.baseUrl; };
            CategoriesTypeDialog.prototype.getDeletePermission = function () { return Store.CategoriesTypeRow.deletePermission; };
            CategoriesTypeDialog.prototype.getInsertPermission = function () { return Store.CategoriesTypeRow.insertPermission; };
            CategoriesTypeDialog.prototype.getUpdatePermission = function () { return Store.CategoriesTypeRow.updatePermission; };
            CategoriesTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesTypeDialog);
            return CategoriesTypeDialog;
        }(Serenity.EntityDialog));
        Store.CategoriesTypeDialog = CategoriesTypeDialog;
    })(Store = Store_27.Store || (Store_27.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_28) {
    var Store;
    (function (Store) {
        var CategoriesTypeGrid = /** @class */ (function (_super) {
            __extends(CategoriesTypeGrid, _super);
            function CategoriesTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoriesTypeGrid.prototype.getColumnsKey = function () { return 'Store.CategoriesType'; };
            CategoriesTypeGrid.prototype.getDialogType = function () { return Store.CategoriesTypeDialog; };
            CategoriesTypeGrid.prototype.getIdProperty = function () { return Store.CategoriesTypeRow.idProperty; };
            CategoriesTypeGrid.prototype.getInsertPermission = function () { return Store.CategoriesTypeRow.insertPermission; };
            CategoriesTypeGrid.prototype.getLocalTextPrefix = function () { return Store.CategoriesTypeRow.localTextPrefix; };
            CategoriesTypeGrid.prototype.getService = function () { return Store.CategoriesTypeService.baseUrl; };
            CategoriesTypeGrid.prototype.getDefaultSortBy = function () {
                return ["Type" /* Type */];
            };
            CategoriesTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesTypeGrid);
            return CategoriesTypeGrid;
        }(Serenity.EntityGrid));
        Store.CategoriesTypeGrid = CategoriesTypeGrid;
    })(Store = Store_28.Store || (Store_28.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_29) {
    var Store;
    (function (Store) {
        var EmployeesFormatter = /** @class */ (function () {
            function EmployeesFormatter() {
            }
            EmployeesFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Store.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeesFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeesFormatter.prototype, "genderProperty", void 0);
            EmployeesFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeesFormatter);
            return EmployeesFormatter;
        }());
        Store.EmployeesFormatter = EmployeesFormatter;
    })(Store = Store_29.Store || (Store_29.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_30) {
    var Store;
    (function (Store) {
        //@Serenity.Decorators.registerFormatter()
        //export class EmployeesListFormatter implements Slick.Formatter {
        //    format(ctx: Slick.FormatterContext) {
        //        var idList = ctx.value as string[];
        //        if (!idList || !idList.length)
        //            return "";
        //        var byId = EmployeesRow.getLookup().itemById;
        //        let z: EmployeesRow;
        //        return idList.map(x => ((z = byId[x]) ? z.FullName : x)).join(", ");
        //    }
        //}
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
    })(Store = Store_30.Store || (Store_30.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_31) {
    var Store;
    (function (Store) {
        var MeasuresDialog = /** @class */ (function (_super) {
            __extends(MeasuresDialog, _super);
            function MeasuresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.MeasuresForm(_this.idPrefix);
                return _this;
            }
            MeasuresDialog.prototype.getFormKey = function () { return Store.MeasuresForm.formKey; };
            MeasuresDialog.prototype.getIdProperty = function () { return Store.MeasuresRow.idProperty; };
            MeasuresDialog.prototype.getLocalTextPrefix = function () { return Store.MeasuresRow.localTextPrefix; };
            MeasuresDialog.prototype.getNameProperty = function () { return Store.MeasuresRow.nameProperty; };
            MeasuresDialog.prototype.getService = function () { return Store.MeasuresService.baseUrl; };
            MeasuresDialog.prototype.getDeletePermission = function () { return Store.MeasuresRow.deletePermission; };
            MeasuresDialog.prototype.getInsertPermission = function () { return Store.MeasuresRow.insertPermission; };
            MeasuresDialog.prototype.getUpdatePermission = function () { return Store.MeasuresRow.updatePermission; };
            MeasuresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MeasuresDialog);
            return MeasuresDialog;
        }(Serenity.EntityDialog));
        Store.MeasuresDialog = MeasuresDialog;
    })(Store = Store_31.Store || (Store_31.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_32) {
    var Store;
    (function (Store) {
        var MeasuresGrid = /** @class */ (function (_super) {
            __extends(MeasuresGrid, _super);
            function MeasuresGrid(container) {
                return _super.call(this, container) || this;
            }
            MeasuresGrid.prototype.getColumnsKey = function () { return 'Store.Measures'; };
            MeasuresGrid.prototype.getDialogType = function () { return Store.MeasuresDialog; };
            MeasuresGrid.prototype.getIdProperty = function () { return Store.MeasuresRow.idProperty; };
            MeasuresGrid.prototype.getInsertPermission = function () { return Store.MeasuresRow.insertPermission; };
            MeasuresGrid.prototype.getLocalTextPrefix = function () { return Store.MeasuresRow.localTextPrefix; };
            MeasuresGrid.prototype.getService = function () { return Store.MeasuresService.baseUrl; };
            MeasuresGrid.prototype.getDefaultSortBy = function () {
                return ["MeasureId" /* MeasureId */];
            };
            MeasuresGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MeasuresGrid);
            return MeasuresGrid;
        }(Serenity.EntityGrid));
        Store.MeasuresGrid = MeasuresGrid;
    })(Store = Store_32.Store || (Store_32.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_33) {
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
                if (phone.length !== 12) {
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
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2) + phone.substr(10, 2);
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
    })(Store = Store_33.Store || (Store_33.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_34) {
    var Store;
    (function (Store) {
        var ShopsDialog = /** @class */ (function (_super) {
            __extends(ShopsDialog, _super);
            function ShopsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.ShopsForm(_this.idPrefix);
                return _this;
            }
            ShopsDialog.prototype.getFormKey = function () { return Store.ShopsForm.formKey; };
            ShopsDialog.prototype.getIdProperty = function () { return Store.ShopsRow.idProperty; };
            ShopsDialog.prototype.getLocalTextPrefix = function () { return Store.ShopsRow.localTextPrefix; };
            ShopsDialog.prototype.getNameProperty = function () { return Store.ShopsRow.nameProperty; };
            ShopsDialog.prototype.getService = function () { return Store.ShopsService.baseUrl; };
            ShopsDialog.prototype.getDeletePermission = function () { return Store.ShopsRow.deletePermission; };
            ShopsDialog.prototype.getInsertPermission = function () { return Store.ShopsRow.insertPermission; };
            ShopsDialog.prototype.getUpdatePermission = function () { return Store.ShopsRow.updatePermission; };
            ShopsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShopsDialog);
            return ShopsDialog;
        }(Serenity.EntityDialog));
        Store.ShopsDialog = ShopsDialog;
    })(Store = Store_34.Store || (Store_34.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_35) {
    var Store;
    (function (Store) {
        var ShopsEditor = /** @class */ (function (_super) {
            __extends(ShopsEditor, _super);
            function ShopsEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            ShopsEditor.prototype.getLookupKey = function () {
                return Store.ShopsRow.lookupKey;
            };
            ShopsEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup);
            };
            ShopsEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ShopsEditor);
            return ShopsEditor;
        }(Serenity.LookupEditorBase));
        Store.ShopsEditor = ShopsEditor;
    })(Store = Store_35.Store || (Store_35.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_36) {
    var Store;
    (function (Store) {
        var ShopsGrid = /** @class */ (function (_super) {
            __extends(ShopsGrid, _super);
            function ShopsGrid(container) {
                return _super.call(this, container) || this;
            }
            ShopsGrid.prototype.getColumnsKey = function () { return 'Store.Shops'; };
            ShopsGrid.prototype.getDialogType = function () { return Store.ShopsDialog; };
            ShopsGrid.prototype.getIdProperty = function () { return Store.ShopsRow.idProperty; };
            ShopsGrid.prototype.getInsertPermission = function () { return Store.ShopsRow.insertPermission; };
            ShopsGrid.prototype.getLocalTextPrefix = function () { return Store.ShopsRow.localTextPrefix; };
            ShopsGrid.prototype.getService = function () { return Store.ShopsService.baseUrl; };
            ShopsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShopsGrid);
            return ShopsGrid;
        }(Serenity.EntityGrid));
        Store.ShopsGrid = ShopsGrid;
    })(Store = Store_36.Store || (Store_36.Store = {}));
})(Store || (Store = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuV2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRlbmFudENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVGVuYW50Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UZW5hbnRSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVGVuYW50U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkl0ZW0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5DYXRlZ29yaWVzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5DYXRlZ29yaWVzRXhjZWxJbXBvcnRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNMYW5nUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNMYW5nU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5DYXRlZ29yaWVzTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuQ2F0ZWdvcmllc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5DYXRlZ29yaWVzU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5DYXRlZ29yaWVzVHlwZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuQ2F0ZWdvcmllc1R5cGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNUeXBlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNUeXBlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5FbXBsb3llZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuR2VuZGVyLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLk1lYXN1cmVzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5NZWFzdXJlc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuTWVhc3VyZXNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuTWVhc3VyZXNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLlNob3BzQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5TaG9wc0Zvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuU2hvcHNSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuU2hvcHNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1RleHRzLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9MYW5ndWFnZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGUvUm9sZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1JvbGVQZXJtaXNzaW9uRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UZW5hbnQvVGVuYW50RGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9UZW5hbnQvVGVuYW50R3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVHJhbnNsYXRpb25HcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvVXNlckdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXIvQXV0aGVudGljYXRpb24vQXV0aG9yaXphdGlvbi50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vUGVybWlzc2lvbkNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9Vc2VyUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvUm9sZUNoZWNrRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9Vc2VyUm9sZURpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vU2NyaXB0SW5pdGlhbGl6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0V4Y2VsRXhwb3J0SGVscGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1BkZkV4cG9ydEhlbHBlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1JlcG9ydGluZy9SZXBvcnREaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9SZXBvcnRpbmcvUmVwb3J0SGVscGVyLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vUmVwb3J0aW5nL1JlcG9ydFBhZ2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Mb2dpblBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvQ2hhbmdlUGFzc3dvcmQvQ2hhbmdlUGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkL0ZvcmdvdFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9SZXNldFBhc3N3b3JkL1Jlc2V0UGFzc3dvcmRQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L1NpZ25VcC9TaWduVXBQYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RvcmUvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdG9yZS9DYXRlZ29yaWVzL0NhdGVnb3JpZXNFeGNlbEltcG9ydERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RvcmUvQ2F0ZWdvcmllcy9DYXRlZ29yaWVzR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RvcmUvQ2F0ZWdvcmllc1R5cGUvQ2F0ZWdvcmllc1R5cGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL0NhdGVnb3JpZXNUeXBlL0NhdGVnb3JpZXNUeXBlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RvcmUvRW1wbG95ZWVzL0VtcGxveWVlc0Zvcm1hdHRlci50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RvcmUvRW1wbG95ZWVzL0VtcGxveWVlc0xpc3RGb3JtYXR0ZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL01lYXN1cmVzL01lYXN1cmVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdG9yZS9NZWFzdXJlcy9NZWFzdXJlc0dyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL1NoYXJlZC9QaG9uZUVkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvU3RvcmUvU2hvcHMvU2hvcHNEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL1Nob3BzL1Nob3BzRWRpdG9yLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdG9yZS9TaG9wcy9TaG9wc0dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxLQUFLLENBSWQ7QUFKRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0FJN0I7SUFKZSxXQUFBLGNBQWM7UUFDMUI7WUFBQTtZQUVBLENBQUM7WUFEVSwwQkFBVSxHQUFHLHlCQUF5QixDQUFDO1lBQ2xELHNCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksOEJBQWUsa0JBRTNCLENBQUE7SUFDTCxDQUFDLEVBSmUsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUFJN0I7QUFBRCxDQUFDLEVBSlMsS0FBSyxLQUFMLEtBQUssUUFJZDtBQ0pELElBQVUsS0FBSyxDQTBCZDtBQTFCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0EwQjdCO0lBMUJlLFdBQUEsY0FBYztRQU0xQjtZQUFrQyxnQ0FBd0I7WUFJdEQsc0JBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FhaEI7Z0JBWEcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUc7b0JBQ3JCLFlBQVksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUV6QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBRXhCLENBQUMsQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFO3dCQUN6QixZQUFZLEVBQUUsRUFBRTt3QkFDaEIsY0FBYyxFQUFFLEVBQUU7cUJBQ3JCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBakJNLG9CQUFPLEdBQUcseUJBQXlCLENBQUM7WUFrQi9DLG1CQUFDO1NBQUEsQUFuQkQsQ0FBa0MsUUFBUSxDQUFDLGVBQWUsR0FtQnpEO1FBbkJZLDJCQUFZLGVBbUJ4QixDQUFBO0lBQ0wsQ0FBQyxFQTFCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQTBCN0I7QUFBRCxDQUFDLEVBMUJTLEtBQUssS0FBTCxLQUFLLFFBMEJkO0FDMUJELElBQVUsS0FBSyxDQTJCZDtBQTNCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0EyQjdCO0lBM0JlLFdBQUEsY0FBYztRQU8xQixJQUFpQixXQUFXLENBbUIzQjtRQW5CRCxXQUFpQixXQUFXO1lBQ1gsc0JBQVUsR0FBRyxJQUFJLENBQUM7WUFDbEIsd0JBQVksR0FBRyxjQUFjLENBQUM7WUFDOUIsMkJBQWUsR0FBRyx5QkFBeUIsQ0FBQztZQUM1QyxxQkFBUyxHQUFHLHlCQUF5QixDQUFDO1lBRW5ELFNBQWdCLFNBQVM7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBYyx5QkFBeUIsQ0FBQyxDQUFDO1lBQy9ELENBQUM7WUFGZSxxQkFBUyxZQUV4QixDQUFBO1lBQ1ksNEJBQWdCLEdBQUcsNEJBQTRCLENBQUM7WUFDaEQsNEJBQWdCLEdBQUcsNEJBQTRCLENBQUM7WUFDaEQsMEJBQWMsR0FBRyw0QkFBNEIsQ0FBQztZQUM5Qyw0QkFBZ0IsR0FBRyw0QkFBNEIsQ0FBQztRQU9qRSxDQUFDLEVBbkJnQixXQUFXLEdBQVgsMEJBQVcsS0FBWCwwQkFBVyxRQW1CM0I7SUFDTCxDQUFDLEVBM0JlLGNBQWMsR0FBZCxvQkFBYyxLQUFkLG9CQUFjLFFBMkI3QjtBQUFELENBQUMsRUEzQlMsS0FBSyxLQUFMLEtBQUssUUEyQmQ7QUMzQkQsSUFBVSxLQUFLLENBOEJkO0FBOUJELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQThCN0I7SUE5QmUsV0FBQSxjQUFjO1FBQzFCLElBQWlCLGVBQWUsQ0E0Qi9CO1FBNUJELFdBQWlCLGVBQWU7WUFDZix1QkFBTyxHQUFHLHlCQUF5QixDQUFDO1lBZ0JqRDtnQkFDSSxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLE1BQU07YUFDVCxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QsZUFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDekMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQTVCZ0IsZUFBZSxHQUFmLDhCQUFlLEtBQWYsOEJBQWUsUUE0Qi9CO0lBQ0wsQ0FBQyxFQTlCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQThCN0I7QUFBRCxDQUFDLEVBOUJTLEtBQUssS0FBTCxLQUFLLFFBOEJkO0FDOUJELElBQVUsS0FBSyxDQU1kO0FBTkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxjQUFjLENBTTdCO0lBTmUsV0FBQSxjQUFjO1FBQzFCLElBQWlCLGNBQWMsQ0FJOUI7UUFKRCxXQUFpQixjQUFjO1lBQ2QsdUJBQVEsR0FBRyx5QkFBeUIsQ0FBQztZQUNyQywwQkFBVyxHQUFHLDRCQUE0QixDQUFDO1lBQzNDLHNCQUFPLEdBQUcsd0JBQXdCLENBQUM7UUFDcEQsQ0FBQyxFQUpnQixjQUFjLEdBQWQsNkJBQWMsS0FBZCw2QkFBYyxRQUk5QjtJQUNMLENBQUMsRUFOZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQU03QjtBQUFELENBQUMsRUFOUyxLQUFLLEtBQUwsS0FBSyxRQU1kO0FDTkQsSUFBVSxLQUFLLENBSWQ7QUFKRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0FJN0I7SUFKZSxXQUFBLGNBQWM7UUFDMUI7WUFBQTtZQUVBLENBQUM7WUFEVSxzQkFBVSxHQUFHLHFCQUFxQixDQUFDO1lBQzlDLGtCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksMEJBQVcsY0FFdkIsQ0FBQTtJQUNMLENBQUMsRUFKZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQUk3QjtBQUFELENBQUMsRUFKUyxLQUFLLEtBQUwsS0FBSyxRQUlkO0FDSkQsSUFBVSxLQUFLLENBd0JkO0FBeEJELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQXdCN0I7SUF4QmUsV0FBQSxjQUFjO1FBSzFCO1lBQThCLDRCQUF3QjtZQUlsRCxrQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQVloQjtnQkFWRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRztvQkFDakIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXJCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLFVBQVUsRUFBRSxFQUFFO3FCQUNqQixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQWhCTSxnQkFBTyxHQUFHLHFCQUFxQixDQUFDO1lBaUIzQyxlQUFDO1NBQUEsQUFsQkQsQ0FBOEIsUUFBUSxDQUFDLGVBQWUsR0FrQnJEO1FBbEJZLHVCQUFRLFdBa0JwQixDQUFBO0lBQ0wsQ0FBQyxFQXhCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQXdCN0I7QUFBRCxDQUFDLEVBeEJTLEtBQUssS0FBTCxLQUFLLFFBd0JkO0FHeEJELElBQVUsS0FBSyxDQXdCZDtBQXhCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0F3QjdCO0lBeEJlLFdBQUEsY0FBYztRQVExQixJQUFpQixpQkFBaUIsQ0FlakM7UUFmRCxXQUFpQixpQkFBaUI7WUFDakIsNEJBQVUsR0FBRyxrQkFBa0IsQ0FBQztZQUNoQyw4QkFBWSxHQUFHLGVBQWUsQ0FBQztZQUMvQixpQ0FBZSxHQUFHLCtCQUErQixDQUFDO1lBQ2xELGtDQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLGtDQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLGdDQUFjLEdBQUcseUJBQXlCLENBQUM7WUFDM0Msa0NBQWdCLEdBQUcseUJBQXlCLENBQUM7UUFROUQsQ0FBQyxFQWZnQixpQkFBaUIsR0FBakIsZ0NBQWlCLEtBQWpCLGdDQUFpQixRQWVqQztJQUNMLENBQUMsRUF4QmUsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUF3QjdCO0FBQUQsQ0FBQyxFQXhCUyxLQUFLLEtBQUwsS0FBSyxRQXdCZDtBQ3hCRCxJQUFVLEtBQUssQ0FxQmQ7QUFyQkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxjQUFjLENBcUI3QjtJQXJCZSxXQUFBLGNBQWM7UUFDMUIsSUFBaUIscUJBQXFCLENBbUJyQztRQW5CRCxXQUFpQixxQkFBcUI7WUFDckIsNkJBQU8sR0FBRywrQkFBK0IsQ0FBQztZQVV2RDtnQkFDSSxRQUFRO2dCQUNSLE1BQU07YUFDVCxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QscUJBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxzQkFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUFuQmdCLHFCQUFxQixHQUFyQixvQ0FBcUIsS0FBckIsb0NBQXFCLFFBbUJyQztJQUNMLENBQUMsRUFyQmUsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUFxQjdCO0FBQUQsQ0FBQyxFQXJCUyxLQUFLLEtBQUwsS0FBSyxRQXFCZDtBRXJCRCxJQUFVLEtBQUssQ0EyQmQ7QUEzQkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxjQUFjLENBMkI3QjtJQTNCZSxXQUFBLGNBQWM7UUFPMUIsSUFBaUIsT0FBTyxDQW1CdkI7UUFuQkQsV0FBaUIsT0FBTztZQUNQLGtCQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLG9CQUFZLEdBQUcsVUFBVSxDQUFDO1lBQzFCLHVCQUFlLEdBQUcscUJBQXFCLENBQUM7WUFDeEMsaUJBQVMsR0FBRyxxQkFBcUIsQ0FBQztZQUUvQyxTQUFnQixTQUFTO2dCQUNyQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQVUscUJBQXFCLENBQUMsQ0FBQztZQUN2RCxDQUFDO1lBRmUsaUJBQVMsWUFFeEIsQ0FBQTtZQUNZLHdCQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLHdCQUFnQixHQUFHLHlCQUF5QixDQUFDO1lBQzdDLHNCQUFjLEdBQUcseUJBQXlCLENBQUM7WUFDM0Msd0JBQWdCLEdBQUcseUJBQXlCLENBQUM7UUFPOUQsQ0FBQyxFQW5CZ0IsT0FBTyxHQUFQLHNCQUFPLEtBQVAsc0JBQU8sUUFtQnZCO0lBQ0wsQ0FBQyxFQTNCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQTJCN0I7QUFBRCxDQUFDLEVBM0JTLEtBQUssS0FBTCxLQUFLLFFBMkJkO0FDM0JELElBQVUsS0FBSyxDQThCZDtBQTlCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0E4QjdCO0lBOUJlLFdBQUEsY0FBYztRQUMxQixJQUFpQixXQUFXLENBNEIzQjtRQTVCRCxXQUFpQixXQUFXO1lBQ1gsbUJBQU8sR0FBRyxxQkFBcUIsQ0FBQztZQWdCN0M7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELFdBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDckMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLFlBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBNUJnQixXQUFXLEdBQVgsMEJBQVcsS0FBWCwwQkFBVyxRQTRCM0I7SUFDTCxDQUFDLEVBOUJlLGNBQWMsR0FBZCxvQkFBYyxLQUFkLG9CQUFjLFFBOEI3QjtBQUFELENBQUMsRUE5QlMsS0FBSyxLQUFMLEtBQUssUUE4QmQ7QUM5QkQsSUFBVSxLQUFLLENBSWQ7QUFKRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0FJN0I7SUFKZSxXQUFBLGNBQWM7UUFDMUI7WUFBQTtZQUVBLENBQUM7WUFEVSx3QkFBVSxHQUFHLHVCQUF1QixDQUFDO1lBQ2hELG9CQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksNEJBQWEsZ0JBRXpCLENBQUE7SUFDTCxDQUFDLEVBSmUsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUFJN0I7QUFBRCxDQUFDLEVBSlMsS0FBSyxLQUFMLEtBQUssUUFJZDtBQ0pELElBQVUsS0FBSyxDQXdCZDtBQXhCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0F3QjdCO0lBeEJlLFdBQUEsY0FBYztRQUsxQjtZQUFnQyw4QkFBd0I7WUFJcEQsb0JBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FZaEI7Z0JBVkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUc7b0JBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUV2QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBRXhCLENBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO3dCQUN2QixZQUFZLEVBQUUsRUFBRTtxQkFDbkIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUFoQk0sa0JBQU8sR0FBRyx1QkFBdUIsQ0FBQztZQWlCN0MsaUJBQUM7U0FBQSxBQWxCRCxDQUFnQyxRQUFRLENBQUMsZUFBZSxHQWtCdkQ7UUFsQlkseUJBQVUsYUFrQnRCLENBQUE7SUFDTCxDQUFDLEVBeEJlLGNBQWMsR0FBZCxvQkFBYyxLQUFkLG9CQUFjLFFBd0I3QjtBQUFELENBQUMsRUF4QlMsS0FBSyxLQUFMLEtBQUssUUF3QmQ7QUN4QkQsSUFBVSxLQUFLLENBeUJkO0FBekJELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQXlCN0I7SUF6QmUsV0FBQSxjQUFjO1FBTTFCLElBQWlCLFNBQVMsQ0FrQnpCO1FBbEJELFdBQWlCLFNBQVM7WUFDVCxvQkFBVSxHQUFHLFVBQVUsQ0FBQztZQUN4QixzQkFBWSxHQUFHLFlBQVksQ0FBQztZQUM1Qix5QkFBZSxHQUFHLHVCQUF1QixDQUFDO1lBQzFDLG1CQUFTLEdBQUcsdUJBQXVCLENBQUM7WUFFakQsU0FBZ0IsU0FBUztnQkFDckIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFZLHVCQUF1QixDQUFDLENBQUM7WUFDM0QsQ0FBQztZQUZlLG1CQUFTLFlBRXhCLENBQUE7WUFDWSwwQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1QywwQkFBZ0IsR0FBRyx3QkFBd0IsQ0FBQztZQUM1Qyx3QkFBYyxHQUFHLHdCQUF3QixDQUFDO1lBQzFDLDBCQUFnQixHQUFHLHdCQUF3QixDQUFDO1FBTTdELENBQUMsRUFsQmdCLFNBQVMsR0FBVCx3QkFBUyxLQUFULHdCQUFTLFFBa0J6QjtJQUNMLENBQUMsRUF6QmUsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUF5QjdCO0FBQUQsQ0FBQyxFQXpCUyxLQUFLLEtBQUwsS0FBSyxRQXlCZDtBQ3pCRCxJQUFVLEtBQUssQ0E4QmQ7QUE5QkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxjQUFjLENBOEI3QjtJQTlCZSxXQUFBLGNBQWM7UUFDMUIsSUFBaUIsYUFBYSxDQTRCN0I7UUE1QkQsV0FBaUIsYUFBYTtZQUNiLHFCQUFPLEdBQUcsdUJBQXVCLENBQUM7WUFnQi9DO2dCQUNJLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsTUFBTTthQUNULENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxhQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3ZDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxjQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQTVCZ0IsYUFBYSxHQUFiLDRCQUFhLEtBQWIsNEJBQWEsUUE0QjdCO0lBQ0wsQ0FBQyxFQTlCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQThCN0I7QUFBRCxDQUFDLEVBOUJTLEtBQUssS0FBTCxLQUFLLFFBOEJkO0FHOUJELElBQVUsS0FBSyxDQXFCZDtBQXJCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0FxQjdCO0lBckJlLFdBQUEsY0FBYztRQUMxQixJQUFpQixrQkFBa0IsQ0FtQmxDO1FBbkJELFdBQWlCLGtCQUFrQjtZQUNsQiwwQkFBTyxHQUFHLDRCQUE0QixDQUFDO1lBVXBEO2dCQUNJLE1BQU07Z0JBQ04sUUFBUTthQUNYLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxrQkFBbUIsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDNUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLG1CQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQW5CZ0Isa0JBQWtCLEdBQWxCLGlDQUFrQixLQUFsQixpQ0FBa0IsUUFtQmxDO0lBQ0wsQ0FBQyxFQXJCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQXFCN0I7QUFBRCxDQUFDLEVBckJTLEtBQUssS0FBTCxLQUFLLFFBcUJkO0FFckJELElBQVUsS0FBSyxDQUlkO0FBSkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxjQUFjLENBSTdCO0lBSmUsV0FBQSxjQUFjO1FBQzFCO1lBQUE7WUFFQSxDQUFDO1lBRFUsc0JBQVUsR0FBRyxxQkFBcUIsQ0FBQztZQUM5QyxrQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLDBCQUFXLGNBRXZCLENBQUE7SUFDTCxDQUFDLEVBSmUsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUFJN0I7QUFBRCxDQUFDLEVBSlMsS0FBSyxLQUFMLEtBQUssUUFJZDtBQ0pELElBQVUsS0FBSyxDQTBDZDtBQTFDRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0EwQzdCO0lBMUNlLFdBQUEsY0FBYztRQVkxQjtZQUE4Qiw0QkFBd0I7WUFJbEQsa0JBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0F1QmhCO2dCQXJCRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRztvQkFDakIsUUFBUSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXJCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFdBQVcsQ0FBQztvQkFDdkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO29CQUM3QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUMxQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt3QkFDckIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsYUFBYSxFQUFFLEVBQUU7d0JBQ2pCLE9BQU8sRUFBRSxFQUFFO3dCQUNYLFdBQVcsRUFBRSxFQUFFO3dCQUNmLFVBQVUsRUFBRSxFQUFFO3dCQUNkLGlCQUFpQixFQUFFLEVBQUU7d0JBQ3JCLFFBQVEsRUFBRSxFQUFFO3dCQUNaLFVBQVUsRUFBRSxFQUFFO3FCQUNqQixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQTNCTSxnQkFBTyxHQUFHLHFCQUFxQixDQUFDO1lBNEIzQyxlQUFDO1NBQUEsQUE3QkQsQ0FBOEIsUUFBUSxDQUFDLGVBQWUsR0E2QnJEO1FBN0JZLHVCQUFRLFdBNkJwQixDQUFBO0lBQ0wsQ0FBQyxFQTFDZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQTBDN0I7QUFBRCxDQUFDLEVBMUNTLEtBQUssS0FBTCxLQUFLLFFBMENkO0FFMUNELElBQVUsS0FBSyxDQTRCZDtBQTVCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0E0QjdCO0lBNUJlLFdBQUEsY0FBYztRQVUxQixJQUFpQixpQkFBaUIsQ0FpQmpDO1FBakJELFdBQWlCLGlCQUFpQjtZQUNqQiw0QkFBVSxHQUFHLGtCQUFrQixDQUFDO1lBQ2hDLDhCQUFZLEdBQUcsZUFBZSxDQUFDO1lBQy9CLGlDQUFlLEdBQUcsK0JBQStCLENBQUM7WUFDbEQsa0NBQWdCLEdBQUcseUJBQXlCLENBQUM7WUFDN0Msa0NBQWdCLEdBQUcseUJBQXlCLENBQUM7WUFDN0MsZ0NBQWMsR0FBRyx5QkFBeUIsQ0FBQztZQUMzQyxrQ0FBZ0IsR0FBRyx5QkFBeUIsQ0FBQztRQVU5RCxDQUFDLEVBakJnQixpQkFBaUIsR0FBakIsZ0NBQWlCLEtBQWpCLGdDQUFpQixRQWlCakM7SUFDTCxDQUFDLEVBNUJlLGNBQWMsR0FBZCxvQkFBYyxLQUFkLG9CQUFjLFFBNEI3QjtBQUFELENBQUMsRUE1QlMsS0FBSyxLQUFMLEtBQUssUUE0QmQ7QUM1QkQsSUFBVSxLQUFLLENBMkJkO0FBM0JELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQTJCN0I7SUEzQmUsV0FBQSxjQUFjO1FBQzFCLElBQWlCLHFCQUFxQixDQXlCckM7UUF6QkQsV0FBaUIscUJBQXFCO1lBQ3JCLDZCQUFPLEdBQUcsK0JBQStCLENBQUM7WUFjdkQ7Z0JBQ0ksUUFBUTtnQkFDUixNQUFNO2dCQUNOLHFCQUFxQjtnQkFDckIsb0JBQW9CO2FBQ3ZCLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxxQkFBc0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDL0MsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLHNCQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQXpCZ0IscUJBQXFCLEdBQXJCLG9DQUFxQixLQUFyQixvQ0FBcUIsUUF5QnJDO0lBQ0wsQ0FBQyxFQTNCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQTJCN0I7QUFBRCxDQUFDLEVBM0JTLEtBQUssS0FBTCxLQUFLLFFBMkJkO0FJM0JELElBQVUsS0FBSyxDQXlCZDtBQXpCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0F5QjdCO0lBekJlLFdBQUEsY0FBYztRQVMxQixJQUFpQixXQUFXLENBZTNCO1FBZkQsV0FBaUIsV0FBVztZQUNYLHNCQUFVLEdBQUcsWUFBWSxDQUFDO1lBQzFCLDJCQUFlLEdBQUcseUJBQXlCLENBQUM7WUFDNUMsNEJBQWdCLEdBQUcseUJBQXlCLENBQUM7WUFDN0MsNEJBQWdCLEdBQUcseUJBQXlCLENBQUM7WUFDN0MsMEJBQWMsR0FBRyx5QkFBeUIsQ0FBQztZQUMzQyw0QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztRQVM5RCxDQUFDLEVBZmdCLFdBQVcsR0FBWCwwQkFBVyxLQUFYLDBCQUFXLFFBZTNCO0lBQ0wsQ0FBQyxFQXpCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQXlCN0I7QUFBRCxDQUFDLEVBekJTLEtBQUssS0FBTCxLQUFLLFFBeUJkO0FDekJELElBQVUsS0FBSyxDQXFCZDtBQXJCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0FxQjdCO0lBckJlLFdBQUEsY0FBYztRQUMxQixJQUFpQixlQUFlLENBbUIvQjtRQW5CRCxXQUFpQixlQUFlO1lBQ2YsdUJBQU8sR0FBRyx5QkFBeUIsQ0FBQztZQVVqRDtnQkFDSSxRQUFRO2dCQUNSLE1BQU07YUFDVCxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QsZUFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztvQkFDekMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLGdCQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQW5CZ0IsZUFBZSxHQUFmLDhCQUFlLEtBQWYsOEJBQWUsUUFtQi9CO0lBQ0wsQ0FBQyxFQXJCZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQXFCN0I7QUFBRCxDQUFDLEVBckJTLEtBQUssS0FBTCxLQUFLLFFBcUJkO0FFckJELElBQVUsS0FBSyxDQTBEZDtBQTFERCxXQUFVLEtBQUs7SUFBQyxJQUFBLGNBQWMsQ0EwRDdCO0lBMURlLFdBQUEsY0FBYztRQXNCMUIsSUFBaUIsT0FBTyxDQW1DdkI7UUFuQ0QsV0FBaUIsT0FBTztZQUNQLGtCQUFVLEdBQUcsUUFBUSxDQUFDO1lBQ3RCLHdCQUFnQixHQUFHLFVBQVUsQ0FBQztZQUM5QixvQkFBWSxHQUFHLFVBQVUsQ0FBQztZQUMxQix1QkFBZSxHQUFHLHFCQUFxQixDQUFDO1lBQ3hDLGlCQUFTLEdBQUcscUJBQXFCLENBQUM7WUFFL0MsU0FBZ0IsU0FBUztnQkFDckIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFVLHFCQUFxQixDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUZlLGlCQUFTLFlBRXhCLENBQUE7WUFDWSx3QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3Qyx3QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3QyxzQkFBYyxHQUFHLHlCQUF5QixDQUFDO1lBQzNDLHdCQUFnQixHQUFHLHlCQUF5QixDQUFDO1FBc0I5RCxDQUFDLEVBbkNnQixPQUFPLEdBQVAsc0JBQU8sS0FBUCxzQkFBTyxRQW1DdkI7SUFDTCxDQUFDLEVBMURlLGNBQWMsR0FBZCxvQkFBYyxLQUFkLG9CQUFjLFFBMEQ3QjtBQUFELENBQUMsRUExRFMsS0FBSyxLQUFMLEtBQUssUUEwRGQ7QUMxREQsSUFBVSxLQUFLLENBaUNkO0FBakNELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQWlDN0I7SUFqQ2UsV0FBQSxjQUFjO1FBQzFCLElBQWlCLFdBQVcsQ0ErQjNCO1FBL0JELFdBQWlCLFdBQVc7WUFDWCxtQkFBTyxHQUFHLHFCQUFxQixDQUFDO1lBa0I3QztnQkFDSSxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLFVBQVU7Z0JBQ1YsTUFBTTthQUNULENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxXQUFZLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3JDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxZQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQS9CZ0IsV0FBVyxHQUFYLDBCQUFXLEtBQVgsMEJBQVcsUUErQjNCO0lBQ0wsQ0FBQyxFQWpDZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQWlDN0I7QUFBRCxDQUFDLEVBakNTLEtBQUssS0FBTCxLQUFLLFFBaUNkO0FDakNELElBQVUsS0FBSyxDQTRCZDtBQTVCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLFVBQVUsQ0E0QnpCO0lBNUJlLFdBQUEsVUFBVTtRQU90QjtZQUF3QyxzQ0FBd0I7WUFJNUQsNEJBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FjaEI7Z0JBWkcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRztvQkFDM0Isa0JBQWtCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFL0IsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUUxQixDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFO3dCQUMvQixhQUFhLEVBQUUsRUFBRTt3QkFDakIsYUFBYSxFQUFFLEVBQUU7d0JBQ2pCLGlCQUFpQixFQUFFLEVBQUU7cUJBQ3hCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBbEJNLDBCQUFPLEdBQUcsMkJBQTJCLENBQUM7WUFtQmpELHlCQUFDO1NBQUEsQUFwQkQsQ0FBd0MsUUFBUSxDQUFDLGVBQWUsR0FvQi9EO1FBcEJZLDZCQUFrQixxQkFvQjlCLENBQUE7SUFDTCxDQUFDLEVBNUJlLFVBQVUsR0FBVixnQkFBVSxLQUFWLGdCQUFVLFFBNEJ6QjtBQUFELENBQUMsRUE1QlMsS0FBSyxLQUFMLEtBQUssUUE0QmQ7QUU1QkQsSUFBVSxLQUFLLENBd0JkO0FBeEJELFdBQVUsS0FBSztJQUFDLElBQUEsVUFBVSxDQXdCekI7SUF4QmUsV0FBQSxVQUFVO1FBS3RCO1lBQXdDLHNDQUF3QjtZQUk1RCw0QkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQVloQjtnQkFWRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFHO29CQUMzQixrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUUvQixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztvQkFFOUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRTt3QkFDL0IsT0FBTyxFQUFFLEVBQUU7cUJBQ2QsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUFoQk0sMEJBQU8sR0FBRywyQkFBMkIsQ0FBQztZQWlCakQseUJBQUM7U0FBQSxBQWxCRCxDQUF3QyxRQUFRLENBQUMsZUFBZSxHQWtCL0Q7UUFsQlksNkJBQWtCLHFCQWtCOUIsQ0FBQTtJQUNMLENBQUMsRUF4QmUsVUFBVSxHQUFWLGdCQUFVLEtBQVYsZ0JBQVUsUUF3QnpCO0FBQUQsQ0FBQyxFQXhCUyxLQUFLLEtBQUwsS0FBSyxRQXdCZDtBRXhCRCxJQUFVLEtBQUssQ0EyQmQ7QUEzQkQsV0FBVSxLQUFLO0lBQUMsSUFBQSxVQUFVLENBMkJ6QjtJQTNCZSxXQUFBLFVBQVU7UUFNdEI7WUFBK0IsNkJBQXdCO1lBSW5ELG1CQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBY2hCO2dCQVpHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFHO29CQUNsQixTQUFTLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFdEIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN4QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUUxQixDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVMsRUFBRTt3QkFDdEIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsVUFBVSxFQUFFLEVBQUU7cUJBQ2pCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBbEJNLGlCQUFPLEdBQUcsa0JBQWtCLENBQUM7WUFtQnhDLGdCQUFDO1NBQUEsQUFwQkQsQ0FBK0IsUUFBUSxDQUFDLGVBQWUsR0FvQnREO1FBcEJZLG9CQUFTLFlBb0JyQixDQUFBO0lBQ0wsQ0FBQyxFQTNCZSxVQUFVLEdBQVYsZ0JBQVUsS0FBVixnQkFBVSxRQTJCekI7QUFBRCxDQUFDLEVBM0JTLEtBQUssS0FBTCxLQUFLLFFBMkJkO0FFM0JELElBQVUsS0FBSyxDQTBCZDtBQTFCRCxXQUFVLEtBQUs7SUFBQyxJQUFBLFVBQVUsQ0EwQnpCO0lBMUJlLFdBQUEsVUFBVTtRQU10QjtZQUF1QyxxQ0FBd0I7WUFJM0QsMkJBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FhaEI7Z0JBWEcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRztvQkFDMUIsaUJBQWlCLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFOUIsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsY0FBYyxDQUFDO29CQUUxQixDQUFDLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFO3dCQUM5QixhQUFhLEVBQUUsRUFBRTt3QkFDakIsaUJBQWlCLEVBQUUsRUFBRTtxQkFDeEIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUFqQk0seUJBQU8sR0FBRywwQkFBMEIsQ0FBQztZQWtCaEQsd0JBQUM7U0FBQSxBQW5CRCxDQUF1QyxRQUFRLENBQUMsZUFBZSxHQW1COUQ7UUFuQlksNEJBQWlCLG9CQW1CN0IsQ0FBQTtJQUNMLENBQUMsRUExQmUsVUFBVSxHQUFWLGdCQUFVLEtBQVYsZ0JBQVUsUUEwQnpCO0FBQUQsQ0FBQyxFQTFCUyxLQUFLLEtBQUwsS0FBSyxRQTBCZDtBRTFCRCxJQUFVLEtBQUssQ0FrQ2Q7QUFsQ0QsV0FBVSxLQUFLO0lBQUMsSUFBQSxVQUFVLENBa0N6QjtJQWxDZSxXQUFBLFVBQVU7UUFTdEI7WUFBZ0MsOEJBQXdCO1lBSXBELG9CQUFZLE1BQWM7Z0JBQTFCLFlBQ0ksa0JBQU0sTUFBTSxDQUFDLFNBa0JoQjtnQkFoQkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUc7b0JBQ25CLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUV2QixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBQ3hCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDOUIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLGNBQWMsQ0FBQztvQkFFMUIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUU7d0JBQ3ZCLGFBQWEsRUFBRSxFQUFFO3dCQUNqQixPQUFPLEVBQUUsRUFBRTt3QkFDWCxjQUFjLEVBQUUsRUFBRTt3QkFDbEIsVUFBVSxFQUFFLEVBQUU7d0JBQ2QsaUJBQWlCLEVBQUUsRUFBRTtxQkFDeEIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUF0Qk0sa0JBQU8sR0FBRyxtQkFBbUIsQ0FBQztZQXVCekMsaUJBQUM7U0FBQSxBQXhCRCxDQUFnQyxRQUFRLENBQUMsZUFBZSxHQXdCdkQ7UUF4QlkscUJBQVUsYUF3QnRCLENBQUE7SUFDTCxDQUFDLEVBbENlLFVBQVUsR0FBVixnQkFBVSxLQUFWLGdCQUFVLFFBa0N6QjtBQUFELENBQUMsRUFsQ1MsS0FBSyxLQUFMLEtBQUssUUFrQ2Q7QUdsQ0QsSUFBVSxLQUFLLENBSWQ7QUFKRCxXQUFVLE9BQUs7SUFBQyxJQUFBLEtBQUssQ0FJcEI7SUFKZSxXQUFBLEtBQUs7UUFDakI7WUFBQTtZQUVBLENBQUM7WUFEVSw0QkFBVSxHQUFHLGtCQUFrQixDQUFDO1lBQzNDLHdCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksdUJBQWlCLG9CQUU3QixDQUFBO0lBQ0wsQ0FBQyxFQUplLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUlwQjtBQUFELENBQUMsRUFKUyxLQUFLLEtBQUwsS0FBSyxRQUlkO0FDSkQsSUFBVSxLQUFLLENBd0JkO0FBeEJELFdBQVUsT0FBSztJQUFDLElBQUEsS0FBSyxDQXdCcEI7SUF4QmUsV0FBQSxLQUFLO1FBS2pCO1lBQStDLDZDQUF3QjtZQUluRSxtQ0FBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQVloQjtnQkFWRyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxFQUFHO29CQUNsQyx5QkFBeUIsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUV0QyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztvQkFFN0IsQ0FBQyxDQUFDLFlBQVksQ0FBQyx5QkFBeUIsRUFBRTt3QkFDdEMsVUFBVSxFQUFFLEVBQUU7cUJBQ2pCLENBQUMsQ0FBQztpQkFDTjs7WUFDTCxDQUFDO1lBaEJNLGlDQUFPLEdBQUcsNkJBQTZCLENBQUM7WUFpQm5ELGdDQUFDO1NBQUEsQUFsQkQsQ0FBK0MsUUFBUSxDQUFDLGVBQWUsR0FrQnRFO1FBbEJZLCtCQUF5Qiw0QkFrQnJDLENBQUE7SUFDTCxDQUFDLEVBeEJlLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQXdCcEI7QUFBRCxDQUFDLEVBeEJTLEtBQUssS0FBTCxLQUFLLFFBd0JkO0FDeEJELElBQVUsS0FBSyxDQStCZDtBQS9CRCxXQUFVLE9BQUs7SUFBQyxJQUFBLEtBQUssQ0ErQnBCO0lBL0JlLFdBQUEsS0FBSztRQVFqQjtZQUFvQyxrQ0FBd0I7WUFJeEQsd0JBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FnQmhCO2dCQWRHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFHO29CQUN2QixjQUFjLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztvQkFFM0IsSUFBSSxDQUFDLEdBQUcsUUFBUSxDQUFDO29CQUNqQixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUN4QixJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO29CQUV4QixDQUFDLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRTt3QkFDM0IsZ0JBQWdCLEVBQUUsRUFBRTt3QkFDcEIsY0FBYyxFQUFFLEVBQUU7d0JBQ2xCLGNBQWMsRUFBRSxFQUFFO3dCQUNsQixhQUFhLEVBQUUsRUFBRTtxQkFDcEIsQ0FBQyxDQUFDO2lCQUNOOztZQUNMLENBQUM7WUFwQk0sc0JBQU8sR0FBRyxrQkFBa0IsQ0FBQztZQXFCeEMscUJBQUM7U0FBQSxBQXRCRCxDQUFvQyxRQUFRLENBQUMsZUFBZSxHQXNCM0Q7UUF0Qlksb0JBQWMsaUJBc0IxQixDQUFBO0lBQ0wsQ0FBQyxFQS9CZSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUErQnBCO0FBQUQsQ0FBQyxFQS9CUyxLQUFLLEtBQUwsS0FBSyxRQStCZDtBQy9CRCxJQUFVLEtBQUssQ0EwQmQ7QUExQkQsV0FBVSxPQUFLO0lBQUMsSUFBQSxLQUFLLENBMEJwQjtJQTFCZSxXQUFBLEtBQUs7UUFTakIsSUFBaUIsaUJBQWlCLENBZ0JqQztRQWhCRCxXQUFpQixpQkFBaUI7WUFDakIsNEJBQVUsR0FBRyxJQUFJLENBQUM7WUFDbEIsOEJBQVksR0FBRyxjQUFjLENBQUM7WUFDOUIsaUNBQWUsR0FBRyxzQkFBc0IsQ0FBQztZQUN6QyxrQ0FBZ0IsR0FBRyxlQUFlLENBQUM7WUFDbkMsa0NBQWdCLEdBQUcsZUFBZSxDQUFDO1lBQ25DLGdDQUFjLEdBQUcsZUFBZSxDQUFDO1lBQ2pDLGtDQUFnQixHQUFHLGVBQWUsQ0FBQztRQVNwRCxDQUFDLEVBaEJnQixpQkFBaUIsR0FBakIsdUJBQWlCLEtBQWpCLHVCQUFpQixRQWdCakM7SUFDTCxDQUFDLEVBMUJlLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQTBCcEI7QUFBRCxDQUFDLEVBMUJTLEtBQUssS0FBTCxLQUFLLFFBMEJkO0FDMUJELElBQVUsS0FBSyxDQThCZDtBQTlCRCxXQUFVLE9BQUs7SUFBQyxJQUFBLEtBQUssQ0E4QnBCO0lBOUJlLFdBQUEsS0FBSztRQUNqQixJQUFpQixxQkFBcUIsQ0E0QnJDO1FBNUJELFdBQWlCLHFCQUFxQjtZQUNyQiw2QkFBTyxHQUFHLHNCQUFzQixDQUFDO1lBZ0I5QztnQkFDSSxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLE1BQU07YUFDVCxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QscUJBQXNCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQy9DLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxzQkFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUE1QmdCLHFCQUFxQixHQUFyQiwyQkFBcUIsS0FBckIsMkJBQXFCLFFBNEJyQztJQUNMLENBQUMsRUE5QmUsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBOEJwQjtBQUFELENBQUMsRUE5QlMsS0FBSyxLQUFMLEtBQUssUUE4QmQ7QUU5QkQsSUFBVSxLQUFLLENBa0RkO0FBbERELFdBQVUsT0FBSztJQUFDLElBQUEsS0FBSyxDQWtEcEI7SUFsRGUsV0FBQSxLQUFLO1FBa0JqQixJQUFpQixhQUFhLENBK0I3QjtRQS9CRCxXQUFpQixhQUFhO1lBQ2Isd0JBQVUsR0FBRyxZQUFZLENBQUM7WUFDMUIsOEJBQWdCLEdBQUcsVUFBVSxDQUFDO1lBQzlCLDBCQUFZLEdBQUcsY0FBYyxDQUFDO1lBQzlCLDZCQUFlLEdBQUcsa0JBQWtCLENBQUM7WUFDckMsdUJBQVMsR0FBRyxrQkFBa0IsQ0FBQztZQUU1QyxTQUFnQixTQUFTO2dCQUNyQixPQUFPLENBQUMsQ0FBQyxTQUFTLENBQWdCLGtCQUFrQixDQUFDLENBQUM7WUFDMUQsQ0FBQztZQUZlLHVCQUFTLFlBRXhCLENBQUE7WUFDWSw4QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3Qyw4QkFBZ0IsR0FBRyx5QkFBeUIsQ0FBQztZQUM3Qyw0QkFBYyxHQUFHLHVCQUF1QixDQUFDO1lBQ3pDLDhCQUFnQixHQUFHLHlCQUF5QixDQUFDO1FBa0I5RCxDQUFDLEVBL0JnQixhQUFhLEdBQWIsbUJBQWEsS0FBYixtQkFBYSxRQStCN0I7SUFDTCxDQUFDLEVBbERlLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQWtEcEI7QUFBRCxDQUFDLEVBbERTLEtBQUssS0FBTCxLQUFLLFFBa0RkO0FDbERELElBQVUsS0FBSyxDQWlDZDtBQWpDRCxXQUFVLE9BQUs7SUFBQyxJQUFBLEtBQUssQ0FpQ3BCO0lBakNlLFdBQUEsS0FBSztRQUNqQixJQUFpQixpQkFBaUIsQ0ErQmpDO1FBL0JELFdBQWlCLGlCQUFpQjtZQUNqQix5QkFBTyxHQUFHLGtCQUFrQixDQUFDO1lBa0IxQztnQkFDSSxRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixVQUFVO2dCQUNWLE1BQU07Z0JBQ04sYUFBYTthQUNoQixDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7Z0JBQ0QsaUJBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQzNDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxrQkFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUEvQmdCLGlCQUFpQixHQUFqQix1QkFBaUIsS0FBakIsdUJBQWlCLFFBK0JqQztJQUNMLENBQUMsRUFqQ2UsS0FBSyxHQUFMLGFBQUssS0FBTCxhQUFLLFFBaUNwQjtBQUFELENBQUMsRUFqQ1MsS0FBSyxLQUFMLEtBQUssUUFpQ2Q7QUNqQ0QsSUFBVSxLQUFLLENBSWQ7QUFKRCxXQUFVLE9BQUs7SUFBQyxJQUFBLEtBQUssQ0FJcEI7SUFKZSxXQUFBLEtBQUs7UUFDakI7WUFBQTtZQUVBLENBQUM7WUFEVSxnQ0FBVSxHQUFHLHNCQUFzQixDQUFDO1lBQy9DLDRCQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksMkJBQXFCLHdCQUVqQyxDQUFBO0lBQ0wsQ0FBQyxFQUplLEtBQUssR0FBTCxhQUFLLEtBQUwsYUFBSyxRQUlwQjtBQUFELENBQUMsRUFKUyxLQUFLLEtBQUwsS0FBSyxRQUlkO0FDSkQsSUFBVSxLQUFLLENBMkJkO0FBM0JELFdBQVUsT0FBSztJQUFDLElBQUEsS0FBSyxDQTJCcEI7SUEzQmUsV0FBQSxLQUFLO1FBTWpCO1lBQXdDLHNDQUF3QjtZQUk1RCw0QkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQWNoQjtnQkFaRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxFQUFHO29CQUMzQixrQkFBa0IsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO29CQUUvQixJQUFJLENBQUMsR0FBRyxRQUFRLENBQUM7b0JBQ2pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7b0JBQ3pCLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUM7b0JBRXhCLENBQUMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLEVBQUU7d0JBQy9CLE1BQU0sRUFBRSxFQUFFO3dCQUNWLGNBQWMsRUFBRSxFQUFFO3FCQUNyQixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQWxCTSwwQkFBTyxHQUFHLHNCQUFzQixDQUFDO1lBbUI1Qyx5QkFBQztTQUFBLEFBcEJELENBQXdDLFFBQVEsQ0FBQyxlQUFlLEdBb0IvRDtRQXBCWSx3QkFBa0IscUJBb0I5QixDQUFBO0lBQ0wsQ0FBQyxFQTNCZSxLQUFLLEdBQUwsYUFBSyxLQUFMLGFBQUssUUEyQnBCO0FBQUQsQ0FBQyxFQTNCUyxLQUFLLEtBQUwsS0FBSyxRQTJCZDtBQzNCRCxJQUFVLEtBQUssQ0F3Q2Q7QUF4Q0QsV0FBVSxRQUFLO0lBQUMsSUFBQSxLQUFLLENBd0NwQjtJQXhDZSxXQUFBLEtBQUs7UUFhakIsSUFBaUIsaUJBQWlCLENBMEJqQztRQTFCRCxXQUFpQixpQkFBaUI7WUFDakIsNEJBQVUsR0FBRyxnQkFBZ0IsQ0FBQztZQUM5QixrQ0FBZ0IsR0FBRyxVQUFVLENBQUM7WUFDOUIsOEJBQVksR0FBRyxNQUFNLENBQUM7WUFDdEIsaUNBQWUsR0FBRyxzQkFBc0IsQ0FBQztZQUN6QywyQkFBUyxHQUFHLHNCQUFzQixDQUFDO1lBRWhELFNBQWdCLFNBQVM7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBb0Isc0JBQXNCLENBQUMsQ0FBQztZQUNsRSxDQUFDO1lBRmUsMkJBQVMsWUFFeEIsQ0FBQTtZQUNZLGtDQUFnQixHQUFHLDZCQUE2QixDQUFDO1lBQ2pELGtDQUFnQixHQUFHLDZCQUE2QixDQUFDO1lBQ2pELGdDQUFjLEdBQUcsMkJBQTJCLENBQUM7WUFDN0Msa0NBQWdCLEdBQUcsNkJBQTZCLENBQUM7UUFhbEUsQ0FBQyxFQTFCZ0IsaUJBQWlCLEdBQWpCLHVCQUFpQixLQUFqQix1QkFBaUIsUUEwQmpDO0lBQ0wsQ0FBQyxFQXhDZSxLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUF3Q3BCO0FBQUQsQ0FBQyxFQXhDUyxLQUFLLEtBQUwsS0FBSyxRQXdDZDtBQ3hDRCxJQUFVLEtBQUssQ0E4QmQ7QUE5QkQsV0FBVSxRQUFLO0lBQUMsSUFBQSxLQUFLLENBOEJwQjtJQTlCZSxXQUFBLEtBQUs7UUFDakIsSUFBaUIscUJBQXFCLENBNEJyQztRQTVCRCxXQUFpQixxQkFBcUI7WUFDckIsNkJBQU8sR0FBRyxzQkFBc0IsQ0FBQztZQWdCOUM7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELHFCQUFzQixDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO29CQUMvQyxPQUFPLENBQUMsQ0FBQyxjQUFjLENBQUMsc0JBQUEsT0FBTyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDeEQsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLEVBNUJnQixxQkFBcUIsR0FBckIsMkJBQXFCLEtBQXJCLDJCQUFxQixRQTRCckM7SUFDTCxDQUFDLEVBOUJlLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQThCcEI7QUFBRCxDQUFDLEVBOUJTLEtBQUssS0FBTCxLQUFLLFFBOEJkO0FDOUJELElBQVUsS0FBSyxDQThHZDtBQTlHRCxXQUFVLFFBQUs7SUFBQyxJQUFBLEtBQUssQ0E4R3BCO0lBOUdlLFdBQUEsS0FBSztRQWdEakIsSUFBaUIsWUFBWSxDQTZENUI7UUE3REQsV0FBaUIsWUFBWTtZQUNaLHVCQUFVLEdBQUcsWUFBWSxDQUFDO1lBQzFCLDZCQUFnQixHQUFHLFVBQVUsQ0FBQztZQUM5Qix5QkFBWSxHQUFHLFVBQVUsQ0FBQztZQUMxQiw0QkFBZSxHQUFHLGlCQUFpQixDQUFDO1lBQ3BDLHNCQUFTLEdBQUcsaUJBQWlCLENBQUM7WUFFM0MsU0FBZ0IsU0FBUztnQkFDckIsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFlLGlCQUFpQixDQUFDLENBQUM7WUFDeEQsQ0FBQztZQUZlLHNCQUFTLFlBRXhCLENBQUE7WUFDWSw2QkFBZ0IsR0FBRyxlQUFlLENBQUM7WUFDbkMsNkJBQWdCLEdBQUcsZUFBZSxDQUFDO1lBQ25DLDJCQUFjLEdBQUcsZUFBZSxDQUFDO1lBQ2pDLDZCQUFnQixHQUFHLGVBQWUsQ0FBQztRQWdEcEQsQ0FBQyxFQTdEZ0IsWUFBWSxHQUFaLGtCQUFZLEtBQVosa0JBQVksUUE2RDVCO0lBQ0wsQ0FBQyxFQTlHZSxLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUE4R3BCO0FBQUQsQ0FBQyxFQTlHUyxLQUFLLEtBQUwsS0FBSyxRQThHZDtBQzlHRCxJQUFVLEtBQUssQ0FNZDtBQU5ELFdBQVUsUUFBSztJQUFDLElBQUEsS0FBSyxDQU1wQjtJQU5lLFdBQUEsS0FBSztRQUNqQixJQUFZLE1BR1g7UUFIRCxXQUFZLE1BQU07WUFDZCxtQ0FBUSxDQUFBO1lBQ1IsdUNBQVUsQ0FBQTtRQUNkLENBQUMsRUFIVyxNQUFNLEdBQU4sWUFBTSxLQUFOLFlBQU0sUUFHakI7UUFDRCxRQUFRLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3RHLENBQUMsRUFOZSxLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUFNcEI7QUFBRCxDQUFDLEVBTlMsS0FBSyxLQUFMLEtBQUssUUFNZDtBQ05ELElBQVUsS0FBSyxDQUlkO0FBSkQsV0FBVSxRQUFLO0lBQUMsSUFBQSxLQUFLLENBSXBCO0lBSmUsV0FBQSxLQUFLO1FBQ2pCO1lBQUE7WUFFQSxDQUFDO1lBRFUsMEJBQVUsR0FBRyxnQkFBZ0IsQ0FBQztZQUN6QyxzQkFBQztTQUFBLEFBRkQsSUFFQztRQUZZLHFCQUFlLGtCQUUzQixDQUFBO0lBQ0wsQ0FBQyxFQUplLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQUlwQjtBQUFELENBQUMsRUFKUyxLQUFLLEtBQUwsS0FBSyxRQUlkO0FDSkQsSUFBVSxLQUFLLENBd0JkO0FBeEJELFdBQVUsUUFBSztJQUFDLElBQUEsS0FBSyxDQXdCcEI7SUF4QmUsV0FBQSxLQUFLO1FBS2pCO1lBQWtDLGdDQUF3QjtZQUl0RCxzQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQVloQjtnQkFWRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRztvQkFDckIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXpCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7d0JBQ3pCLGFBQWEsRUFBRSxFQUFFO3FCQUNwQixDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQWhCTSxvQkFBTyxHQUFHLGdCQUFnQixDQUFDO1lBaUJ0QyxtQkFBQztTQUFBLEFBbEJELENBQWtDLFFBQVEsQ0FBQyxlQUFlLEdBa0J6RDtRQWxCWSxrQkFBWSxlQWtCeEIsQ0FBQTtJQUNMLENBQUMsRUF4QmUsS0FBSyxHQUFMLGNBQUssS0FBTCxjQUFLLFFBd0JwQjtBQUFELENBQUMsRUF4QlMsS0FBSyxLQUFMLEtBQUssUUF3QmQ7QUN4QkQsSUFBVSxLQUFLLENBc0NkO0FBdENELFdBQVUsUUFBSztJQUFDLElBQUEsS0FBSyxDQXNDcEI7SUF0Q2UsV0FBQSxLQUFLO1FBWWpCLElBQWlCLFdBQVcsQ0F5QjNCO1FBekJELFdBQWlCLFdBQVc7WUFDWCxzQkFBVSxHQUFHLFdBQVcsQ0FBQztZQUN6Qiw0QkFBZ0IsR0FBRyxVQUFVLENBQUM7WUFDOUIsd0JBQVksR0FBRyxhQUFhLENBQUM7WUFDN0IsMkJBQWUsR0FBRyxnQkFBZ0IsQ0FBQztZQUNuQyxxQkFBUyxHQUFHLGdCQUFnQixDQUFDO1lBRTFDLFNBQWdCLFNBQVM7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBYyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3RELENBQUM7WUFGZSxxQkFBUyxZQUV4QixDQUFBO1lBQ1ksNEJBQWdCLEdBQUcsdUJBQXVCLENBQUM7WUFDM0MsNEJBQWdCLEdBQUcsdUJBQXVCLENBQUM7WUFDM0MsMEJBQWMsR0FBRyxxQkFBcUIsQ0FBQztZQUN2Qyw0QkFBZ0IsR0FBRyx1QkFBdUIsQ0FBQztRQVk1RCxDQUFDLEVBekJnQixXQUFXLEdBQVgsaUJBQVcsS0FBWCxpQkFBVyxRQXlCM0I7SUFDTCxDQUFDLEVBdENlLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQXNDcEI7QUFBRCxDQUFDLEVBdENTLEtBQUssS0FBTCxLQUFLLFFBc0NkO0FDdENELElBQVUsS0FBSyxDQThCZDtBQTlCRCxXQUFVLFFBQUs7SUFBQyxJQUFBLEtBQUssQ0E4QnBCO0lBOUJlLFdBQUEsS0FBSztRQUNqQixJQUFpQixlQUFlLENBNEIvQjtRQTVCRCxXQUFpQixlQUFlO1lBQ2YsdUJBQU8sR0FBRyxnQkFBZ0IsQ0FBQztZQWdCeEM7Z0JBQ0ksUUFBUTtnQkFDUixRQUFRO2dCQUNSLFFBQVE7Z0JBQ1IsVUFBVTtnQkFDVixNQUFNO2FBQ1QsQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO2dCQUNELGVBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3pDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxnQkFBQSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDLENBQUM7WUFDTixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsRUE1QmdCLGVBQWUsR0FBZixxQkFBZSxLQUFmLHFCQUFlLFFBNEIvQjtJQUNMLENBQUMsRUE5QmUsS0FBSyxHQUFMLGNBQUssS0FBTCxjQUFLLFFBOEJwQjtBQUFELENBQUMsRUE5QlMsS0FBSyxLQUFMLEtBQUssUUE4QmQ7QUM5QkQsSUFBVSxLQUFLLENBMERkO0FBMURELFdBQVUsUUFBSztJQUFDLElBQUEsS0FBSyxDQTBEcEI7SUExRGUsV0FBQSxLQUFLO1FBQ2pCLElBQWlCLGNBQWMsQ0F3RDlCO1FBeERELFdBQWlCLGNBQWM7WUFDZCxzQkFBTyxHQUFHLGVBQWUsQ0FBQztZQUV2QyxJQUFVLFVBQVUsQ0FJbkI7WUFKRCxXQUFVLFVBQVU7Z0JBQ0gsaUJBQU0sR0FBRyx5QkFBeUIsQ0FBQztnQkFDbkMsaUJBQU0sR0FBRyx5QkFBeUIsQ0FBQztnQkFDbkMsZUFBSSxHQUFHLHVCQUF1QixDQUFDO1lBQ2hELENBQUMsRUFKUyxVQUFVLEtBQVYsVUFBVSxRQUluQjtZQUVELElBQVUsY0FBYyxDQUl2QjtZQUpELFdBQVUsY0FBYztnQkFDUCxxQkFBTSxHQUFHLDZCQUE2QixDQUFDO2dCQUN2QyxxQkFBTSxHQUFHLDZCQUE2QixDQUFDO2dCQUN2QyxtQkFBSSxHQUFHLDJCQUEyQixDQUFDO1lBQ3BELENBQUMsRUFKUyxjQUFjLEtBQWQsY0FBYyxRQUl2QjtZQUVELElBQVUsS0FBSyxDQUlkO1lBSkQsV0FBVSxLQUFLO2dCQUNFLFlBQU0sR0FBRyxvQkFBb0IsQ0FBQztnQkFDOUIsWUFBTSxHQUFHLG9CQUFvQixDQUFDO2dCQUM5QixVQUFJLEdBQUcsa0JBQWtCLENBQUM7WUFDM0MsQ0FBQyxFQUpTLEtBQUssS0FBTCxLQUFLLFFBSWQ7WUFFRCxJQUFVLFlBQVksQ0FJckI7WUFKRCxXQUFVLFlBQVk7Z0JBQ0wsbUJBQU0sR0FBRywyQkFBMkIsQ0FBQztnQkFDckMsbUJBQU0sR0FBRywyQkFBMkIsQ0FBQztnQkFDckMsaUJBQUksR0FBRyx5QkFBeUIsQ0FBQztZQUNsRCxDQUFDLEVBSlMsWUFBWSxLQUFaLFlBQVksUUFJckI7WUFFRCxJQUFVLFFBQVEsQ0FJakI7WUFKRCxXQUFVLFFBQVE7Z0JBQ0QsZUFBTSxHQUFHLHVCQUF1QixDQUFDO2dCQUNqQyxlQUFNLEdBQUcsdUJBQXVCLENBQUM7Z0JBQ2pDLGFBQUksR0FBRyxxQkFBcUIsQ0FBQztZQUM5QyxDQUFDLEVBSlMsUUFBUSxLQUFSLFFBQVEsUUFJakI7WUFFRCxJQUFVLGFBQWEsQ0FJdEI7WUFKRCxXQUFVLGFBQWE7Z0JBQ04sb0JBQU0sR0FBRyw0QkFBNEIsQ0FBQztnQkFDdEMsb0JBQU0sR0FBRyw0QkFBNEIsQ0FBQztnQkFDdEMsa0JBQUksR0FBRywwQkFBMEIsQ0FBQztZQUNuRCxDQUFDLEVBSlMsYUFBYSxLQUFiLGFBQWEsUUFJdEI7WUFFRCxJQUFVLGNBQWMsQ0FJdkI7WUFKRCxXQUFVLGNBQWM7Z0JBQ1AscUJBQU0sR0FBRywyQkFBMkIsQ0FBQztnQkFDckMscUJBQU0sR0FBRywyQkFBMkIsQ0FBQztnQkFDckMsbUJBQUksR0FBRyx5QkFBeUIsQ0FBQztZQUNsRCxDQUFDLEVBSlMsY0FBYyxLQUFkLGNBQWMsUUFJdkI7WUFFRCxJQUFVLEtBQUssQ0FJZDtZQUpELFdBQVUsS0FBSztnQkFDRSxZQUFNLEdBQUcsb0JBQW9CLENBQUM7Z0JBQzlCLFlBQU0sR0FBRyxvQkFBb0IsQ0FBQztnQkFDOUIsVUFBSSxHQUFHLGtCQUFrQixDQUFDO1lBQzNDLENBQUMsRUFKUyxLQUFLLEtBQUwsS0FBSyxRQUlkO1lBRUQsSUFBVSxPQUFPLENBSWhCO1lBSkQsV0FBVSxPQUFPO2dCQUNBLGNBQU0sR0FBRyxzQkFBc0IsQ0FBQztnQkFDaEMsY0FBTSxHQUFHLHNCQUFzQixDQUFDO2dCQUNoQyxZQUFJLEdBQUcsb0JBQW9CLENBQUM7WUFDN0MsQ0FBQyxFQUpTLE9BQU8sS0FBUCxPQUFPLFFBSWhCO1FBQ0wsQ0FBQyxFQXhEZ0IsY0FBYyxHQUFkLG9CQUFjLEtBQWQsb0JBQWMsUUF3RDlCO0lBQ0wsQ0FBQyxFQTFEZSxLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUEwRHBCO0FBQUQsQ0FBQyxFQTFEUyxLQUFLLEtBQUwsS0FBSyxRQTBEZDtBQzFERCxJQUFVLEtBQUssQ0FJZDtBQUpELFdBQVUsUUFBSztJQUFDLElBQUEsS0FBSyxDQUlwQjtJQUplLFdBQUEsS0FBSztRQUNqQjtZQUFBO1lBRUEsQ0FBQztZQURVLHVCQUFVLEdBQUcsYUFBYSxDQUFDO1lBQ3RDLG1CQUFDO1NBQUEsQUFGRCxJQUVDO1FBRlksa0JBQVksZUFFeEIsQ0FBQTtJQUNMLENBQUMsRUFKZSxLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUFJcEI7QUFBRCxDQUFDLEVBSlMsS0FBSyxLQUFMLEtBQUssUUFJZDtBQ0pELElBQVUsS0FBSyxDQTJDZDtBQTNDRCxXQUFVLFFBQUs7SUFBQyxJQUFBLEtBQUssQ0EyQ3BCO0lBM0NlLFdBQUEsS0FBSztRQWNqQjtZQUErQiw2QkFBd0I7WUFJbkQsbUJBQVksTUFBYztnQkFBMUIsWUFDSSxrQkFBTSxNQUFNLENBQUMsU0FzQmhCO2dCQXBCRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRztvQkFDbEIsU0FBUyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXRCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFDeEIsSUFBSSxFQUFFLEdBQUcsTUFBQSxXQUFXLENBQUM7b0JBRXJCLENBQUMsQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO3dCQUN0QixRQUFRLEVBQUUsRUFBRTt3QkFDWixVQUFVLEVBQUUsRUFBRTt3QkFDZCxhQUFhLEVBQUUsRUFBRTt3QkFDakIsY0FBYyxFQUFFLEVBQUU7d0JBQ2xCLFNBQVMsRUFBRSxFQUFFO3dCQUNiLFNBQVMsRUFBRSxFQUFFO3dCQUNiLE1BQU0sRUFBRSxFQUFFO3dCQUNWLFFBQVEsRUFBRSxFQUFFO3dCQUNaLFlBQVksRUFBRSxFQUFFO3dCQUNoQixPQUFPLEVBQUUsRUFBRTtxQkFDZCxDQUFDLENBQUM7aUJBQ047O1lBQ0wsQ0FBQztZQTFCTSxpQkFBTyxHQUFHLGFBQWEsQ0FBQztZQTJCbkMsZ0JBQUM7U0FBQSxBQTVCRCxDQUErQixRQUFRLENBQUMsZUFBZSxHQTRCdEQ7UUE1QlksZUFBUyxZQTRCckIsQ0FBQTtJQUNMLENBQUMsRUEzQ2UsS0FBSyxHQUFMLGNBQUssS0FBTCxjQUFLLFFBMkNwQjtBQUFELENBQUMsRUEzQ1MsS0FBSyxLQUFMLEtBQUssUUEyQ2Q7QUMzQ0QsSUFBVSxLQUFLLENBd0RkO0FBeERELFdBQVUsUUFBSztJQUFDLElBQUEsS0FBSyxDQXdEcEI7SUF4RGUsV0FBQSxLQUFLO1FBcUJqQixJQUFpQixRQUFRLENBa0N4QjtRQWxDRCxXQUFpQixRQUFRO1lBQ1IsbUJBQVUsR0FBRyxJQUFJLENBQUM7WUFDbEIseUJBQWdCLEdBQUcsVUFBVSxDQUFDO1lBQzlCLHFCQUFZLEdBQUcsVUFBVSxDQUFDO1lBQzFCLHdCQUFlLEdBQUcsYUFBYSxDQUFDO1lBQ2hDLGtCQUFTLEdBQUcsYUFBYSxDQUFDO1lBRXZDLFNBQWdCLFNBQVM7Z0JBQ3JCLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBVyxhQUFhLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRmUsa0JBQVMsWUFFeEIsQ0FBQTtZQUNZLHlCQUFnQixHQUFHLG9CQUFvQixDQUFDO1lBQ3hDLHlCQUFnQixHQUFHLG9CQUFvQixDQUFDO1lBQ3hDLHVCQUFjLEdBQUcsa0JBQWtCLENBQUM7WUFDcEMseUJBQWdCLEdBQUcsb0JBQW9CLENBQUM7UUFxQnpELENBQUMsRUFsQ2dCLFFBQVEsR0FBUixjQUFRLEtBQVIsY0FBUSxRQWtDeEI7SUFDTCxDQUFDLEVBeERlLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQXdEcEI7QUFBRCxDQUFDLEVBeERTLEtBQUssS0FBTCxLQUFLLFFBd0RkO0FDeERELElBQVUsS0FBSyxDQThCZDtBQTlCRCxXQUFVLFFBQUs7SUFBQyxJQUFBLEtBQUssQ0E4QnBCO0lBOUJlLFdBQUEsS0FBSztRQUNqQixJQUFpQixZQUFZLENBNEI1QjtRQTVCRCxXQUFpQixZQUFZO1lBQ1osb0JBQU8sR0FBRyxhQUFhLENBQUM7WUFnQnJDO2dCQUNJLFFBQVE7Z0JBQ1IsUUFBUTtnQkFDUixRQUFRO2dCQUNSLFVBQVU7Z0JBQ1YsTUFBTTthQUNULENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztnQkFDRCxZQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7b0JBQ3RDLE9BQU8sQ0FBQyxDQUFDLGNBQWMsQ0FBQyxhQUFBLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hELENBQUMsQ0FBQztZQUNOLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQTVCZ0IsWUFBWSxHQUFaLGtCQUFZLEtBQVosa0JBQVksUUE0QjVCO0lBQ0wsQ0FBQyxFQTlCZSxLQUFLLEdBQUwsY0FBSyxLQUFMLGNBQUssUUE4QnBCO0FBQUQsQ0FBQyxFQTlCUyxLQUFLLEtBQUwsS0FBSyxRQThCZDtBQzlCRCxJQUFVLEtBQUssQ0FpV2Q7QUFqV0QsV0FBVSxRQUFLO0lBQUMsSUFBQSxLQUFLLENBaVdwQjtJQWpXZSxXQUFBLEtBQUs7UUFnV2pCLFNBQUEsS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFDLEVBQUUsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLEVBQUUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsd0JBQXdCLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxVQUFVLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLGNBQWMsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLEtBQUssRUFBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsYUFBYSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMseUJBQXlCLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsWUFBWSxFQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsRUFBQyxtQkFBbUIsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxFQUFDLGlCQUFpQixFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxTQUFTLEVBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsS0FBSyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLGdCQUFnQixFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLGFBQWEsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsRUFBQyxvQkFBb0IsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMscUJBQXFCLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVB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QyxTQUFTO2dCQURyQixRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRTtlQUN2QixTQUFTLENBV3JCO1lBQUQsZ0JBQUM7U0FBQSxBQVhELENBQStCLFFBQVEsQ0FBQyxVQUFVLEdBV2pEO1FBWFksZUFBUyxZQVdyQixDQUFBO0lBQ0wsQ0FBQyxFQWZlLEtBQUssR0FBTCxjQUFLLEtBQUwsY0FBSyxRQWVwQjtBQUFELENBQUMsRUFmUyxLQUFLLEtBQUwsS0FBSyxRQWVkIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUZvcm0ge1xyXG4gICAgICAgIExhbmd1YWdlSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBMYW5ndWFnZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTGFuZ3VhZ2VGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMYW5ndWFnZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKExhbmd1YWdlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZUlkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0xhbmd1YWdlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgTGFuZ3VhZ2VJZD86IHN0cmluZztcclxuICAgICAgICBMYW5ndWFnZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBMYW5ndWFnZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTGFuZ3VhZ2VOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxMYW5ndWFnZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8TGFuZ3VhZ2VSb3c+KCdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIElkID0gXCJJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIExhbmd1YWdlTmFtZSA9IFwiTGFuZ3VhZ2VOYW1lXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PExhbmd1YWdlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPExhbmd1YWdlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55Pkxhbmd1YWdlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFBlcm1pc3Npb25LZXlzIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgU2VjdXJpdHkgPSBcIkFkbWluaXN0cmF0aW9uOlNlY3VyaXR5XCI7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFRyYW5zbGF0aW9uID0gXCJBZG1pbmlzdHJhdGlvbjpUcmFuc2xhdGlvblwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRzID0gXCJBZG1pbmlzdHJhdGlvbjpUZW5hbnRzXCI7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZUZvcm0ge1xyXG4gICAgICAgIFJvbGVOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSb2xlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUm9sZUZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJvbGVGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1JvbGVOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uTGlzdFJlc3BvbnNlIGV4dGVuZHMgU2VyZW5pdHkuTGlzdFJlc3BvbnNlPHN0cmluZz4ge1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgUm9sZVBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBSb2xlUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZVBlcm1pc3Npb25JZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdQZXJtaXNzaW9uS2V5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uSWQgPSBcIlJvbGVQZXJtaXNzaW9uSWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgUGVybWlzc2lvbktleSA9IFwiUGVybWlzc2lvbktleVwiLFxyXG4gICAgICAgICAgICBSb2xlUm9sZU5hbWUgPSBcIlJvbGVSb2xlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogUm9sZVBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogUm9sZVBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBSb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHN0cmluZ1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUm93IHtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUm9sZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxSb2xlUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxSb2xlUm93PignQWRtaW5pc3RyYXRpb24uUm9sZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFJvbGVOYW1lID0gXCJSb2xlTmFtZVwiLFxyXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxSb2xlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFJvbGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlJvbGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBUZW5hbnRDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5UZW5hbnQnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRlbmFudEZvcm0ge1xyXG4gICAgICAgIFRlbmFudE5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVGVuYW50Rm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uVGVuYW50JztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFUZW5hbnRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBUZW5hbnRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShUZW5hbnRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1RlbmFudE5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVGVuYW50Um93IHtcclxuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcclxuICAgICAgICBUZW5hbnROYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVGVuYW50Um93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdUZW5hbnRJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUZW5hbnROYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlRlbmFudCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5UZW5hbnQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFRlbmFudFJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8VGVuYW50Um93PignQWRtaW5pc3RyYXRpb24uVGVuYW50Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRlbmFudHMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRlbmFudHMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUZW5hbnRzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUZW5hbnRzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIixcclxuICAgICAgICAgICAgVGVuYW50TmFtZSA9IFwiVGVuYW50TmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRlbmFudFNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RlbmFudCc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUZW5hbnRSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxUZW5hbnRSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VGVuYW50Um93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogU2VyZW5pdHkuTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRlbmFudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9UZW5hbnQvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVGVuYW50L1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBEZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1RlbmFudC9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1RlbmFudC9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9UZW5hbnQvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdDcmVhdGUnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnRGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlRlbmFudFNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvbkl0ZW0ge1xyXG4gICAgICAgIEtleT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2VUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldFRleHQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ3VzdG9tVGV4dD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXF1ZXN0IHtcclxuICAgICAgICBTb3VyY2VMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRhcmdldExhbmd1YWdlSUQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRyYW5zbGF0aW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFRyYW5zbGF0aW9uSXRlbT4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9UcmFuc2xhdGlvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vVXBkYXRlXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ1VwZGF0ZSdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlRyYW5zbGF0aW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgICAgIFRyYW5zbGF0aW9ucz86IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJGb3JtIHtcclxuICAgICAgICBVc2VybmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsRWRpdG9yO1xyXG4gICAgICAgIFVzZXJJbWFnZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybTogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgU291cmNlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgVGVuYW50SWQ6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVVzZXJGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBVc2VyRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLkVtYWlsRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MyA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzQgPSBzLkxvb2t1cEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShVc2VyRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2VybmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdEaXNwbGF5TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdVc2VySW1hZ2UnLCB3MixcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MyxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmRDb25maXJtJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NvdXJjZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnRJZCcsIHc0XHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblJvdyB7XHJcbiAgICAgICAgVXNlclBlcm1pc3Npb25JZD86IG51bWJlcjtcclxuICAgICAgICBVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUGVybWlzc2lvbktleT86IHN0cmluZztcclxuICAgICAgICBHcmFudGVkPzogYm9vbGVhbjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBVc2VyUGVybWlzc2lvbklkID0gXCJVc2VyUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgR3JhbnRlZCA9IFwiR3JhbnRlZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24nO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclBlcm1pc3Npb25VcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclBlcm1pc3Npb25Sb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFJvbGVQZXJtaXNzaW9ucyhyZXF1ZXN0OiBVc2VyUGVybWlzc2lvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdFBlcm1pc3Npb25LZXlzKHJlcXVlc3Q6IFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RcIixcclxuICAgICAgICAgICAgTGlzdFJvbGVQZXJtaXNzaW9ucyA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vTGlzdFJvbGVQZXJtaXNzaW9uc1wiLFxyXG4gICAgICAgICAgICBMaXN0UGVybWlzc2lvbktleXMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RQZXJtaXNzaW9uS2V5c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnLCBcclxuICAgICAgICAgICAgJ0xpc3RSb2xlUGVybWlzc2lvbnMnLCBcclxuICAgICAgICAgICAgJ0xpc3RQZXJtaXNzaW9uS2V5cydcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJQZXJtaXNzaW9uU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBQZXJtaXNzaW9ucz86IFVzZXJQZXJtaXNzaW9uUm93W107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxudW1iZXI+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIFVzZXJSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBVc2VyPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvbGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJSb2xlSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclJvbGVJZCA9IFwiVXNlclJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBVc2VybmFtZSA9IFwiVXNlcm5hbWVcIixcclxuICAgICAgICAgICAgVXNlciA9IFwiVXNlclwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlclJvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogVXNlclJvbGVVcGRhdGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3QocmVxdWVzdDogVXNlclJvbGVMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBVc2VyUm9sZUxpc3RSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ1VwZGF0ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJSb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlVXBkYXRlUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZXM/OiBudW1iZXJbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFNvdXJjZT86IHN0cmluZztcclxuICAgICAgICBQYXNzd29yZEhhc2g/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRTYWx0Pzogc3RyaW5nO1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFVzZXJJbWFnZT86IHN0cmluZztcclxuICAgICAgICBMYXN0RGlyZWN0b3J5VXBkYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudE5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRDb25maXJtPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgVXNlclJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVXNlcklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdVc2VybmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXInO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPFVzZXJSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFVzZXJSb3c+KCdBZG1pbmlzdHJhdGlvbi5Vc2VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFNvdXJjZSA9IFwiU291cmNlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkSGFzaCA9IFwiUGFzc3dvcmRIYXNoXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkU2FsdCA9IFwiUGFzc3dvcmRTYWx0XCIsXHJcbiAgICAgICAgICAgIERpc3BsYXlOYW1lID0gXCJEaXNwbGF5TmFtZVwiLFxyXG4gICAgICAgICAgICBFbWFpbCA9IFwiRW1haWxcIixcclxuICAgICAgICAgICAgVXNlckltYWdlID0gXCJVc2VySW1hZ2VcIixcclxuICAgICAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZSA9IFwiTGFzdERpcmVjdG9yeVVwZGF0ZVwiLFxyXG4gICAgICAgICAgICBUZW5hbnRJZCA9IFwiVGVuYW50SWRcIixcclxuICAgICAgICAgICAgVGVuYW50TmFtZSA9IFwiVGVuYW50TmFtZVwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgUGFzc3dvcmQgPSBcIlBhc3N3b3JkXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkQ29uZmlybSA9IFwiUGFzc3dvcmRDb25maXJtXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFVzZXJSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVuZGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlVuZGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5VbmRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxVc2VyUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBVbmRlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9VbmRlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnVW5kZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+VXNlclNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENoYW5nZVBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuQ2hhbmdlUGFzc3dvcmQnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNoYW5nZVBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2hhbmdlUGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKENoYW5nZVBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdPbGRQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdOZXdQYXNzd29yZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgT2xkUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkRm9ybSB7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgRm9yZ290UGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoRm9yZ290UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRm9yZ290UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIExvZ2luRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Mb2dpbic7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTG9naW5Gb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBMb2dpbkZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMb2dpbkZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGFzc3dvcmQnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpblJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBDb25maXJtUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5SZXNldFBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFSZXNldFBhc3N3b3JkRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgUmVzZXRQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoUmVzZXRQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUmVzZXRQYXNzd29yZFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVG9rZW4/OiBzdHJpbmc7XHJcbiAgICAgICAgTmV3UGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcEZvcm0ge1xyXG4gICAgICAgIERpc3BsYXlOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBDb25maXJtRW1haWw6IFNlcmVuaXR5LkVtYWlsQWRkcmVzc0VkaXRvcjtcclxuICAgICAgICBQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2lnblVwRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5TaWduVXAnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNpZ25VcEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFNpZ25VcEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzIgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFNpZ25VcEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybUVtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcyXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNpZ25VcFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRW1haWw/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFNjcmlwdFVzZXJEZWZpbml0aW9uIHtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBJc0FkbWluPzogYm9vbGVhbjtcclxuICAgICAgICBQZXJtaXNzaW9ucz86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTdG9yZS5DYXRlZ29yaWVzJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzRXhjZWxJbXBvcnRGb3JtIHtcclxuICAgICAgICBGaWxlTmFtZTogU2VyZW5pdHkuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNFeGNlbEltcG9ydEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ1N0b3JlLkNhdGVnb3JpZXNFeGNlbEltcG9ydCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghQ2F0ZWdvcmllc0V4Y2VsSW1wb3J0Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc0V4Y2VsSW1wb3J0Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5JbWFnZVVwbG9hZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDYXRlZ29yaWVzRXhjZWxJbXBvcnRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0ZpbGVOYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3JpZXNGb3JtIHtcclxuICAgICAgICBDYXRlZ29yeVR5cGVJZDogU2VyZW5pdHkuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgIENhdGVnb3J5Q29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENhdGVnb3J5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIERlc2NyaXB0aW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdG9yZS5DYXRlZ29yaWVzJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDYXRlZ29yaWVzRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuTG9va3VwRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoQ2F0ZWdvcmllc0Zvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnlUeXBlSWQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ2F0ZWdvcnlDb2RlJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NhdGVnb3J5TmFtZScsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdEZXNjcmlwdGlvbicsIHcxXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzTGFuZ1JvdyB7XHJcbiAgICAgICAgSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgQ2F0ZWdvcnlJZD86IG51bWJlcjtcclxuICAgICAgICBMYW5ndWFnZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIENhdGVnb3J5TmFtZT86IHN0cmluZztcclxuICAgICAgICBEZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3JpZXNMYW5nUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdDYXRlZ29yeU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU3RvcmUuQ2F0ZWdvcmllc0xhbmcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1N0b3JlOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1N0b3JlOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdTdG9yZTpHZW5lcmFsJztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdTdG9yZTpHZW5lcmFsJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlJZCA9IFwiQ2F0ZWdvcnlJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZUlkID0gXCJMYW5ndWFnZUlkXCIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5TmFtZSA9IFwiQ2F0ZWdvcnlOYW1lXCIsXHJcbiAgICAgICAgICAgIERlc2NyaXB0aW9uID0gXCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3JpZXNMYW5nU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU3RvcmUvQ2F0ZWdvcmllc0xhbmcnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcmllc0xhbmdSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxDYXRlZ29yaWVzTGFuZ1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxDYXRlZ29yaWVzTGFuZ1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxDYXRlZ29yaWVzTGFuZ1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJTdG9yZS9DYXRlZ29yaWVzTGFuZy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJTdG9yZS9DYXRlZ29yaWVzTGFuZy9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJTdG9yZS9DYXRlZ29yaWVzTGFuZy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlN0b3JlL0NhdGVnb3JpZXNMYW5nL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlN0b3JlL0NhdGVnb3JpZXNMYW5nL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5DYXRlZ29yaWVzTGFuZ1NlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgQ2F0ZWdvcnlJZD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzUm93IHtcclxuICAgICAgICBDYXRlZ29yeUlkPzogbnVtYmVyO1xyXG4gICAgICAgIENhdGVnb3J5VHlwZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIENhdGVnb3J5Q29kZT86IHN0cmluZztcclxuICAgICAgICBDYXRlZ29yeU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUGljdHVyZT86IG51bWJlcltdO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIFR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgQ2F0ZWdvcnlUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2F0ZWdvcmllc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnQ2F0ZWdvcnlJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnQ2F0ZWdvcnlOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1N0b3JlLkNhdGVnb3JpZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnU3RvcmUuQ2F0ZWdvcmllcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Q2F0ZWdvcmllc1Jvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q2F0ZWdvcmllc1Jvdz4oJ1N0b3JlLkNhdGVnb3JpZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU3RvcmU6Q2F0ZWdvcmllczpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXM6TW9kaWZ5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnU3RvcmU6Q2F0ZWdvcmllczpWaWV3JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdTdG9yZTpDYXRlZ29yaWVzOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnlJZCA9IFwiQ2F0ZWdvcnlJZFwiLFxyXG4gICAgICAgICAgICBDYXRlZ29yeVR5cGVJZCA9IFwiQ2F0ZWdvcnlUeXBlSWRcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlDb2RlID0gXCJDYXRlZ29yeUNvZGVcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlOYW1lID0gXCJDYXRlZ29yeU5hbWVcIixcclxuICAgICAgICAgICAgRGVzY3JpcHRpb24gPSBcIkRlc2NyaXB0aW9uXCIsXHJcbiAgICAgICAgICAgIFBpY3R1cmUgPSBcIlBpY3R1cmVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxyXG4gICAgICAgICAgICBUeXBlID0gXCJUeXBlXCIsXHJcbiAgICAgICAgICAgIENhdGVnb3J5VHlwZSA9IFwiQ2F0ZWdvcnlUeXBlXCIsXHJcbiAgICAgICAgICAgIEluc2VydFVzZXJJZCA9IFwiSW5zZXJ0VXNlcklkXCIsXHJcbiAgICAgICAgICAgIEluc2VydERhdGUgPSBcIkluc2VydERhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlVXNlcklkID0gXCJVcGRhdGVVc2VySWRcIixcclxuICAgICAgICAgICAgVXBkYXRlRGF0ZSA9IFwiVXBkYXRlRGF0ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIENhdGVnb3JpZXNTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdTdG9yZS9DYXRlZ29yaWVzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVXaXRoTG9jYWxpemF0aW9uUmVxdWVzdDxDYXRlZ29yaWVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVdpdGhMb2NhbGl6YXRpb25SZXF1ZXN0PENhdGVnb3JpZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2F0ZWdvcmllc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IENhdGVnb3JpZXNMaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcmllc1Jvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBFeGNlbEltcG9ydChyZXF1ZXN0OiBTZXJlbml0eS5FeHRlbnNpb25zLkV4Y2VsSW1wb3J0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5FeHRlbnNpb25zLkV4Y2VsSW1wb3J0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJTdG9yZS9DYXRlZ29yaWVzL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIlN0b3JlL0NhdGVnb3JpZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllcy9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIlN0b3JlL0NhdGVnb3JpZXMvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiU3RvcmUvQ2F0ZWdvcmllcy9MaXN0XCIsXHJcbiAgICAgICAgICAgIEV4Y2VsSW1wb3J0ID0gXCJTdG9yZS9DYXRlZ29yaWVzL0V4Y2VsSW1wb3J0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdFeGNlbEltcG9ydCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PkNhdGVnb3JpZXNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzVHlwZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1N0b3JlLkNhdGVnb3JpZXNUeXBlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzVHlwZUZvcm0ge1xyXG4gICAgICAgIFR5cGU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNUeXBlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU3RvcmUuQ2F0ZWdvcmllc1R5cGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNhdGVnb3JpZXNUeXBlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1R5cGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDYXRlZ29yaWVzVHlwZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeVR5cGUnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcmllc1R5cGVSb3cge1xyXG4gICAgICAgIENhdGVnb3J5VHlwZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgQ2F0ZWdvcnlUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2F0ZWdvcmllc1R5cGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NhdGVnb3J5VHlwZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUeXBlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1N0b3JlLkNhdGVnb3JpZXNUeXBlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1N0b3JlLkNhdGVnb3JpZXNUeXBlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxDYXRlZ29yaWVzVHlwZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q2F0ZWdvcmllc1R5cGVSb3c+KCdTdG9yZS5DYXRlZ29yaWVzVHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTdG9yZTpDYXRlZ29yaWVzVHlwZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXNUeXBlOk1vZGlmeSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXNUeXBlOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXNUeXBlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnlUeXBlSWQgPSBcIkNhdGVnb3J5VHlwZUlkXCIsXHJcbiAgICAgICAgICAgIFR5cGUgPSBcIlR5cGVcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlUeXBlID0gXCJDYXRlZ29yeVR5cGVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXRlZ29yaWVzVHlwZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1N0b3JlL0NhdGVnb3JpZXNUeXBlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENhdGVnb3JpZXNUeXBlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcmllc1R5cGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2F0ZWdvcmllc1R5cGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcmllc1R5cGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllc1R5cGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllc1R5cGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllc1R5cGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTdG9yZS9DYXRlZ29yaWVzVHlwZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdG9yZS9DYXRlZ29yaWVzVHlwZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2F0ZWdvcmllc1R5cGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVzUm93IHtcclxuICAgICAgICBFbXBsb3llZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIExhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBGdWxsTmFtZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEhpcmVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2l0eT86IHN0cmluZztcclxuICAgICAgICBSZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBDb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIEhvbWVQaG9uZT86IHN0cmluZztcclxuICAgICAgICBFeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvdG8/OiBudW1iZXJbXTtcclxuICAgICAgICBOb3Rlcz86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgUGhvdG9QYXRoPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIFJlcG9ydHNUb0Z1bGxOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0xhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0ZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9UaXRsZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9UaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0hpcmVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0FkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvQ2l0eT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9SZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9Db3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0hvbWVQaG9uZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9FeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvUGhvdG8/OiBudW1iZXJbXTtcclxuICAgICAgICBSZXBvcnRzVG9Ob3Rlcz86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9SZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgUmVwb3J0c1RvUGhvdG9QYXRoPzogc3RyaW5nO1xyXG4gICAgICAgIEdlbmRlcj86IEdlbmRlcjtcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEVtcGxveWVlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnRW1wbG95ZWVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTGFzdE5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU3RvcmUuRW1wbG95ZWVzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1N0b3JlLkVtcGxveWVlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8RW1wbG95ZWVzUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxFbXBsb3llZXNSb3c+KCdTdG9yZS5FbXBsb3llZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU3RvcmU6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU3RvcmU6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1N0b3JlOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1N0b3JlOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEVtcGxveWVlSWQgPSBcIkVtcGxveWVlSWRcIixcclxuICAgICAgICAgICAgTGFzdE5hbWUgPSBcIkxhc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIEZpcnN0TmFtZSA9IFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIEZ1bGxOYW1lID0gXCJGdWxsTmFtZVwiLFxyXG4gICAgICAgICAgICBUaXRsZSA9IFwiVGl0bGVcIixcclxuICAgICAgICAgICAgVGl0bGVPZkNvdXJ0ZXN5ID0gXCJUaXRsZU9mQ291cnRlc3lcIixcclxuICAgICAgICAgICAgQmlydGhEYXRlID0gXCJCaXJ0aERhdGVcIixcclxuICAgICAgICAgICAgSGlyZURhdGUgPSBcIkhpcmVEYXRlXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MgPSBcIkFkZHJlc3NcIixcclxuICAgICAgICAgICAgQ2l0eSA9IFwiQ2l0eVwiLFxyXG4gICAgICAgICAgICBSZWdpb24gPSBcIlJlZ2lvblwiLFxyXG4gICAgICAgICAgICBQb3N0YWxDb2RlID0gXCJQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIENvdW50cnkgPSBcIkNvdW50cnlcIixcclxuICAgICAgICAgICAgSG9tZVBob25lID0gXCJIb21lUGhvbmVcIixcclxuICAgICAgICAgICAgRXh0ZW5zaW9uID0gXCJFeHRlbnNpb25cIixcclxuICAgICAgICAgICAgUGhvdG8gPSBcIlBob3RvXCIsXHJcbiAgICAgICAgICAgIE5vdGVzID0gXCJOb3Rlc1wiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG8gPSBcIlJlcG9ydHNUb1wiLFxyXG4gICAgICAgICAgICBQaG90b1BhdGggPSBcIlBob3RvUGF0aFwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0Z1bGxOYW1lID0gXCJSZXBvcnRzVG9GdWxsTmFtZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9MYXN0TmFtZSA9IFwiUmVwb3J0c1RvTGFzdE5hbWVcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvRmlyc3ROYW1lID0gXCJSZXBvcnRzVG9GaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvVGl0bGUgPSBcIlJlcG9ydHNUb1RpdGxlXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1RpdGxlT2ZDb3VydGVzeSA9IFwiUmVwb3J0c1RvVGl0bGVPZkNvdXJ0ZXN5XCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0JpcnRoRGF0ZSA9IFwiUmVwb3J0c1RvQmlydGhEYXRlXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0hpcmVEYXRlID0gXCJSZXBvcnRzVG9IaXJlRGF0ZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9BZGRyZXNzID0gXCJSZXBvcnRzVG9BZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0NpdHkgPSBcIlJlcG9ydHNUb0NpdHlcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUmVnaW9uID0gXCJSZXBvcnRzVG9SZWdpb25cIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUG9zdGFsQ29kZSA9IFwiUmVwb3J0c1RvUG9zdGFsQ29kZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9Db3VudHJ5ID0gXCJSZXBvcnRzVG9Db3VudHJ5XCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0hvbWVQaG9uZSA9IFwiUmVwb3J0c1RvSG9tZVBob25lXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0V4dGVuc2lvbiA9IFwiUmVwb3J0c1RvRXh0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1Bob3RvID0gXCJSZXBvcnRzVG9QaG90b1wiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9Ob3RlcyA9IFwiUmVwb3J0c1RvTm90ZXNcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUmVwb3J0c1RvID0gXCJSZXBvcnRzVG9SZXBvcnRzVG9cIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUGhvdG9QYXRoID0gXCJSZXBvcnRzVG9QaG90b1BhdGhcIixcclxuICAgICAgICAgICAgR2VuZGVyID0gXCJHZW5kZXJcIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBlbnVtIEdlbmRlciB7XHJcbiAgICAgICAgTWFsZSA9IDEsXHJcbiAgICAgICAgRmVtYWxlID0gMlxyXG4gICAgfVxyXG4gICAgU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVudW1UeXBlKEdlbmRlciwgJ1N0b3JlLlN0b3JlLkdlbmRlcicsICdTdG9yZS5TdG9yZS5FbnRpdGllcy5HZW5kZXInKTtcclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1lYXN1cmVzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU3RvcmUuTWVhc3VyZXMnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVzRm9ybSB7XHJcbiAgICAgICAgTWVhc3VyZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTWVhc3VyZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdG9yZS5NZWFzdXJlcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTWVhc3VyZXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNZWFzdXJlc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1lYXN1cmVzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdNZWFzdXJlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlc1JvdyB7XHJcbiAgICAgICAgTWVhc3VyZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1lYXN1cmVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTWVhc3VyZXNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ01lYXN1cmVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTWVhc3VyZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU3RvcmUuTWVhc3VyZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnU3RvcmUuTWVhc3VyZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPE1lYXN1cmVzUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxNZWFzdXJlc1Jvdz4oJ1N0b3JlLk1lYXN1cmVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1N0b3JlOk1lYXN1cmVzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU3RvcmU6TWVhc3VyZXM6TW9kaWZ5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnU3RvcmU6TWVhc3VyZXM6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnU3RvcmU6TWVhc3VyZXM6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNZWFzdXJlSWQgPSBcIk1lYXN1cmVJZFwiLFxyXG4gICAgICAgICAgICBNZWFzdXJlTmFtZSA9IFwiTWVhc3VyZU5hbWVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNZWFzdXJlc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1N0b3JlL01lYXN1cmVzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1lYXN1cmVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TWVhc3VyZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TWVhc3VyZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TWVhc3VyZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU3RvcmUvTWVhc3VyZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RvcmUvTWVhc3VyZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvTWVhc3VyZXMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTdG9yZS9NZWFzdXJlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdG9yZS9NZWFzdXJlcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TWVhc3VyZXNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVybWlzc2lvbktleXMge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsID0gXCJTdG9yZTpHZW5lcmFsXCI7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBDYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6Q2F0ZWdvcmllczpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiU3RvcmU6Q2F0ZWdvcmllczpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIlN0b3JlOkNhdGVnb3JpZXM6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENhdGVnb3JpZXNUeXBlIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6Q2F0ZWdvcmllc1R5cGU6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIlN0b3JlOkNhdGVnb3JpZXNUeXBlOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6Q2F0ZWdvcmllc1R5cGU6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFNob3BzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6U2hvcHM6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIlN0b3JlOlNob3BzOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6U2hvcHM6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERvY3VtZW50VHlwZSB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIlN0b3JlOkRvY3VtZW50VHlwZTpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiU3RvcmU6RG9jdW1lbnRUeXBlOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6RG9jdW1lbnRUeXBlOlZpZXdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZWFzdXJlcyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIlN0b3JlOk1lYXN1cmVzOkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJTdG9yZTpNZWFzdXJlczpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIlN0b3JlOk1lYXN1cmVzOlZpZXdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBPcGVyYXRpb25UeXBlIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6T3BlcmF0aW9uVHlwZTpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiU3RvcmU6T3BlcmF0aW9uVHlwZTpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIlN0b3JlOk9wZXJhdGlvblR5cGU6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENvdW50ZXJwYXJ0aWVzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6Q291bnRlcnBhcnR5OkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJTdG9yZTpDb3VudGVycGFydHk6TW9kaWZ5XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJTdG9yZTpDb3VudGVycGFydHk6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFdhcmVzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6V2FyZXM6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIlN0b3JlOldhcmVzOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6V2FyZXM6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFByb2R1Y3Qge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlID0gXCJTdG9yZTpQcm9kdWN0OkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJTdG9yZTpQcm9kdWN0Ok1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6UHJvZHVjdDpWaWV3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgY2xhc3MgU2hvcHNDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdTdG9yZS5TaG9wcyc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2hvcHNGb3JtIHtcclxuICAgICAgICBTaG9wSWQ6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBTaG9wTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvbnRhY3ROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQ29udGFjdFRpdGxlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgQWRkcmVzczogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIENvdW50cnk6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBDaXR5OiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUmVnaW9uOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUG9zdGFsQ29kZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFBob25lOiBQaG9uZUVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgU2hvcHNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdG9yZS5TaG9wcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghU2hvcHNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaG9wc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gUGhvbmVFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoU2hvcHNGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Nob3BJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdTaG9wTmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0TmFtZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb250YWN0VGl0bGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQWRkcmVzcycsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb3VudHJ5JywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NpdHknLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUmVnaW9uJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bvc3RhbENvZGUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnUGhvbmUnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgU2hvcHNSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIFNob3BJZD86IHN0cmluZztcclxuICAgICAgICBTaG9wTmFtZT86IHN0cmluZztcclxuICAgICAgICBDb250YWN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBDb250YWN0VGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgQWRkcmVzcz86IHN0cmluZztcclxuICAgICAgICBDaXR5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlZ2lvbj86IHN0cmluZztcclxuICAgICAgICBQb3N0YWxDb2RlPzogc3RyaW5nO1xyXG4gICAgICAgIENvdW50cnk/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvbmU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBY3RpdmU/OiBudW1iZXI7XHJcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0VXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydERhdGU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXBkYXRlVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFVwZGF0ZURhdGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTaG9wc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpc0FjdGl2ZVByb3BlcnR5ID0gJ0lzQWN0aXZlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Nob3BOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1N0b3JlLlNob3BzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1N0b3JlLlNob3BzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxTaG9wc1Jvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8U2hvcHNSb3c+KCdTdG9yZS5TaG9wcycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTdG9yZTpTaG9wczpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1N0b3JlOlNob3BzOk1vZGlmeSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1N0b3JlOlNob3BzOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1N0b3JlOlNob3BzOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgSWQgPSBcIklkXCIsXHJcbiAgICAgICAgICAgIFNob3BJZCA9IFwiU2hvcElkXCIsXHJcbiAgICAgICAgICAgIFNob3BOYW1lID0gXCJTaG9wTmFtZVwiLFxyXG4gICAgICAgICAgICBDb250YWN0TmFtZSA9IFwiQ29udGFjdE5hbWVcIixcclxuICAgICAgICAgICAgQ29udGFjdFRpdGxlID0gXCJDb250YWN0VGl0bGVcIixcclxuICAgICAgICAgICAgQWRkcmVzcyA9IFwiQWRkcmVzc1wiLFxyXG4gICAgICAgICAgICBDaXR5ID0gXCJDaXR5XCIsXHJcbiAgICAgICAgICAgIFJlZ2lvbiA9IFwiUmVnaW9uXCIsXHJcbiAgICAgICAgICAgIFBvc3RhbENvZGUgPSBcIlBvc3RhbENvZGVcIixcclxuICAgICAgICAgICAgQ291bnRyeSA9IFwiQ291bnRyeVwiLFxyXG4gICAgICAgICAgICBQaG9uZSA9IFwiUGhvbmVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBTaG9wc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1N0b3JlL1Nob3BzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFNob3BzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8U2hvcHNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8U2hvcHNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8U2hvcHNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU3RvcmUvU2hvcHMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RvcmUvU2hvcHMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvU2hvcHMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTdG9yZS9TaG9wcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdG9yZS9TaG9wcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+U2hvcHNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlRleHRzIHtcclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBEYiB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBBZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgTGFuZ3VhZ2Uge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2VJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSb2xlUGVybWlzc2lvbklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBUZW5hbnQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVHJhbnNsYXRpb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEN1c3RvbVRleHQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbnRpdHlQbHVyYWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBLZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBPdmVycmlkZUNvbmZpcm1hdGlvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVDaGFuZ2VzQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTb3VyY2VUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0TGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUYXJnZXRUZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTGFzdERpcmVjdG9yeVVwZGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRDb25maXJtOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRIYXNoOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGFzc3dvcmRTYWx0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZVVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJbWFnZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnRlZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb25LZXk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlclBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJuYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJSb2xlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgU3RvcmUge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENhdGVnb3JpZXMge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5Q29kZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhdGVnb3J5SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeVR5cGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGljdHVyZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENhdGVnb3JpZXNMYW5nIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIENhdGVnb3JpZXNUeXBlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeVR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDYXRlZ29yeVR5cGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVHlwZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIEVtcGxveWVlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJpcnRoRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW1wbG95ZWVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEV4dGVuc2lvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZpcnN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgR2VuZGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSGlyZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBIb21lUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYXN0TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGVzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGhvdG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQaG90b1BhdGg6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvQWRkcmVzczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb0JpcnRoRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb0NpdHk6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9Db3VudHJ5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvRXh0ZW5zaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvRmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvRnVsbE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9IaXJlRGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb0hvbWVQaG9uZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb0xhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVwb3J0c1RvTm90ZXM6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9QaG90bzogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb1Bob3RvUGF0aDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb1Bvc3RhbENvZGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9SZWdpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9SZXBvcnRzVG86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBSZXBvcnRzVG9UaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJlcG9ydHNUb1RpdGxlT2ZDb3VydGVzeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaXRsZU9mQ291cnRlc3k6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNZWFzdXJlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWVhc3VyZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWVhc3VyZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFNob3BzIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBZGRyZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2l0eTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENvbnRhY3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ29udGFjdFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ291bnRyeTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUGhvbmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQb3N0YWxDb2RlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVnaW9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hvcElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU2hvcE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBGb3JtcyB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZW1iZXJzaGlwIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRm9yZ290UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMb2dpbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmFjZWJvb2tCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdvb2dsZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2luVG9Zb3VyQWNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9SOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVtZW1iZXJNZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25JbkJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25VcEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaWduVXAge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY2VwdFRlcm1zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGVFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBOYXZpZ2F0aW9uIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgTG9nb3V0TGluazogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTaXRlVGl0bGU6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBTaXRlIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFjY2Vzc0RlbmllZCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvQ2hhbmdlVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYWNrUGVybWlzc2lvbnM6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdExvZ2dlZEluOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYWdlVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCYXNpY1Byb2dyZXNzRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhbmNlbFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQbGVhc2VXYWl0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQnVsa1NlcnZpY2VBY3Rpb24ge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxTdWNjZXNzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtYXRpb25Gb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVycm9yQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGhpbmdUb1Byb2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvbWVIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3NDb3VudDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERhc2hib2FyZCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250ZW50RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBMYXlvdXQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyQ29weXJpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJJbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJSaWdodHM6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbmVyYWxTZXR0aW5nczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW5MaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZExpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvdzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3dMaWdodDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFBlcm1pc3Npb25zQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0Um9sZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldm9rZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZURpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBWYWxpZGF0aW9uRXJyb3Ige1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgVmFsaWRhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxJblVzZTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBTdG9yZVsnVGV4dHMnXSA9IFEucHJveHlUZXh0cyhUZXh0cywgJycsIHtEYjp7QWRtaW5pc3RyYXRpb246e0xhbmd1YWdlOntJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MX0sUm9sZTp7Um9sZUlkOjEsUm9sZU5hbWU6MSxUZW5hbnRJZDoxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVGVuYW50OntUZW5hbnRJZDoxLFRlbmFudE5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxUZW5hbnRJZDoxLFRlbmFudE5hbWU6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sU3RvcmU6e0NhdGVnb3JpZXM6e0NhdGVnb3J5Q29kZToxLENhdGVnb3J5SWQ6MSxDYXRlZ29yeU5hbWU6MSxDYXRlZ29yeVR5cGU6MSxDYXRlZ29yeVR5cGVJZDoxLERlc2NyaXB0aW9uOjEsSW5zZXJ0RGF0ZToxLEluc2VydFVzZXJJZDoxLElzQWN0aXZlOjEsUGljdHVyZToxLFRlbmFudElkOjEsVHlwZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sQ2F0ZWdvcmllc0xhbmc6e0NhdGVnb3J5SWQ6MSxDYXRlZ29yeU5hbWU6MSxEZXNjcmlwdGlvbjoxLElkOjEsTGFuZ3VhZ2VJZDoxfSxDYXRlZ29yaWVzVHlwZTp7Q2F0ZWdvcnlUeXBlOjEsQ2F0ZWdvcnlUeXBlSWQ6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxUZW5hbnRJZDoxLFR5cGU6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LEVtcGxveWVlczp7QWRkcmVzczoxLEJpcnRoRGF0ZToxLENpdHk6MSxDb3VudHJ5OjEsRW1wbG95ZWVJZDoxLEV4dGVuc2lvbjoxLEZpcnN0TmFtZToxLEZ1bGxOYW1lOjEsR2VuZGVyOjEsSGlyZURhdGU6MSxIb21lUGhvbmU6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0TmFtZToxLE5vdGVzOjEsUGhvdG86MSxQaG90b1BhdGg6MSxQb3N0YWxDb2RlOjEsUmVnaW9uOjEsUmVwb3J0c1RvOjEsUmVwb3J0c1RvQWRkcmVzczoxLFJlcG9ydHNUb0JpcnRoRGF0ZToxLFJlcG9ydHNUb0NpdHk6MSxSZXBvcnRzVG9Db3VudHJ5OjEsUmVwb3J0c1RvRXh0ZW5zaW9uOjEsUmVwb3J0c1RvRmlyc3ROYW1lOjEsUmVwb3J0c1RvRnVsbE5hbWU6MSxSZXBvcnRzVG9IaXJlRGF0ZToxLFJlcG9ydHNUb0hvbWVQaG9uZToxLFJlcG9ydHNUb0xhc3ROYW1lOjEsUmVwb3J0c1RvTm90ZXM6MSxSZXBvcnRzVG9QaG90bzoxLFJlcG9ydHNUb1Bob3RvUGF0aDoxLFJlcG9ydHNUb1Bvc3RhbENvZGU6MSxSZXBvcnRzVG9SZWdpb246MSxSZXBvcnRzVG9SZXBvcnRzVG86MSxSZXBvcnRzVG9UaXRsZToxLFJlcG9ydHNUb1RpdGxlT2ZDb3VydGVzeToxLFRlbmFudElkOjEsVGl0bGU6MSxUaXRsZU9mQ291cnRlc3k6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9LE1lYXN1cmVzOntJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxNZWFzdXJlSWQ6MSxNZWFzdXJlTmFtZToxLFRlbmFudElkOjEsVXBkYXRlRGF0ZToxLFVwZGF0ZVVzZXJJZDoxfSxTaG9wczp7QWRkcmVzczoxLENpdHk6MSxDb250YWN0TmFtZToxLENvbnRhY3RUaXRsZToxLENvdW50cnk6MSxJZDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLFBob25lOjEsUG9zdGFsQ29kZToxLFJlZ2lvbjoxLFNob3BJZDoxLFNob3BOYW1lOjEsVGVuYW50SWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9fX0sRm9ybXM6e01lbWJlcnNoaXA6e0NoYW5nZVBhc3N3b3JkOntGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LEZvcmdvdFBhc3N3b3JkOntCYWNrVG9Mb2dpbjoxLEZvcm1JbmZvOjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxMb2dpbjp7RmFjZWJvb2tCdXR0b246MSxGb3Jnb3RQYXNzd29yZDoxLEdvb2dsZUJ1dHRvbjoxLExvZ2luVG9Zb3VyQWNjb3VudDoxLE9SOjEsUmVtZW1iZXJNZToxLFNpZ25JbkJ1dHRvbjoxLFNpZ25VcEJ1dHRvbjoxfSxSZXNldFBhc3N3b3JkOntCYWNrVG9Mb2dpbjoxLEVtYWlsU3ViamVjdDoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sU2lnblVwOntBY2NlcHRUZXJtczoxLEFjdGl2YXRlRW1haWxTdWJqZWN0OjEsQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZToxLEJhY2tUb0xvZ2luOjEsQ29uZmlybUVtYWlsOjEsQ29uZmlybVBhc3N3b3JkOjEsRGlzcGxheU5hbWU6MSxFbWFpbDoxLEZvcm1JbmZvOjEsRm9ybVRpdGxlOjEsUGFzc3dvcmQ6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9fX0sTmF2aWdhdGlvbjp7TG9nb3V0TGluazoxLFNpdGVUaXRsZToxfSxTaXRlOntBY2Nlc3NEZW5pZWQ6e0NsaWNrVG9DaGFuZ2VVc2VyOjEsQ2xpY2tUb0xvZ2luOjEsTGFja1Blcm1pc3Npb25zOjEsTm90TG9nZ2VkSW46MSxQYWdlVGl0bGU6MX0sQmFzaWNQcm9ncmVzc0RpYWxvZzp7Q2FuY2VsVGl0bGU6MSxQbGVhc2VXYWl0OjF9LEJ1bGtTZXJ2aWNlQWN0aW9uOntBbGxIYWRFcnJvcnNGb3JtYXQ6MSxBbGxTdWNjZXNzRm9ybWF0OjEsQ29uZmlybWF0aW9uRm9ybWF0OjEsRXJyb3JDb3VudDoxLE5vdGhpbmdUb1Byb2Nlc3M6MSxTb21lSGFkRXJyb3JzRm9ybWF0OjEsU3VjY2Vzc0NvdW50OjF9LERhc2hib2FyZDp7Q29udGVudERlc2NyaXB0aW9uOjF9LExheW91dDp7Rm9vdGVyQ29weXJpZ2h0OjEsRm9vdGVySW5mbzoxLEZvb3RlclJpZ2h0czoxLEdlbmVyYWxTZXR0aW5nczoxLExhbmd1YWdlOjEsVGhlbWU6MSxUaGVtZUJsYWNrOjEsVGhlbWVCbGFja0xpZ2h0OjEsVGhlbWVCbHVlOjEsVGhlbWVCbHVlTGlnaHQ6MSxUaGVtZUdyZWVuOjEsVGhlbWVHcmVlbkxpZ2h0OjEsVGhlbWVQdXJwbGU6MSxUaGVtZVB1cnBsZUxpZ2h0OjEsVGhlbWVSZWQ6MSxUaGVtZVJlZExpZ2h0OjEsVGhlbWVZZWxsb3c6MSxUaGVtZVllbGxvd0xpZ2h0OjF9LFJvbGVQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEVkaXRCdXR0b246MSxTYXZlU3VjY2VzczoxfSxVc2VyRGlhbG9nOntFZGl0UGVybWlzc2lvbnNCdXR0b246MSxFZGl0Um9sZXNCdXR0b246MX0sVXNlclBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsR3JhbnQ6MSxQZXJtaXNzaW9uOjEsUmV2b2tlOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlclJvbGVEaWFsb2c6e0RpYWxvZ1RpdGxlOjEsU2F2ZVN1Y2Nlc3M6MX0sVmFsaWRhdGlvbkVycm9yOntUaXRsZToxfX0sVmFsaWRhdGlvbjp7QXV0aGVudGljYXRpb25FcnJvcjoxLENhbnRGaW5kVXNlcldpdGhFbWFpbDoxLEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOjEsRGVsZXRlRm9yZWlnbktleUVycm9yOjEsRW1haWxDb25maXJtOjEsRW1haWxJblVzZToxLEludmFsaWRBY3RpdmF0ZVRva2VuOjEsSW52YWxpZFJlc2V0VG9rZW46MSxNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOjEsU2F2ZVByaW1hcnlLZXlFcnJvcjoxfX0pO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTGFuZ3VhZ2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTGFuZ3VhZ2VSb3cuRmllbGRzLkxhbmd1YWdlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4gKDxVc2VyUGVybWlzc2lvblJvdz57IFBlcm1pc3Npb25LZXk6IHggfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4geC5QZXJtaXNzaW9uS2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUZW5hbnREaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VGVuYW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFRlbmFudEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGVuYW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGVuYW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBUZW5hbnRSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUZW5hbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVGVuYW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUZW5hbnRHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUZW5hbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0FkbWluaXN0cmF0aW9uLlRlbmFudCc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFRlbmFudERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGVuYW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGVuYW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVGVuYW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtUZW5hbnRSb3cuRmllbGRzLlRlbmFudE5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRQcm9wZXJ0eUl0ZW1zKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzdXBlci5nZXRQcm9wZXJ0eUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIGlmICghUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oXCJBZG1pbmlzdHJhdGlvbjpUZW5hbnRzXCIpKVxyXG4gICAgICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoeCA9PiB4Lm5hbWUgIT0gVXNlclJvdy5GaWVsZHMuVGVuYW50SWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlVzZXJcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVXNlckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1VzZXJSb3cuRmllbGRzLlVzZXJuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuQXV0aG9yaXphdGlvbiB7XHJcbiAgICBleHBvcnQgZGVjbGFyZSBsZXQgdXNlckRlZmluaXRpb246IFNjcmlwdFVzZXJEZWZpbml0aW9uO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRob3JpemF0aW9uLCAndXNlckRlZmluaXRpb24nLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldFJlbW90ZURhdGEoJ1VzZXJEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXkpO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3RSb2xlUGVybWlzc2lvbnMoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnJvbGVQZXJtaXNzaW9ucyA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkNoZWNrVHJlZUVkaXRvcjxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4sIGFueT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGl2OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUcmVlSXRlbXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb2xlUm93LmdldExvb2t1cCgpLml0ZW1zLm1hcChyb2xlID0+IDxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJvbGUuUm9sZUlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByb2xlLlJvbGVOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkgJiZcclxuICAgICAgICAgICAgICAgIChRLmlzRW1wdHlPck51bGwodGhpcy5zZWFyY2hUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS50ZXh0IHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VSZXF1ZXN0KCdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLlNhdmVTdWNjZXNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgaWQ9J35fUm9sZXMnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5MYW5ndWFnZUxpc3Qge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrIG9mIEFkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LmdldExvb2t1cCgpLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChrLkxhbmd1YWdlSWQgIT09ICdlbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtrLklkLnRvU3RyaW5nKCksIGsuTGFuZ3VhZ2VOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBTdG9yZS5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdTdG9yZScpO1xyXG4gICAgU2VyZW5pdHkuRW50aXR5RGlhbG9nLmRlZmF1bHRMYW5ndWFnZUxpc3QgPSBMYW5ndWFnZUxpc3QuZ2V0VmFsdWU7XHJcbiAgICBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvci5DS0VkaXRvckJhc2VQYXRoID0gXCJ+L1NlcmVuaXR5LkFzc2V0cy9TY3JpcHRzL2NrZWRpdG9yL1wiO1xyXG5cclxuICAgIGlmICgkLmZuWydjb2xvcmJveCddKSB7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhXaWR0aCA9IFwiOTUlXCI7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhIZWlnaHQgPSBcIjk1JVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmVycm9yID0gUS5FcnJvckhhbmRsaW5nLnJ1bnRpbWVFcnJvckhhbmRsZXI7XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEV4Y2VsRXhwb3J0T3B0aW9ucyB7XHJcbiAgICAgICAgZ3JpZDogU2VyZW5pdHkuRGF0YUdyaWQ8YW55LCBhbnk+O1xyXG4gICAgICAgIHNlcnZpY2U6IHN0cmluZztcclxuICAgICAgICBvblZpZXdTdWJtaXQ6ICgpID0+IGJvb2xlYW47XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgaGludD86IHN0cmluZztcclxuICAgICAgICBzZXBhcmF0b3I/OiBib29sZWFuO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRXhjZWxFeHBvcnRIZWxwZXIge1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9vbEJ1dHRvbihvcHRpb25zOiBFeGNlbEV4cG9ydE9wdGlvbnMpOiBTZXJlbml0eS5Ub29sQnV0dG9uIHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBoaW50OiBRLmNvYWxlc2NlKG9wdGlvbnMuaGludCwgJ0V4Y2VsJyksXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS5jb2FsZXNjZShvcHRpb25zLnRpdGxlLCAnJyksXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC14bHN4LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLm9uVmlld1N1Ym1pdCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBncmlkID0gb3B0aW9ucy5ncmlkO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IFEuZGVlcENsb25lKGdyaWQuZ2V0VmlldygpLnBhcmFtcykgYXMgU2VyZW5pdHkuTGlzdFJlcXVlc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5UYWtlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LlNraXAgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzb3J0QnkgPSBncmlkLmdldFZpZXcoKS5zb3J0Qnk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRCeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LlNvcnQgPSBzb3J0Qnk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LkluY2x1ZGVDb2x1bW5zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtbnMgPSBncmlkLmdldEdyaWQoKS5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uIG9mIGNvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucy5wdXNoKGNvbHVtbi5pZCB8fCBjb2x1bW4uZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBRLnBvc3RUb1NlcnZpY2UoeyBzZXJ2aWNlOiBvcHRpb25zLnNlcnZpY2UsIHJlcXVlc3Q6IHJlcXVlc3QsIHRhcmdldDogJ19ibGFuaycgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VwYXJhdG9yOiBvcHRpb25zLnNlcGFyYXRvclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFNpZGViYXJTZWFyY2ggZXh0ZW5kcyBTZXJlbml0eS5XaWRnZXQ8YW55PiB7XHJcbiAgICAgICAgcHJpdmF0ZSBtZW51VUw6IEpRdWVyeTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaW5wdXQ6IEpRdWVyeSwgbWVudVVMOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgbmV3IFNlcmVuaXR5LlF1aWNrU2VhcmNoSW5wdXQoaW5wdXQsIHtcclxuICAgICAgICAgICAgICAgIG9uU2VhcmNoOiAoZmllbGQsIHRleHQsIHN1Y2Nlc3MpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1hdGNoRmxhZ3ModGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzcyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1lbnVVTCA9IG1lbnVVTDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVNYXRjaEZsYWdzKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgICAgICB2YXIgbGlMaXN0ID0gdGhpcy5tZW51VUwuZmluZCgnbGknKS5yZW1vdmVDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRleHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBhcnRzID0gdGV4dC5yZXBsYWNlKCcsJywgJyAnKS5zcGxpdCgnICcpLmZpbHRlcih4ID0+ICFRLmlzVHJpbW1lZEVtcHR5KHgpKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBhcnRzW2ldID0gUS50cmltVG9OdWxsKFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MocGFydHNbaV0pLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBsaUxpc3Q7XHJcbiAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24gKGlkeCwgZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHggPSAkKGUpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRpdGxlID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyhRLmNvYWxlc2NlKHgudGV4dCgpLCAnJykudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIG9mIHBhcnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCAmJiAhKHRpdGxlLmluZGV4T2YocCkgIT09IC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmFkZENsYXNzKCdub24tbWF0Y2gnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gaXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgdmlzaWJsZXMgPSBtYXRjaGluZ0l0ZW1zLnBhcmVudHMoJ2xpJykuYWRkKG1hdGNoaW5nSXRlbXMpO1xyXG5cclxuICAgICAgICAgICAgdmFyIG5vblZpc2libGVzID0gbGlMaXN0Lm5vdCh2aXNpYmxlcyk7XHJcbiAgICAgICAgICAgIG5vblZpc2libGVzLmhpZGUoKS5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGxpTGlzdC5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJkZWNsYXJlIHZhciBqc1BERjtcclxuXHJcbm5hbWVzcGFjZSBTdG9yZS5Db21tb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZGZFeHBvcnRPcHRpb25zIHtcclxuICAgICAgICBncmlkOiBTZXJlbml0eS5EYXRhR3JpZDxhbnksIGFueT47XHJcbiAgICAgICAgb25WaWV3U3VibWl0OiAoKSA9PiBib29sZWFuO1xyXG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIGhpbnQ/OiBzdHJpbmc7XHJcbiAgICAgICAgc2VwYXJhdG9yPzogYm9vbGVhbjtcclxuICAgICAgICByZXBvcnRUaXRsZT86IHN0cmluZztcclxuICAgICAgICB0aXRsZVRvcD86IG51bWJlcjtcclxuICAgICAgICB0aXRsZUZvbnRTaXplPzogbnVtYmVyO1xyXG4gICAgICAgIGZpbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIHBhZ2VOdW1iZXJzPzogYm9vbGVhbjtcclxuICAgICAgICBjb2x1bW5UaXRsZXM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgICAgIHRhYmxlT3B0aW9ucz86IGpzUERGLkF1dG9UYWJsZU9wdGlvbnM7XHJcbiAgICAgICAgb3V0cHV0Pzogc3RyaW5nO1xyXG4gICAgICAgIGF1dG9QcmludD86IGJvb2xlYW47XHJcbiAgICAgICAgcHJpbnREYXRlVGltZUhlYWRlcj86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZGZFeHBvcnRIZWxwZXIge1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB0b0F1dG9UYWJsZUNvbHVtbnMoc3JjQ29sdW1uczogU2xpY2suQ29sdW1uW10sIGNvbHVtblN0eWxlczogeyBbZGF0YUtleTogc3RyaW5nXToganNQREYuQXV0b1RhYmxlU3R5bGVzOyB9LFxyXG4gICAgICAgICAgICAgICAgY29sdW1uVGl0bGVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzcmNDb2x1bW5zLm1hcChzcmMgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbDoganNQREYuQXV0b1RhYmxlQ29sdW1uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFLZXk6IHNyYy5pZCB8fCBzcmMuZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHNyYy5uYW1lIHx8ICcnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5UaXRsZXMgJiYgY29sdW1uVGl0bGVzW2NvbC5kYXRhS2V5XSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbC50aXRsZSA9IGNvbHVtblRpdGxlc1tjb2wuZGF0YUtleV07XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlOiBqc1BERi5BdXRvVGFibGVTdHlsZXMgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmICgoc3JjLmNzc0NsYXNzIHx8ICcnKS5pbmRleE9mKFwiYWxpZ24tcmlnaHRcIikgPj0gMClcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZS5oYWxpZ24gPSAncmlnaHQnO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKHNyYy5jc3NDbGFzcyB8fCAnJykuaW5kZXhPZihcImFsaWduLWNlbnRlclwiKSA+PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmhhbGlnbiA9ICdjZW50ZXInO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbHVtblN0eWxlc1tjb2wuZGF0YUtleV0gPSBzdHlsZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvQXV0b1RhYmxlRGF0YShlbnRpdGllczogYW55W10sIGtleXM6IHN0cmluZ1tdLCBzcmNDb2x1bW5zOiBTbGljay5Db2x1bW5bXSApIHtcclxuICAgICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgICAgICBsZXQgcm93ID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIGVudGl0aWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkc3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNlbGwgPSAwOyBjZWxsIDwgc3JjQ29sdW1ucy5sZW5ndGg7IGNlbGwrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzcmMgPSBzcmNDb2x1bW5zW2NlbGxdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmbGQgPSBzcmMuZmllbGQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleXNbY2VsbF07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHR4dDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaHRtbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzcmMuZm9ybWF0dGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBzcmMuZm9ybWF0dGVyKHJvdywgY2VsbCwgaXRlbVtmbGRdLCBzcmMsIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzcmMuZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWwgPSBzcmMuZm9ybWF0KHsgcm93OiByb3csIGNlbGw6IGNlbGwsIGl0ZW06IGl0ZW0sIHZhbHVlOiBpdGVtW2ZsZF0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGl0ZW1bZmxkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWh0bWwgfHwgKGh0bWwuaW5kZXhPZignPCcpIDwgMCAmJiBodG1sLmluZGV4T2YoJyYnKSA8IDApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IGh0bWw7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGggPT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChlbC5jaGlsZHJlblswXSkuaXMoXCI6aW5wdXRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gJChlbC5jaGlsZHJlblswXSkudmFsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoID09IDEgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZWwuY2hpbGRyZW4pLmlzKCcuY2hlY2stYm94JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRzdFtrZXldID0gJChlbC5jaGlsZHJlbikuaGFzQ2xhc3MoXCJjaGVja2VkXCIpID8gXCJYXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZHN0W2tleV0gPSBlbC50ZXh0Q29udGVudCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByb3crKztcclxuICAgICAgICAgICAgICAgIHJldHVybiBkc3Q7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFRvUGRmKG9wdGlvbnM6IFBkZkV4cG9ydE9wdGlvbnMpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBnID0gb3B0aW9ucy5ncmlkO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvcHRpb25zLm9uVmlld1N1Ym1pdCgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaW5jbHVkZUF1dG9UYWJsZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBRLmRlZXBDbG9uZShnLnZpZXcucGFyYW1zKSBhcyBTZXJlbml0eS5MaXN0UmVxdWVzdDtcclxuICAgICAgICAgICAgcmVxdWVzdC5UYWtlID0gMDtcclxuICAgICAgICAgICAgcmVxdWVzdC5Ta2lwID0gMDtcclxuXHJcbiAgICAgICAgICAgIHZhciBzb3J0QnkgPSBnLnZpZXcuc29ydEJ5O1xyXG4gICAgICAgICAgICBpZiAoc29ydEJ5ICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LlNvcnQgPSBzb3J0Qnk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZ3JpZENvbHVtbnMgPSBnLnNsaWNrR3JpZC5nZXRDb2x1bW5zKCk7XHJcbiAgICAgICAgICAgIGdyaWRDb2x1bW5zID0gZ3JpZENvbHVtbnMuZmlsdGVyKHggPT4geC5pZCAhPT0gXCJfX3NlbGVjdF9fXCIpO1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdC5JbmNsdWRlQ29sdW1ucyA9IFtdO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gb2YgZ3JpZENvbHVtbnMpXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LkluY2x1ZGVDb2x1bW5zLnB1c2goY29sdW1uLmlkIHx8IGNvbHVtbi5maWVsZCk7XHJcblxyXG4gICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgIHVybDogZy52aWV3LnVybCxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZG9jID0gbmV3IGpzUERGKCdsJywgJ3B0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNyY0NvbHVtbnMgPSBncmlkQ29sdW1ucztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uU3R5bGVzOiB7IFtkYXRhS2V5OiBzdHJpbmddOiBqc1BERi5BdXRvVGFibGVTdHlsZXM7IH0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1ucyA9IHRvQXV0b1RhYmxlQ29sdW1ucyhzcmNDb2x1bW5zLCBjb2x1bW5TdHlsZXMsIG9wdGlvbnMuY29sdW1uVGl0bGVzKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IGNvbHVtbnMubWFwKHggPT4geC5kYXRhS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZW50aXRpZXMgPSAoPFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxhbnk+PnJlc3BvbnNlKS5FbnRpdGllcyB8fCBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHRvQXV0b1RhYmxlRGF0YShlbnRpdGllcywga2V5cywgc3JjQ29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U2l6ZShvcHRpb25zLnRpdGxlRm9udFNpemUgfHwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5zZXRGb250U3R5bGUoJ2JvbGQnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVwb3J0VGl0bGUgPSBvcHRpb25zLnJlcG9ydFRpdGxlIHx8IGcuZ2V0VGl0bGUoKSB8fCBcIlJlcG9ydFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2MuYXV0b1RhYmxlVGV4dChyZXBvcnRUaXRsZSwgZG9jLmludGVybmFsLnBhZ2VTaXplLndpZHRoIC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy50aXRsZVRvcCB8fCAyNSwgeyBoYWxpZ246ICdjZW50ZXInIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG90YWxQYWdlc0V4cCA9IFwie3tUfX1cIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhZ2VOdW1iZXJzID0gb3B0aW9ucy5wYWdlTnVtYmVycyA9PSBudWxsIHx8IG9wdGlvbnMucGFnZU51bWJlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF1dG9PcHRpb25zID0gJC5leHRlbmQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IHsgdG9wOiAyNSwgbGVmdDogMjUsIHJpZ2h0OiAyNSwgYm90dG9tOiBwYWdlTnVtYmVycyA/IDI1IDogMzAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRZOiA2MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogOCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnbGluZWJyZWFrJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGxQYWRkaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWduOiAnbWlkZGxlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5TdHlsZXM6IGNvbHVtblN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudGFibGVPcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VOdW1iZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb290ZXIgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0ciA9IGRhdGEucGFnZUNvdW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVG90YWwgcGFnZSBudW1iZXIgcGx1Z2luIG9ubHkgYXZhaWxhYmxlIGluIGpzcGRmIHYxLjArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvYy5wdXRUb3RhbFBhZ2VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyID0gc3RyICsgXCIgLyBcIiArIHRvdGFsUGFnZXNFeHA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuYXV0b1RhYmxlVGV4dChzdHIsIGRvYy5pbnRlcm5hbC5wYWdlU2l6ZS53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLmludGVybmFsLnBhZ2VTaXplLmhlaWdodCAtIGF1dG9PcHRpb25zLm1hcmdpbi5ib3R0b20sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFsaWduOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvT3B0aW9ucy5hZnRlclBhZ2VDb250ZW50ID0gZm9vdGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBQcmludCBoZWFkZXIgb2YgcGFnZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnByaW50RGF0ZVRpbWVIZWFkZXIgPT0gbnVsbCB8fCBvcHRpb25zLnByaW50RGF0ZVRpbWVIZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJlZm9yZVBhZ2UgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jLnNldEZvbnRTdHlsZSgnbm9ybWFsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2Muc2V0Rm9udFNpemUoOCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRGF0ZSBhbmQgdGltZSBvZiB0aGUgcmVwb3J0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuYXV0b1RhYmxlVGV4dChRLmZvcm1hdERhdGUobmV3IERhdGUoKSwgXCJkZC1NTS15eXl5IEhIOm1tXCIpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2MuaW50ZXJuYWwucGFnZVNpemUud2lkdGggLSBhdXRvT3B0aW9ucy5tYXJnaW4ucmlnaHQsIDEzLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbGlnbjogJ3JpZ2h0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvT3B0aW9ucy5iZWZvcmVQYWdlQ29udGVudCA9IGJlZm9yZVBhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkb2MuYXV0b1RhYmxlKGNvbHVtbnMsIGRhdGEsIGF1dG9PcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2MucHV0VG90YWxQYWdlcyA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2MucHV0VG90YWxQYWdlcyh0b3RhbFBhZ2VzRXhwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMub3V0cHV0IHx8IG9wdGlvbnMub3V0cHV0ID09IFwiZmlsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWxlTmFtZSA9IG9wdGlvbnMuZmlsZU5hbWUgfHwgb3B0aW9ucy5yZXBvcnRUaXRsZSB8fCBcInswfV97MX0ucGRmXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVOYW1lID0gUS5mb3JtYXQoZmlsZU5hbWUsIGcuZ2V0VGl0bGUoKSB8fCBcInJlcG9ydFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5mb3JtYXREYXRlKG5ldyBEYXRlKCksIFwieXl5eU1NZGRfSEhtbVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvYy5zYXZlKGZpbGVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuYXV0b1ByaW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2MuYXV0b1ByaW50KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBvcHRpb25zLm91dHB1dDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3V0cHV0ID09ICduZXd3aW5kb3cnIHx8ICdfYmxhbmsnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnZGF0YXVybG5ld3dpbmRvdyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAob3V0cHV0ID09ICd3aW5kb3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRwdXQgPSAnZGF0YXVyaSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5vdXRwdXQob3V0cHV0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7IFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVRvb2xCdXR0b24ob3B0aW9uczogUGRmRXhwb3J0T3B0aW9ucykge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDxTZXJlbml0eS5Ub29sQnV0dG9uPntcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBvcHRpb25zLnRpdGxlIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgaGludDogb3B0aW9ucy5oaW50IHx8ICdQREYnLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdleHBvcnQtcGRmLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiBleHBvcnRUb1BkZihvcHRpb25zKSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogb3B0aW9ucy5zZXBhcmF0b3JcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGluY2x1ZGVKc1BERigpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBqc1BERiAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSAkKFwianNQREZTY3JpcHRcIik7XHJcbiAgICAgICAgICAgIGlmIChzY3JpcHQubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICQoXCI8c2NyaXB0Lz5cIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImpzUERGU2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcInNyY1wiLCBRLnJlc29sdmVVcmwoXCJ+L1NjcmlwdHMvanNwZGYubWluLmpzXCIpKVxyXG4gICAgICAgICAgICAgICAgLmFwcGVuZFRvKGRvY3VtZW50LmhlYWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gaW5jbHVkZUF1dG9UYWJsZSgpIHtcclxuICAgICAgICAgICAgaW5jbHVkZUpzUERGKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGpzUERGID09PSBcInVuZGVmaW5lZFwiIHx8XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgKGpzUERGIGFzIGFueSkuQVBJID09IFwidW5kZWZpbmVkXCIgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiAoanNQREYgYXMgYW55KS5BUEkuYXV0b1RhYmxlICE9PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjcmlwdCA9ICQoXCJqc1BERkF1dG9UYWJsZVNjcmlwdFwiKTtcclxuICAgICAgICAgICAgaWYgKHNjcmlwdC5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgJChcIjxzY3JpcHQvPlwiKVxyXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0eXBlXCIsIFwidGV4dC9qYXZhc2NyaXB0XCIpXHJcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwianNQREZBdXRvVGFibGVTY3JpcHRcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFEucmVzb2x2ZVVybChcIn4vU2NyaXB0cy9qc3BkZi5wbHVnaW4uYXV0b3RhYmxlLm1pbi5qc1wiKSlcclxuICAgICAgICAgICAgICAgIC5hcHBlbmRUbyhkb2N1bWVudC5oZWFkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiZGVjbGFyZSB2YXIganNQREY7XHJcblxyXG5uYW1lc3BhY2UgU3RvcmUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBvcnREaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8UmVwb3J0RGlhbG9nT3B0aW9ucz4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlcG9ydDogU2VyZW5pdHkuUmVwb3J0aW5nLlJlcG9ydFJldHJpZXZlUmVzcG9uc2U7XHJcbiAgICAgICAgcHJpdmF0ZSBwcm9wZXJ0eUdyaWQ6IFNlcmVuaXR5LlByb3BlcnR5R3JpZDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0aW9uczogUmVwb3J0RGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSW50ZXJmYWNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFJlcG9ydCh0aGlzLm9wdGlvbnMucmVwb3J0S2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVQcm9wZXJ0eUdyaWQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlHcmlkICYmIHRoaXMuYnlJZCgnUHJvcGVydHlHcmlkJykuaHRtbCgnJykuYXR0cignY2xhc3MnLCAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlHcmlkID0gbmV3IFNlcmVuaXR5LlByb3BlcnR5R3JpZCh0aGlzLmJ5SWQoJ1Byb3BlcnR5R3JpZCcpLCB7XHJcbiAgICAgICAgICAgICAgICBpZFByZWZpeDogdGhpcy5pZFByZWZpeCxcclxuICAgICAgICAgICAgICAgIHVzZUNhdGVnb3JpZXM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogdGhpcy5yZXBvcnQuUHJvcGVydGllc1xyXG4gICAgICAgICAgICB9KS5pbml0KG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGxvYWRSZXBvcnQocmVwb3J0S2V5OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgUS5zZXJ2aWNlQ2FsbCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9SZXBvcnQvUmV0cmlldmUnKSxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICBSZXBvcnRLZXk6IHJlcG9ydEtleVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwb3J0ID0gcmVzcG9uc2UgYXMgU2VyZW5pdHkuUmVwb3J0aW5nLlJlcG9ydFJldHJpZXZlUmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmRpYWxvZygpLmRpYWxvZygnb3B0aW9uJywgJ3RpdGxlJywgdGhpcy5yZXBvcnQuVGl0bGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlUHJvcGVydHlHcmlkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wZXJ0eUdyaWQubG9hZCh0aGlzLnJlcG9ydC5Jbml0aWFsU2V0dGluZ3MgfHwge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlSW50ZXJmYWNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZUludGVyZmFjZSgpIHtcclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ3ByaW50LXByZXZpZXctYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIC50b2dnbGUodGhpcy5yZXBvcnQgJiYgIXRoaXMucmVwb3J0LklzRGF0YU9ubHlSZXBvcnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ2V4cG9ydC1wZGYtYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIC50b2dnbGUodGhpcy5yZXBvcnQgJiYgIXRoaXMucmVwb3J0LklzRGF0YU9ubHlSZXBvcnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oJ2V4cG9ydC14bHN4LWJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICAudG9nZ2xlKHRoaXMucmVwb3J0ICYmIHRoaXMucmVwb3J0LklzRGF0YU9ubHlSZXBvcnQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZXhlY3V0ZVJlcG9ydCh0YXJnZXQ6IHN0cmluZywgZXh0OiBzdHJpbmcsIGRvd25sb2FkOiBib29sZWFuKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgb3B0ID0ge307XHJcbiAgICAgICAgICAgIHRoaXMucHJvcGVydHlHcmlkLnNhdmUob3B0KTtcclxuICAgICAgICAgICAgUmVwb3J0SGVscGVyLmV4ZWN1dGUoe1xyXG4gICAgICAgICAgICAgICAgZG93bmxvYWQ6IGRvd25sb2FkLFxyXG4gICAgICAgICAgICAgICAgcmVwb3J0S2V5OiB0aGlzLnJlcG9ydC5SZXBvcnRLZXksXHJcbiAgICAgICAgICAgICAgICBleHRlbnNpb246IGV4dCBhcyBhbnksXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHBhcmFtczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGdldFRvb2xiYXJCdXR0b25zKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUHJldmlldycsXHJcbiAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdwcmludC1wcmV2aWV3LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5leGVjdXRlUmVwb3J0KCdfYmxhbmsnLCBudWxsLCBmYWxzZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdQREYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZXhwb3J0LXBkZi1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuZXhlY3V0ZVJlcG9ydCgnX2JsYW5rJywgJ3BkZicsIHRydWUpXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRXhjZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZXhwb3J0LXhsc3gtYnV0dG9uJyxcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmV4ZWN1dGVSZXBvcnQoJ19ibGFuaycsICd4bHN4JywgdHJ1ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSZXBvcnREaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByZXBvcnRLZXk6IHN0cmluZztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQ29tbW9uIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydEV4ZWN1dGVPcHRpb25zIHtcclxuICAgICAgICByZXBvcnRLZXk6IHN0cmluZztcclxuICAgICAgICBkb3dubG9hZD86IGJvb2xlYW47XHJcbiAgICAgICAgZXh0ZW5zaW9uPzogJ3BkZicgfCAnaHRtJyB8ICdodG1sJyB8ICd4bHN4JyB8ICdkb2N4JztcclxuICAgICAgICBnZXRQYXJhbXM/OiAoKSA9PiBhbnk7XHJcbiAgICAgICAgcGFyYW1zPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxyXG4gICAgICAgIHRhcmdldD86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlcG9ydEJ1dHRvbk9wdGlvbnMgZXh0ZW5kcyBSZXBvcnRFeGVjdXRlT3B0aW9ucyB7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgaWNvbj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFJlcG9ydEhlbHBlciB7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb29sQnV0dG9uKG9wdGlvbnM6IFJlcG9ydEJ1dHRvbk9wdGlvbnMpOiBTZXJlbml0eS5Ub29sQnV0dG9uIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLmNvYWxlc2NlKG9wdGlvbnMudGl0bGUsICdSZXBvcnQnKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiBRLmNvYWxlc2NlKG9wdGlvbnMuY3NzQ2xhc3MsICdwcmludC1idXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGljb246IG9wdGlvbnMuaWNvbixcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBSZXBvcnRIZWxwZXIuZXhlY3V0ZShvcHRpb25zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBleGVjdXRlKG9wdGlvbnM6IFJlcG9ydEV4ZWN1dGVPcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHZhciBvcHQgPSBvcHRpb25zLmdldFBhcmFtcyA/IG9wdGlvbnMuZ2V0UGFyYW1zKCkgOiBvcHRpb25zLnBhcmFtcztcclxuXHJcbiAgICAgICAgICAgIFEucG9zdFRvVXJsKHtcclxuICAgICAgICAgICAgICAgIHVybDogJ34vUmVwb3J0LycgKyAob3B0aW9ucy5kb3dubG9hZCA/ICdEb3dubG9hZCcgOiAnUmVuZGVyJyksXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IG9wdGlvbnMucmVwb3J0S2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGV4dDogUS5jb2FsZXNjZShvcHRpb25zLmV4dGVuc2lvbiwgJ3BkZicpLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdDogb3B0ID8gJC50b0pTT04ob3B0KSA6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBRLmNvYWxlc2NlKG9wdGlvbnMudGFyZ2V0LCAnX2JsYW5rJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZGVjbGFyZSB2YXIganNQREY7XHJcblxyXG5uYW1lc3BhY2UgU3RvcmUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBSZXBvcnRQYWdlIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHJlcG9ydEtleTogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgcHJvcGVydHlJdGVtczogU2VyZW5pdHkuUHJvcGVydHlJdGVtW107XHJcbiAgICAgICAgcHJpdmF0ZSBwcm9wZXJ0eUdyaWQ6IFNlcmVuaXR5LlByb3BlcnR5R3JpZDtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZWxlbWVudDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGVsZW1lbnQpO1xyXG5cclxuICAgICAgICAgICAgJCgnLnJlcG9ydC1saW5rJywgZWxlbWVudCkuY2xpY2soZSA9PiB0aGlzLnJlcG9ydExpbmtDbGljayhlKSk7XHJcbiAgICAgICAgICAgICQoJ2Rpdi5saW5lJywgZWxlbWVudCkuY2xpY2soZSA9PiB0aGlzLmNhdGVnb3J5Q2xpY2soZSkpO1xyXG4gICAgICAgICAgICBuZXcgU2VyZW5pdHkuUXVpY2tTZWFyY2hJbnB1dCgkKCcucy1RdWlja1NlYXJjaEJhciBpbnB1dCcsIGVsZW1lbnQpLCB7XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaDogKGZpZWxkLCB0ZXh0LCBkb25lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRjaEZsYWdzKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHVwZGF0ZU1hdGNoRmxhZ3ModGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBsaUxpc3QgPSAkKCcucmVwb3J0LWxpc3QnLCB0aGlzLmVsZW1lbnQpLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICB0ZXh0ID0gUS50cmltVG9OdWxsKHRleHQpO1xyXG4gICAgICAgICAgICBpZiAoIXRleHQpIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5jaGlsZHJlbigndWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3Quc2hvdygpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0ZXh0ID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcyh0ZXh0KS50b1VwcGVyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlcG9ydEl0ZW1zID0gbGlMaXN0LmZpbHRlcignLnJlcG9ydC1pdGVtJyk7XHJcbiAgICAgICAgICAgIHJlcG9ydEl0ZW1zLmVhY2goZnVuY3Rpb24gKGl4LCBlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgeCA9ICQoZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGl0bGUgPSBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKFEuY29hbGVzY2UoeC50ZXh0KCksICcnKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aXRsZS5pbmRleE9mKHRleHQpIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHguYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZhciBtYXRjaGluZ0l0ZW1zID0gcmVwb3J0SXRlbXMubm90KCcubm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgIHZhciB2aXNpYmxlcyA9IG1hdGNoaW5nSXRlbXMucGFyZW50cygnbGknKS5hZGQobWF0Y2hpbmdJdGVtcyk7XHJcbiAgICAgICAgICAgIHZhciBub25WaXNpYmxlcyA9IGxpTGlzdC5ub3QodmlzaWJsZXMpO1xyXG4gICAgICAgICAgICBub25WaXNpYmxlcy5oaWRlKCkuYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG4gICAgICAgICAgICB2aXNpYmxlcy5zaG93KCk7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlcy5sZW5ndGggPD0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QuY2hpbGRyZW4oJ3VsJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgbGlMaXN0LmFkZENsYXNzKCdleHBhbmRlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY2F0ZWdvcnlDbGljayhlKSB7XHJcbiAgICAgICAgICAgIHZhciBsaSA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgICAgIGlmIChsaS5oYXNDbGFzcygnZXhwYW5kZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgbGkuZmluZCgndWwnKS5oaWRlKCdmYXN0Jyk7XHJcbiAgICAgICAgICAgICAgICBsaS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIGxpLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsaS5hZGRDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKCd1bCcpLnNob3coJ2Zhc3QnKTtcclxuICAgICAgICAgICAgICAgIGlmIChsaS5jaGlsZHJlbigndWwnKS5jaGlsZHJlbignbGknKS5sZW5ndGggPT09IDEgJiYgIWxpLmNoaWxkcmVuKCd1bCcpLmNoaWxkcmVuKCdsaScpLmhhc0NsYXNzKCdleHBhbmRlZCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGkuY2hpbGRyZW4oJ3VsJykuY2hpbGRyZW4oJ2xpJykuY2hpbGRyZW4oJy5saW5lJykuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIHJlcG9ydExpbmtDbGljayhlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgbmV3IFJlcG9ydERpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICByZXBvcnRLZXk6ICQoZS50YXJnZXQpLmRhdGEoJ2tleScpXHJcbiAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPExvZ2luUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTG9naW5Gb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHAtNFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9pbWFnZXMvc2VyZW5pdHktbG9nby13LTEyOC5wbmdcIil9XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBwLTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHZhcigtLXMtc2lkZWJhci1iYW5kLWJnKVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+IFN0b3JlXHJcbiAgICA8L2gyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzLVBhbmVsIHAtNFwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIG15LTRcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uTG9naW5Ub1lvdXJBY2NvdW50XCIpfTwvaDU+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1lbmQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3Jnb3RQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXktMyB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cInRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyl9XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICA8L2Rpdj4gICBcclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Q2hhbmdlUGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDaGFuZ2VQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IENoYW5nZVBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBDaGFuZ2VQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udygnQ29uZmlybVBhc3N3b3JkJywgU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3IpLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvQ2hhbmdlUGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicy1QYW5lbFwiPlxyXG4gICAgPGgzIGNsYXNzPVwicGFnZS10aXRsZSBtYi00IHRleHQtY2VudGVyXCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLkZvcm1UaXRsZVwiKX08L2gzPlxyXG4gICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGQgbXQtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9TdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWJtaXRCdXR0b25cIil9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxTaWduVXBSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaWduVXBGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBTaWduVXBGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNpZ25VcEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybUVtYWlsLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1FbWFpbC52YWx1ZSAhPT0gdGhpcy5mb3JtLkVtYWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5FbWFpbENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGxheU5hbWU6IHRoaXMuZm9ybS5EaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlNpZ25VcC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8Q2F0ZWdvcmllc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDYXRlZ29yaWVzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yaWVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gQ2F0ZWdvcmllc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcmllc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhdGVnb3JpZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yaWVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgQ2F0ZWdvcmllc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2F0ZWdvcmllc0V4Y2VsSW1wb3J0RGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlEaWFsb2c8YW55LCBhbnk+e1xyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IENhdGVnb3JpZXNFeGNlbEltcG9ydEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IENhdGVnb3JpZXNFeGNlbEltcG9ydEZvcm0odGhpcy5pZFByZWZpeCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVGl0bGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiRXhjZWwgSW1wb3J0XCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nQnV0dG9ucygpOiBTZXJlbml0eS5EaWFsb2dCdXR0b25bXSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlQmVmb3JlU2F2ZSgpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5GaWxlTmFtZS52YWx1ZSA9PSBudWxsIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLmlzRW1wdHlPck51bGwodGhpcy5mb3JtLkZpbGVOYW1lLnZhbHVlLkZpbGVuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUS5ub3RpZnlFcnJvcihcIlBsZWFzZSBzZWxlY3QgYSBmaWxlIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1NlcnZpY2UuRXhjZWxJbXBvcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRmlsZU5hbWU6IHRoaXMuZm9ybS5GaWxlTmFtZS52YWx1ZS5GaWxlbmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUluZm8oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0luc2VydGVkOiAnICsgKHJlc3BvbnNlLkluc2VydGVkIHx8IDApICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLCBVcGRhdGVkOiAnICsgKHJlc3BvbnNlLlVwZGF0ZWQgfHwgMCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5FcnJvckxpc3QgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvckxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFEubm90aWZ5RXJyb3IocmVzcG9uc2UuRXJyb3JMaXN0LmpvaW4oJyxcXHJcXG4gJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHRoaXMuZGlhbG9nQ2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJcclxubmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuXHJcbiAgICBpbXBvcnQgZmxkID0gQ2F0ZWdvcmllc1Jvdy5GaWVsZHM7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5maWx0ZXJhYmxlKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Q2F0ZWdvcmllc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnU3RvcmUuQ2F0ZWdvcmllcyc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENhdGVnb3JpZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhdGVnb3JpZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXRlZ29yaWVzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICAgLy90aGlzLnNsaWNrQ29udGFpbmVyLm9uKCdjaGFuZ2UnLCAnLmVkaXQ6aW5wdXQnLCAoZSkgPT4gdGhpcy5pbnB1dHNDaGFuZ2UoZSkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFF1aWNrRmlsdGVycygpIHtcclxuICAgICAgICAgICAgdmFyIGZsdCA9IHN1cGVyLmdldFF1aWNrRmlsdGVycygpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgaWYgKHFbXCJjYXR0eXBlXCJdKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2F0dHlwZSA9IFEudHJ5Rmlyc3QoZmx0LCB4ID0+IHguZmllbGQgPT0gXCJDYXRlZ29yaWVzVHlwZUlEXCIpO1xyXG4gICAgICAgICAgICAgICAgY2F0dHlwZS5pbml0ID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5lbGVtZW50LmdldFdpZGdldChTZXJlbml0eS5Mb29rdXBFZGl0b3IpLnZhbHVlID0gcVtcImNhdHR5cGVcIl07XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbQ2F0ZWdvcmllc1Jvdy5GaWVsZHMuQ2F0ZWdvcnlOYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRCdXR0b25zKCkge1xyXG4gICAgICAgICAgICB2YXIgYnV0dG9ucyA9IHN1cGVyLmdldEJ1dHRvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIGJ1dHRvbnMucHVzaChDb21tb24uRXhjZWxFeHBvcnRIZWxwZXIuY3JlYXRlVG9vbEJ1dHRvbih7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0V4cG9ydCBUbyBFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBncmlkOiB0aGlzLFxyXG4gICAgICAgICAgICAgICAgc2VydmljZTogQ2F0ZWdvcmllc1NlcnZpY2UuYmFzZVVybCArICcvTGlzdEV4Y2VsJyxcclxuICAgICAgICAgICAgICAgIG9uVmlld1N1Ym1pdDogKCkgPT4gdGhpcy5vblZpZXdTdWJtaXQoKSxcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvcjogdHJ1ZVxyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgICAgICBidXR0b25zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdJbXBvcnQgRnJvbSBFeGNlbCcsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2V4cG9ydC14bHN4LWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiBpbXBvcnQgZGlhbG9nLCBsZXQgaXQgaGFuZGxlIHJlc3RcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGlhbG9nID0gbmV3IENhdGVnb3JpZXNFeGNlbEltcG9ydERpYWxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5lbGVtZW50Lm9uKCdkaWFsb2djbG9zZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpYWxvZyA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzVHlwZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxDYXRlZ29yaWVzVHlwZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVNlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBDYXRlZ29yaWVzVHlwZUZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2F0ZWdvcmllc1R5cGVHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxDYXRlZ29yaWVzVHlwZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnU3RvcmUuQ2F0ZWdvcmllc1R5cGUnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhdGVnb3JpZXNUeXBlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtDYXRlZ29yaWVzVHlwZVJvdy5GaWVsZHMuVHlwZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcihbU2VyZW5pdHkuSVNsaWNrRm9ybWF0dGVyLCBTZXJlbml0eS5JSW5pdGlhbGl6ZUNvbHVtbl0pXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVzRm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgICAgICBmb3JtYXQoY3R4OiBTbGljay5Gb3JtYXR0ZXJDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gUS5odG1sRW5jb2RlKGN0eC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2VuZGVyUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2VuZGVyID0gY3R4Lml0ZW1bdGhpcy5nZW5kZXJQcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdcIiArICgoZ2VuZGVyID09PSBHZW5kZXIuRmVtYWxlKSA/XHJcbiAgICAgICAgICAgICAgICAnZW1wbG95ZWUtc3ltYm9sIGZlbWFsZScgOiAnZW1wbG95ZWUtc3ltYm9sIG1hbGUnKSArXHJcbiAgICAgICAgICAgICAgICBcIic+XCIgKyB0ZXh0ICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgZ2VuZGVyUHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgcHVibGljIGluaXRpYWxpemVDb2x1bW4oY29sdW1uOiBTbGljay5Db2x1bW4pIHtcclxuICAgICAgICAgICAgY29sdW1uLnJlZmVyZW5jZWRGaWVsZHMgPSBjb2x1bW4ucmVmZXJlbmNlZEZpZWxkcyB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2VuZGVyUHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICBjb2x1bW4ucmVmZXJlbmNlZEZpZWxkcy5wdXNoKHRoaXMuZ2VuZGVyUHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcblxyXG4gICAgLy9AU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcigpXHJcbiAgICAvL2V4cG9ydCBjbGFzcyBFbXBsb3llZXNMaXN0Rm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgIC8vICAgIGZvcm1hdChjdHg6IFNsaWNrLkZvcm1hdHRlckNvbnRleHQpIHtcclxuICAgIC8vICAgICAgICB2YXIgaWRMaXN0ID0gY3R4LnZhbHVlIGFzIHN0cmluZ1tdO1xyXG4gICAgLy8gICAgICAgIGlmICghaWRMaXN0IHx8ICFpZExpc3QubGVuZ3RoKVxyXG4gICAgLy8gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAvLyAgICAgICAgdmFyIGJ5SWQgPSBFbXBsb3llZXNSb3cuZ2V0TG9va3VwKCkuaXRlbUJ5SWQ7XHJcbiAgICAvLyAgICAgICAgbGV0IHo6IEVtcGxveWVlc1JvdztcclxuICAgIC8vICAgICAgICByZXR1cm4gaWRMaXN0Lm1hcCh4ID0+ICgoeiA9IGJ5SWRbeF0pID8gei5GdWxsTmFtZSA6IHgpKS5qb2luKFwiLCBcIik7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvL31cclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcihbU2VyZW5pdHkuSVNsaWNrRm9ybWF0dGVyLCBTZXJlbml0eS5JSW5pdGlhbGl6ZUNvbHVtbl0pXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVGb3JtYXR0ZXIgaW1wbGVtZW50cyBTbGljay5Gb3JtYXR0ZXIge1xyXG4gICAgICAgIGZvcm1hdChjdHg6IFNsaWNrLkZvcm1hdHRlckNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIHRleHQgPSBRLmh0bWxFbmNvZGUoY3R4LnZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5nZW5kZXJQcm9wZXJ0eSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBnZW5kZXIgPSBjdHguaXRlbVt0aGlzLmdlbmRlclByb3BlcnR5XTtcclxuICAgICAgICAgICAgcmV0dXJuIFwiPHNwYW4gY2xhc3M9J1wiICsgKChnZW5kZXIgPT09IEdlbmRlci5GZW1hbGUpID9cclxuICAgICAgICAgICAgICAgICdlbXBsb3llZS1zeW1ib2wgZmVtYWxlJyA6ICdlbXBsb3llZS1zeW1ib2wgbWFsZScpICtcclxuICAgICAgICAgICAgICAgIFwiJz5cIiArIHRleHQgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5vcHRpb24oKVxyXG4gICAgICAgIHB1YmxpYyBnZW5kZXJQcm9wZXJ0eTogc3RyaW5nO1xyXG5cclxuICAgICAgICBwdWJsaWMgaW5pdGlhbGl6ZUNvbHVtbihjb2x1bW46IFNsaWNrLkNvbHVtbikge1xyXG4gICAgICAgICAgICBjb2x1bW4ucmVmZXJlbmNlZEZpZWxkcyA9IGNvbHVtbi5yZWZlcmVuY2VkRmllbGRzIHx8IFtdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZW5kZXJQcm9wZXJ0eSlcclxuICAgICAgICAgICAgICAgIGNvbHVtbi5yZWZlcmVuY2VkRmllbGRzLnB1c2godGhpcy5nZW5kZXJQcm9wZXJ0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTWVhc3VyZXNEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TWVhc3VyZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTWVhc3VyZXNGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1lYXN1cmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTWVhc3VyZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIE1lYXN1cmVzUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTWVhc3VyZXNTZXJ2aWNlLmJhc2VVcmw7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVsZXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1lYXN1cmVzUm93LmRlbGV0ZVBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1lYXN1cmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VXBkYXRlUGVybWlzc2lvbigpIHsgcmV0dXJuIE1lYXN1cmVzUm93LnVwZGF0ZVBlcm1pc3Npb247IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTWVhc3VyZXNGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIE1lYXN1cmVzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8TWVhc3VyZXNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1N0b3JlLk1lYXN1cmVzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTWVhc3VyZXNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIE1lYXN1cmVzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIE1lYXN1cmVzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTWVhc3VyZXNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNZWFzdXJlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTWVhc3VyZXNSb3cuRmllbGRzLk1lYXN1cmVJZF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckVkaXRvcigpXHJcbiAgICBleHBvcnQgY2xhc3MgUGhvbmVFZGl0b3IgZXh0ZW5kcyBTZXJlbml0eS5TdHJpbmdFZGl0b3Ige1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlucHV0OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaW5wdXQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gUS50cmltVG9OdWxsKHRoaXMuZ2V0X3ZhbHVlKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBQaG9uZUVkaXRvci52YWxpZGF0ZSh2YWx1ZSwgdGhpcy5tdWx0aXBsZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQuYmluZCgnY2hhbmdlJywgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIVNlcmVuaXR5LldYLmhhc09yaWdpbmFsRXZlbnQoZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdFZhbHVlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW5wdXQuYmluZCgnYmx1cicsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5oYXNDbGFzcygndmFsaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWF0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybWF0VmFsdWUoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52YWwodGhpcy5nZXRGb3JtYXR0ZWRWYWx1ZSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtYXR0ZWRWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUGhvbmVFZGl0b3IuZm9ybWF0TXVsdGkodmFsdWUsIFBob25lRWRpdG9yLmZvcm1hdFBob25lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUGhvbmVFZGl0b3IuZm9ybWF0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgbXVsdGlwbGU6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGdldF92YWx1ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybWF0dGVkVmFsdWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldF92YWx1ZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC52YWwodmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIHZhbGlkYXRlKHBob25lOiBzdHJpbmcsIGlzTXVsdGlwbGU6IGJvb2xlYW4pIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkID0gKGlzTXVsdGlwbGUgPyBQaG9uZUVkaXRvci5pc1ZhbGlkTXVsdGkocGhvbmUsIFBob25lRWRpdG9yLmlzVmFsaWRQaG9uZSkgOiBQaG9uZUVkaXRvci5pc1ZhbGlkUGhvbmUocGhvbmUpKTtcclxuICAgICAgICAgICAgaWYgKHZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUS50ZXh0KChpc011bHRpcGxlID8gJ1ZhbGlkYXRpb24uU3RvcmVQaG9uZU11bHRpcGxlJyA6ICdWYWxpZGF0aW9uLlN0b3JlUGhvbmUnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGF0aWMgaXNWYWxpZFBob25lKHBob25lOiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgaWYgKFEuaXNFbXB0eU9yTnVsbChwaG9uZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwaG9uZSA9IFEucmVwbGFjZUFsbChRLnJlcGxhY2VBbGwocGhvbmUsICcgJywgJycpLCAnLScsICcnKTtcclxuICAgICAgICAgICAgaWYgKHBob25lLmxlbmd0aCA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChRLnN0YXJ0c1dpdGgocGhvbmUsICcwJykpIHtcclxuICAgICAgICAgICAgICAgIHBob25lID0gcGhvbmUuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoUS5zdGFydHNXaXRoKHBob25lLCAnKCcpICYmIHBob25lLmNoYXJBdCg0KSA9PT0gJyknKSB7XHJcbiAgICAgICAgICAgICAgICBwaG9uZSA9IHBob25lLnN1YnN0cigxLCAzKSArIHBob25lLnN1YnN0cmluZyg1KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHBob25lLmxlbmd0aCAhPT0gMTIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKFEuc3RhcnRzV2l0aChwaG9uZSwgJzAnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBob25lLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYyA9IHBob25lLmNoYXJBdChpKTtcclxuICAgICAgICAgICAgICAgIGlmIChjIDwgJzAnIHx8IGMgPiAnOScpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZvcm1hdFBob25lKHBob25lKSB7XHJcbiAgICAgICAgICAgIGlmICghUGhvbmVFZGl0b3IuaXNWYWxpZFBob25lKHBob25lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBob25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBob25lID0gUS5yZXBsYWNlQWxsKFEucmVwbGFjZUFsbChRLnJlcGxhY2VBbGwoUS5yZXBsYWNlQWxsKHBob25lLCAnICcsICcnKSwgJy0nLCAnJyksICcoJywgJycpLCAnKScsICcnKTtcclxuICAgICAgICAgICAgaWYgKFEuc3RhcnRzV2l0aChwaG9uZSwgJzAnKSkge1xyXG4gICAgICAgICAgICAgICAgcGhvbmUgPSBwaG9uZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGhvbmUgPSAnKCcgKyBwaG9uZS5zdWJzdHIoMCwgMykgKyAnKSAnICsgcGhvbmUuc3Vic3RyKDMsIDMpICsgJy0nICsgcGhvbmUuc3Vic3RyKDYsIDIpICsgcGhvbmUuc3Vic3RyKDgsIDIpICsgcGhvbmUuc3Vic3RyKDEwLCAyKTtcclxuICAgICAgICAgICAgcmV0dXJuIHBob25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGZvcm1hdE11bHRpKHBob25lOiBzdHJpbmcsIGZvcm1hdDogKHM6IHN0cmluZykgPT4gc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBwaG9uZXMgPSBRLnJlcGxhY2VBbGwocGhvbmUsIFN0cmluZy5mcm9tQ2hhckNvZGUoNTkpLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ0KSkuc3BsaXQoU3RyaW5nLmZyb21DaGFyQ29kZSg0NCkpO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAodmFyIHggb2YgcGhvbmVzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFEudHJpbVRvTnVsbCh4KTtcclxuICAgICAgICAgICAgICAgIGlmIChzID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSAnLCAnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IGZvcm1hdChzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhdGljIGlzVmFsaWRNdWx0aShwaG9uZTogc3RyaW5nLCBjaGVjazogKHM6IHN0cmluZykgPT4gYm9vbGVhbikge1xyXG4gICAgICAgICAgICBpZiAoUS5pc0VtcHR5T3JOdWxsKHBob25lKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciBwaG9uZXMgPSBRLnJlcGxhY2VBbGwocGhvbmUsIFN0cmluZy5mcm9tQ2hhckNvZGUoNTkpLCBTdHJpbmcuZnJvbUNoYXJDb2RlKDQ0KSkuc3BsaXQoU3RyaW5nLmZyb21DaGFyQ29kZSg0NCkpO1xyXG4gICAgICAgICAgICB2YXIgYW55VmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yICh2YXIgJHQxID0gMDsgJHQxIDwgcGhvbmVzLmxlbmd0aDsgJHQxKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gcGhvbmVzWyR0MV07XHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFEudHJpbVRvTnVsbCh4KTtcclxuICAgICAgICAgICAgICAgIGlmIChzID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghY2hlY2socykpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhbnlWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFhbnlWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNob3BzRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFNob3BzUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFNob3BzRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBTaG9wc1Jvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFNob3BzUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBTaG9wc1Jvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFNob3BzU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaG9wc1Jvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBTaG9wc1Jvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBTaG9wc1Jvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFNob3BzRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyRWRpdG9yKClcclxuICAgIGV4cG9ydCBjbGFzcyBTaG9wc0VkaXRvciBleHRlbmRzIFNlcmVuaXR5Lkxvb2t1cEVkaXRvckJhc2U8U2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucywgU2hvcHNSb3c+IHtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoaGlkZGVuOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoaGlkZGVuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb29rdXBLZXkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBTaG9wc1Jvdy5sb29rdXBLZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SXRlbVRleHQoaXRlbSwgbG9va3VwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRJdGVtVGV4dChpdGVtLCBsb29rdXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNob3BzR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8U2hvcHNSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ1N0b3JlLlNob3BzJzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gU2hvcHNEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFNob3BzUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SW5zZXJ0UGVybWlzc2lvbigpIHsgcmV0dXJuIFNob3BzUm93Lmluc2VydFBlcm1pc3Npb247IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gU2hvcHNSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBTaG9wc1NlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==