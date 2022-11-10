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
        var CategoriesTypeColumns = /** @class */ (function () {
            function CategoriesTypeColumns() {
            }
            CategoriesTypeColumns.columnsKey = 'Store.CategoriesType';
            return CategoriesTypeColumns;
        }());
        Store.CategoriesTypeColumns = CategoriesTypeColumns;
    })(Store = Store_1.Store || (Store_1.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_2) {
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
    })(Store = Store_2.Store || (Store_2.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_3) {
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
    })(Store = Store_3.Store || (Store_3.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_4) {
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
    })(Store = Store_4.Store || (Store_4.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_5) {
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
    })(Store = Store_5.Store || (Store_5.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_6) {
    var Texts;
    (function (Texts) {
        Store_6.Store['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1, TenantId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Tenant: { TenantId: 1, TenantName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Store: { CategoriesType: { CategoryType: 1, CategoryTypeId: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, TenantId: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, Measures: { InsertDate: 1, InsertUserId: 1, IsActive: 1, MeasureId: 1, MeasureName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, GoogleButton: 1, LoginToYourAccount: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Navigation: { LogoutLink: 1, SiteTitle: 1 }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Store_6.Texts || (Store_6.Texts = {}));
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
(function (Store_7) {
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
    })(Store = Store_7.Store || (Store_7.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_8) {
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
    })(Store = Store_8.Store || (Store_8.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_9) {
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
    })(Store = Store_9.Store || (Store_9.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_10) {
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
    })(Store = Store_10.Store || (Store_10.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_11) {
    var Store;
    (function (Store) {
        var MeasuresColumns = /** @class */ (function () {
            function MeasuresColumns() {
            }
            MeasuresColumns.columnsKey = 'Store.Measures';
            return MeasuresColumns;
        }());
        Store.MeasuresColumns = MeasuresColumns;
    })(Store = Store_11.Store || (Store_11.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_12) {
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
    })(Store = Store_12.Store || (Store_12.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_13) {
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
    })(Store = Store_13.Store || (Store_13.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_14) {
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
    })(Store = Store_14.Store || (Store_14.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_15) {
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
    })(Store = Store_15.Store || (Store_15.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_16) {
    var Store;
    (function (Store) {
        var EmployeesListFormatter = /** @class */ (function () {
            function EmployeesListFormatter() {
            }
            EmployeesListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Store.EmployeesRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeesListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeesListFormatter);
            return EmployeesListFormatter;
        }());
        Store.EmployeesListFormatter = EmployeesListFormatter;
    })(Store = Store_16.Store || (Store_16.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_17) {
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
    })(Store = Store_17.Store || (Store_17.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_18) {
    var Store;
    (function (Store) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'Store/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = Store.EmployeesService || (Store.EmployeesService = {}));
    })(Store = Store_18.Store || (Store_18.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_19) {
    var Store;
    (function (Store) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Store.Gender || (Store.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'Store.Store.Gender', 'Store.Store.Entities.Gender');
    })(Store = Store_19.Store || (Store_19.Store = {}));
})(Store || (Store = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuV2ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlQ29sdW1ucy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5MYW5ndWFnZUZvcm0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlBlcm1pc3Npb25LZXlzLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uUm9sZVBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Sb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlJvbGVTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlRlbmFudENvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVGVuYW50Rm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UZW5hbnRSb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVGVuYW50U2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbkl0ZW0udHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25MaXN0UmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvblNlcnZpY2UudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb25VcGRhdGVSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25Sb3cudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb25TZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZUxpc3RSZXF1ZXN0LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlTGlzdFJlc3BvbnNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyUm9sZVVwZGF0ZVJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvQWRtaW5pc3RyYXRpb24uVXNlclJvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9BZG1pbmlzdHJhdGlvbi5Vc2VyU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkZvcmdvdFBhc3N3b3JkUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLkxvZ2luUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmRGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZFJlcXVlc3QudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvTWVtYmVyc2hpcC5TaWduVXBGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL01lbWJlcnNoaXAuU2lnblVwUmVxdWVzdC50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TY3JpcHRVc2VyRGVmaW5pdGlvbi50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5DYXRlZ29yaWVzVHlwZUNvbHVtbnMudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuQ2F0ZWdvcmllc1R5cGVGb3JtLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNUeXBlUm93LnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkNhdGVnb3JpZXNUeXBlU2VydmljZS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5QZXJtaXNzaW9uS2V5cy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9UZXh0cy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UvTGFuZ3VhZ2VEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xhbmd1YWdlR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vUm9sZS9Sb2xlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlL1JvbGVHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9Sb2xlUGVybWlzc2lvbkRpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVGVuYW50L1RlbmFudERpYWxvZy50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVGVuYW50L1RlbmFudEdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1RyYW5zbGF0aW9uR3JpZC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlci9Vc2VyRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL1VzZXJHcmlkLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9BZG1pbmlzdHJhdGlvbi9Vc2VyL0F1dGhlbnRpY2F0aW9uL0F1dGhvcml6YXRpb24udHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1Blcm1pc3Npb25DaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclBlcm1pc3Npb24vVXNlclBlcm1pc3Npb25EaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlL1JvbGVDaGVja0VkaXRvci50cyIsIi4uLy4uLy4uL01vZHVsZXMvQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvVXNlclJvbGVEaWFsb2cudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL0NvbW1vbi9IZWxwZXJzL0xhbmd1YWdlTGlzdC50cyIsIi4uLy4uLy4uL01vZHVsZXMvQ29tbW9uL1NjcmlwdEluaXRpYWxpemF0aW9uLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9Db21tb24vTmF2aWdhdGlvbi9TaWRlYmFyU2VhcmNoLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvTG9naW5QYW5lbC50cyIsIi4uLy4uLy4uL01vZHVsZXMvTWVtYmVyc2hpcC9BY2NvdW50L0NoYW5nZVBhc3N3b3JkL0NoYW5nZVBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZFBhbmVsLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9NZW1iZXJzaGlwL0FjY291bnQvUmVzZXRQYXNzd29yZC9SZXNldFBhc3N3b3JkUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL01lbWJlcnNoaXAvQWNjb3VudC9TaWduVXAvU2lnblVwUGFuZWwudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL0NhdGVnb3JpZXNUeXBlL0NhdGVnb3JpZXNUeXBlRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdG9yZS9DYXRlZ29yaWVzVHlwZS9DYXRlZ29yaWVzVHlwZUdyaWQudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL01lYXN1cmVzL01lYXN1cmVzRGlhbG9nLnRzIiwiLi4vLi4vLi4vTW9kdWxlcy9TdG9yZS9NZWFzdXJlcy9NZWFzdXJlc0dyaWQudHMiLCIuLi8uLi8uLi9JbXBvcnRzL1NlcnZlclR5cGluZ3MvU3RvcmUuTWVhc3VyZXNDb2x1bW5zLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLk1lYXN1cmVzRm9ybS50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5NZWFzdXJlc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5NZWFzdXJlc1NlcnZpY2UudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL0VtcGxveWVlcy9FbXBsb3llZXNGb3JtYXR0ZXIudHMiLCIuLi8uLi8uLi9Nb2R1bGVzL1N0b3JlL0VtcGxveWVlcy9FbXBsb3llZXNMaXN0Rm9ybWF0dGVyLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkVtcGxveWVlc1Jvdy50cyIsIi4uLy4uLy4uL0ltcG9ydHMvU2VydmVyVHlwaW5ncy9TdG9yZS5FbXBsb3llZXNTZXJ2aWNlLnRzIiwiLi4vLi4vLi4vSW1wb3J0cy9TZXJ2ZXJUeXBpbmdzL1N0b3JlLkdlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEtBQUssQ0FJZDtBQUpELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQUk3QjtJQUplLFdBQUEsY0FBYztRQUMxQjtZQUFBO1lBRUEsQ0FBQztZQURVLDBCQUFVLEdBQUcseUJBQXlCLENBQUM7WUFDbEQsc0JBQUM7U0FBQSxBQUZELElBRUM7UUFGWSw4QkFBZSxrQkFFM0IsQ0FBQTtJQUNMLENBQUMsRUFKZSxjQUFjLEdBQWQsb0JBQWMsS0FBZCxvQkFBYyxRQUk3QjtBQUFELENBQUMsRUFKUyxLQUFLLEtBQUwsS0FBSyxRQUlkO0FDSkQsSUFBVSxLQUFLLENBMEJkO0FBMUJELFdBQVUsS0FBSztJQUFDLElBQUEsY0FBYyxDQTBCN0I7SUExQmUsV0FBQSxjQUFjO1FBTTFCO1lBQWtDLGdDQUF3QjtZQUl0RCxzQkFBWSxNQUFjO2dCQUExQixZQUNJLGtCQUFNLE1BQU0sQ0FBQyxTQWFoQjtnQkFYRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRztvQkFDckIsWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7b0JBRXpCLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztvQkFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVksQ0FBQztvQkFFeEIsQ0FBQyxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUU7d0JBQ3pCLFlBQVksRUFBRSxFQUFFO3dCQUNoQixjQUFjLEVBQUUsRUFBRTtxQkFDckIsQ0FBQyxDQUFDO2lCQUNO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VUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsSUFBSSxFQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxXQUFXLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsR0FBRyxFQUFDLENBQUMsRUFBQyxvQkFBb0IsRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxJQUFJLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsbUJBQW1CLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLElBQUksRUFBQyxDQUFDLEVBQUMsTUFBTSxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLFFBQVEsRUFBQyxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsSUFBSSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxRQUFRLEVBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsRUFBQyxFQUFDLEVBQUMsS0FBSyxFQUFDLEVBQUMsVUFBVSxFQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxDQUFDLEVBQUMsRUFBQyxLQUFLLEVBQUMsRUFBQyxjQUFjLEVBQUMsQ0FBQyxFQUFDLGNBQWMsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxrQkFBa0IsRUFBQyxDQUFDLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxFQUFDLGFBQWEsRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLENBQUMsRUFBQyxFQUFDLE1BQU0sRUFBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsb0JBQW9CLEVBQUMsQ0FBQyxFQUFDLHlCQUF5QixFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLEVBQUMsWUFBWSxFQUFDLENBQUMsRUFBQyxPQUFPLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsU0FBUyxFQUFDLENBQUMsRUFBQyxFQUFDLElBQUksRUFBQyxFQUFDLFlBQVksRUFBQyxFQUFDLGlCQUFpQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsQ0FBQyxFQUFDLEVBQUMsbUJBQW1CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsRUFBQyxpQkFBaUIsRUFBQyxFQUFDLGtCQUFrQixFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLG1CQUFtQixFQUFDLENBQUMsRUFBQyxZQUFZLEVBQUMsQ0FBQyxFQUFDLEVBQUMsU0FBUyxFQUFDLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLFlBQVksRUFBQyxDQUFDLEVBQUMsZUFBZSxFQUFDLENBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLFNBQVMsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLENBQUMsRUFBQyxVQUFVLEVBQUMsQ0FBQyxFQUFDLGVBQWUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsRUFBQyxDQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsRUFBQyxhQUFhLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFVBQVUsRUFBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLENBQUMsRUFBQyxFQUFDLFVBQVUsRUFBQyxFQUFDLHFCQUFxQixFQUFDLENBQUMsRUFBQyxlQUFlLEVBQUMsQ0FBQyxFQUFDLEVBQUMsb0JBQW9CLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLEVBQUMsVUFBVSxFQUFDLENBQUMsRUFBQyxNQUFNLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxjQUFjLEVBQUMsRUFBQyxXQUFXLEVBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxDQUFDLEVBQUMsRUFBQyxlQUFlLEVBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxFQUFDLEVBQUMsRUFBQyxV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bmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VGb3JtIHtcclxuICAgICAgICBMYW5ndWFnZUlkOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIExhbmd1YWdlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxhbmd1YWdlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTGFuZ3VhZ2VGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShMYW5ndWFnZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnTGFuZ3VhZ2VJZCcsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdMYW5ndWFnZU5hbWUnLCB3MFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIElkPzogbnVtYmVyO1xyXG4gICAgICAgIExhbmd1YWdlSWQ/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFuZ3VhZ2VOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTGFuZ3VhZ2VSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0lkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ0xhbmd1YWdlTmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5MYW5ndWFnZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8TGFuZ3VhZ2VSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPExhbmd1YWdlUm93PignQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlRyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBJZCA9IFwiSWRcIixcclxuICAgICAgICAgICAgTGFuZ3VhZ2VJZCA9IFwiTGFuZ3VhZ2VJZFwiLFxyXG4gICAgICAgICAgICBMYW5ndWFnZU5hbWUgPSBcIkxhbmd1YWdlTmFtZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIExhbmd1YWdlU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vTGFuZ3VhZ2UnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TGFuZ3VhZ2VSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFVwZGF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxMYW5ndWFnZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxMYW5ndWFnZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9MYW5ndWFnZS9EZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIkFkbWluaXN0cmF0aW9uL0xhbmd1YWdlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5MYW5ndWFnZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBQZXJtaXNzaW9uS2V5cyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNlY3VyaXR5ID0gXCJBZG1pbmlzdHJhdGlvbjpTZWN1cml0eVwiO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBUcmFuc2xhdGlvbiA9IFwiQWRtaW5pc3RyYXRpb246VHJhbnNsYXRpb25cIjtcclxuICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50cyA9IFwiQWRtaW5pc3RyYXRpb246VGVuYW50c1wiO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgUm9sZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJvbGVGb3JtIHtcclxuICAgICAgICBSb2xlTmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUm9sZUZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJvbGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShSb2xlRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdSb2xlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFJvbGVJRD86IG51bWJlcjtcclxuICAgICAgICBNb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgU3VibW9kdWxlPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvbkxpc3RSZXNwb25zZSBleHRlbmRzIFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxzdHJpbmc+IHtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFJvbGVQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgUm9sZVJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1JvbGVQZXJtaXNzaW9uSWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnUGVybWlzc2lvbktleSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5Sb2xlUGVybWlzc2lvbic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlUGVybWlzc2lvbklkID0gXCJSb2xlUGVybWlzc2lvbklkXCIsXHJcbiAgICAgICAgICAgIFJvbGVJZCA9IFwiUm9sZUlkXCIsXHJcbiAgICAgICAgICAgIFBlcm1pc3Npb25LZXkgPSBcIlBlcm1pc3Npb25LZXlcIixcclxuICAgICAgICAgICAgUm9sZVJvbGVOYW1lID0gXCJSb2xlUm9sZU5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBSb2xlUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGVQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFJvbGVQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogUm9sZVBlcm1pc3Npb25MaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlUGVybWlzc2lvbi9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZVBlcm1pc3Npb24vTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBSb2xlUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgUm9sZUlEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBzdHJpbmdbXTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1JvbGVOYW1lJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlJvbGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uUm9sZSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8Um9sZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Um9sZVJvdz4oJ0FkbWluaXN0cmF0aW9uLlJvbGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBSb2xlSWQgPSBcIlJvbGVJZFwiLFxyXG4gICAgICAgICAgICBSb2xlTmFtZSA9IFwiUm9sZU5hbWVcIixcclxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1JvbGUnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Um9sZVJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PFJvbGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Um9sZVJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxSb2xlUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1JvbGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiQWRtaW5pc3RyYXRpb24vUm9sZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Sb2xlL0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Sb2xlU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgY2xhc3MgVGVuYW50Q29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnQWRtaW5pc3RyYXRpb24uVGVuYW50JztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUZW5hbnRGb3JtIHtcclxuICAgICAgICBUZW5hbnROYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFRlbmFudEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ0FkbWluaXN0cmF0aW9uLlRlbmFudCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghVGVuYW50Rm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVGVuYW50Rm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5TdHJpbmdFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVGVuYW50Rm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdUZW5hbnROYW1lJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRlbmFudFJvdyB7XHJcbiAgICAgICAgVGVuYW50SWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVGVuYW50TmFtZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFRlbmFudFJvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnVGVuYW50SWQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVGVuYW50TmFtZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvY2FsVGV4dFByZWZpeCA9ICdBZG1pbmlzdHJhdGlvbi5UZW5hbnQnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnQWRtaW5pc3RyYXRpb24uVGVuYW50JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxUZW5hbnRSb3c+IHtcclxuICAgICAgICAgICAgcmV0dXJuIFEuZ2V0TG9va3VwPFRlbmFudFJvdz4oJ0FkbWluaXN0cmF0aW9uLlRlbmFudCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUZW5hbnRzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpUZW5hbnRzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VGVuYW50cyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246VGVuYW50cyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXHJcbiAgICAgICAgICAgIFRlbmFudE5hbWUgPSBcIlRlbmFudE5hbWVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUZW5hbnRTZXJ2aWNlIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgYmFzZVVybCA9ICdBZG1pbmlzdHJhdGlvbi9UZW5hbnQnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBDcmVhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGVuYW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VGVuYW50Um93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBEZWxldGUocmVxdWVzdDogU2VyZW5pdHkuRGVsZXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5EZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFRlbmFudFJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFNlcmVuaXR5Lkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUZW5hbnRSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVGVuYW50L0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RlbmFudC9VcGRhdGVcIixcclxuICAgICAgICAgICAgRGVsZXRlID0gXCJBZG1pbmlzdHJhdGlvbi9UZW5hbnQvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJBZG1pbmlzdHJhdGlvbi9UZW5hbnQvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVGVuYW50L0xpc3RcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnQ3JlYXRlJywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0RlbGV0ZScsIFxyXG4gICAgICAgICAgICAnUmV0cmlldmUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UZW5hbnRTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVHJhbnNsYXRpb25JdGVtIHtcclxuICAgICAgICBLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgU291cmNlVGV4dD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRUZXh0Pzogc3RyaW5nO1xyXG4gICAgICAgIEN1c3RvbVRleHQ/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFRyYW5zbGF0aW9uTGlzdFJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVxdWVzdCB7XHJcbiAgICAgICAgU291cmNlTGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUYXJnZXRMYW5ndWFnZUlEPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBUcmFuc2xhdGlvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBUcmFuc2xhdGlvbkxpc3RSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5Lkxpc3RSZXNwb25zZTxUcmFuc2xhdGlvbkl0ZW0+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFRyYW5zbGF0aW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVHJhbnNsYXRpb24vTGlzdFwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1RyYW5zbGF0aW9uL1VwZGF0ZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdVcGRhdGUnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5UcmFuc2xhdGlvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBUcmFuc2xhdGlvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVGFyZ2V0TGFuZ3VhZ2VJRD86IHN0cmluZztcclxuICAgICAgICBUcmFuc2xhdGlvbnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJDb2x1bW5zIHtcclxuICAgICAgICBzdGF0aWMgY29sdW1uc0tleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyRm9ybSB7XHJcbiAgICAgICAgVXNlcm5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEVkaXRvcjtcclxuICAgICAgICBVc2VySW1hZ2U6IFNlcmVuaXR5LkltYWdlVXBsb2FkRWRpdG9yO1xyXG4gICAgICAgIFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBQYXNzd29yZENvbmZpcm06IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIFNvdXJjZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIFRlbmFudElkOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFVzZXJGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFVc2VyRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgVXNlckZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcxID0gcy5FbWFpbEVkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MiA9IHMuSW1hZ2VVcGxvYWRFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzMgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHc0ID0gcy5Mb29rdXBFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoVXNlckZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNlcm5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRGlzcGxheU5hbWUnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnRW1haWwnLCB3MSxcclxuICAgICAgICAgICAgICAgICAgICAnVXNlckltYWdlJywgdzIsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzMsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkQ29uZmlybScsIHczLFxyXG4gICAgICAgICAgICAgICAgICAgICdTb3VyY2UnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnVGVuYW50SWQnLCB3NFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBVc2VySUQ/OiBudW1iZXI7XHJcbiAgICAgICAgTW9kdWxlPzogc3RyaW5nO1xyXG4gICAgICAgIFN1Ym1vZHVsZT86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclBlcm1pc3Npb25Sb3cge1xyXG4gICAgICAgIFVzZXJQZXJtaXNzaW9uSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcklkPzogbnVtYmVyO1xyXG4gICAgICAgIFBlcm1pc3Npb25LZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgR3JhbnRlZD86IGJvb2xlYW47XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJQZXJtaXNzaW9uUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUGVybWlzc2lvbklkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbmFtZVByb3BlcnR5ID0gJ1Blcm1pc3Npb25LZXknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlclBlcm1pc3Npb24nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgaW5zZXJ0UGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ0FkbWluaXN0cmF0aW9uOlNlY3VyaXR5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgdXBkYXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25JZCA9IFwiVXNlclBlcm1pc3Npb25JZFwiLFxyXG4gICAgICAgICAgICBVc2VySWQgPSBcIlVzZXJJZFwiLFxyXG4gICAgICAgICAgICBQZXJtaXNzaW9uS2V5ID0gXCJQZXJtaXNzaW9uS2V5XCIsXHJcbiAgICAgICAgICAgIEdyYW50ZWQgPSBcIkdyYW50ZWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvblNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJQZXJtaXNzaW9uTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuTGlzdFJlc3BvbnNlPFVzZXJQZXJtaXNzaW9uUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RSb2xlUGVybWlzc2lvbnMocmVxdWVzdDogVXNlclBlcm1pc3Npb25MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIExpc3RQZXJtaXNzaW9uS2V5cyhyZXF1ZXN0OiBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8c3RyaW5nPikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL1VwZGF0ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0XCIsXHJcbiAgICAgICAgICAgIExpc3RSb2xlUGVybWlzc2lvbnMgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXJQZXJtaXNzaW9uL0xpc3RSb2xlUGVybWlzc2lvbnNcIixcclxuICAgICAgICAgICAgTGlzdFBlcm1pc3Npb25LZXlzID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUGVybWlzc2lvbi9MaXN0UGVybWlzc2lvbktleXNcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdMaXN0JywgXHJcbiAgICAgICAgICAgICdMaXN0Um9sZVBlcm1pc3Npb25zJywgXHJcbiAgICAgICAgICAgICdMaXN0UGVybWlzc2lvbktleXMnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUGVybWlzc2lvblNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvblVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIE1vZHVsZT86IHN0cmluZztcclxuICAgICAgICBTdWJtb2R1bGU/OiBzdHJpbmc7XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiBVc2VyUGVybWlzc2lvblJvd1tdO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZUxpc3RSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJJRD86IG51bWJlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgVXNlclJvbGVMaXN0UmVzcG9uc2UgZXh0ZW5kcyBTZXJlbml0eS5MaXN0UmVzcG9uc2U8bnVtYmVyPiB7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBVc2VyUm9sZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBSb2xlSWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgVXNlcj86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb2xlUm93IHtcclxuICAgICAgICBleHBvcnQgY29uc3QgaWRQcm9wZXJ0eSA9ICdVc2VyUm9sZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ0FkbWluaXN0cmF0aW9uLlVzZXJSb2xlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJSb2xlSWQgPSBcIlVzZXJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcklkID0gXCJVc2VySWRcIixcclxuICAgICAgICAgICAgUm9sZUlkID0gXCJSb2xlSWRcIixcclxuICAgICAgICAgICAgVXNlcm5hbWUgPSBcIlVzZXJuYW1lXCIsXHJcbiAgICAgICAgICAgIFVzZXIgPSBcIlVzZXJcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyUm9sZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ0FkbWluaXN0cmF0aW9uL1VzZXJSb2xlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFVzZXJSb2xlVXBkYXRlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBMaXN0KHJlcXVlc3Q6IFVzZXJSb2xlTGlzdFJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogVXNlclJvbGVMaXN0UmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlclJvbGUvTGlzdFwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgICdVcGRhdGUnLCBcclxuICAgICAgICAgICAgJ0xpc3QnXHJcbiAgICAgICAgXS5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAoPGFueT5Vc2VyUm9sZVNlcnZpY2UpW3hdID0gZnVuY3Rpb24gKHIsIHMsIG8pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBRLnNlcnZpY2VSZXF1ZXN0KGJhc2VVcmwgKyAnLycgKyB4LCByLCBzLCBvKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUm9sZVVwZGF0ZVJlcXVlc3QgZXh0ZW5kcyBTZXJlbml0eS5TZXJ2aWNlUmVxdWVzdCB7XHJcbiAgICAgICAgVXNlcklEPzogbnVtYmVyO1xyXG4gICAgICAgIFJvbGVzPzogbnVtYmVyW107XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVc2VybmFtZT86IHN0cmluZztcclxuICAgICAgICBTb3VyY2U/OiBzdHJpbmc7XHJcbiAgICAgICAgUGFzc3dvcmRIYXNoPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkU2FsdD86IHN0cmluZztcclxuICAgICAgICBEaXNwbGF5TmFtZT86IHN0cmluZztcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgICAgICBVc2VySW1hZ2U/OiBzdHJpbmc7XHJcbiAgICAgICAgTGFzdERpcmVjdG9yeVVwZGF0ZT86IHN0cmluZztcclxuICAgICAgICBUZW5hbnRJZD86IG51bWJlcjtcclxuICAgICAgICBUZW5hbnROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkQ29uZmlybT86IHN0cmluZztcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIFVzZXJSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ1VzZXJJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnVXNlcm5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnQWRtaW5pc3RyYXRpb24uVXNlcic7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGxvb2t1cEtleSA9ICdBZG1pbmlzdHJhdGlvbi5Vc2VyJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxVc2VyUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxVc2VyUm93PignQWRtaW5pc3RyYXRpb24uVXNlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCByZWFkUGVybWlzc2lvbiA9ICdBZG1pbmlzdHJhdGlvbjpTZWN1cml0eSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnQWRtaW5pc3RyYXRpb246U2VjdXJpdHknO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIFVzZXJJZCA9IFwiVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVzZXJuYW1lID0gXCJVc2VybmFtZVwiLFxyXG4gICAgICAgICAgICBTb3VyY2UgPSBcIlNvdXJjZVwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZEhhc2ggPSBcIlBhc3N3b3JkSGFzaFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZFNhbHQgPSBcIlBhc3N3b3JkU2FsdFwiLFxyXG4gICAgICAgICAgICBEaXNwbGF5TmFtZSA9IFwiRGlzcGxheU5hbWVcIixcclxuICAgICAgICAgICAgRW1haWwgPSBcIkVtYWlsXCIsXHJcbiAgICAgICAgICAgIFVzZXJJbWFnZSA9IFwiVXNlckltYWdlXCIsXHJcbiAgICAgICAgICAgIExhc3REaXJlY3RvcnlVcGRhdGUgPSBcIkxhc3REaXJlY3RvcnlVcGRhdGVcIixcclxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXHJcbiAgICAgICAgICAgIFRlbmFudE5hbWUgPSBcIlRlbmFudE5hbWVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFBhc3N3b3JkID0gXCJQYXNzd29yZFwiLFxyXG4gICAgICAgICAgICBQYXNzd29yZENvbmZpcm0gPSBcIlBhc3N3b3JkQ29uZmlybVwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuQWRtaW5pc3RyYXRpb24ge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBVc2VyU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnQWRtaW5pc3RyYXRpb24vVXNlcic7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIENyZWF0ZShyZXF1ZXN0OiBTZXJlbml0eS5TYXZlUmVxdWVzdDxVc2VyUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8VXNlclJvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVbmRlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5VbmRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuVW5kZWxldGVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIFJldHJpZXZlKHJlcXVlc3Q6IFNlcmVuaXR5LlJldHJpZXZlUmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5SZXRyaWV2ZVJlc3BvbnNlPFVzZXJSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8VXNlclJvdz4pID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBNZXRob2RzIHtcclxuICAgICAgICAgICAgQ3JlYXRlID0gXCJBZG1pbmlzdHJhdGlvbi9Vc2VyL0NyZWF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9EZWxldGVcIixcclxuICAgICAgICAgICAgVW5kZWxldGUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvVW5kZWxldGVcIixcclxuICAgICAgICAgICAgUmV0cmlldmUgPSBcIkFkbWluaXN0cmF0aW9uL1VzZXIvUmV0cmlldmVcIixcclxuICAgICAgICAgICAgTGlzdCA9IFwiQWRtaW5pc3RyYXRpb24vVXNlci9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1VuZGVsZXRlJywgXHJcbiAgICAgICAgICAgICdSZXRyaWV2ZScsIFxyXG4gICAgICAgICAgICAnTGlzdCdcclxuICAgICAgICBdLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICg8YW55PlVzZXJTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDaGFuZ2VQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdNZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFDaGFuZ2VQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIENoYW5nZVBhc3N3b3JkRm9ybS5pbml0ID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcyA9IFNlcmVuaXR5O1xyXG4gICAgICAgICAgICAgICAgdmFyIHcwID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDaGFuZ2VQYXNzd29yZEZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnT2xkUGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnTmV3UGFzc3dvcmQnLCB3MCxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlybVBhc3N3b3JkJywgdzBcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2hhbmdlUGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIE9sZFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBGb3Jnb3RQYXNzd29yZEZvcm0ge1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnTWVtYmVyc2hpcC5Gb3Jnb3RQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghRm9yZ290UGFzc3dvcmRGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBGb3Jnb3RQYXNzd29yZEZvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKEZvcmdvdFBhc3N3b3JkRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdFbWFpbCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIEZvcmdvdFBhc3N3b3JkUmVxdWVzdCBleHRlbmRzIFNlcmVuaXR5LlNlcnZpY2VSZXF1ZXN0IHtcclxuICAgICAgICBFbWFpbD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBMb2dpbkZvcm0ge1xyXG4gICAgICAgIFVzZXJuYW1lOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBMb2dpbkZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuTG9naW4nO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUxvZ2luRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgTG9naW5Gb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuUGFzc3dvcmRFZGl0b3I7XHJcblxyXG4gICAgICAgICAgICAgICAgUS5pbml0Rm9ybVR5cGUoTG9naW5Gb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ1VzZXJuYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1Bhc3N3b3JkJywgdzFcclxuICAgICAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgTG9naW5SZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFVzZXJuYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRGb3JtIHtcclxuICAgICAgICBOZXdQYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybVBhc3N3b3JkOiBTZXJlbml0eS5QYXNzd29yZEVkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuUmVzZXRQYXNzd29yZCc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghUmVzZXRQYXNzd29yZEZvcm0uaW5pdCkgIHtcclxuICAgICAgICAgICAgICAgIFJlc2V0UGFzc3dvcmRGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlBhc3N3b3JkRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKFJlc2V0UGFzc3dvcmRGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ05ld1Bhc3N3b3JkJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1QYXNzd29yZCcsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFJlc2V0UGFzc3dvcmRSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIFRva2VuPzogc3RyaW5nO1xyXG4gICAgICAgIE5ld1Bhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZD86IHN0cmluZztcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBGb3JtIHtcclxuICAgICAgICBEaXNwbGF5TmFtZTogU2VyZW5pdHkuU3RyaW5nRWRpdG9yO1xyXG4gICAgICAgIEVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgQ29uZmlybUVtYWlsOiBTZXJlbml0eS5FbWFpbEFkZHJlc3NFZGl0b3I7XHJcbiAgICAgICAgUGFzc3dvcmQ6IFNlcmVuaXR5LlBhc3N3b3JkRWRpdG9yO1xyXG4gICAgICAgIENvbmZpcm1QYXNzd29yZDogU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcEZvcm0gZXh0ZW5kcyBTZXJlbml0eS5QcmVmaXhlZENvbnRleHQge1xyXG4gICAgICAgIHN0YXRpYyBmb3JtS2V5ID0gJ01lbWJlcnNoaXAuU2lnblVwJztcclxuICAgICAgICBwcml2YXRlIHN0YXRpYyBpbml0OiBib29sZWFuO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihwcmVmaXg6IHN0cmluZykge1xyXG4gICAgICAgICAgICBzdXBlcihwcmVmaXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFTaWduVXBGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBTaWduVXBGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLlN0cmluZ0VkaXRvcjtcclxuICAgICAgICAgICAgICAgIHZhciB3MSA9IHMuRW1haWxBZGRyZXNzRWRpdG9yO1xyXG4gICAgICAgICAgICAgICAgdmFyIHcyID0gcy5QYXNzd29yZEVkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShTaWduVXBGb3JtLCBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0Rpc3BsYXlOYW1lJywgdzAsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0VtYWlsJywgdzEsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0NvbmZpcm1FbWFpbCcsIHcxLFxyXG4gICAgICAgICAgICAgICAgICAgICdQYXNzd29yZCcsIHcyLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maXJtUGFzc3dvcmQnLCB3MlxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTaWduVXBSZXF1ZXN0IGV4dGVuZHMgU2VyZW5pdHkuU2VydmljZVJlcXVlc3Qge1xyXG4gICAgICAgIERpc3BsYXlOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEVtYWlsPzogc3RyaW5nO1xyXG4gICAgICAgIFBhc3N3b3JkPzogc3RyaW5nO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJuYW1lc3BhY2UgU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBTY3JpcHRVc2VyRGVmaW5pdGlvbiB7XHJcbiAgICAgICAgVXNlcm5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgRGlzcGxheU5hbWU/OiBzdHJpbmc7XHJcbiAgICAgICAgSXNBZG1pbj86IGJvb2xlYW47XHJcbiAgICAgICAgUGVybWlzc2lvbnM/OiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcclxuICAgIH1cclxufVxyXG5cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzVHlwZUNvbHVtbnMge1xyXG4gICAgICAgIHN0YXRpYyBjb2x1bW5zS2V5ID0gJ1N0b3JlLkNhdGVnb3JpZXNUeXBlJztcclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yaWVzVHlwZUZvcm0ge1xyXG4gICAgICAgIFR5cGU6IFNlcmVuaXR5LkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgQ2F0ZWdvcnlUeXBlOiBTZXJlbml0eS5TdHJpbmdFZGl0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNUeXBlRm9ybSBleHRlbmRzIFNlcmVuaXR5LlByZWZpeGVkQ29udGV4dCB7XHJcbiAgICAgICAgc3RhdGljIGZvcm1LZXkgPSAnU3RvcmUuQ2F0ZWdvcmllc1R5cGUnO1xyXG4gICAgICAgIHByaXZhdGUgc3RhdGljIGluaXQ6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKHByZWZpeDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKHByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIUNhdGVnb3JpZXNUeXBlRm9ybS5pbml0KSAge1xyXG4gICAgICAgICAgICAgICAgQ2F0ZWdvcmllc1R5cGVGb3JtLmluaXQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBzID0gU2VyZW5pdHk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzAgPSBzLkludGVnZXJFZGl0b3I7XHJcbiAgICAgICAgICAgICAgICB2YXIgdzEgPSBzLlN0cmluZ0VkaXRvcjtcclxuXHJcbiAgICAgICAgICAgICAgICBRLmluaXRGb3JtVHlwZShDYXRlZ29yaWVzVHlwZUZvcm0sIFtcclxuICAgICAgICAgICAgICAgICAgICAnVHlwZScsIHcwLFxyXG4gICAgICAgICAgICAgICAgICAgICdDYXRlZ29yeVR5cGUnLCB3MVxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcmllc1R5cGVSb3cge1xyXG4gICAgICAgIENhdGVnb3J5VHlwZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIFR5cGU/OiBudW1iZXI7XHJcbiAgICAgICAgQ2F0ZWdvcnlUeXBlPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgQ2F0ZWdvcmllc1R5cGVSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ0NhdGVnb3J5VHlwZUlkJztcclxuICAgICAgICBleHBvcnQgY29uc3QgaXNBY3RpdmVQcm9wZXJ0eSA9ICdJc0FjdGl2ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IG5hbWVQcm9wZXJ0eSA9ICdUeXBlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9jYWxUZXh0UHJlZml4ID0gJ1N0b3JlLkNhdGVnb3JpZXNUeXBlJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1N0b3JlLkNhdGVnb3JpZXNUeXBlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGZ1bmN0aW9uIGdldExvb2t1cCgpOiBRLkxvb2t1cDxDYXRlZ29yaWVzVHlwZVJvdz4ge1xyXG4gICAgICAgICAgICByZXR1cm4gUS5nZXRMb29rdXA8Q2F0ZWdvcmllc1R5cGVSb3c+KCdTdG9yZS5DYXRlZ29yaWVzVHlwZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBleHBvcnQgY29uc3QgZGVsZXRlUGVybWlzc2lvbiA9ICdTdG9yZTpDYXRlZ29yaWVzVHlwZTpEZWxldGUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpbnNlcnRQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXNUeXBlOk1vZGlmeSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXNUeXBlOlZpZXcnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1N0b3JlOkNhdGVnb3JpZXNUeXBlOk1vZGlmeSc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gRmllbGRzIHtcclxuICAgICAgICAgICAgQ2F0ZWdvcnlUeXBlSWQgPSBcIkNhdGVnb3J5VHlwZUlkXCIsXHJcbiAgICAgICAgICAgIFR5cGUgPSBcIlR5cGVcIixcclxuICAgICAgICAgICAgQ2F0ZWdvcnlUeXBlID0gXCJDYXRlZ29yeVR5cGVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDYXRlZ29yaWVzVHlwZVNlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1N0b3JlL0NhdGVnb3JpZXNUeXBlJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PENhdGVnb3JpZXNUeXBlUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8Q2F0ZWdvcmllc1R5cGVSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8Q2F0ZWdvcmllc1R5cGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8Q2F0ZWdvcmllc1R5cGVSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllc1R5cGUvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllc1R5cGUvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvQ2F0ZWdvcmllc1R5cGUvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTdG9yZS9DYXRlZ29yaWVzVHlwZS9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdG9yZS9DYXRlZ29yaWVzVHlwZS9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+Q2F0ZWdvcmllc1R5cGVTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgUGVybWlzc2lvbktleXMge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBHZW5lcmFsID0gXCJTdG9yZTpHZW5lcmFsXCI7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBDYXRlZ29yaWVzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6Q2F0ZWdvcmllczpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiU3RvcmU6Q2F0ZWdvcmllczpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIlN0b3JlOkNhdGVnb3JpZXM6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENhdGVnb3JpZXNUeXBlIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6Q2F0ZWdvcmllc1R5cGU6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIlN0b3JlOkNhdGVnb3JpZXNUeXBlOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6Q2F0ZWdvcmllc1R5cGU6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFNob3BzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6U2hvcHM6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIlN0b3JlOlNob3BzOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6U2hvcHM6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERvY3VtZW50VHlwZSB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIlN0b3JlOkRvY3VtZW50VHlwZTpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiU3RvcmU6RG9jdW1lbnRUeXBlOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6RG9jdW1lbnRUeXBlOlZpZXdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZWFzdXJlcyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEZWxldGUgPSBcIlN0b3JlOk1lYXN1cmVzOkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJTdG9yZTpNZWFzdXJlczpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIlN0b3JlOk1lYXN1cmVzOlZpZXdcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBPcGVyYXRpb25UeXBlIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6T3BlcmF0aW9uVHlwZTpEZWxldGVcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE1vZGlmeSA9IFwiU3RvcmU6T3BlcmF0aW9uVHlwZTpNb2RpZnlcIjtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFZpZXcgPSBcIlN0b3JlOk9wZXJhdGlvblR5cGU6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIENvdW50ZXJwYXJ0aWVzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6Q291bnRlcnBhcnR5OkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJTdG9yZTpDb3VudGVycGFydHk6TW9kaWZ5XCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBWaWV3ID0gXCJTdG9yZTpDb3VudGVycGFydHk6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFdhcmVzIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZSA9IFwiU3RvcmU6V2FyZXM6RGVsZXRlXCI7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBNb2RpZnkgPSBcIlN0b3JlOldhcmVzOk1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6V2FyZXM6Vmlld1wiO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFByb2R1Y3Qge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRGVsZXRlID0gXCJTdG9yZTpQcm9kdWN0OkRlbGV0ZVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTW9kaWZ5ID0gXCJTdG9yZTpQcm9kdWN0Ok1vZGlmeVwiO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVmlldyA9IFwiU3RvcmU6UHJvZHVjdDpWaWV3XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5UZXh0cyB7XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgRGIge1xyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQWRtaW5pc3RyYXRpb24ge1xyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIExhbmd1YWdlIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhbmd1YWdlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYW5ndWFnZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVOYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50SWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUm9sZVBlcm1pc3Npb25JZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVSb2xlTmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVGVuYW50IHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudE5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmFtZXNwYWNlIFRyYW5zbGF0aW9uIHtcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDdXN0b21UZXh0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRW50aXR5UGx1cmFsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgT3ZlcnJpZGVDb25maXJtYXRpb246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlQ2hhbmdlc0J1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZUxhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU291cmNlVGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRhcmdldExhbmd1YWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGFyZ2V0VGV4dDogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlciB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRGlzcGxheU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydERhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnRVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJc0FjdGl2ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExhc3REaXJlY3RvcnlVcGRhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkQ29uZmlybTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkSGFzaDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBhc3N3b3JkU2FsdDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvdXJjZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRlbmFudElkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVGVuYW50TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySW1hZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclBlcm1pc3Npb24ge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdyYW50ZWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQZXJtaXNzaW9uS2V5OiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXJQZXJtaXNzaW9uSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VybmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgVXNlclJvbGUge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJvbGVJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVzZXI6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVc2VyUm9sZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXNlcm5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFN0b3JlIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDYXRlZ29yaWVzVHlwZSB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlUeXBlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQ2F0ZWdvcnlUeXBlSWQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBJbnNlcnREYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0VXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSXNBY3RpdmU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFR5cGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVEYXRlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgVXBkYXRlVXNlcklkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBNZWFzdXJlcyB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgSW5zZXJ0RGF0ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEluc2VydFVzZXJJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IElzQWN0aXZlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWVhc3VyZUlkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgTWVhc3VyZU5hbWU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUZW5hbnRJZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFVwZGF0ZURhdGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBVcGRhdGVVc2VySWQ6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBGb3JtcyB7XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBNZW1iZXJzaGlwIHtcclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBDaGFuZ2VQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybVRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VibWl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgRm9yZ290UGFzc3dvcmQge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEJhY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBMb2dpbiB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRmFjZWJvb2tCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3Jnb3RQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdvb2dsZUJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IExvZ2luVG9Zb3VyQWNjb3VudDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE9SOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgUmVtZW1iZXJNZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25JbkJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNpZ25VcEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuYW1lc3BhY2UgUmVzZXRQYXNzd29yZCB7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWJtaXRCdXR0b246IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTdWNjZXNzOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSBTaWduVXAge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEFjY2VwdFRlcm1zOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQWN0aXZhdGVFbWFpbFN1YmplY3Q6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBY3RpdmF0aW9uQ29tcGxldGVNZXNzYWdlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgQmFja1RvTG9naW46IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtRW1haWw6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtUGFzc3dvcmQ6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaXNwbGF5TmFtZTogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBleHBvcnQgY29uc3QgRm9ybUluZm86IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb3JtVGl0bGU6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYXNzd29yZDogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Ym1pdEJ1dHRvbjogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBOYXZpZ2F0aW9uIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgTG9nb3V0TGluazogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBTaXRlVGl0bGU6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBkZWNsYXJlIG5hbWVzcGFjZSBTaXRlIHtcclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIEFjY2Vzc0RlbmllZCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDbGlja1RvQ2hhbmdlVXNlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQ2xpY2tUb0xvZ2luOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBMYWNrUGVybWlzc2lvbnM6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdExvZ2dlZEluOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQYWdlVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBCYXNpY1Byb2dyZXNzRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IENhbmNlbFRpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBQbGVhc2VXYWl0OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuYW1lc3BhY2UgQnVsa1NlcnZpY2VBY3Rpb24ge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgQWxsSGFkRXJyb3JzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBBbGxTdWNjZXNzRm9ybWF0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb25maXJtYXRpb25Gb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEVycm9yQ291bnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IE5vdGhpbmdUb1Byb2Nlc3M6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFNvbWVIYWRFcnJvcnNGb3JtYXQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFN1Y2Nlc3NDb3VudDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIERhc2hib2FyZCB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBDb250ZW50RGVzY3JpcHRpb246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBMYXlvdXQge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRm9vdGVyQ29weXJpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJJbmZvOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBGb290ZXJSaWdodHM6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IEdlbmVyYWxTZXR0aW5nczogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgTGFuZ3VhZ2U6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZUJsYWNrTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lQmx1ZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVCbHVlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW46IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lR3JlZW5MaWdodDogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVQdXJwbGU6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUHVycGxlTGlnaHQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFRoZW1lUmVkOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVJlZExpZ2h0OiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBUaGVtZVllbGxvdzogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGhlbWVZZWxsb3dMaWdodDogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFJvbGVQZXJtaXNzaW9uRGlhbG9nIHtcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IERpYWxvZ1RpdGxlOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0QnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBTYXZlU3VjY2Vzczogc3RyaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmFtZXNwYWNlIFVzZXJEaWFsb2cge1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgRWRpdFBlcm1pc3Npb25zQnV0dG9uOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBFZGl0Um9sZXNCdXR0b246IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgR3JhbnQ6IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFBlcm1pc3Npb246IHN0cmluZztcclxuICAgICAgICAgICAgZXhwb3J0IGNvbnN0IFJldm9rZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBVc2VyUm9sZURpYWxvZyB7XHJcbiAgICAgICAgICAgIGV4cG9ydCBjb25zdCBEaWFsb2dUaXRsZTogc3RyaW5nO1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgU2F2ZVN1Y2Nlc3M6IHN0cmluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5hbWVzcGFjZSBWYWxpZGF0aW9uRXJyb3Ige1xyXG4gICAgICAgICAgICBleHBvcnQgY29uc3QgVGl0bGU6IHN0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVjbGFyZSBuYW1lc3BhY2UgVmFsaWRhdGlvbiB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEF1dGhlbnRpY2F0aW9uRXJyb3I6IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgQ2FudEZpbmRVc2VyV2l0aEVtYWlsOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IERlbGV0ZUZvcmVpZ25LZXlFcnJvcjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBFbWFpbENvbmZpcm06IHN0cmluZztcclxuICAgICAgICBleHBvcnQgY29uc3QgRW1haWxJblVzZTogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkQWN0aXZhdGVUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBJbnZhbGlkUmVzZXRUb2tlbjogc3RyaW5nO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOiBzdHJpbmc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IFNhdmVQcmltYXJ5S2V5RXJyb3I6IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBTdG9yZVsnVGV4dHMnXSA9IFEucHJveHlUZXh0cyhUZXh0cywgJycsIHtEYjp7QWRtaW5pc3RyYXRpb246e0xhbmd1YWdlOntJZDoxLExhbmd1YWdlSWQ6MSxMYW5ndWFnZU5hbWU6MX0sUm9sZTp7Um9sZUlkOjEsUm9sZU5hbWU6MSxUZW5hbnRJZDoxfSxSb2xlUGVybWlzc2lvbjp7UGVybWlzc2lvbktleToxLFJvbGVJZDoxLFJvbGVQZXJtaXNzaW9uSWQ6MSxSb2xlUm9sZU5hbWU6MX0sVGVuYW50OntUZW5hbnRJZDoxLFRlbmFudE5hbWU6MX0sVHJhbnNsYXRpb246e0N1c3RvbVRleHQ6MSxFbnRpdHlQbHVyYWw6MSxLZXk6MSxPdmVycmlkZUNvbmZpcm1hdGlvbjoxLFNhdmVDaGFuZ2VzQnV0dG9uOjEsU291cmNlTGFuZ3VhZ2U6MSxTb3VyY2VUZXh0OjEsVGFyZ2V0TGFuZ3VhZ2U6MSxUYXJnZXRUZXh0OjF9LFVzZXI6e0Rpc3BsYXlOYW1lOjEsRW1haWw6MSxJbnNlcnREYXRlOjEsSW5zZXJ0VXNlcklkOjEsSXNBY3RpdmU6MSxMYXN0RGlyZWN0b3J5VXBkYXRlOjEsUGFzc3dvcmQ6MSxQYXNzd29yZENvbmZpcm06MSxQYXNzd29yZEhhc2g6MSxQYXNzd29yZFNhbHQ6MSxTb3VyY2U6MSxUZW5hbnRJZDoxLFRlbmFudE5hbWU6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjEsVXNlcklkOjEsVXNlckltYWdlOjEsVXNlcm5hbWU6MX0sVXNlclBlcm1pc3Npb246e0dyYW50ZWQ6MSxQZXJtaXNzaW9uS2V5OjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJQZXJtaXNzaW9uSWQ6MSxVc2VybmFtZToxfSxVc2VyUm9sZTp7Um9sZUlkOjEsVXNlcjoxLFVzZXJJZDoxLFVzZXJSb2xlSWQ6MSxVc2VybmFtZToxfX0sU3RvcmU6e0NhdGVnb3JpZXNUeXBlOntDYXRlZ29yeVR5cGU6MSxDYXRlZ29yeVR5cGVJZDoxLEluc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLFRlbmFudElkOjEsVHlwZToxLFVwZGF0ZURhdGU6MSxVcGRhdGVVc2VySWQ6MX0sTWVhc3VyZXM6e0luc2VydERhdGU6MSxJbnNlcnRVc2VySWQ6MSxJc0FjdGl2ZToxLE1lYXN1cmVJZDoxLE1lYXN1cmVOYW1lOjEsVGVuYW50SWQ6MSxVcGRhdGVEYXRlOjEsVXBkYXRlVXNlcklkOjF9fX0sRm9ybXM6e01lbWJlcnNoaXA6e0NoYW5nZVBhc3N3b3JkOntGb3JtVGl0bGU6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9LEZvcmdvdFBhc3N3b3JkOntCYWNrVG9Mb2dpbjoxLEZvcm1JbmZvOjEsRm9ybVRpdGxlOjEsU3VibWl0QnV0dG9uOjEsU3VjY2VzczoxfSxMb2dpbjp7RmFjZWJvb2tCdXR0b246MSxGb3Jnb3RQYXNzd29yZDoxLEdvb2dsZUJ1dHRvbjoxLExvZ2luVG9Zb3VyQWNjb3VudDoxLE9SOjEsUmVtZW1iZXJNZToxLFNpZ25JbkJ1dHRvbjoxLFNpZ25VcEJ1dHRvbjoxfSxSZXNldFBhc3N3b3JkOntCYWNrVG9Mb2dpbjoxLEVtYWlsU3ViamVjdDoxLEZvcm1UaXRsZToxLFN1Ym1pdEJ1dHRvbjoxLFN1Y2Nlc3M6MX0sU2lnblVwOntBY2NlcHRUZXJtczoxLEFjdGl2YXRlRW1haWxTdWJqZWN0OjEsQWN0aXZhdGlvbkNvbXBsZXRlTWVzc2FnZToxLEJhY2tUb0xvZ2luOjEsQ29uZmlybUVtYWlsOjEsQ29uZmlybVBhc3N3b3JkOjEsRGlzcGxheU5hbWU6MSxFbWFpbDoxLEZvcm1JbmZvOjEsRm9ybVRpdGxlOjEsUGFzc3dvcmQ6MSxTdWJtaXRCdXR0b246MSxTdWNjZXNzOjF9fX0sTmF2aWdhdGlvbjp7TG9nb3V0TGluazoxLFNpdGVUaXRsZToxfSxTaXRlOntBY2Nlc3NEZW5pZWQ6e0NsaWNrVG9DaGFuZ2VVc2VyOjEsQ2xpY2tUb0xvZ2luOjEsTGFja1Blcm1pc3Npb25zOjEsTm90TG9nZ2VkSW46MSxQYWdlVGl0bGU6MX0sQmFzaWNQcm9ncmVzc0RpYWxvZzp7Q2FuY2VsVGl0bGU6MSxQbGVhc2VXYWl0OjF9LEJ1bGtTZXJ2aWNlQWN0aW9uOntBbGxIYWRFcnJvcnNGb3JtYXQ6MSxBbGxTdWNjZXNzRm9ybWF0OjEsQ29uZmlybWF0aW9uRm9ybWF0OjEsRXJyb3JDb3VudDoxLE5vdGhpbmdUb1Byb2Nlc3M6MSxTb21lSGFkRXJyb3JzRm9ybWF0OjEsU3VjY2Vzc0NvdW50OjF9LERhc2hib2FyZDp7Q29udGVudERlc2NyaXB0aW9uOjF9LExheW91dDp7Rm9vdGVyQ29weXJpZ2h0OjEsRm9vdGVySW5mbzoxLEZvb3RlclJpZ2h0czoxLEdlbmVyYWxTZXR0aW5nczoxLExhbmd1YWdlOjEsVGhlbWU6MSxUaGVtZUJsYWNrOjEsVGhlbWVCbGFja0xpZ2h0OjEsVGhlbWVCbHVlOjEsVGhlbWVCbHVlTGlnaHQ6MSxUaGVtZUdyZWVuOjEsVGhlbWVHcmVlbkxpZ2h0OjEsVGhlbWVQdXJwbGU6MSxUaGVtZVB1cnBsZUxpZ2h0OjEsVGhlbWVSZWQ6MSxUaGVtZVJlZExpZ2h0OjEsVGhlbWVZZWxsb3c6MSxUaGVtZVllbGxvd0xpZ2h0OjF9LFJvbGVQZXJtaXNzaW9uRGlhbG9nOntEaWFsb2dUaXRsZToxLEVkaXRCdXR0b246MSxTYXZlU3VjY2VzczoxfSxVc2VyRGlhbG9nOntFZGl0UGVybWlzc2lvbnNCdXR0b246MSxFZGl0Um9sZXNCdXR0b246MX0sVXNlclBlcm1pc3Npb25EaWFsb2c6e0RpYWxvZ1RpdGxlOjEsR3JhbnQ6MSxQZXJtaXNzaW9uOjEsUmV2b2tlOjEsU2F2ZVN1Y2Nlc3M6MX0sVXNlclJvbGVEaWFsb2c6e0RpYWxvZ1RpdGxlOjEsU2F2ZVN1Y2Nlc3M6MX0sVmFsaWRhdGlvbkVycm9yOntUaXRsZToxfX0sVmFsaWRhdGlvbjp7QXV0aGVudGljYXRpb25FcnJvcjoxLENhbnRGaW5kVXNlcldpdGhFbWFpbDoxLEN1cnJlbnRQYXNzd29yZE1pc21hdGNoOjEsRGVsZXRlRm9yZWlnbktleUVycm9yOjEsRW1haWxDb25maXJtOjEsRW1haWxJblVzZToxLEludmFsaWRBY3RpdmF0ZVRva2VuOjEsSW52YWxpZFJlc2V0VG9rZW46MSxNaW5SZXF1aXJlZFBhc3N3b3JkTGVuZ3RoOjEsU2F2ZVByaW1hcnlLZXlFcnJvcjoxfX0pO1xyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTGFuZ3VhZ2VEaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8TGFuZ3VhZ2VSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTGFuZ3VhZ2VGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93Lm5hbWVQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gTGFuZ3VhZ2VTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgTGFuZ3VhZ2VGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBMYW5ndWFnZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPExhbmd1YWdlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuIFwiQWRtaW5pc3RyYXRpb24uTGFuZ3VhZ2VcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gTGFuZ3VhZ2VEaWFsb2c7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIExhbmd1YWdlUm93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gTGFuZ3VhZ2VSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBMYW5ndWFnZVNlcnZpY2UuYmFzZVVybDsgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlZmF1bHRTb3J0QnkoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbTGFuZ3VhZ2VSb3cuRmllbGRzLkxhbmd1YWdlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPFJvbGVSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gUm9sZUZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFJvbGVSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFJvbGVGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuUm9sZVBlcm1pc3Npb25EaWFsb2cuRWRpdEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdlZGl0LXBlcm1pc3Npb25zLWJ1dHRvbicsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEtbG9jayB0ZXh0LWdyZWVuJyxcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFJvbGVQZXJtaXNzaW9uRGlhbG9nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9sZUlEOiB0aGlzLmVudGl0eS5Sb2xlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmVudGl0eS5Sb2xlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pLmRpYWxvZ09wZW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYnV0dG9ucztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1cGRhdGVJbnRlcmZhY2UoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnVwZGF0ZUludGVyZmFjZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50b29sYmFyLmZpbmRCdXR0b24oXCJlZGl0LXBlcm1pc3Npb25zLWJ1dHRvblwiKS50b2dnbGVDbGFzcyhcImRpc2FibGVkXCIsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8Um9sZVJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlJvbGVcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gUm9sZURpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gUm9sZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFJvbGVSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBSb2xlU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtSb2xlUm93LkZpZWxkcy5Sb2xlTmFtZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSb2xlUGVybWlzc2lvbkRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxSb2xlUGVybWlzc2lvbkRpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUGVybWlzc2lvbkNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFJvbGVQZXJtaXNzaW9uRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBQZXJtaXNzaW9uQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdQZXJtaXNzaW9ucycpLCB7XHJcbiAgICAgICAgICAgICAgICBzaG93UmV2b2tlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFJvbGVJRDogdGhpcy5vcHRpb25zLnJvbGVJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4gKDxVc2VyUGVybWlzc2lvblJvdz57IFBlcm1pc3Npb25LZXk6IHggfSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFJvbGVQZXJtaXNzaW9uU2VydmljZS5VcGRhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUm9sZUlEOiB0aGlzLm9wdGlvbnMucm9sZUlELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGVybWlzc2lvbnM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4geC5QZXJtaXNzaW9uS2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZ0Nsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlJvbGVQZXJtaXNzaW9uRGlhbG9nLlNhdmVTdWNjZXNzJykpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5DYW5jZWxCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XTtcclxuXHJcbiAgICAgICAgICAgIG9wdC50aXRsZSA9IFEuZm9ybWF0KFEudGV4dCgnU2l0ZS5Sb2xlUGVybWlzc2lvbkRpYWxvZy5EaWFsb2dUaXRsZScpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLnRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuICc8ZGl2IGlkPVwifl9QZXJtaXNzaW9uc1wiPjwvZGl2Pic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUm9sZVBlcm1pc3Npb25EaWFsb2dPcHRpb25zIHtcclxuICAgICAgICByb2xlSUQ/OiBudW1iZXI7XHJcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUZW5hbnREaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlEaWFsb2c8VGVuYW50Um93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFRlbmFudEZvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGVuYW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGVuYW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBUZW5hbnRSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBUZW5hbnRTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZvcm0gPSBuZXcgVGVuYW50Rm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBUZW5hbnRHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUZW5hbnRSb3csIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zS2V5KCkgeyByZXR1cm4gJ0FkbWluaXN0cmF0aW9uLlRlbmFudCc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIFRlbmFudERpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVGVuYW50Um93LmlkUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVGVuYW50Um93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gVGVuYW50U2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtUZW5hbnRSb3cuRmllbGRzLlRlbmFudE5hbWVdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVHJhbnNsYXRpb25HcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxUcmFuc2xhdGlvbkl0ZW0sIGFueT4ge1xyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gXCJLZXlcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uXCI7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFRyYW5zbGF0aW9uU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgaGFzQ2hhbmdlczogYm9vbGVhbjtcclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIHNvdXJjZUxhbmd1YWdlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3I7IFxyXG4gICAgICAgIHByaXZhdGUgdGFyZ2V0TGFuZ3VhZ2U6IFNlcmVuaXR5Lkxvb2t1cEVkaXRvcjtcclxuICAgICAgICBwcml2YXRlIHRhcmdldExhbmd1YWdlS2V5OiBzdHJpbmc7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQub24oJ2tleXVwLicgKyB0aGlzLnVuaXF1ZU5hbWUgKyAnIGNoYW5nZS4nICsgdGhpcy51bmlxdWVOYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2lucHV0LmN1c3RvbS10ZXh0JywgZSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBRLnRyaW1Ub051bGwoJChlLnRhcmdldCkudmFsKCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5nZXRJdGVtQnlJZCgkKGUudGFyZ2V0KS5kYXRhKCdrZXknKSkuQ3VzdG9tVGV4dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgb25DbGljayhlOiBKUXVlcnlFdmVudE9iamVjdCwgcm93OiBudW1iZXIsIGNlbGw6IG51bWJlcik6IGFueSB7XHJcbiAgICAgICAgICAgIHN1cGVyLm9uQ2xpY2soZSwgcm93LCBjZWxsKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gdGhpcy5pdGVtQXQocm93KTtcclxuICAgICAgICAgICAgbGV0IGRvbmU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgICAgICAgICBpZiAoJChlLnRhcmdldCkuaGFzQ2xhc3MoJ3NvdXJjZS10ZXh0JykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlNvdXJjZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uU291cmNlVGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCQoZS50YXJnZXQpLmhhc0NsYXNzKCd0YXJnZXQtdGV4dCcpKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZG9uZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLkN1c3RvbVRleHQgPSBpdGVtLlRhcmdldFRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52aWV3LnVwZGF0ZUl0ZW0oaXRlbS5LZXksIGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChRLmlzVHJpbW1lZEVtcHR5KGl0ZW0uQ3VzdG9tVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoUS50cmltVG9FbXB0eShpdGVtLkN1c3RvbVRleHQpID09PSBRLnRyaW1Ub0VtcHR5KGl0ZW0uVGFyZ2V0VGV4dCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLmNvbmZpcm0oUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5PdmVycmlkZUNvbmZpcm1hdGlvbicpLCBkb25lKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnMoKTogU2xpY2suQ29sdW1uW10ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW107XHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7IGZpZWxkOiAnS2V5Jywgd2lkdGg6IDMwMCwgc29ydGFibGU6IGZhbHNlIH0pO1xyXG5cclxuICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGZpZWxkOiAnU291cmNlVGV4dCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxyXG4gICAgICAgICAgICAgICAgc29ydGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzb3VyY2UtdGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ZXh0KGN0eC52YWx1ZSB8fCAnJykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ0N1c3RvbVRleHQnLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwMCxcclxuICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogY3R4ID0+IFEub3V0ZXJIdG1sKCQoJzxpbnB1dC8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ2N1c3RvbS10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cigndmFsdWUnLCBjdHgudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEta2V5JywgY3R4Lml0ZW0uS2V5KSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZmllbGQ6ICdUYXJnZXRUZXh0JyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb3JtYXQ6IGN0eCA9PiBRLm91dGVySHRtbCgkKCc8YS8+JylcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3RhcmdldC10ZXh0JylcclxuICAgICAgICAgICAgICAgICAgICAudGV4dChjdHgudmFsdWUgfHwgJycpKVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5jcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpO1xyXG5cclxuICAgICAgICAgICAgbGV0IG9wdDogU2VyZW5pdHkuTG9va3VwRWRpdG9yT3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIGxvb2t1cEtleTogJ0FkbWluaXN0cmF0aW9uLkxhbmd1YWdlJ1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZSA9IFNlcmVuaXR5LldpZGdldC5jcmVhdGUoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogU2VyZW5pdHkuTG9va3VwRWRpdG9yLFxyXG4gICAgICAgICAgICAgICAgZWxlbWVudDogZWwgPT4gZWwuYXBwZW5kVG8odGhpcy50b29sYmFyLmVsZW1lbnQpLmF0dHIoJ3BsYWNlaG9sZGVyJywgJy0tLSAnICtcclxuICAgICAgICAgICAgICAgICAgICBRLnRleHQoJ0RiLkFkbWluaXN0cmF0aW9uLlRyYW5zbGF0aW9uLlNvdXJjZUxhbmd1YWdlJykgKyAnIC0tLScpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uczogb3B0XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zb3VyY2VMYW5ndWFnZS5jaGFuZ2VTZWxlY3QyKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ2hhbmdlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUNoYW5nZXModGhpcy50YXJnZXRMYW5ndWFnZUtleSkudGhlbigoKSA9PiB0aGlzLnJlZnJlc2goKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlID0gU2VyZW5pdHkuV2lkZ2V0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBTZXJlbml0eS5Mb29rdXBFZGl0b3IsXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50OiBlbCA9PiBlbC5hcHBlbmRUbyh0aGlzLnRvb2xiYXIuZWxlbWVudCkuYXR0cigncGxhY2Vob2xkZXInLCAnLS0tICcgK1xyXG4gICAgICAgICAgICAgICAgICAgIFEudGV4dCgnRGIuQWRtaW5pc3RyYXRpb24uVHJhbnNsYXRpb24uVGFyZ2V0TGFuZ3VhZ2UnKSArICcgLS0tJyksXHJcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBvcHRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldExhbmd1YWdlLmNoYW5nZVNlbGVjdDIoZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDaGFuZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlQ2hhbmdlcyh0aGlzLnRhcmdldExhbmd1YWdlS2V5KS50aGVuKCgpID0+IHRoaXMucmVmcmVzaCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBzYXZlQ2hhbmdlcyhsYW5ndWFnZTogc3RyaW5nKTogUHJvbWlzZUxpa2U8YW55PiB7XHJcbiAgICAgICAgICAgIHZhciB0cmFuc2xhdGlvbnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7fTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIHRyYW5zbGF0aW9uc1tpdGVtLktleV0gPSBpdGVtLkN1c3RvbVRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoVHJhbnNsYXRpb25TZXJ2aWNlLlVwZGF0ZSh7XHJcbiAgICAgICAgICAgICAgICBUYXJnZXRMYW5ndWFnZUlEOiBsYW5ndWFnZSxcclxuICAgICAgICAgICAgICAgIFRyYW5zbGF0aW9uczogdHJhbnNsYXRpb25zXHJcbiAgICAgICAgICAgIH0pKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2UgPSBRLnRyaW1Ub051bGwobGFuZ3VhZ2UpIHx8ICdpbnZhcmlhbnQnO1xyXG4gICAgICAgICAgICAgICAgUS5ub3RpZnlTdWNjZXNzKCdVc2VyIHRyYW5zbGF0aW9ucyBpbiBcIicgKyBsYW5ndWFnZSArXHJcbiAgICAgICAgICAgICAgICAgICAgJ1wiIGxhbmd1YWdlIGFyZSBzYXZlZCB0byBcInVzZXIudGV4dHMuJyArXHJcbiAgICAgICAgICAgICAgICAgICAgbGFuZ3VhZ2UgKyAnLmpzb25cIiAnICsgJ2ZpbGUgdW5kZXIgXCJ+L0FwcF9EYXRhL3RleHRzL1wiJywgJycpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy52aWV3LnBhcmFtcztcclxuICAgICAgICAgICAgcmVxdWVzdC5Tb3VyY2VMYW5ndWFnZUlEID0gdGhpcy5zb3VyY2VMYW5ndWFnZS52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRMYW5ndWFnZUtleSA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2UudmFsdWUgfHwgJyc7XHJcbiAgICAgICAgICAgIHJlcXVlc3QuVGFyZ2V0TGFuZ3VhZ2VJRCA9IHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIub25WaWV3U3VibWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKTogU2VyZW5pdHkuVG9vbEJ1dHRvbltdIHtcclxuICAgICAgICAgICAgcmV0dXJuIFt7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogUS50ZXh0KCdEYi5BZG1pbmlzdHJhdGlvbi5UcmFuc2xhdGlvbi5TYXZlQ2hhbmdlc0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgb25DbGljazogZSA9PiB0aGlzLnNhdmVDaGFuZ2VzKHRoaXMudGFyZ2V0TGFuZ3VhZ2VLZXkpLnRoZW4oKCkgPT4gdGhpcy5yZWZyZXNoKCkpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdhcHBseS1jaGFuZ2VzLWJ1dHRvbidcclxuICAgICAgICAgICAgfV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlUXVpY2tTZWFyY2hJbnB1dCgpIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuR3JpZFV0aWxzLmFkZFF1aWNrU2VhcmNoSW5wdXRDdXN0b20odGhpcy50b29sYmFyLmVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAoZmllbGQsIHNlYXJjaFRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaFRleHQgPSBzZWFyY2hUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogVHJhbnNsYXRpb25JdGVtKSB7XHJcbiAgICAgICAgICAgIGlmICghc3VwZXIub25WaWV3RmlsdGVyKGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNkID0gU2VsZWN0Mi51dGlsLnN0cmlwRGlhY3JpdGljcztcclxuICAgICAgICAgICAgdmFyIHNlYXJjaGluZyA9IHNkKHRoaXMuc2VhcmNoVGV4dCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIG1hdGNoKHN0cjogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0cilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoaW5nKSA+PSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUS5pc0VtcHR5T3JOdWxsKHNlYXJjaGluZykgfHwgbWF0Y2goaXRlbS5LZXkpIHx8IG1hdGNoKGl0ZW0uU291cmNlVGV4dCkgfHxcclxuICAgICAgICAgICAgICAgIG1hdGNoKGl0ZW0uVGFyZ2V0VGV4dCkgfHwgbWF0Y2goaXRlbS5DdXN0b21UZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCB1c2VQYWdlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlckRpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxVc2VyUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIFVzZXJGb3JtLmZvcm1LZXk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0SWRQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJc0FjdGl2ZVByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pc0FjdGl2ZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIFVzZXJSb3cubG9jYWxUZXh0UHJlZml4OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldE5hbWVQcm9wZXJ0eSgpIHsgcmV0dXJuIFVzZXJSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBVc2VyU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IFVzZXJGb3JtKHRoaXMuaWRQcmVmaXgpO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZS5sZW5ndGggPCA3KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNyBjaGFyYWN0ZXJzIVwiO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZENvbmZpcm0uYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uUGFzc3dvcmQudmFsdWUgIT0gdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJUaGUgcGFzc3dvcmRzIGVudGVyZWQgZG9lc24ndCBtYXRjaCFcIjtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VG9vbGJhckJ1dHRvbnMoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBzdXBlci5nZXRUb29sYmFyQnV0dG9ucygpO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0Um9sZXNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1yb2xlcy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLXVzZXJzIHRleHQtYmx1ZScsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUm9sZURpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYnV0dG9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBRLnRleHQoJ1NpdGUuVXNlckRpYWxvZy5FZGl0UGVybWlzc2lvbnNCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnZWRpdC1wZXJtaXNzaW9ucy1idXR0b24nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhLWxvY2sgdGV4dC1ncmVlbicsXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAoKSA9PlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBVc2VyUGVybWlzc2lvbkRpYWxvZyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJRDogdGhpcy5lbnRpdHkuVXNlcklkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5lbnRpdHkuVXNlcm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5kaWFsb2dPcGVuKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlSW50ZXJmYWNlKCkge1xyXG4gICAgICAgICAgICBzdXBlci51cGRhdGVJbnRlcmZhY2UoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKCdlZGl0LXJvbGVzLWJ1dHRvbicpLnRvZ2dsZUNsYXNzKCdkaXNhYmxlZCcsIHRoaXMuaXNOZXdPckRlbGV0ZWQoKSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbGJhci5maW5kQnV0dG9uKFwiZWRpdC1wZXJtaXNzaW9ucy1idXR0b25cIikudG9nZ2xlQ2xhc3MoXCJkaXNhYmxlZFwiLCB0aGlzLmlzTmV3T3JEZWxldGVkKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGFmdGVyTG9hZEVudGl0eSgpIHtcclxuICAgICAgICAgICAgc3VwZXIuYWZ0ZXJMb2FkRW50aXR5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0aGVzZSBmaWVsZHMgYXJlIG9ubHkgcmVxdWlyZWQgaW4gbmV3IHJlY29yZCBtb2RlXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybS5QYXNzd29yZC5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICAgICAgdGhpcy5mb3JtLlBhc3N3b3JkQ29uZmlybS5lbGVtZW50LnRvZ2dsZUNsYXNzKCdyZXF1aXJlZCcsIHRoaXMuaXNOZXcoKSlcclxuICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcuZmllbGQnKS5maW5kKCdzdXAnKS50b2dnbGUodGhpcy5pc05ldygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRQcm9wZXJ0eUl0ZW1zKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBzdXBlci5nZXRQcm9wZXJ0eUl0ZW1zKCk7XHJcbiAgICAgICAgICAgIGlmICghUS5BdXRob3JpemF0aW9uLmhhc1Blcm1pc3Npb24oXCJBZG1pbmlzdHJhdGlvbjpUZW5hbnRzXCIpKVxyXG4gICAgICAgICAgICAgICAgaXRlbXMgPSBpdGVtcy5maWx0ZXIoeCA9PiB4Lm5hbWUgIT0gVXNlclJvdy5GaWVsZHMuVGVuYW50SWQpO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyR3JpZCBleHRlbmRzIFNlcmVuaXR5LkVudGl0eUdyaWQ8VXNlclJvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiBcIkFkbWluaXN0cmF0aW9uLlVzZXJcIjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREaWFsb2dUeXBlKCkgeyByZXR1cm4gVXNlckRpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gVXNlclJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElzQWN0aXZlUHJvcGVydHkoKSB7IHJldHVybiBVc2VyUm93LmlzQWN0aXZlUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TG9jYWxUZXh0UHJlZml4KCkgeyByZXR1cm4gVXNlclJvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIFVzZXJTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW1VzZXJSb3cuRmllbGRzLlVzZXJuYW1lXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuQXV0aG9yaXphdGlvbiB7XHJcbiAgICBleHBvcnQgZGVjbGFyZSBsZXQgdXNlckRlZmluaXRpb246IFNjcmlwdFVzZXJEZWZpbml0aW9uO1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBdXRob3JpemF0aW9uLCAndXNlckRlZmluaXRpb24nLCB7XHJcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldFJlbW90ZURhdGEoJ1VzZXJEYXRhJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGhhc1Blcm1pc3Npb24ocGVybWlzc2lvbktleTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIFEuQXV0aG9yaXphdGlvbi5oYXNQZXJtaXNzaW9uKHBlcm1pc3Npb25LZXkpO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoW1NlcmVuaXR5LklHZXRFZGl0VmFsdWUsIFNlcmVuaXR5LklTZXRFZGl0VmFsdWVdKVxyXG4gICAgZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25DaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkRhdGFHcmlkPFBlcm1pc3Npb25DaGVja0l0ZW0sIFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBcIktleVwiOyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgc2VhcmNoVGV4dDogc3RyaW5nO1xyXG4gICAgICAgIHByaXZhdGUgYnlQYXJlbnRLZXk6IFEuR3JvdXBpbmc8UGVybWlzc2lvbkNoZWNrSXRlbT47XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5LCBvcHQ6IFBlcm1pc3Npb25DaGVja0VkaXRvck9wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyLCBvcHQpO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpdGxlQnlLZXk6IFEuRGljdGlvbmFyeTxzdHJpbmc+ID0ge307XHJcbiAgICAgICAgICAgIGxldCBwZXJtaXNzaW9uS2V5cyA9IHRoaXMuZ2V0U29ydGVkR3JvdXBBbmRQZXJtaXNzaW9uS2V5cyh0aXRsZUJ5S2V5KTtcclxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcGVybWlzc2lvbktleXMubWFwKGtleSA9PiA8UGVybWlzc2lvbkNoZWNrSXRlbT57XHJcbiAgICAgICAgICAgICAgICBLZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIFBhcmVudEtleTogdGhpcy5nZXRQYXJlbnRLZXkoa2V5KSxcclxuICAgICAgICAgICAgICAgIFRpdGxlOiB0aXRsZUJ5S2V5W2tleV0sXHJcbiAgICAgICAgICAgICAgICBHcmFudFJldm9rZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIElzR3JvdXA6IGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5UGFyZW50S2V5ID0gUS50b0dyb3VwaW5nKGl0ZW1zLCB4ID0+IHguUGFyZW50S2V5KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyhpdGVtcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGdyYW50OiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtLklzR3JvdXApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKGl0ZW0uR3JhbnRSZXZva2UgPT09IGdyYW50KSA/ICcgY2hlY2tlZCcgOiAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBkZXNjID0gdGhpcy5nZXREZXNjZW5kYW50cyhpdGVtLCB0cnVlKTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ZWQgPSBkZXNjLmZpbHRlcih4ID0+IHguR3JhbnRSZXZva2UgPT09IGdyYW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZ3JhbnRlZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAnJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlc2MubGVuZ3RoID09PSBncmFudGVkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkIHBhcnRpYWwnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSByb2xlT3JJbXBsaWNpdChrZXkpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3JvbGVQZXJtaXNzaW9uc1trZXldKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHRoaXMuX3JvbGVQZXJtaXNzaW9ucykpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXTtcclxuICAgICAgICAgICAgICAgIGlmIChkICYmIGRba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSBvZiBPYmplY3Qua2V5cyh0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQoaSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbSAmJiBpdGVtLkdyYW50UmV2b2tlID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGQgJiYgZFtrZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IHN0cmluZyB7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVzYyA9IHRoaXMuZ2V0RGVzY2VuZGFudHMoaXRlbSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZ3JhbnRDb3VudCA9IFEuY291bnQoZGVzYywgeCA9PiB4LkdyYW50UmV2b2tlID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKHguR3JhbnRSZXZva2UgPT0gbnVsbCAmJiB0aGlzLnJvbGVPckltcGxpY2l0KHguS2V5KSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSBkZXNjLmxlbmd0aCB8fCBkZXNjLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYWxsb3cnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChncmFudENvdW50ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkZW55JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3BhcnRpYWwnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgZ3JhbnRlZCA9IGl0ZW0uR3JhbnRSZXZva2UgPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgIChpdGVtLkdyYW50UmV2b2tlID09IG51bGwgJiYgdGhpcy5yb2xlT3JJbXBsaWNpdChpdGVtLktleSkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIChncmFudGVkID8gJyBhbGxvdycgOiAnIGRlbnknKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRDb2x1bW5zKCk6IFNsaWNrLkNvbHVtbltdIHtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbnM6IFNsaWNrLkNvbHVtbltdID0gW3tcclxuICAgICAgICAgICAgICAgIG5hbWU6IFEudGV4dCgnU2l0ZS5Vc2VyUGVybWlzc2lvbkRpYWxvZy5QZXJtaXNzaW9uJyksXHJcbiAgICAgICAgICAgICAgICBmaWVsZDogJ1RpdGxlJyxcclxuICAgICAgICAgICAgICAgIGZvcm1hdDogU2VyZW5pdHkuU2xpY2tGb3JtYXR0aW5nLnRyZWVUb2dnbGUoKCkgPT4gdGhpcy52aWV3LCB4ID0+IHguS2V5LCBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gY3R4Lml0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzID0gdGhpcy5nZXRJdGVtRWZmZWN0aXZlQ2xhc3MoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImVmZmVjdGl2ZS1wZXJtaXNzaW9uICcgKyBrbGFzcyArICdcIj4nICsgUS5odG1sRW5jb2RlKGN0eC52YWx1ZSkgKyAnPC9zcGFuPic7XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0OTUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2VcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkdyYW50JyksIGZpZWxkOiAnR3JhbnQnLFxyXG4gICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGN0eC5pdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBrbGFzczEgPSB0aGlzLmdldEl0ZW1HcmFudFJldm9rZUNsYXNzKGl0ZW0xLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI8c3BhbiBjbGFzcz0nY2hlY2stYm94IGdyYW50IG5vLWZsb2F0IFwiICsga2xhc3MxICsgXCInPjwvc3Bhbj5cIjtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUsXHJcbiAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJDc3NDbGFzczogJ2FsaWduLWNlbnRlcicsXHJcbiAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2FsaWduLWNlbnRlcidcclxuICAgICAgICAgICAgfV07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLnNob3dSZXZva2UpIHtcclxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLlJldm9rZScpLCBmaWVsZDogJ1Jldm9rZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBjdHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBjdHguaXRlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtsYXNzMiA9IHRoaXMuZ2V0SXRlbUdyYW50UmV2b2tlQ2xhc3MoaXRlbTIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cImNoZWNrLWJveCByZXZva2Ugbm8tZmxvYXQgJyArIGtsYXNzMiArICdcIj48L3NwYW4+JztcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2NSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyQ3NzQ2xhc3M6ICdhbGlnbi1jZW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgIGNzc0NsYXNzOiAnYWxpZ24tY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHNldEl0ZW1zKGl0ZW1zOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10pOiB2b2lkIHtcclxuICAgICAgICAgICAgU2VyZW5pdHkuU2xpY2tUcmVlSGVscGVyLnNldEluZGVudHMoaXRlbXMsIHggPT4geC5LZXksIHggPT4geC5QYXJlbnRLZXksIGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKGl0ZW1zLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdTdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvblZpZXdGaWx0ZXIoaXRlbTogUGVybWlzc2lvbkNoZWNrSXRlbSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICBpZiAoIXN1cGVyLm9uVmlld0ZpbHRlcihpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIVNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci5maWx0ZXJCeUlkKGl0ZW0sIHRoaXMudmlldywgeCA9PiB4LlBhcmVudEtleSkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWFyY2hUZXh0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tYXRjaENvbnRhaW5zKGl0ZW0pIHx8IGl0ZW0uSXNHcm91cCAmJiBRLmFueSh0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIGZhbHNlKSwgeCA9PiB0aGlzLm1hdGNoQ29udGFpbnMoeCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgbWF0Y2hDb250YWlucyhpdGVtOiBQZXJtaXNzaW9uQ2hlY2tJdGVtKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKGl0ZW0uVGl0bGUgfHwgJycpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0aGlzLnNlYXJjaFRleHQpID49IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldERlc2NlbmRhbnRzKGl0ZW06IFBlcm1pc3Npb25DaGVja0l0ZW0sIGV4Y2x1ZGVHcm91cHM6IGJvb2xlYW4pOiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10ge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBQZXJtaXNzaW9uQ2hlY2tJdGVtW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IHN0YWNrID0gW2l0ZW1dO1xyXG4gICAgICAgICAgICB3aGlsZSAoc3RhY2subGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGkgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZHJlbiA9IHRoaXMuYnlQYXJlbnRLZXlbaS5LZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjaGlsZHJlbilcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhjbHVkZUdyb3VwcyB8fCAhY2hpbGQuSXNHcm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBvbkNsaWNrKGUsIHJvdywgY2VsbCk6IHZvaWQge1xyXG4gICAgICAgICAgICBzdXBlci5vbkNsaWNrKGUsIHJvdywgY2VsbCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWUuaXNEZWZhdWx0UHJldmVudGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIFNlcmVuaXR5LlNsaWNrVHJlZUhlbHBlci50b2dnbGVDbGljayhlLCByb3csIGNlbGwsIHRoaXMudmlldywgeCA9PiB4LktleSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSAkKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgbGV0IGdyYW50ID0gdGFyZ2V0Lmhhc0NsYXNzKCdncmFudCcpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdyYW50IHx8IHRhcmdldC5oYXNDbGFzcygncmV2b2tlJykpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IHRoaXMuaXRlbUF0KHJvdyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hlY2tlZE9yUGFydGlhbCA9IHRhcmdldC5oYXNDbGFzcygnY2hlY2tlZCcpIHx8IHRhcmdldC5oYXNDbGFzcygncGFydGlhbCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2VkT3JQYXJ0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JhbnQgPSBncmFudCAhPT0gY2hlY2tlZE9yUGFydGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5Jc0dyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgZCBvZiB0aGlzLmdldERlc2NlbmRhbnRzKGl0ZW0sIHRydWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQuR3JhbnRSZXZva2UgPSBncmFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5HcmFudFJldm9rZSA9IGdyYW50O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2xpY2tHcmlkLmludmFsaWRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBnZXRQYXJlbnRLZXkoa2V5KTogc3RyaW5nIHtcclxuICAgICAgICAgICAgaWYgKGtleS5jaGFyQXQoa2V5Lmxlbmd0aCAtIDEpID09PSAnOicpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5zdWJzdHIoMCwga2V5Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgaWR4ID0ga2V5Lmxhc3RJbmRleE9mKCc6Jyk7XHJcbiAgICAgICAgICAgIGlmIChpZHggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleS5zdWJzdHIoMCwgaWR4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0QnV0dG9ucygpOiBTZXJlbml0eS5Ub29sQnV0dG9uW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgICAgIHN1cGVyLmNyZWF0ZVRvb2xiYXJFeHRlbnNpb25zKCk7XHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS50cmltVG9OdWxsKHRleHQpIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aWV3LnNldEl0ZW1zKHRoaXMudmlldy5nZXRJdGVtcygpLCB0cnVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGdldFNvcnRlZEdyb3VwQW5kUGVybWlzc2lvbktleXModGl0bGVCeUtleTogUS5EaWN0aW9uYXJ5PHN0cmluZz4pOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgICAgIGxldCBrZXlzID0gPHN0cmluZ1tdPlEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uUGVybWlzc2lvbktleXMnKTtcclxuICAgICAgICAgICAgbGV0IHRpdGxlV2l0aEdyb3VwID0ge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgbGV0IHMgPSBrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzLmNoYXJBdChzLmxlbmd0aCAtIDEpID09ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHMgPSBzLnN1YnN0cigwLCBzLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRpdGxlQnlLZXlbc10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUJ5S2V5W3NdID0gUS5jb2FsZXNjZShRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIHMpLCBzKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJ0cyA9IHMuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgIGxldCBncm91cCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyb3VwVGl0bGUgPSAnJztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBncm91cCArIHBhcnRzW2ldICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0eHQgPSBRLnRyeUdldFRleHQoJ1Blcm1pc3Npb24uJyArIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHh0ID0gcGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlQnlLZXlbZ3JvdXBdID0gdHh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwVGl0bGUgPSBncm91cFRpdGxlICsgdGl0bGVCeUtleVtncm91cF0gKyAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVXaXRoR3JvdXBbZ3JvdXBdID0gZ3JvdXBUaXRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZVdpdGhHcm91cFtzXSA9IGdyb3VwVGl0bGUgKyB0aXRsZUJ5S2V5W3NdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBrZXlzID0gT2JqZWN0LmtleXModGl0bGVCeUtleSk7XHJcbiAgICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKHgsIHkpID0+IFEudHVya2lzaExvY2FsZUNvbXBhcmUodGl0bGVXaXRoR3JvdXBbeF0sIHRpdGxlV2l0aEdyb3VwW3ldKSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZSgpOiBVc2VyUGVybWlzc2lvblJvd1tdIHtcclxuXHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IFVzZXJQZXJtaXNzaW9uUm93W10gPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLkdyYW50UmV2b2tlICE9IG51bGwgJiYgaXRlbS5LZXkuY2hhckF0KGl0ZW0uS2V5Lmxlbmd0aCAtIDEpICE9ICc6Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHsgUGVybWlzc2lvbktleTogaXRlbS5LZXksIEdyYW50ZWQ6IGl0ZW0uR3JhbnRSZXZva2UgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFVzZXJQZXJtaXNzaW9uUm93W10pIHtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy52aWV3LmdldEl0ZW1zKCkpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uR3JhbnRSZXZva2UgPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcm93IG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHIgPSB0aGlzLnZpZXcuZ2V0SXRlbUJ5SWQocm93LlBlcm1pc3Npb25LZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHIuR3JhbnRSZXZva2UgPSBRLmNvYWxlc2NlKHJvdy5HcmFudGVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0SXRlbXModGhpcy5nZXRJdGVtcygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgX3JvbGVQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PGJvb2xlYW4+ID0ge307XHJcblxyXG4gICAgICAgIGdldCByb2xlUGVybWlzc2lvbnMoKTogc3RyaW5nW10ge1xyXG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5fcm9sZVBlcm1pc3Npb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCByb2xlUGVybWlzc2lvbnModmFsdWU6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3JvbGVQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrIG9mIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcm9sZVBlcm1pc3Npb25zW2tdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXRJdGVtcyh0aGlzLmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBfaW1wbGljaXRQZXJtaXNzaW9uczogUS5EaWN0aW9uYXJ5PFEuRGljdGlvbmFyeTxib29sZWFuPj4gPSB7fTtcclxuXHJcbiAgICAgICAgc2V0IGltcGxpY2l0UGVybWlzc2lvbnModmFsdWU6IFEuRGljdGlvbmFyeTxzdHJpbmdbXT4pIHtcclxuICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrIG9mIE9iamVjdC5rZXlzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2ltcGxpY2l0UGVybWlzc2lvbnNba10gPSB0aGlzLl9pbXBsaWNpdFBlcm1pc3Npb25zW2tdIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBsID0gdmFsdWVba107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcyBvZiBsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faW1wbGljaXRQZXJtaXNzaW9uc1trXVtzXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbkNoZWNrRWRpdG9yT3B0aW9ucyB7XHJcbiAgICAgICAgc2hvd1Jldm9rZT86IGJvb2xlYW47XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uQ2hlY2tJdGVtIHtcclxuICAgICAgICBQYXJlbnRLZXk/OiBzdHJpbmc7XHJcbiAgICAgICAgS2V5Pzogc3RyaW5nO1xyXG4gICAgICAgIFRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgIElzR3JvdXA/OiBib29sZWFuO1xyXG4gICAgICAgIEdyYW50UmV2b2tlPzogYm9vbGVhbjtcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgVXNlclBlcm1pc3Npb25EaWFsb2cgZXh0ZW5kcyBTZXJlbml0eS5UZW1wbGF0ZWREaWFsb2c8VXNlclBlcm1pc3Npb25EaWFsb2dPcHRpb25zPiB7XHJcblxyXG4gICAgICAgIHByaXZhdGUgcGVybWlzc2lvbnM6IFBlcm1pc3Npb25DaGVja0VkaXRvcjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3Iob3B0OiBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMpIHtcclxuICAgICAgICAgICAgc3VwZXIob3B0KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSBuZXcgUGVybWlzc2lvbkNoZWNrRWRpdG9yKHRoaXMuYnlJZCgnUGVybWlzc2lvbnMnKSwge1xyXG4gICAgICAgICAgICAgICAgc2hvd1Jldm9rZTogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJQZXJtaXNzaW9uU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgIE1vZHVsZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIFN1Ym1vZHVsZTogbnVsbFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXM7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgVXNlclBlcm1pc3Npb25TZXJ2aWNlLkxpc3RSb2xlUGVybWlzc2lvbnMoe1xyXG4gICAgICAgICAgICAgICAgVXNlcklEOiB0aGlzLm9wdGlvbnMudXNlcklELFxyXG4gICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnJvbGVQZXJtaXNzaW9ucyA9IHJlc3BvbnNlLkVudGl0aWVzO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMuaW1wbGljaXRQZXJtaXNzaW9ucyA9IFEuZ2V0UmVtb3RlRGF0YSgnQWRtaW5pc3RyYXRpb24uSW1wbGljaXRQZXJtaXNzaW9ucycpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ09wdGlvbnMoKTogSlF1ZXJ5VUkuRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgICAgIGxldCBvcHQgPSBzdXBlci5nZXREaWFsb2dPcHRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICBvcHQuYnV0dG9ucyA9IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuT2tCdXR0b24nKSxcclxuICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogJ2J0biBidG4tcHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVc2VyUGVybWlzc2lvblNlcnZpY2UuVXBkYXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBlcm1pc3Npb25zOiB0aGlzLnBlcm1pc3Npb25zLnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTW9kdWxlOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3VibW9kdWxlOiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nQ2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IFEubm90aWZ5U3VjY2VzcyhRLnRleHQoJ1NpdGUuVXNlclBlcm1pc3Npb25EaWFsb2cuU2F2ZVN1Y2Nlc3MnKSksIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogUS50ZXh0KCdEaWFsb2dzLkNhbmNlbEJ1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiAoKSA9PiB0aGlzLmRpYWxvZ0Nsb3NlKClcclxuICAgICAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJQZXJtaXNzaW9uRGlhbG9nLkRpYWxvZ1RpdGxlJyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMudXNlcm5hbWUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9wdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gJzxkaXYgaWQ9XCJ+X1Blcm1pc3Npb25zXCI+PC9kaXY+JztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBVc2VyUGVybWlzc2lvbkRpYWxvZ09wdGlvbnMge1xyXG4gICAgICAgIHVzZXJJRD86IG51bWJlcjtcclxuICAgICAgICB1c2VybmFtZT86IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5BZG1pbmlzdHJhdGlvbiB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFZGl0b3IoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFJvbGVDaGVja0VkaXRvciBleHRlbmRzIFNlcmVuaXR5LkNoZWNrVHJlZUVkaXRvcjxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4sIGFueT4ge1xyXG5cclxuICAgICAgICBwcml2YXRlIHNlYXJjaFRleHQ6IHN0cmluZztcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoZGl2OiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoZGl2KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVUb29sYmFyRXh0ZW5zaW9ucygpIHtcclxuICAgICAgICAgICAgc3VwZXIuY3JlYXRlVG9vbGJhckV4dGVuc2lvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIFNlcmVuaXR5LkdyaWRVdGlscy5hZGRRdWlja1NlYXJjaElucHV0Q3VzdG9tKHRoaXMudG9vbGJhci5lbGVtZW50LCAoZmllbGQsIHRleHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoVGV4dCA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3ModGV4dCB8fCAnJykudG9VcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlldy5zZXRJdGVtcyh0aGlzLnZpZXcuZ2V0SXRlbXMoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEJ1dHRvbnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUcmVlSXRlbXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBSb2xlUm93LmdldExvb2t1cCgpLml0ZW1zLm1hcChyb2xlID0+IDxTZXJlbml0eS5DaGVja1RyZWVJdGVtPGFueT4+e1xyXG4gICAgICAgICAgICAgICAgaWQ6IHJvbGUuUm9sZUlkLnRvU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiByb2xlLlJvbGVOYW1lXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIG9uVmlld0ZpbHRlcihpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5vblZpZXdGaWx0ZXIoaXRlbSkgJiZcclxuICAgICAgICAgICAgICAgIChRLmlzRW1wdHlPck51bGwodGhpcy5zZWFyY2hUZXh0KSB8fFxyXG4gICAgICAgICAgICAgICAgIFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoaXRlbS50ZXh0IHx8ICcnKVxyXG4gICAgICAgICAgICAgICAgICAgICAudG9VcHBlckNhc2UoKS5pbmRleE9mKHRoaXMuc2VhcmNoVGV4dCkgPj0gMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLkFkbWluaXN0cmF0aW9uIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBVc2VyUm9sZURpYWxvZyBleHRlbmRzIFNlcmVuaXR5LlRlbXBsYXRlZERpYWxvZzxVc2VyUm9sZURpYWxvZ09wdGlvbnM+IHtcclxuXHJcbiAgICAgICAgcHJpdmF0ZSBwZXJtaXNzaW9uczogUm9sZUNoZWNrRWRpdG9yO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihvcHQ6IFVzZXJSb2xlRGlhbG9nT3B0aW9ucykge1xyXG4gICAgICAgICAgICBzdXBlcihvcHQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9ucyA9IG5ldyBSb2xlQ2hlY2tFZGl0b3IodGhpcy5ieUlkKCdSb2xlcycpKTtcclxuXHJcbiAgICAgICAgICAgIFVzZXJSb2xlU2VydmljZS5MaXN0KHtcclxuICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRFxyXG4gICAgICAgICAgICB9LCByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zLnZhbHVlID0gcmVzcG9uc2UuRW50aXRpZXMubWFwKHggPT4geC50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgdmFyIG9wdCA9IHN1cGVyLmdldERpYWxvZ09wdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIG9wdC5idXR0b25zID0gW3tcclxuICAgICAgICAgICAgICAgIHRleHQ6IFEudGV4dCgnRGlhbG9ncy5Pa0J1dHRvbicpLFxyXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3M6ICdidG4gYnRuLXByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgY2xpY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBRLnNlcnZpY2VSZXF1ZXN0KCdBZG1pbmlzdHJhdGlvbi9Vc2VyUm9sZS9VcGRhdGUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFVzZXJJRDogdGhpcy5vcHRpb25zLnVzZXJJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUm9sZXM6IHRoaXMucGVybWlzc2lvbnMudmFsdWUubWFwKHggPT4gcGFyc2VJbnQoeCwgMTApKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2dDbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeVN1Y2Nlc3MoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLlNhdmVTdWNjZXNzJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBRLnRleHQoJ0RpYWxvZ3MuQ2FuY2VsQnV0dG9uJyksXHJcbiAgICAgICAgICAgICAgICBjbGljazogKCkgPT4gdGhpcy5kaWFsb2dDbG9zZSgpXHJcbiAgICAgICAgICAgIH1dO1xyXG5cclxuICAgICAgICAgICAgb3B0LnRpdGxlID0gUS5mb3JtYXQoUS50ZXh0KCdTaXRlLlVzZXJSb2xlRGlhbG9nLkRpYWxvZ1RpdGxlJyksIHRoaXMub3B0aW9ucy51c2VybmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvcHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxkaXYgaWQ9J35fUm9sZXMnPjwvZGl2PlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIFVzZXJSb2xlRGlhbG9nT3B0aW9ucyB7XHJcbiAgICAgICAgdXNlcklEOiBudW1iZXI7XHJcbiAgICAgICAgdXNlcm5hbWU6IHN0cmluZztcclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5MYW5ndWFnZUxpc3Qge1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ6IHN0cmluZ1tdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBrIG9mIEFkbWluaXN0cmF0aW9uLkxhbmd1YWdlUm93LmdldExvb2t1cCgpLml0ZW1zKSB7XHJcbiAgICAgICAgICAgIGlmIChrLkxhbmd1YWdlSWQgIT09ICdlbicpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKFtrLklkLnRvU3RyaW5nKCksIGsuTGFuZ3VhZ2VOYW1lXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29tbW9uL0hlbHBlcnMvTGFuZ3VhZ2VMaXN0LnRzXCIgLz5cclxuXHJcbm5hbWVzcGFjZSBTdG9yZS5TY3JpcHRJbml0aWFsaXphdGlvbiB7XHJcbiAgICBRLkNvbmZpZy5yZXNwb25zaXZlRGlhbG9ncyA9IHRydWU7XHJcbiAgICBRLkNvbmZpZy5yb290TmFtZXNwYWNlcy5wdXNoKCdTdG9yZScpO1xyXG4gICAgU2VyZW5pdHkuRW50aXR5RGlhbG9nLmRlZmF1bHRMYW5ndWFnZUxpc3QgPSBMYW5ndWFnZUxpc3QuZ2V0VmFsdWU7XHJcbiAgICBTZXJlbml0eS5IdG1sQ29udGVudEVkaXRvci5DS0VkaXRvckJhc2VQYXRoID0gXCJ+L1NlcmVuaXR5LkFzc2V0cy9TY3JpcHRzL2NrZWRpdG9yL1wiO1xyXG5cclxuICAgIGlmICgkLmZuWydjb2xvcmJveCddKSB7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhXaWR0aCA9IFwiOTUlXCI7XHJcbiAgICAgICAgJC5mblsnY29sb3Jib3gnXS5zZXR0aW5ncy5tYXhIZWlnaHQgPSBcIjk1JVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHdpbmRvdy5vbmVycm9yID0gUS5FcnJvckhhbmRsaW5nLnJ1bnRpbWVFcnJvckhhbmRsZXI7XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuQ29tbW9uIHtcclxuICAgIGV4cG9ydCBjbGFzcyBTaWRlYmFyU2VhcmNoIGV4dGVuZHMgU2VyZW5pdHkuV2lkZ2V0PGFueT4ge1xyXG4gICAgICAgIHByaXZhdGUgbWVudVVMOiBKUXVlcnk7XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGlucHV0OiBKUXVlcnksIG1lbnVVTDogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGlucHV0KTtcclxuXHJcbiAgICAgICAgICAgIG5ldyBTZXJlbml0eS5RdWlja1NlYXJjaElucHV0KGlucHV0LCB7XHJcbiAgICAgICAgICAgICAgICBvblNlYXJjaDogKGZpZWxkLCB0ZXh0LCBzdWNjZXNzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNYXRjaEZsYWdzKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3ModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tZW51VUwgPSBtZW51VUw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgdXBkYXRlTWF0Y2hGbGFncyh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgdmFyIGxpTGlzdCA9IHRoaXMubWVudVVMLmZpbmQoJ2xpJykucmVtb3ZlQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdGV4dCA9IFEudHJpbVRvTnVsbCh0ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0ZXh0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxpTGlzdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBsaUxpc3QucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IHRleHQucmVwbGFjZSgnLCcsICcgJykuc3BsaXQoJyAnKS5maWx0ZXIoeCA9PiAhUS5pc1RyaW1tZWRFbXB0eSh4KSk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJ0c1tpXSA9IFEudHJpbVRvTnVsbChTZWxlY3QyLnV0aWwuc3RyaXBEaWFjcml0aWNzKHBhcnRzW2ldKS50b1VwcGVyQ2FzZSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gbGlMaXN0O1xyXG4gICAgICAgICAgICBpdGVtcy5lYWNoKGZ1bmN0aW9uIChpZHgsIGUpIHtcclxuICAgICAgICAgICAgICAgIHZhciB4ID0gJChlKTtcclxuICAgICAgICAgICAgICAgIHZhciB0aXRsZSA9IFNlbGVjdDIudXRpbC5zdHJpcERpYWNyaXRpY3MoUS5jb2FsZXNjZSh4LnRleHQoKSwgJycpLnRvVXBwZXJDYXNlKCkpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBvZiBwYXJ0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwICE9IG51bGwgJiYgISh0aXRsZS5pbmRleE9mKHApICE9PSAtMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeC5hZGRDbGFzcygnbm9uLW1hdGNoJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgbWF0Y2hpbmdJdGVtcyA9IGl0ZW1zLm5vdCgnLm5vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZpc2libGVzID0gbWF0Y2hpbmdJdGVtcy5wYXJlbnRzKCdsaScpLmFkZChtYXRjaGluZ0l0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBub25WaXNpYmxlcyA9IGxpTGlzdC5ub3QodmlzaWJsZXMpO1xyXG4gICAgICAgICAgICBub25WaXNpYmxlcy5oaWRlKCkuYWRkQ2xhc3MoJ25vbi1tYXRjaCcpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZXMuc2hvdygpO1xyXG4gICAgICAgICAgICBsaUxpc3QuYWRkQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIExvZ2luUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPExvZ2luUmVxdWVzdCwgYW55PiB7XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRGb3JtS2V5KCkgeyByZXR1cm4gTG9naW5Gb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnTG9naW5CdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRpcmVjdFRvUmV0dXJuVXJsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBvbkVycm9yOiAocmVzcG9uc2U6IFNlcmVuaXR5LlNlcnZpY2VSZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UgIT0gbnVsbCAmJiByZXNwb25zZS5FcnJvciAhPSBudWxsICYmIHJlc3BvbnNlLkVycm9yLkNvZGUgPT0gXCJSZWRpcmVjdFVzZXJUb1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHJlc3BvbnNlLkVycm9yLkFyZ3VtZW50cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlICE9IG51bGwgJiYgcmVzcG9uc2UuRXJyb3IgIT0gbnVsbCAmJiAhUS5pc0VtcHR5T3JOdWxsKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBRLm5vdGlmeUVycm9yKHJlc3BvbnNlLkVycm9yLk1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnI1Bhc3N3b3JkJykuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuRXJyb3JIYW5kbGluZy5zaG93U2VydmljZUVycm9yKHJlc3BvbnNlLkVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVkaXJlY3RUb1JldHVyblVybCgpIHtcclxuICAgICAgICAgICAgdmFyIHEgPSBRLnBhcnNlUXVlcnlTdHJpbmcoKTtcclxuICAgICAgICAgICAgdmFyIHJldHVyblVybCA9IHFbJ3JldHVyblVybCddIHx8IHFbJ1JldHVyblVybCddO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVXJsKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc2ggIT0gbnVsbCAmJiBoYXNoICE9ICcjJylcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5VcmwgKz0gaGFzaDtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcmV0dXJuVXJsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBRLnJlc29sdmVVcmwoJ34vJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgIDxoMiBjbGFzcz1cInRleHQtY2VudGVyIHAtNFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiJHtRLnJlc29sdmVVcmwoXCJ+L0NvbnRlbnQvc2l0ZS9pbWFnZXMvc2VyZW5pdHktbG9nby13LTEyOC5wbmdcIil9XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkLWNpcmNsZSBwLTFcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6IHZhcigtLXMtc2lkZWJhci1iYW5kLWJnKVwiXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTBcIiBoZWlnaHQ9XCI1MFwiIC8+IFN0b3JlXHJcbiAgICA8L2gyPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJzLVBhbmVsIHAtNFwiPlxyXG4gICAgICAgIDxoNSBjbGFzcz1cInRleHQtY2VudGVyIG15LTRcIj4ke1EudGV4dChcIkZvcm1zLk1lbWJlcnNoaXAuTG9naW4uTG9naW5Ub1lvdXJBY2NvdW50XCIpfTwvaDU+XHJcbiAgICAgICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICAgICAgPGRpdiBpZD1cIn5fUHJvcGVydHlHcmlkXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmbG9hdC1lbmQgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIiBocmVmPVwiJHtRLnJlc29sdmVVcmwoJ34vQWNjb3VudC9Gb3Jnb3RQYXNzd29yZCcpfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5Gb3Jnb3RQYXNzd29yZFwiKX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJweC1maWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBpZD1cIn5fTG9naW5CdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbXktMyB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5Mb2dpbi5TaWduSW5CdXR0b25cIil9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG10LTJcIj5cclxuICAgICAgICA8YSBjbGFzcz1cInRleHQtZGVjb3JhdGlvbi1ub25lXCIgaHJlZj1cIiR7US5yZXNvbHZlVXJsKCd+L0FjY291bnQvU2lnblVwJyl9XCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkxvZ2luLlNpZ25VcEJ1dHRvblwiKX08L2E+XHJcbiAgICA8L2Rpdj4gICBcclxuYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuTWVtYmVyc2hpcCB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgQ2hhbmdlUGFzc3dvcmRQYW5lbCBleHRlbmRzIFNlcmVuaXR5LlByb3BlcnR5UGFuZWw8Q2hhbmdlUGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBDaGFuZ2VQYXNzd29yZEZvcm0uZm9ybUtleTsgfVxyXG5cclxuICAgICAgICBwcml2YXRlIGZvcm06IENoYW5nZVBhc3N3b3JkRm9ybTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IG5ldyBDaGFuZ2VQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0udygnQ29uZmlybVBhc3N3b3JkJywgU2VyZW5pdHkuUGFzc3dvcmRFZGl0b3IpLnZhbHVlLmxlbmd0aCA8IDcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUS5mb3JtYXQoUS50ZXh0KCdWYWxpZGF0aW9uLk1pblJlcXVpcmVkUGFzc3dvcmRMZW5ndGgnKSwgNyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC5hZGRWYWxpZGF0aW9uUnVsZSh0aGlzLnVuaXF1ZU5hbWUsIGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5Db25maXJtUGFzc3dvcmQudmFsdWUgIT09IHRoaXMuZm9ybS5OZXdQYXNzd29yZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLnRleHQoJ1ZhbGlkYXRpb24uUGFzc3dvcmRDb25maXJtJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ieUlkKCdTdWJtaXRCdXR0b24nKS5jbGljayhlID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMudmFsaWRhdGVGb3JtKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSB0aGlzLmdldFNhdmVFbnRpdHkoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvQ2hhbmdlUGFzc3dvcmQnKSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0OiByZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9uU3VjY2VzczogcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBRLmluZm9ybWF0aW9uKFEudGV4dCgnRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGA8ZGl2IGNsYXNzPVwicy1QYW5lbFwiPlxyXG4gICAgPGgzIGNsYXNzPVwicGFnZS10aXRsZSBtYi00IHRleHQtY2VudGVyXCI+JHtRLnRleHQoXCJGb3Jtcy5NZW1iZXJzaGlwLkNoYW5nZVBhc3N3b3JkLkZvcm1UaXRsZVwiKX08L2gzPlxyXG4gICAgPGZvcm0gaWQ9XCJ+X0Zvcm1cIiBhY3Rpb249XCJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwifl9Qcm9wZXJ0eUdyaWRcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHgtZmllbGQgbXQtNFwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwifl9TdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgICR7US50ZXh0KFwiRm9ybXMuTWVtYmVyc2hpcC5DaGFuZ2VQYXNzd29yZC5TdWJtaXRCdXR0b25cIil9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG48L2Rpdj5gO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBGb3Jnb3RQYXNzd29yZFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxGb3Jnb3RQYXNzd29yZFJlcXVlc3QsIGFueT4ge1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIEZvcmdvdFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogRm9yZ290UGFzc3dvcmRGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcmdvdFBhc3N3b3JkRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYnlJZCgnU3VibWl0QnV0dG9uJykuY2xpY2soZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZXF1ZXN0ID0gdGhpcy5nZXRTYXZlRW50aXR5KCk7XHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0ZvcmdvdFBhc3N3b3JkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICAgICAgICAgICAgICBvblN1Y2Nlc3M6IHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUS5pbmZvcm1hdGlvbihRLnRleHQoJ0Zvcm1zLk1lbWJlcnNoaXAuRm9yZ290UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5NZW1iZXJzaGlwIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBSZXNldFBhc3N3b3JkUGFuZWwgZXh0ZW5kcyBTZXJlbml0eS5Qcm9wZXJ0eVBhbmVsPFJlc2V0UGFzc3dvcmRSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBSZXNldFBhc3N3b3JkRm9ybS5mb3JtS2V5OyB9XHJcblxyXG4gICAgICAgIHByaXZhdGUgZm9ybTogUmVzZXRQYXNzd29yZEZvcm07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgUmVzZXRQYXNzd29yZEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uTmV3UGFzc3dvcmQuYWRkVmFsaWRhdGlvblJ1bGUodGhpcy51bmlxdWVOYW1lLCBlID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0uTmV3UGFzc3dvcmQudmFsdWUubGVuZ3RoIDwgNykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBRLmZvcm1hdChRLnRleHQoJ1ZhbGlkYXRpb24uTWluUmVxdWlyZWRQYXNzd29yZExlbmd0aCcpLCA3KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLk5ld1Bhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmVxdWVzdCA9IHRoaXMuZ2V0U2F2ZUVudGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5Ub2tlbiA9IHRoaXMuYnlJZCgnVG9rZW4nKS52YWwoKTtcclxuICAgICAgICAgICAgICAgIFEuc2VydmljZUNhbGwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogUS5yZXNvbHZlVXJsKCd+L0FjY291bnQvUmVzZXRQYXNzd29yZCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHJlcXVlc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlJlc2V0UGFzc3dvcmQuU3VjY2VzcycpLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L0xvZ2luJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLk1lbWJlcnNoaXAge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25VcFBhbmVsIGV4dGVuZHMgU2VyZW5pdHkuUHJvcGVydHlQYW5lbDxTaWduVXBSZXF1ZXN0LCBhbnk+IHtcclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBTaWduVXBGb3JtLmZvcm1LZXk7IH1cclxuXHJcbiAgICAgICAgcHJpdmF0ZSBmb3JtOiBTaWduVXBGb3JtO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihjb250YWluZXI6IEpRdWVyeSkge1xyXG4gICAgICAgICAgICBzdXBlcihjb250YWluZXIpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IFNpZ25VcEZvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybUVtYWlsLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1FbWFpbC52YWx1ZSAhPT0gdGhpcy5mb3JtLkVtYWlsLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5FbWFpbENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmZvcm0uQ29uZmlybVBhc3N3b3JkLmFkZFZhbGlkYXRpb25SdWxlKHRoaXMudW5pcXVlTmFtZSwgZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLkNvbmZpcm1QYXNzd29yZC52YWx1ZSAhPT0gdGhpcy5mb3JtLlBhc3N3b3JkLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFEudGV4dCgnVmFsaWRhdGlvbi5QYXNzd29yZENvbmZpcm0nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJ5SWQoJ1N1Ym1pdEJ1dHRvbicpLmNsaWNrKGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy52YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBRLnNlcnZpY2VDYWxsKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IFEucmVzb2x2ZVVybCgnfi9BY2NvdW50L1NpZ25VcCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgRGlzcGxheU5hbWU6IHRoaXMuZm9ybS5EaXNwbGF5TmFtZS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgRW1haWw6IHRoaXMuZm9ybS5FbWFpbC52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQ6IHRoaXMuZm9ybS5QYXNzd29yZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgb25TdWNjZXNzOiByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFEuaW5mb3JtYXRpb24oUS50ZXh0KCdGb3Jtcy5NZW1iZXJzaGlwLlNpZ25VcC5TdWNjZXNzJyksICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gUS5yZXNvbHZlVXJsKCd+LycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5uYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG5cclxuICAgIEBTZXJlbml0eS5EZWNvcmF0b3JzLnJlZ2lzdGVyQ2xhc3MoKVxyXG4gICAgZXhwb3J0IGNsYXNzIENhdGVnb3JpZXNUeXBlRGlhbG9nIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5RGlhbG9nPENhdGVnb3JpZXNUeXBlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Rm9ybUtleSgpIHsgcmV0dXJuIENhdGVnb3JpZXNUeXBlRm9ybS5mb3JtS2V5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhdGVnb3JpZXNUeXBlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXROYW1lUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5uYW1lUHJvcGVydHk7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIENhdGVnb3JpZXNUeXBlU2VydmljZS5iYXNlVXJsOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERlbGV0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5kZWxldGVQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFVwZGF0ZVBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy51cGRhdGVQZXJtaXNzaW9uOyB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBmb3JtID0gbmV3IENhdGVnb3JpZXNUeXBlRm9ybSh0aGlzLmlkUHJlZml4KTtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBDYXRlZ29yaWVzVHlwZUdyaWQgZXh0ZW5kcyBTZXJlbml0eS5FbnRpdHlHcmlkPENhdGVnb3JpZXNUeXBlUm93LCBhbnk+IHtcclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0Q29sdW1uc0tleSgpIHsgcmV0dXJuICdTdG9yZS5DYXRlZ29yaWVzVHlwZSc7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGlhbG9nVHlwZSgpIHsgcmV0dXJuIENhdGVnb3JpZXNUeXBlRGlhbG9nOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldElkUHJvcGVydHkoKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5pZFByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEluc2VydFBlcm1pc3Npb24oKSB7IHJldHVybiBDYXRlZ29yaWVzVHlwZVJvdy5pbnNlcnRQZXJtaXNzaW9uOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldExvY2FsVGV4dFByZWZpeCgpIHsgcmV0dXJuIENhdGVnb3JpZXNUeXBlUm93LmxvY2FsVGV4dFByZWZpeDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRTZXJ2aWNlKCkgeyByZXR1cm4gQ2F0ZWdvcmllc1R5cGVTZXJ2aWNlLmJhc2VVcmw7IH1cclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoY29udGFpbmVyOiBKUXVlcnkpIHtcclxuICAgICAgICAgICAgc3VwZXIoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWZhdWx0U29ydEJ5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gW0NhdGVnb3JpZXNUeXBlUm93LkZpZWxkcy5UeXBlXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxubmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckNsYXNzKClcclxuICAgIGV4cG9ydCBjbGFzcyBNZWFzdXJlc0RpYWxvZyBleHRlbmRzIFNlcmVuaXR5LkVudGl0eURpYWxvZzxNZWFzdXJlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldEZvcm1LZXkoKSB7IHJldHVybiBNZWFzdXJlc0Zvcm0uZm9ybUtleTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTWVhc3VyZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNZWFzdXJlc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0TmFtZVByb3BlcnR5KCkgeyByZXR1cm4gTWVhc3VyZXNSb3cubmFtZVByb3BlcnR5OyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFNlcnZpY2UoKSB7IHJldHVybiBNZWFzdXJlc1NlcnZpY2UuYmFzZVVybDsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXREZWxldGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWVhc3VyZXNSb3cuZGVsZXRlUGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWVhc3VyZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRVcGRhdGVQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWVhc3VyZXNSb3cudXBkYXRlUGVybWlzc2lvbjsgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZm9ybSA9IG5ldyBNZWFzdXJlc0Zvcm0odGhpcy5pZFByZWZpeCk7XHJcblxyXG4gICAgfVxyXG59IiwiXHJcbm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJDbGFzcygpXHJcbiAgICBleHBvcnQgY2xhc3MgTWVhc3VyZXNHcmlkIGV4dGVuZHMgU2VyZW5pdHkuRW50aXR5R3JpZDxNZWFzdXJlc1JvdywgYW55PiB7XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbHVtbnNLZXkoKSB7IHJldHVybiAnU3RvcmUuTWVhc3VyZXMnOyB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldERpYWxvZ1R5cGUoKSB7IHJldHVybiBNZWFzdXJlc0RpYWxvZzsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJZFByb3BlcnR5KCkgeyByZXR1cm4gTWVhc3VyZXNSb3cuaWRQcm9wZXJ0eTsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRJbnNlcnRQZXJtaXNzaW9uKCkgeyByZXR1cm4gTWVhc3VyZXNSb3cuaW5zZXJ0UGVybWlzc2lvbjsgfVxyXG4gICAgICAgIHByb3RlY3RlZCBnZXRMb2NhbFRleHRQcmVmaXgoKSB7IHJldHVybiBNZWFzdXJlc1Jvdy5sb2NhbFRleHRQcmVmaXg7IH1cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0U2VydmljZSgpIHsgcmV0dXJuIE1lYXN1cmVzU2VydmljZS5iYXNlVXJsOyB9XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSlF1ZXJ5KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFNvcnRCeSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtNZWFzdXJlc1Jvdy5GaWVsZHMuTWVhc3VyZUlkXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGNsYXNzIE1lYXN1cmVzQ29sdW1ucyB7XHJcbiAgICAgICAgc3RhdGljIGNvbHVtbnNLZXkgPSAnU3RvcmUuTWVhc3VyZXMnO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIE1lYXN1cmVzRm9ybSB7XHJcbiAgICAgICAgTWVhc3VyZU5hbWU6IFNlcmVuaXR5LlN0cmluZ0VkaXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgTWVhc3VyZXNGb3JtIGV4dGVuZHMgU2VyZW5pdHkuUHJlZml4ZWRDb250ZXh0IHtcclxuICAgICAgICBzdGF0aWMgZm9ybUtleSA9ICdTdG9yZS5NZWFzdXJlcyc7XHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgaW5pdDogYm9vbGVhbjtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IocHJlZml4OiBzdHJpbmcpIHtcclxuICAgICAgICAgICAgc3VwZXIocHJlZml4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghTWVhc3VyZXNGb3JtLmluaXQpICB7XHJcbiAgICAgICAgICAgICAgICBNZWFzdXJlc0Zvcm0uaW5pdCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHMgPSBTZXJlbml0eTtcclxuICAgICAgICAgICAgICAgIHZhciB3MCA9IHMuU3RyaW5nRWRpdG9yO1xyXG5cclxuICAgICAgICAgICAgICAgIFEuaW5pdEZvcm1UeXBlKE1lYXN1cmVzRm9ybSwgW1xyXG4gICAgICAgICAgICAgICAgICAgICdNZWFzdXJlTmFtZScsIHcwXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBNZWFzdXJlc1JvdyB7XHJcbiAgICAgICAgTWVhc3VyZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIE1lYXN1cmVOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIEluc2VydFVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBJbnNlcnREYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFVwZGF0ZVVzZXJJZD86IG51bWJlcjtcclxuICAgICAgICBVcGRhdGVEYXRlPzogc3RyaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgTWVhc3VyZXNSb3cge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBpZFByb3BlcnR5ID0gJ01lYXN1cmVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTWVhc3VyZU5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU3RvcmUuTWVhc3VyZXMnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb29rdXBLZXkgPSAnU3RvcmUuTWVhc3VyZXMnO1xyXG5cclxuICAgICAgICBleHBvcnQgZnVuY3Rpb24gZ2V0TG9va3VwKCk6IFEuTG9va3VwPE1lYXN1cmVzUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxNZWFzdXJlc1Jvdz4oJ1N0b3JlLk1lYXN1cmVzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBkZWxldGVQZXJtaXNzaW9uID0gJ1N0b3JlOk1lYXN1cmVzOkRlbGV0ZSc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU3RvcmU6TWVhc3VyZXM6TW9kaWZ5JztcclxuICAgICAgICBleHBvcnQgY29uc3QgcmVhZFBlcm1pc3Npb24gPSAnU3RvcmU6TWVhc3VyZXM6Vmlldyc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHVwZGF0ZVBlcm1pc3Npb24gPSAnU3RvcmU6TWVhc3VyZXM6TW9kaWZ5JztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgY29uc3QgZW51bSBGaWVsZHMge1xyXG4gICAgICAgICAgICBNZWFzdXJlSWQgPSBcIk1lYXN1cmVJZFwiLFxyXG4gICAgICAgICAgICBNZWFzdXJlTmFtZSA9IFwiTWVhc3VyZU5hbWVcIixcclxuICAgICAgICAgICAgSXNBY3RpdmUgPSBcIklzQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIFRlbmFudElkID0gXCJUZW5hbnRJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnRVc2VySWQgPSBcIkluc2VydFVzZXJJZFwiLFxyXG4gICAgICAgICAgICBJbnNlcnREYXRlID0gXCJJbnNlcnREYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZVVzZXJJZCA9IFwiVXBkYXRlVXNlcklkXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZURhdGUgPSBcIlVwZGF0ZURhdGVcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJuYW1lc3BhY2UgU3RvcmUuU3RvcmUge1xyXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBNZWFzdXJlc1NlcnZpY2Uge1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBiYXNlVXJsID0gJ1N0b3JlL01lYXN1cmVzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PE1lYXN1cmVzUm93Piwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5TYXZlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBVcGRhdGUocmVxdWVzdDogU2VyZW5pdHkuU2F2ZVJlcXVlc3Q8TWVhc3VyZXNSb3c+LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlNhdmVSZXNwb25zZSkgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIERlbGV0ZShyZXF1ZXN0OiBTZXJlbml0eS5EZWxldGVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LkRlbGV0ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gUmV0cmlldmUocmVxdWVzdDogU2VyZW5pdHkuUmV0cmlldmVSZXF1ZXN0LCBvblN1Y2Nlc3M/OiAocmVzcG9uc2U6IFNlcmVuaXR5LlJldHJpZXZlUmVzcG9uc2U8TWVhc3VyZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8TWVhc3VyZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcblxyXG4gICAgICAgIGV4cG9ydCBkZWNsYXJlIGNvbnN0IGVudW0gTWV0aG9kcyB7XHJcbiAgICAgICAgICAgIENyZWF0ZSA9IFwiU3RvcmUvTWVhc3VyZXMvQ3JlYXRlXCIsXHJcbiAgICAgICAgICAgIFVwZGF0ZSA9IFwiU3RvcmUvTWVhc3VyZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvTWVhc3VyZXMvRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIFJldHJpZXZlID0gXCJTdG9yZS9NZWFzdXJlcy9SZXRyaWV2ZVwiLFxyXG4gICAgICAgICAgICBMaXN0ID0gXCJTdG9yZS9NZWFzdXJlcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+TWVhc3VyZXNTZXJ2aWNlKVt4XSA9IGZ1bmN0aW9uIChyLCBzLCBvKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gUS5zZXJ2aWNlUmVxdWVzdChiYXNlVXJsICsgJy8nICsgeCwgciwgcywgbyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuXHJcbiAgICBAU2VyZW5pdHkuRGVjb3JhdG9ycy5yZWdpc3RlckZvcm1hdHRlcihbU2VyZW5pdHkuSVNsaWNrRm9ybWF0dGVyLCBTZXJlbml0eS5JSW5pdGlhbGl6ZUNvbHVtbl0pXHJcbiAgICBleHBvcnQgY2xhc3MgRW1wbG95ZWVzRm9ybWF0dGVyIGltcGxlbWVudHMgU2xpY2suRm9ybWF0dGVyIHtcclxuICAgICAgICBmb3JtYXQoY3R4OiBTbGljay5Gb3JtYXR0ZXJDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIHZhciB0ZXh0ID0gUS5odG1sRW5jb2RlKGN0eC52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZ2VuZGVyUHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZ2VuZGVyID0gY3R4Lml0ZW1bdGhpcy5nZW5kZXJQcm9wZXJ0eV07XHJcbiAgICAgICAgICAgIHJldHVybiBcIjxzcGFuIGNsYXNzPSdcIiArICgoZ2VuZGVyID09PSBHZW5kZXIuRmVtYWxlKSA/XHJcbiAgICAgICAgICAgICAgICAnZW1wbG95ZWUtc3ltYm9sIGZlbWFsZScgOiAnZW1wbG95ZWUtc3ltYm9sIG1hbGUnKSArXHJcbiAgICAgICAgICAgICAgICBcIic+XCIgKyB0ZXh0ICsgJzwvc3Bhbj4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQFNlcmVuaXR5LkRlY29yYXRvcnMub3B0aW9uKClcclxuICAgICAgICBwdWJsaWMgZ2VuZGVyUHJvcGVydHk6IHN0cmluZztcclxuXHJcbiAgICAgICAgcHVibGljIGluaXRpYWxpemVDb2x1bW4oY29sdW1uOiBTbGljay5Db2x1bW4pIHtcclxuICAgICAgICAgICAgY29sdW1uLnJlZmVyZW5jZWRGaWVsZHMgPSBjb2x1bW4ucmVmZXJlbmNlZEZpZWxkcyB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2VuZGVyUHJvcGVydHkpXHJcbiAgICAgICAgICAgICAgICBjb2x1bW4ucmVmZXJlbmNlZEZpZWxkcy5wdXNoKHRoaXMuZ2VuZGVyUHJvcGVydHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcblxyXG4gICAgQFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJGb3JtYXR0ZXIoKVxyXG4gICAgZXhwb3J0IGNsYXNzIEVtcGxveWVlc0xpc3RGb3JtYXR0ZXIgaW1wbGVtZW50cyBTbGljay5Gb3JtYXR0ZXIge1xyXG4gICAgICAgIGZvcm1hdChjdHg6IFNsaWNrLkZvcm1hdHRlckNvbnRleHQpIHtcclxuICAgICAgICAgICAgdmFyIGlkTGlzdCA9IGN0eC52YWx1ZSBhcyBzdHJpbmdbXTtcclxuICAgICAgICAgICAgaWYgKCFpZExpc3QgfHwgIWlkTGlzdC5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuXHJcbiAgICAgICAgICAgIHZhciBieUlkID0gRW1wbG95ZWVzUm93LmdldExvb2t1cCgpLml0ZW1CeUlkO1xyXG4gICAgICAgICAgICBsZXQgejogRW1wbG95ZWVzUm93O1xyXG4gICAgICAgICAgICByZXR1cm4gaWRMaXN0Lm1hcCh4ID0+ICgoeiA9IGJ5SWRbeF0pID8gei5GdWxsTmFtZSA6IHgpKS5qb2luKFwiLCBcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgRW1wbG95ZWVzUm93IHtcclxuICAgICAgICBFbXBsb3llZUlkPzogbnVtYmVyO1xyXG4gICAgICAgIExhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIEZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBGdWxsTmFtZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZT86IHN0cmluZztcclxuICAgICAgICBUaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEhpcmVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIEFkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgQ2l0eT86IHN0cmluZztcclxuICAgICAgICBSZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBDb3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIEhvbWVQaG9uZT86IHN0cmluZztcclxuICAgICAgICBFeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUGhvdG8/OiBudW1iZXJbXTtcclxuICAgICAgICBOb3Rlcz86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgUGhvdG9QYXRoPzogc3RyaW5nO1xyXG4gICAgICAgIElzQWN0aXZlPzogbnVtYmVyO1xyXG4gICAgICAgIFRlbmFudElkPzogbnVtYmVyO1xyXG4gICAgICAgIFJlcG9ydHNUb0Z1bGxOYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0xhc3ROYW1lPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0ZpcnN0TmFtZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9UaXRsZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9UaXRsZU9mQ291cnRlc3k/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvQmlydGhEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0hpcmVEYXRlPzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0FkZHJlc3M/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvQ2l0eT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9SZWdpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvUG9zdGFsQ29kZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9Db3VudHJ5Pzogc3RyaW5nO1xyXG4gICAgICAgIFJlcG9ydHNUb0hvbWVQaG9uZT86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9FeHRlbnNpb24/OiBzdHJpbmc7XHJcbiAgICAgICAgUmVwb3J0c1RvUGhvdG8/OiBudW1iZXJbXTtcclxuICAgICAgICBSZXBvcnRzVG9Ob3Rlcz86IHN0cmluZztcclxuICAgICAgICBSZXBvcnRzVG9SZXBvcnRzVG8/OiBudW1iZXI7XHJcbiAgICAgICAgUmVwb3J0c1RvUGhvdG9QYXRoPzogc3RyaW5nO1xyXG4gICAgICAgIEdlbmRlcj86IEdlbmRlcjtcclxuICAgICAgICBJbnNlcnRVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgSW5zZXJ0RGF0ZT86IHN0cmluZztcclxuICAgICAgICBVcGRhdGVVc2VySWQ/OiBudW1iZXI7XHJcbiAgICAgICAgVXBkYXRlRGF0ZT86IHN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgbmFtZXNwYWNlIEVtcGxveWVlc1JvdyB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlkUHJvcGVydHkgPSAnRW1wbG95ZWVJZCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGlzQWN0aXZlUHJvcGVydHkgPSAnSXNBY3RpdmUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBuYW1lUHJvcGVydHkgPSAnTGFzdE5hbWUnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCBsb2NhbFRleHRQcmVmaXggPSAnU3RvcmUuRW1wbG95ZWVzJztcclxuICAgICAgICBleHBvcnQgY29uc3QgbG9va3VwS2V5ID0gJ1N0b3JlLkVtcGxveWVlcyc7XHJcblxyXG4gICAgICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRMb29rdXAoKTogUS5Mb29rdXA8RW1wbG95ZWVzUm93PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBRLmdldExvb2t1cDxFbXBsb3llZXNSb3c+KCdTdG9yZS5FbXBsb3llZXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGRlbGV0ZVBlcm1pc3Npb24gPSAnU3RvcmU6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGluc2VydFBlcm1pc3Npb24gPSAnU3RvcmU6R2VuZXJhbCc7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IHJlYWRQZXJtaXNzaW9uID0gJ1N0b3JlOkdlbmVyYWwnO1xyXG4gICAgICAgIGV4cG9ydCBjb25zdCB1cGRhdGVQZXJtaXNzaW9uID0gJ1N0b3JlOkdlbmVyYWwnO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIEZpZWxkcyB7XHJcbiAgICAgICAgICAgIEVtcGxveWVlSWQgPSBcIkVtcGxveWVlSWRcIixcclxuICAgICAgICAgICAgTGFzdE5hbWUgPSBcIkxhc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIEZpcnN0TmFtZSA9IFwiRmlyc3ROYW1lXCIsXHJcbiAgICAgICAgICAgIEZ1bGxOYW1lID0gXCJGdWxsTmFtZVwiLFxyXG4gICAgICAgICAgICBUaXRsZSA9IFwiVGl0bGVcIixcclxuICAgICAgICAgICAgVGl0bGVPZkNvdXJ0ZXN5ID0gXCJUaXRsZU9mQ291cnRlc3lcIixcclxuICAgICAgICAgICAgQmlydGhEYXRlID0gXCJCaXJ0aERhdGVcIixcclxuICAgICAgICAgICAgSGlyZURhdGUgPSBcIkhpcmVEYXRlXCIsXHJcbiAgICAgICAgICAgIEFkZHJlc3MgPSBcIkFkZHJlc3NcIixcclxuICAgICAgICAgICAgQ2l0eSA9IFwiQ2l0eVwiLFxyXG4gICAgICAgICAgICBSZWdpb24gPSBcIlJlZ2lvblwiLFxyXG4gICAgICAgICAgICBQb3N0YWxDb2RlID0gXCJQb3N0YWxDb2RlXCIsXHJcbiAgICAgICAgICAgIENvdW50cnkgPSBcIkNvdW50cnlcIixcclxuICAgICAgICAgICAgSG9tZVBob25lID0gXCJIb21lUGhvbmVcIixcclxuICAgICAgICAgICAgRXh0ZW5zaW9uID0gXCJFeHRlbnNpb25cIixcclxuICAgICAgICAgICAgUGhvdG8gPSBcIlBob3RvXCIsXHJcbiAgICAgICAgICAgIE5vdGVzID0gXCJOb3Rlc1wiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG8gPSBcIlJlcG9ydHNUb1wiLFxyXG4gICAgICAgICAgICBQaG90b1BhdGggPSBcIlBob3RvUGF0aFwiLFxyXG4gICAgICAgICAgICBJc0FjdGl2ZSA9IFwiSXNBY3RpdmVcIixcclxuICAgICAgICAgICAgVGVuYW50SWQgPSBcIlRlbmFudElkXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0Z1bGxOYW1lID0gXCJSZXBvcnRzVG9GdWxsTmFtZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9MYXN0TmFtZSA9IFwiUmVwb3J0c1RvTGFzdE5hbWVcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvRmlyc3ROYW1lID0gXCJSZXBvcnRzVG9GaXJzdE5hbWVcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvVGl0bGUgPSBcIlJlcG9ydHNUb1RpdGxlXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1RpdGxlT2ZDb3VydGVzeSA9IFwiUmVwb3J0c1RvVGl0bGVPZkNvdXJ0ZXN5XCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0JpcnRoRGF0ZSA9IFwiUmVwb3J0c1RvQmlydGhEYXRlXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0hpcmVEYXRlID0gXCJSZXBvcnRzVG9IaXJlRGF0ZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9BZGRyZXNzID0gXCJSZXBvcnRzVG9BZGRyZXNzXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0NpdHkgPSBcIlJlcG9ydHNUb0NpdHlcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUmVnaW9uID0gXCJSZXBvcnRzVG9SZWdpb25cIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUG9zdGFsQ29kZSA9IFwiUmVwb3J0c1RvUG9zdGFsQ29kZVwiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9Db3VudHJ5ID0gXCJSZXBvcnRzVG9Db3VudHJ5XCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0hvbWVQaG9uZSA9IFwiUmVwb3J0c1RvSG9tZVBob25lXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb0V4dGVuc2lvbiA9IFwiUmVwb3J0c1RvRXh0ZW5zaW9uXCIsXHJcbiAgICAgICAgICAgIFJlcG9ydHNUb1Bob3RvID0gXCJSZXBvcnRzVG9QaG90b1wiLFxyXG4gICAgICAgICAgICBSZXBvcnRzVG9Ob3RlcyA9IFwiUmVwb3J0c1RvTm90ZXNcIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUmVwb3J0c1RvID0gXCJSZXBvcnRzVG9SZXBvcnRzVG9cIixcclxuICAgICAgICAgICAgUmVwb3J0c1RvUGhvdG9QYXRoID0gXCJSZXBvcnRzVG9QaG90b1BhdGhcIixcclxuICAgICAgICAgICAgR2VuZGVyID0gXCJHZW5kZXJcIixcclxuICAgICAgICAgICAgSW5zZXJ0VXNlcklkID0gXCJJbnNlcnRVc2VySWRcIixcclxuICAgICAgICAgICAgSW5zZXJ0RGF0ZSA9IFwiSW5zZXJ0RGF0ZVwiLFxyXG4gICAgICAgICAgICBVcGRhdGVVc2VySWQgPSBcIlVwZGF0ZVVzZXJJZFwiLFxyXG4gICAgICAgICAgICBVcGRhdGVEYXRlID0gXCJVcGRhdGVEYXRlXCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwibmFtZXNwYWNlIFN0b3JlLlN0b3JlIHtcclxuICAgIGV4cG9ydCBuYW1lc3BhY2UgRW1wbG95ZWVzU2VydmljZSB7XHJcbiAgICAgICAgZXhwb3J0IGNvbnN0IGJhc2VVcmwgPSAnU3RvcmUvRW1wbG95ZWVzJztcclxuXHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gQ3JlYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcGxveWVlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gVXBkYXRlKHJlcXVlc3Q6IFNlcmVuaXR5LlNhdmVSZXF1ZXN0PEVtcGxveWVlc1Jvdz4sIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuU2F2ZVJlc3BvbnNlKSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gRGVsZXRlKHJlcXVlc3Q6IFNlcmVuaXR5LkRlbGV0ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuRGVsZXRlUmVzcG9uc2UpID0+IHZvaWQsIG9wdD86IFEuU2VydmljZU9wdGlvbnM8YW55Pik6IEpRdWVyeVhIUjtcclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBSZXRyaWV2ZShyZXF1ZXN0OiBTZXJlbml0eS5SZXRyaWV2ZVJlcXVlc3QsIG9uU3VjY2Vzcz86IChyZXNwb25zZTogU2VyZW5pdHkuUmV0cmlldmVSZXNwb25zZTxFbXBsb3llZXNSb3c+KSA9PiB2b2lkLCBvcHQ/OiBRLlNlcnZpY2VPcHRpb25zPGFueT4pOiBKUXVlcnlYSFI7XHJcbiAgICAgICAgZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gTGlzdChyZXF1ZXN0OiBTZXJlbml0eS5MaXN0UmVxdWVzdCwgb25TdWNjZXNzPzogKHJlc3BvbnNlOiBTZXJlbml0eS5MaXN0UmVzcG9uc2U8RW1wbG95ZWVzUm93PikgPT4gdm9pZCwgb3B0PzogUS5TZXJ2aWNlT3B0aW9uczxhbnk+KTogSlF1ZXJ5WEhSO1xyXG5cclxuICAgICAgICBleHBvcnQgZGVjbGFyZSBjb25zdCBlbnVtIE1ldGhvZHMge1xyXG4gICAgICAgICAgICBDcmVhdGUgPSBcIlN0b3JlL0VtcGxveWVlcy9DcmVhdGVcIixcclxuICAgICAgICAgICAgVXBkYXRlID0gXCJTdG9yZS9FbXBsb3llZXMvVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIERlbGV0ZSA9IFwiU3RvcmUvRW1wbG95ZWVzL0RlbGV0ZVwiLFxyXG4gICAgICAgICAgICBSZXRyaWV2ZSA9IFwiU3RvcmUvRW1wbG95ZWVzL1JldHJpZXZlXCIsXHJcbiAgICAgICAgICAgIExpc3QgPSBcIlN0b3JlL0VtcGxveWVlcy9MaXN0XCJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ0NyZWF0ZScsIFxyXG4gICAgICAgICAgICAnVXBkYXRlJywgXHJcbiAgICAgICAgICAgICdEZWxldGUnLCBcclxuICAgICAgICAgICAgJ1JldHJpZXZlJywgXHJcbiAgICAgICAgICAgICdMaXN0J1xyXG4gICAgICAgIF0uZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgKDxhbnk+RW1wbG95ZWVzU2VydmljZSlbeF0gPSBmdW5jdGlvbiAociwgcywgbykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFEuc2VydmljZVJlcXVlc3QoYmFzZVVybCArICcvJyArIHgsIHIsIHMsIG8pO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIm5hbWVzcGFjZSBTdG9yZS5TdG9yZSB7XHJcbiAgICBleHBvcnQgZW51bSBHZW5kZXIge1xyXG4gICAgICAgIE1hbGUgPSAxLFxyXG4gICAgICAgIEZlbWFsZSA9IDJcclxuICAgIH1cclxuICAgIFNlcmVuaXR5LkRlY29yYXRvcnMucmVnaXN0ZXJFbnVtVHlwZShHZW5kZXIsICdTdG9yZS5TdG9yZS5HZW5kZXInLCAnU3RvcmUuU3RvcmUuRW50aXRpZXMuR2VuZGVyJyk7XHJcbn1cclxuIl19