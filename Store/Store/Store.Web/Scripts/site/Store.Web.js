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
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
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
    })(Membership = Store.Membership || (Store.Membership = {}));
})(Store || (Store = {}));
var Store;
(function (Store_1) {
    var Store;
    (function (Store) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'CategoryTypeID', w0,
                        'CategoryCode', w1,
                        'CategoryName', w1,
                        'Description', w1
                    ]);
                }
                return _this;
            }
            CategoryForm.formKey = 'Store.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Store.CategoryForm = CategoryForm;
    })(Store = Store_1.Store || (Store_1.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_2) {
    var Store;
    (function (Store) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'ID';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Store.CategoryLang';
        })(CategoryLangRow = Store.CategoryLangRow || (Store.CategoryLangRow = {}));
    })(Store = Store_2.Store || (Store_2.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_3) {
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
    })(Store = Store_3.Store || (Store_3.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_4) {
    var Store;
    (function (Store) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.isActiveProperty = 'IsActive';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Store.Category';
            CategoryRow.lookupKey = 'Store.Category';
            function getLookup() {
                return Q.getLookup('Store.Category');
            }
            CategoryRow.getLookup = getLookup;
        })(CategoryRow = Store.CategoryRow || (Store.CategoryRow = {}));
    })(Store = Store_4.Store || (Store_4.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_5) {
    var Store;
    (function (Store) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Store/Category';
            [
                'Create',
                'Update',
                'Delete',
                'RetrieveLocalization',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Store.CategoryService || (Store.CategoryService = {}));
    })(Store = Store_5.Store || (Store_5.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_6) {
    var Store;
    (function (Store) {
        var CategoryTypeForm = /** @class */ (function (_super) {
            __extends(CategoryTypeForm, _super);
            function CategoryTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryTypeForm.init) {
                    CategoryTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(CategoryTypeForm, [
                        'Type', w0,
                        'CategoryType', w1
                    ]);
                }
                return _this;
            }
            CategoryTypeForm.formKey = 'Store.CategoryType';
            return CategoryTypeForm;
        }(Serenity.PrefixedContext));
        Store.CategoryTypeForm = CategoryTypeForm;
    })(Store = Store_6.Store || (Store_6.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_7) {
    var Store;
    (function (Store) {
        var CategoryTypeRow;
        (function (CategoryTypeRow) {
            CategoryTypeRow.idProperty = 'CategoryTypeID';
            CategoryTypeRow.isActiveProperty = 'IsActive';
            CategoryTypeRow.nameProperty = 'CategoryType';
            CategoryTypeRow.localTextPrefix = 'Store.CategoryType';
            CategoryTypeRow.lookupKey = 'Store.CategoryType';
            function getLookup() {
                return Q.getLookup('Store.CategoryType');
            }
            CategoryTypeRow.getLookup = getLookup;
        })(CategoryTypeRow = Store.CategoryTypeRow || (Store.CategoryTypeRow = {}));
    })(Store = Store_7.Store || (Store_7.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_8) {
    var Store;
    (function (Store) {
        var CategoryTypeService;
        (function (CategoryTypeService) {
            CategoryTypeService.baseUrl = 'Store/CategoryType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryTypeService = Store.CategoryTypeService || (Store.CategoryTypeService = {}));
    })(Store = Store_8.Store || (Store_8.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_9) {
    var Store;
    (function (Store) {
        var CounterpartyDetailRow;
        (function (CounterpartyDetailRow) {
            CounterpartyDetailRow.idProperty = 'ID';
            CounterpartyDetailRow.nameProperty = 'Email';
            CounterpartyDetailRow.localTextPrefix = 'Store.CounterpartyDetail';
        })(CounterpartyDetailRow = Store.CounterpartyDetailRow || (Store.CounterpartyDetailRow = {}));
    })(Store = Store_9.Store || (Store_9.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_10) {
    var Store;
    (function (Store) {
        var CounterpartyForm = /** @class */ (function (_super) {
            __extends(CounterpartyForm, _super);
            function CounterpartyForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CounterpartyForm.init) {
                    CounterpartyForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = Store.PhoneEditor;
                    var w3 = Store.NotesEditor;
                    var w4 = s.DateEditor;
                    var w5 = s.EmailEditor;
                    var w6 = s.BooleanEditor;
                    Q.initFormType(CounterpartyForm, [
                        'CounterpartyID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Representatives', w1,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Phone', w2,
                        'NoteList', w3,
                        'LastContactDate', w4,
                        'LastContactedBy', w1,
                        'Email', w5,
                        'SendBulletin', w6
                    ]);
                }
                return _this;
            }
            CounterpartyForm.formKey = 'Store.Counterparty';
            return CounterpartyForm;
        }(Serenity.PrefixedContext));
        Store.CounterpartyForm = CounterpartyForm;
    })(Store = Store_10.Store || (Store_10.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_11) {
    var Store;
    (function (Store) {
        var CounterpartyRepresentativeRow;
        (function (CounterpartyRepresentativeRow) {
            CounterpartyRepresentativeRow.idProperty = 'RepresentativeID';
            CounterpartyRepresentativeRow.localTextPrefix = 'Store.CounterpartyRepresentative';
        })(CounterpartyRepresentativeRow = Store.CounterpartyRepresentativeRow || (Store.CounterpartyRepresentativeRow = {}));
    })(Store = Store_11.Store || (Store_11.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_12) {
    var Store;
    (function (Store) {
        var CounterpartyRow;
        (function (CounterpartyRow) {
            CounterpartyRow.idProperty = 'ID';
            CounterpartyRow.isActiveProperty = 'IsActive';
            CounterpartyRow.nameProperty = 'CompanyName';
            CounterpartyRow.localTextPrefix = 'Store.Counterparty';
            CounterpartyRow.lookupKey = 'Store.Counterparty';
            function getLookup() {
                return Q.getLookup('Store.Counterparty');
            }
            CounterpartyRow.getLookup = getLookup;
        })(CounterpartyRow = Store.CounterpartyRow || (Store.CounterpartyRow = {}));
    })(Store = Store_12.Store || (Store_12.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_13) {
    var Store;
    (function (Store) {
        var CounterpartyService;
        (function (CounterpartyService) {
            CounterpartyService.baseUrl = 'Store/Counterparty';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CounterpartyService[x] = function (r, s, o) {
                    return Q.serviceRequest(CounterpartyService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CounterpartyService = Store.CounterpartyService || (Store.CounterpartyService = {}));
    })(Store = Store_13.Store || (Store_13.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_14) {
    var Store;
    (function (Store) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'Id';
            CustomerCustomerDemoRow.nameProperty = 'CustomerId';
            CustomerCustomerDemoRow.localTextPrefix = 'Store.CustomerCustomerDemo';
        })(CustomerCustomerDemoRow = Store.CustomerCustomerDemoRow || (Store.CustomerCustomerDemoRow = {}));
    })(Store = Store_14.Store || (Store_14.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_15) {
    var Store;
    (function (Store) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'Id';
            CustomerDemographicRow.nameProperty = 'CustomerTypeId';
            CustomerDemographicRow.localTextPrefix = 'Store.CustomerDemographic';
        })(CustomerDemographicRow = Store.CustomerDemographicRow || (Store.CustomerDemographicRow = {}));
    })(Store = Store_15.Store || (Store_15.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_16) {
    var Store;
    (function (Store) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Store.CustomerDetails';
        })(CustomerDetailsRow = Store.CustomerDetailsRow || (Store.CustomerDetailsRow = {}));
    })(Store = Store_16.Store || (Store_16.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_17) {
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
    })(Store = Store_17.Store || (Store_17.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_18) {
    var Store;
    (function (Store) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeID';
            CustomerRepresentativesRow.localTextPrefix = 'Store.CustomerRepresentatives';
        })(CustomerRepresentativesRow = Store.CustomerRepresentativesRow || (Store.CustomerRepresentativesRow = {}));
    })(Store = Store_18.Store || (Store_18.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_19) {
    var Store;
    (function (Store) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.isActiveProperty = 'IsActive';
            CustomerRow.nameProperty = 'CustomerID';
            CustomerRow.localTextPrefix = 'Store.Customer';
            CustomerRow.lookupKey = 'Store.Customer';
            function getLookup() {
                return Q.getLookup('Store.Customer');
            }
            CustomerRow.getLookup = getLookup;
        })(CustomerRow = Store.CustomerRow || (Store.CustomerRow = {}));
    })(Store = Store_19.Store || (Store_19.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_20) {
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
    })(Store = Store_20.Store || (Store_20.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_21) {
    var Store;
    (function (Store) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.isActiveProperty = 'IsActive';
            EmployeeRow.nameProperty = 'LastName';
            EmployeeRow.localTextPrefix = 'Store.Employee';
            EmployeeRow.lookupKey = 'Store.Employee';
            function getLookup() {
                return Q.getLookup('Store.Employee');
            }
            EmployeeRow.getLookup = getLookup;
        })(EmployeeRow = Store.EmployeeRow || (Store.EmployeeRow = {}));
    })(Store = Store_21.Store || (Store_21.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_22) {
    var Store;
    (function (Store) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Store.Gender || (Store.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'Store.Store.Gender', 'Store.Store.Entities.Gender');
    })(Store = Store_22.Store || (Store_22.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_23) {
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
                        'ItemCategoryDescription', w0,
                        'ItemCategoryImage', w1
                    ]);
                }
                return _this;
            }
            ItemCategoryForm.formKey = 'Store.ItemCategory';
            return ItemCategoryForm;
        }(Serenity.PrefixedContext));
        Store.ItemCategoryForm = ItemCategoryForm;
    })(Store = Store_23.Store || (Store_23.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_24) {
    var Store;
    (function (Store) {
        var ItemCategoryLangRow;
        (function (ItemCategoryLangRow) {
            ItemCategoryLangRow.idProperty = 'ID';
            ItemCategoryLangRow.nameProperty = 'ItemCategoryName';
            ItemCategoryLangRow.localTextPrefix = 'Store.ItemCategoryLang';
        })(ItemCategoryLangRow = Store.ItemCategoryLangRow || (Store.ItemCategoryLangRow = {}));
    })(Store = Store_24.Store || (Store_24.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_25) {
    var Store;
    (function (Store) {
        var ItemCategoryLangService;
        (function (ItemCategoryLangService) {
            ItemCategoryLangService.baseUrl = 'Store/ItemCategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemCategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemCategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemCategoryLangService = Store.ItemCategoryLangService || (Store.ItemCategoryLangService = {}));
    })(Store = Store_25.Store || (Store_25.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_26) {
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
    })(Store = Store_26.Store || (Store_26.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_27) {
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
    })(Store = Store_27.Store || (Store_27.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_28) {
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
                    var w3 = s.IntegerEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.BooleanEditor;
                    Q.initFormType(ItemForm, [
                        'ItemCategoryID', w0,
                        'ItemCode', w1,
                        'ItemBarcode', w1,
                        'ItemLabel', w1,
                        'ItemName', w1,
                        'ItemImage', w2,
                        'SupplierID', w0,
                        'MeasureID', w0,
                        'QuantityPerUnit', w3,
                        'UnitPrice', w4,
                        'Discontinued', w5,
                        'AccountID', w3
                    ]);
                }
                return _this;
            }
            ItemForm.formKey = 'Store.Item';
            return ItemForm;
        }(Serenity.PrefixedContext));
        Store.ItemForm = ItemForm;
    })(Store = Store_28.Store || (Store_28.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_29) {
    var Store;
    (function (Store) {
        var ItemLangRow;
        (function (ItemLangRow) {
            ItemLangRow.idProperty = 'ID';
            ItemLangRow.nameProperty = 'ItemName';
            ItemLangRow.localTextPrefix = 'Store.ItemLang';
        })(ItemLangRow = Store.ItemLangRow || (Store.ItemLangRow = {}));
    })(Store = Store_29.Store || (Store_29.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_30) {
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
    })(Store = Store_30.Store || (Store_30.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_31) {
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
    })(Store = Store_31.Store || (Store_31.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_32) {
    var Store;
    (function (Store) {
        var ItemService;
        (function (ItemService) {
            ItemService.baseUrl = 'Store/Item';
            [
                'Create',
                'Update',
                'RetrieveLocalization',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ItemService[x] = function (r, s, o) {
                    return Q.serviceRequest(ItemService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ItemService = Store.ItemService || (Store.ItemService = {}));
    })(Store = Store_32.Store || (Store_32.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_33) {
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
                    Q.initFormType(MeasureForm, [
                        'MeasureName', w0
                    ]);
                }
                return _this;
            }
            MeasureForm.formKey = 'Store.Measure';
            return MeasureForm;
        }(Serenity.PrefixedContext));
        Store.MeasureForm = MeasureForm;
    })(Store = Store_33.Store || (Store_33.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_34) {
    var Store;
    (function (Store) {
        var MeasureRow;
        (function (MeasureRow) {
            MeasureRow.idProperty = 'MeasureID';
            MeasureRow.isActiveProperty = 'IsActive';
            MeasureRow.nameProperty = 'MeasureName';
            MeasureRow.localTextPrefix = 'Store.Measure';
            MeasureRow.lookupKey = 'Store.Measure';
            function getLookup() {
                return Q.getLookup('Store.Measure');
            }
            MeasureRow.getLookup = getLookup;
        })(MeasureRow = Store.MeasureRow || (Store.MeasureRow = {}));
    })(Store = Store_34.Store || (Store_34.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_35) {
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
    })(Store = Store_35.Store || (Store_35.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_36) {
    var Store;
    (function (Store) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Store.Note';
        })(NoteRow = Store.NoteRow || (Store.NoteRow = {}));
    })(Store = Store_36.Store || (Store_36.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_37) {
    var Store;
    (function (Store) {
        var OperationTypeForm = /** @class */ (function (_super) {
            __extends(OperationTypeForm, _super);
            function OperationTypeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OperationTypeForm.init) {
                    OperationTypeForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(OperationTypeForm, [
                        'OpCode', w0,
                        'Operation', w1
                    ]);
                }
                return _this;
            }
            OperationTypeForm.formKey = 'Store.OperationType';
            return OperationTypeForm;
        }(Serenity.PrefixedContext));
        Store.OperationTypeForm = OperationTypeForm;
    })(Store = Store_37.Store || (Store_37.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_38) {
    var Store;
    (function (Store) {
        var OperationTypeRow;
        (function (OperationTypeRow) {
            OperationTypeRow.idProperty = 'OperationTypeID';
            OperationTypeRow.isActiveProperty = 'IsActive';
            OperationTypeRow.nameProperty = 'Operation';
            OperationTypeRow.localTextPrefix = 'Store.OperationType';
            OperationTypeRow.lookupKey = 'Store.OperationType';
            function getLookup() {
                return Q.getLookup('Store.OperationType');
            }
            OperationTypeRow.getLookup = getLookup;
        })(OperationTypeRow = Store.OperationTypeRow || (Store.OperationTypeRow = {}));
    })(Store = Store_38.Store || (Store_38.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_39) {
    var Store;
    (function (Store) {
        var OperationTypeService;
        (function (OperationTypeService) {
            OperationTypeService.baseUrl = 'Store/OperationType';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OperationTypeService[x] = function (r, s, o) {
                    return Q.serviceRequest(OperationTypeService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OperationTypeService = Store.OperationTypeService || (Store.OperationTypeService = {}));
    })(Store = Store_39.Store || (Store_39.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_40) {
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
                        'WaresID', w0,
                        'Quantity', w1,
                        'ProductQuantity', w1,
                        'PlanPrice', w1,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            ProductDetailForm.formKey = 'Store.ProductDetail';
            return ProductDetailForm;
        }(Serenity.PrefixedContext));
        Store.ProductDetailForm = ProductDetailForm;
    })(Store = Store_40.Store || (Store_40.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_41) {
    var Store;
    (function (Store) {
        var ProductDetailRow;
        (function (ProductDetailRow) {
            ProductDetailRow.idProperty = 'DetailID';
            ProductDetailRow.isActiveProperty = 'IsActive';
            ProductDetailRow.localTextPrefix = 'Store.ProductDetail';
        })(ProductDetailRow = Store.ProductDetailRow || (Store.ProductDetailRow = {}));
    })(Store = Store_41.Store || (Store_41.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_42) {
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
    })(Store = Store_42.Store || (Store_42.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_43) {
    var Store;
    (function (Store) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = Store.CounterpartyEditor;
                    var w5 = Store.ProductDetailsEditor;
                    var w6 = s.DecimalEditor;
                    var w7 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'CategoryID', w0,
                        'ProductCode', w1,
                        'ProductBarcode', w1,
                        'ProductLabel', w1,
                        'ProductName', w1,
                        'ProductImage', w2,
                        'Discontinued', w3,
                        'CounterpartyID', w4,
                        'DetailList', w5,
                        'MeasureID', w0,
                        'QuantityPerUnit', w1,
                        'UnitPrice', w6,
                        'UnitsInStock', w7,
                        'UnitsOnOrder', w7,
                        'ReorderLevel', w7
                    ]);
                }
                return _this;
            }
            ProductForm.formKey = 'Store.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Store.ProductForm = ProductForm;
    })(Store = Store_43.Store || (Store_43.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_44) {
    var Store;
    (function (Store) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'ID';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Store.ProductLang';
        })(ProductLangRow = Store.ProductLangRow || (Store.ProductLangRow = {}));
    })(Store = Store_44.Store || (Store_44.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_45) {
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
    })(Store = Store_45.Store || (Store_45.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_46) {
    var Store;
    (function (Store) {
        var ProductMovementDetailsForm = /** @class */ (function (_super) {
            __extends(ProductMovementDetailsForm, _super);
            function ProductMovementDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductMovementDetailsForm.init) {
                    ProductMovementDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(ProductMovementDetailsForm, [
                        'ProductID', w0,
                        'Quantity', w1,
                        'SalePrice', w1,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            ProductMovementDetailsForm.formKey = 'Store.ProductMovementDetails';
            return ProductMovementDetailsForm;
        }(Serenity.PrefixedContext));
        Store.ProductMovementDetailsForm = ProductMovementDetailsForm;
    })(Store = Store_46.Store || (Store_46.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_47) {
    var Store;
    (function (Store) {
        var ProductMovementDetailsRow;
        (function (ProductMovementDetailsRow) {
            ProductMovementDetailsRow.idProperty = 'DetailID';
            ProductMovementDetailsRow.isActiveProperty = 'IsActive';
            ProductMovementDetailsRow.localTextPrefix = 'Store.ProductMovementDetails';
        })(ProductMovementDetailsRow = Store.ProductMovementDetailsRow || (Store.ProductMovementDetailsRow = {}));
    })(Store = Store_47.Store || (Store_47.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_48) {
    var Store;
    (function (Store) {
        var ProductMovementDetailsService;
        (function (ProductMovementDetailsService) {
            ProductMovementDetailsService.baseUrl = 'Store/ProductMovementDetails';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductMovementDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductMovementDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductMovementDetailsService = Store.ProductMovementDetailsService || (Store.ProductMovementDetailsService = {}));
    })(Store = Store_48.Store || (Store_48.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_49) {
    var Store;
    (function (Store) {
        var ProductMovementForm = /** @class */ (function (_super) {
            __extends(ProductMovementForm, _super);
            function ProductMovementForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductMovementForm.init) {
                    ProductMovementForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DateEditor;
                    var w2 = Store.ShopsEditor;
                    var w3 = Store.CounterpartyEditor;
                    var w4 = s.LookupEditor;
                    var w5 = Store.ProductMovementDetailsEditor;
                    Q.initFormType(ProductMovementForm, [
                        'OperationTypeOpCode', w0,
                        'OrderDate', w1,
                        'ShopID', w2,
                        'CounterpartyID', w3,
                        'EmployeeID', w4,
                        'RequiredDate', w1,
                        'ShipperID', w4,
                        'ShippedDate', w1,
                        'DetailList', w5
                    ]);
                }
                return _this;
            }
            ProductMovementForm.formKey = 'Store.ProductMovement';
            return ProductMovementForm;
        }(Serenity.PrefixedContext));
        Store.ProductMovementForm = ProductMovementForm;
    })(Store = Store_49.Store || (Store_49.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_50) {
    var Store;
    (function (Store) {
        var ProductMovementOperations;
        (function (ProductMovementOperations) {
            ProductMovementOperations[ProductMovementOperations["IncomeItems"] = 200] = "IncomeItems";
            ProductMovementOperations[ProductMovementOperations["StockDelivery"] = 202] = "StockDelivery";
            ProductMovementOperations[ProductMovementOperations["SurplusGoods"] = 203] = "SurplusGoods";
            ProductMovementOperations[ProductMovementOperations["SaleOfArticles"] = 401] = "SaleOfArticles";
            ProductMovementOperations[ProductMovementOperations["LackOfItems"] = 402] = "LackOfItems";
            ProductMovementOperations[ProductMovementOperations["Scrapping\u042Crticles"] = 403] = "Scrapping\u042Crticles";
        })(ProductMovementOperations = Store.ProductMovementOperations || (Store.ProductMovementOperations = {}));
        Serenity.Decorators.registerEnumType(ProductMovementOperations, 'Store.Store.ProductMovementOperations', 'Store.ProductMovementOperations');
    })(Store = Store_50.Store || (Store_50.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_51) {
    var Store;
    (function (Store) {
        var ProductMovementRow;
        (function (ProductMovementRow) {
            ProductMovementRow.idProperty = 'ProductMoveID';
            ProductMovementRow.isActiveProperty = 'IsActive';
            ProductMovementRow.nameProperty = 'CounterpartyID';
            ProductMovementRow.localTextPrefix = 'Store.ProductMovement';
        })(ProductMovementRow = Store.ProductMovementRow || (Store.ProductMovementRow = {}));
    })(Store = Store_51.Store || (Store_51.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_52) {
    var Store;
    (function (Store) {
        var ProductMovementService;
        (function (ProductMovementService) {
            ProductMovementService.baseUrl = 'Store/ProductMovement';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductMovementService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductMovementService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductMovementService = Store.ProductMovementService || (Store.ProductMovementService = {}));
    })(Store = Store_52.Store || (Store_52.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_53) {
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
    })(Store = Store_53.Store || (Store_53.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_54) {
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
    })(Store = Store_54.Store || (Store_54.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_55) {
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
    })(Store = Store_55.Store || (Store_55.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_56) {
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
    })(Store = Store_56.Store || (Store_56.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_57) {
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
    })(Store = Store_57.Store || (Store_57.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_58) {
    var Store;
    (function (Store) {
        var ShippingState;
        (function (ShippingState) {
            ShippingState[ShippingState["NotShipped"] = 0] = "NotShipped";
            ShippingState[ShippingState["Shipped"] = 1] = "Shipped";
        })(ShippingState = Store.ShippingState || (Store.ShippingState = {}));
        Serenity.Decorators.registerEnumType(ShippingState, 'Store.Store.ShippingState', 'Store.ShippingState');
    })(Store = Store_58.Store || (Store_58.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_59) {
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
                        'ShopID', w0,
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
    })(Store = Store_59.Store || (Store_59.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_60) {
    var Store;
    (function (Store) {
        var ShopsRow;
        (function (ShopsRow) {
            ShopsRow.idProperty = 'ShopID';
            ShopsRow.isActiveProperty = 'IsActive';
            ShopsRow.nameProperty = 'ShopName';
            ShopsRow.localTextPrefix = 'Store.Shops';
            ShopsRow.lookupKey = 'Store.Shops';
            function getLookup() {
                return Q.getLookup('Store.Shops');
            }
            ShopsRow.getLookup = getLookup;
        })(ShopsRow = Store.ShopsRow || (Store.ShopsRow = {}));
    })(Store = Store_60.Store || (Store_60.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_61) {
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
    })(Store = Store_61.Store || (Store_61.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_62) {
    var Store;
    (function (Store) {
        var StoreRow;
        (function (StoreRow) {
            StoreRow.idProperty = 'Position';
            StoreRow.isActiveProperty = 'IsActive';
            StoreRow.nameProperty = 'Key';
            StoreRow.localTextPrefix = 'Store.Store';
        })(StoreRow = Store.StoreRow || (Store.StoreRow = {}));
    })(Store = Store_62.Store || (Store_62.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_63) {
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
                        'SupplierStat', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'City', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'Email', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
            }
            SupplierForm.formKey = 'Store.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Store.SupplierForm = SupplierForm;
    })(Store = Store_63.Store || (Store_63.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_64) {
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
    })(Store = Store_64.Store || (Store_64.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_65) {
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
    })(Store = Store_65.Store || (Store_65.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_66) {
    var Store;
    (function (Store) {
        var WaresCategoriesForm = /** @class */ (function (_super) {
            __extends(WaresCategoriesForm, _super);
            function WaresCategoriesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WaresCategoriesForm.init) {
                    WaresCategoriesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    Q.initFormType(WaresCategoriesForm, [
                        'WaresCategoryCode', w0,
                        'WaresCategoryName', w0,
                        'WaresCategoryDescription', w0,
                        'WaresCategoryImage', w1
                    ]);
                }
                return _this;
            }
            WaresCategoriesForm.formKey = 'Store.WaresCategories';
            return WaresCategoriesForm;
        }(Serenity.PrefixedContext));
        Store.WaresCategoriesForm = WaresCategoriesForm;
    })(Store = Store_66.Store || (Store_66.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_67) {
    var Store;
    (function (Store) {
        var WaresCategoriesLangRow;
        (function (WaresCategoriesLangRow) {
            WaresCategoriesLangRow.idProperty = 'ID';
            WaresCategoriesLangRow.nameProperty = 'WaresCategoryName';
            WaresCategoriesLangRow.localTextPrefix = 'Store.WaresCategoriesLang';
        })(WaresCategoriesLangRow = Store.WaresCategoriesLangRow || (Store.WaresCategoriesLangRow = {}));
    })(Store = Store_67.Store || (Store_67.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_68) {
    var Store;
    (function (Store) {
        var WaresCategoriesLangService;
        (function (WaresCategoriesLangService) {
            WaresCategoriesLangService.baseUrl = 'Store/WaresCategoriesLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaresCategoriesLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaresCategoriesLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaresCategoriesLangService = Store.WaresCategoriesLangService || (Store.WaresCategoriesLangService = {}));
    })(Store = Store_68.Store || (Store_68.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_69) {
    var Store;
    (function (Store) {
        var WaresCategoriesRow;
        (function (WaresCategoriesRow) {
            WaresCategoriesRow.idProperty = 'WaresCategoryID';
            WaresCategoriesRow.isActiveProperty = 'IsActive';
            WaresCategoriesRow.nameProperty = 'WaresCategoryName';
            WaresCategoriesRow.localTextPrefix = 'Store.WaresCategories';
            WaresCategoriesRow.lookupKey = 'Store.WaresCategories';
            function getLookup() {
                return Q.getLookup('Store.WaresCategories');
            }
            WaresCategoriesRow.getLookup = getLookup;
        })(WaresCategoriesRow = Store.WaresCategoriesRow || (Store.WaresCategoriesRow = {}));
    })(Store = Store_69.Store || (Store_69.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_70) {
    var Store;
    (function (Store) {
        var WaresCategoriesService;
        (function (WaresCategoriesService) {
            WaresCategoriesService.baseUrl = 'Store/WaresCategories';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaresCategoriesService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaresCategoriesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaresCategoriesService = Store.WaresCategoriesService || (Store.WaresCategoriesService = {}));
    })(Store = Store_70.Store || (Store_70.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_71) {
    var Store;
    (function (Store) {
        var WaresForm = /** @class */ (function (_super) {
            __extends(WaresForm, _super);
            function WaresForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WaresForm.init) {
                    WaresForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.BooleanEditor;
                    var w4 = Store.CounterpartyEditor;
                    var w5 = s.IntegerEditor;
                    var w6 = s.DecimalEditor;
                    Q.initFormType(WaresForm, [
                        'CategoryID', w0,
                        'WaresCode', w1,
                        'WaresBarcode', w1,
                        'WaresLabel', w1,
                        'WaresName', w1,
                        'MeasureID', w0,
                        'WaresImage', w2,
                        'Discontinued', w3,
                        'CounterpartyID', w4,
                        'QuantityPerUnit', w5,
                        'UnitPrice', w6,
                        'AccountID', w5
                    ]);
                }
                return _this;
            }
            WaresForm.formKey = 'Store.Wares';
            return WaresForm;
        }(Serenity.PrefixedContext));
        Store.WaresForm = WaresForm;
    })(Store = Store_71.Store || (Store_71.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_72) {
    var Store;
    (function (Store) {
        var WaresLangRow;
        (function (WaresLangRow) {
            WaresLangRow.idProperty = 'ID';
            WaresLangRow.nameProperty = 'WaresName';
            WaresLangRow.localTextPrefix = 'Store.WaresLang';
        })(WaresLangRow = Store.WaresLangRow || (Store.WaresLangRow = {}));
    })(Store = Store_72.Store || (Store_72.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_73) {
    var Store;
    (function (Store) {
        var WaresLangService;
        (function (WaresLangService) {
            WaresLangService.baseUrl = 'Store/WaresLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaresLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaresLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaresLangService = Store.WaresLangService || (Store.WaresLangService = {}));
    })(Store = Store_73.Store || (Store_73.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_74) {
    var Store;
    (function (Store) {
        var WaresMovementDetailsForm = /** @class */ (function (_super) {
            __extends(WaresMovementDetailsForm, _super);
            function WaresMovementDetailsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WaresMovementDetailsForm.init) {
                    WaresMovementDetailsForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    Q.initFormType(WaresMovementDetailsForm, [
                        'WaresID', w0,
                        'IncomePrice', w1,
                        'SalePrice', w1,
                        'SinglePrice', w1,
                        'Quantity', w1,
                        'Discount', w1
                    ]);
                }
                return _this;
            }
            WaresMovementDetailsForm.formKey = 'Store.WaresMovementDetails';
            return WaresMovementDetailsForm;
        }(Serenity.PrefixedContext));
        Store.WaresMovementDetailsForm = WaresMovementDetailsForm;
    })(Store = Store_74.Store || (Store_74.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_75) {
    var Store;
    (function (Store) {
        var WaresMovementDetailsRow;
        (function (WaresMovementDetailsRow) {
            WaresMovementDetailsRow.idProperty = 'DetailID';
            WaresMovementDetailsRow.isActiveProperty = 'IsActive';
            WaresMovementDetailsRow.localTextPrefix = 'Store.WaresMovementDetails';
        })(WaresMovementDetailsRow = Store.WaresMovementDetailsRow || (Store.WaresMovementDetailsRow = {}));
    })(Store = Store_75.Store || (Store_75.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_76) {
    var Store;
    (function (Store) {
        var WaresMovementDetailsService;
        (function (WaresMovementDetailsService) {
            WaresMovementDetailsService.baseUrl = 'Store/WaresMovementDetails';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaresMovementDetailsService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaresMovementDetailsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaresMovementDetailsService = Store.WaresMovementDetailsService || (Store.WaresMovementDetailsService = {}));
    })(Store = Store_76.Store || (Store_76.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_77) {
    var Store;
    (function (Store) {
        var WaresMovementForm = /** @class */ (function (_super) {
            __extends(WaresMovementForm, _super);
            function WaresMovementForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!WaresMovementForm.init) {
                    WaresMovementForm.init = true;
                    var s = Serenity;
                    var w0 = s.EnumEditor;
                    var w1 = s.DateEditor;
                    var w2 = Store.ShopsEditor;
                    var w3 = Store.CounterpartyEditor;
                    var w4 = s.LookupEditor;
                    var w5 = Store.WaresMovementDetailsEditor;
                    Q.initFormType(WaresMovementForm, [
                        'OperationTypeOpCode', w0,
                        'OrderDate', w1,
                        'ShopID', w2,
                        'CounterpartyID', w3,
                        'EmployeeID', w4,
                        'RequiredDate', w1,
                        'ShipperID', w4,
                        'ShippedDate', w1,
                        'DetailList', w5
                    ]);
                }
                return _this;
            }
            WaresMovementForm.formKey = 'Store.WaresMovement';
            return WaresMovementForm;
        }(Serenity.PrefixedContext));
        Store.WaresMovementForm = WaresMovementForm;
    })(Store = Store_77.Store || (Store_77.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_78) {
    var Store;
    (function (Store) {
        var WaresMovementOperations;
        (function (WaresMovementOperations) {
            WaresMovementOperations[WaresMovementOperations["IncomeItems"] = 100] = "IncomeItems";
            WaresMovementOperations[WaresMovementOperations["InitialBalance"] = 101] = "InitialBalance";
            WaresMovementOperations[WaresMovementOperations["StockDelivery"] = 102] = "StockDelivery";
            WaresMovementOperations[WaresMovementOperations["SurplusGoods"] = 103] = "SurplusGoods";
            WaresMovementOperations[WaresMovementOperations["ExchangeRevenue"] = 105] = "ExchangeRevenue";
            WaresMovementOperations[WaresMovementOperations["UnsubscriptionOfGoods"] = 109] = "UnsubscriptionOfGoods";
            WaresMovementOperations[WaresMovementOperations["SaleOfArticles"] = 301] = "SaleOfArticles";
            WaresMovementOperations[WaresMovementOperations["LackOfItems"] = 302] = "LackOfItems";
            WaresMovementOperations[WaresMovementOperations["Scrapping\u042Crticles"] = 303] = "Scrapping\u042Crticles";
            WaresMovementOperations[WaresMovementOperations["ExchangeExpense"] = 305] = "ExchangeExpense";
            WaresMovementOperations[WaresMovementOperations["Inventory"] = 500] = "Inventory";
        })(WaresMovementOperations = Store.WaresMovementOperations || (Store.WaresMovementOperations = {}));
        Serenity.Decorators.registerEnumType(WaresMovementOperations, 'Store.Store.WaresMovementOperations', 'Store.WaresMovementOperations');
    })(Store = Store_78.Store || (Store_78.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_79) {
    var Store;
    (function (Store) {
        var WaresMovementRow;
        (function (WaresMovementRow) {
            WaresMovementRow.idProperty = 'WaresMoveID';
            WaresMovementRow.isActiveProperty = 'IsActive';
            WaresMovementRow.nameProperty = 'CounterpartyID';
            WaresMovementRow.localTextPrefix = 'Store.WaresMovement';
        })(WaresMovementRow = Store.WaresMovementRow || (Store.WaresMovementRow = {}));
    })(Store = Store_79.Store || (Store_79.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_80) {
    var Store;
    (function (Store) {
        var WaresMovementService;
        (function (WaresMovementService) {
            WaresMovementService.baseUrl = 'Store/WaresMovement';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaresMovementService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaresMovementService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaresMovementService = Store.WaresMovementService || (Store.WaresMovementService = {}));
    })(Store = Store_80.Store || (Store_80.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_81) {
    var Store;
    (function (Store) {
        var WaresRow;
        (function (WaresRow) {
            WaresRow.idProperty = 'WaresID';
            WaresRow.isActiveProperty = 'IsActive';
            WaresRow.nameProperty = 'WaresName';
            WaresRow.localTextPrefix = 'Store.Wares';
            WaresRow.lookupKey = 'Store.Wares';
            function getLookup() {
                return Q.getLookup('Store.Wares');
            }
            WaresRow.getLookup = getLookup;
        })(WaresRow = Store.WaresRow || (Store.WaresRow = {}));
    })(Store = Store_81.Store || (Store_81.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_82) {
    var Store;
    (function (Store) {
        var WaresService;
        (function (WaresService) {
            WaresService.baseUrl = 'Store/Wares';
            [
                'Create',
                'Update',
                'RetrieveLocalization',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                WaresService[x] = function (r, s, o) {
                    return Q.serviceRequest(WaresService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(WaresService = Store.WaresService || (Store.WaresService = {}));
    })(Store = Store_82.Store || (Store_82.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_83) {
    var Texts;
    (function (Texts) {
        Store_83.Store['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1, TenantId: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Tenant: { TenantId: 1, TenantName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, TenantId: 1, TenantName: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Store: { Category: { CategoryCode: 1, CategoryID: 1, CategoryName: 1, CategoryType: 1, CategoryTypeID: 1, Description: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Picture: 1, TenantId: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, CategoryLang: { CategoryName: 1, Description: 1, ID: 1, LanguageID: 1 }, CategoryType: { CategoryType: 1, CategoryTypeID: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, TenantId: 1, Type: 1, UpdateDate: 1, UpdateUserId: 1 }, Counterparty: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, CounterpartyID: 1, Country: 1, Email: 1, ID: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastContactDate: 1, LastContactedBy: 1, NoteList: 1, Phone: 1, PostalCode: 1, Region: 1, Representatives: 1, SendBulletin: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, CounterpartyDetail: { Email: 1, ID: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, SendBulletin: 1 }, CounterpartyRepresentative: { CounterpartyID: 1, EmployeeID: 1, RepresentativeID: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, TenantId: 1, Title: 1, TitleOfCourtesy: 1, UpdateDate: 1, UpdateUserId: 1 }, Measure: { InsertDate: 1, InsertUserId: 1, IsActive: 1, MeasureID: 1, MeasureName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, OperationType: { InsertDate: 1, InsertUserId: 1, IsActive: 1, OpCode: 1, Operation: 1, OperationTypeID: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Product: { CategoryCategoryName: 1, CategoryDescription: 1, CategoryID: 1, CounterpartyCity: 1, CounterpartyCompanyName: 1, CounterpartyContactName: 1, CounterpartyContactTitle: 1, CounterpartyCountry: 1, CounterpartyID: 1, CounterpartyPhone: 1, CounterpartyRegion: 1, DetailList: 1, Discontinued: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, MeasureID: 1, MeasureMeasureName: 1, ProductBarcode: 1, ProductCode: 1, ProductID: 1, ProductImage: 1, ProductLabel: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierEmail: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, SupplierSupplierStat: 1, TenantId: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductDetail: { DetailID: 1, Discount: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineTotal: 1, PlanPrice: 1, ProductCategoryID: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantity: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSupplierID: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, Quantity: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, WaresAccountID: 1, WaresBarcode: 1, WaresCategoryID: 1, WaresCode: 1, WaresDiscontinued: 1, WaresID: 1, WaresImage: 1, WaresLabel: 1, WaresMeasureID: 1, WaresName: 1, WaresQuantityPerUnit: 1, WaresUnitPrice: 1 }, ProductLang: { ID: 1, LanguageID: 1, ProductID: 1, ProductName: 1 }, ProductMovement: { CounterpartyCity: 1, CounterpartyCompanyName: 1, CounterpartyContactName: 1, CounterpartyContactTitle: 1, CounterpartyCountry: 1, CounterpartyID: 1, CounterpartyPhone: 1, CounterpartyRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, OperationTypeID: 1, OperationTypeOpCode: 1, OperationTypeOperation: 1, OrderDate: 1, ProductMoveID: 1, RequiredDate: 1, ShippedDate: 1, ShipperCompanyName: 1, ShipperID: 1, ShipperPhone: 1, ShippingState: 1, ShopAddress: 1, ShopCity: 1, ShopContactName: 1, ShopContactTitle: 1, ShopCountry: 1, ShopID: 1, ShopPhone: 1, ShopPostalCode: 1, ShopRegion: 1, ShopShopName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, ProductMovementDetails: { DetailID: 1, Discount: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineTotal: 1, ProductCategoryID: 1, ProductDiscontinued: 1, ProductID: 1, ProductMoveCounterpartyID: 1, ProductMoveEmployeeID: 1, ProductMoveID: 1, ProductMoveOperationTypeID: 1, ProductMoveOperationTypeOpCode: 1, ProductMoveOrderDate: 1, ProductMoveRequiredDate: 1, ProductMoveShippedDate: 1, ProductMoveShipperID: 1, ProductMoveShopID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductReorderLevel: 1, ProductSupplierID: 1, ProductUnitPrice: 1, ProductUnitsInStock: 1, ProductUnitsOnOrder: 1, Quantity: 1, SalePrice: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Shipper: { CompanyName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, ShipperID: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Shops: { Address: 1, City: 1, ContactName: 1, ContactTitle: 1, Country: 1, ID: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, PostalCode: 1, Region: 1, ShopID: 1, ShopName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Store: { AExpenceSinglePrice: 1, AExpenceValue: 1, AIncomeSinglePrice: 1, AIncomeValue: 1, AMistake: 1, AReCost: 1, ARestQuantity: 1, ARestSinglePrice: 1, ARestValue: 1, Date: 1, ExpenceQuantity: 1, ExpenceSinglePrice: 1, ExpenceValue: 1, IncomeQuantity: 1, IncomeSinglePrice: 1, IncomeValue: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Key: 1, Mistake: 1, MoveId: 1, OperationId: 1, Position: 1, ReCost: 1, RestQuantity: 1, RestSinglePrice: 1, RestValue: 1, ShopId: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, WaresId: 1, WaresMode: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Email: 1, Fax: 1, HomePage: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1, SupplierStat: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1 }, Wares: { AccountID: 1, CategoryCategoryName: 1, CategoryDescription: 1, CategoryID: 1, CounterpartyCity: 1, CounterpartyCompanyName: 1, CounterpartyContactName: 1, CounterpartyContactTitle: 1, CounterpartyCountry: 1, CounterpartyID: 1, CounterpartyPhone: 1, CounterpartyRegion: 1, Discontinued: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, MeasureID: 1, MeasureName: 1, QuantityPerUnit: 1, SupplierID: 1, TenantId: 1, Type: 1, UnitPrice: 1, UpdateDate: 1, UpdateUserId: 1, WaresBarcode: 1, WaresCode: 1, WaresID: 1, WaresImage: 1, WaresLabel: 1, WaresName: 1 }, WaresLang: { Description: 1, ID: 1, LanguageID: 1, WaresID: 1, WaresName: 1 }, WaresMovement: { CounterpartyCity: 1, CounterpartyCompanyName: 1, CounterpartyContactName: 1, CounterpartyContactTitle: 1, CounterpartyCountry: 1, CounterpartyID: 1, CounterpartyPhone: 1, CounterpartyRegion: 1, DetailList: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, OperationTypeID: 1, OperationTypeOpCode: 1, OperationTypeOperation: 1, OrderDate: 1, RequiredDate: 1, ShippedDate: 1, ShipperCompanyName: 1, ShipperID: 1, ShipperPhone: 1, ShippingState: 1, ShopAddress: 1, ShopCity: 1, ShopContactName: 1, ShopContactTitle: 1, ShopCountry: 1, ShopID: 1, ShopPhone: 1, ShopPostalCode: 1, ShopRegion: 1, ShopShopName: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, WaresMoveID: 1 }, WaresMovementDetails: { DetailID: 1, Discount: 1, IncomePrice: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LineTotal: 1, Quantity: 1, SalePrice: 1, SinglePrice: 1, TenantId: 1, UpdateDate: 1, UpdateUserId: 1, WaresCategoryID: 1, WaresCode: 1, WaresCounterpartyID: 1, WaresID: 1, WaresMeasureID: 1, WaresMeasureName: 1, WaresMoveCounterpartyID: 1, WaresMoveEmployeeID: 1, WaresMoveID: 1, WaresMoveOperationTypeID: 1, WaresMoveOperationTypeOpCode: 1, WaresMoveOrderDate: 1, WaresMoveRequiredDate: 1, WaresMoveShippedDate: 1, WaresMoveShipperID: 1, WaresMoveShopID: 1, WaresName: 1, WaresQuantityPerUnit: 1, WaresUnitPrice: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, SavePrimaryKeyError: 1 } });
    })(Texts = Store_83.Texts || (Store_83.Texts = {}));
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
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = Store.ScriptInitialization || (Store.ScriptInitialization = {}));
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
    Store.BasicProgressDialog = BasicProgressDialog;
})(Store || (Store = {}));
var Store;
(function (Store) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new Store.BasicProgressDialog();
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(DialogUtils = Store.DialogUtils || (Store.DialogUtils = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    Store.StaticTextBlock = StaticTextBlock;
})(Store || (Store = {}));
var Store;
(function (Store) {
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
    })(Common = Store.Common || (Store.Common = {}));
})(Store || (Store = {}));
var Store;
(function (Store_84) {
    var Store;
    (function (Store) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Store.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Store.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Store.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Store.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Store.CategoryService.baseUrl; };
            CategoryDialog.prototype.getLanguages = function () { return Store_84.LanguageList.getValue(); };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Store.CategoryDialog = CategoryDialog;
    })(Store = Store_84.Store || (Store_84.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_85) {
    var Store;
    (function (Store) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return 'Store.Category'; };
            CategoryGrid.prototype.getDialogType = function () { return Store.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Store.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Store.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Store.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Store.CategoryGrid = CategoryGrid;
    })(Store = Store_85.Store || (Store_85.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_86) {
    var Store;
    (function (Store) {
        var CategoryTypeDialog = /** @class */ (function (_super) {
            __extends(CategoryTypeDialog, _super);
            function CategoryTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.CategoryTypeForm(_this.idPrefix);
                return _this;
            }
            CategoryTypeDialog.prototype.getFormKey = function () { return Store.CategoryTypeForm.formKey; };
            CategoryTypeDialog.prototype.getIdProperty = function () { return Store.CategoryTypeRow.idProperty; };
            CategoryTypeDialog.prototype.getLocalTextPrefix = function () { return Store.CategoryTypeRow.localTextPrefix; };
            CategoryTypeDialog.prototype.getNameProperty = function () { return Store.CategoryTypeRow.nameProperty; };
            CategoryTypeDialog.prototype.getService = function () { return Store.CategoryTypeService.baseUrl; };
            CategoryTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryTypeDialog);
            return CategoryTypeDialog;
        }(Serenity.EntityDialog));
        Store.CategoryTypeDialog = CategoryTypeDialog;
    })(Store = Store_86.Store || (Store_86.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_87) {
    var Store;
    (function (Store) {
        var CategoryTypeGrid = /** @class */ (function (_super) {
            __extends(CategoryTypeGrid, _super);
            function CategoryTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryTypeGrid.prototype.getColumnsKey = function () { return 'Store.CategoryType'; };
            CategoryTypeGrid.prototype.getDialogType = function () { return Store.CategoryTypeDialog; };
            CategoryTypeGrid.prototype.getIdProperty = function () { return Store.CategoryTypeRow.idProperty; };
            CategoryTypeGrid.prototype.getLocalTextPrefix = function () { return Store.CategoryTypeRow.localTextPrefix; };
            CategoryTypeGrid.prototype.getService = function () { return Store.CategoryTypeService.baseUrl; };
            CategoryTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryTypeGrid);
            return CategoryTypeGrid;
        }(Serenity.EntityGrid));
        Store.CategoryTypeGrid = CategoryTypeGrid;
    })(Store = Store_87.Store || (Store_87.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_88) {
    var Store;
    (function (Store) {
        var CounterpartyDialog = /** @class */ (function (_super) {
            __extends(CounterpartyDialog, _super);
            function CounterpartyDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.CounterpartyForm(_this.idPrefix);
                _this.ordersGrid = new Store.CounterpartyProductMovementGrid(_this.byId('ProductMovementGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                Store_88.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                return _this;
            }
            CounterpartyDialog.prototype.getFormKey = function () { return Store.CounterpartyForm.formKey; };
            CounterpartyDialog.prototype.getIdProperty = function () { return Store.CounterpartyRow.idProperty; };
            CounterpartyDialog.prototype.getLocalTextPrefix = function () { return Store.CounterpartyRow.localTextPrefix; };
            CounterpartyDialog.prototype.getNameProperty = function () { return Store.CounterpartyRow.nameProperty; };
            CounterpartyDialog.prototype.getService = function () { return Store.CounterpartyService.baseUrl; };
            CounterpartyDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CounterpartyDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CounterpartyDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Product Movement', this.isNewOrDeleted());
                this.ordersGrid.counterpartyID = entity.CounterpartyID;
            };
            CounterpartyDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Store.Counterparty');
            };
            CounterpartyDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CounterpartyDialog);
            return CounterpartyDialog;
        }(Serenity.EntityDialog));
        Store.CounterpartyDialog = CounterpartyDialog;
    })(Store = Store_88.Store || (Store_88.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_89) {
    var Store;
    (function (Store) {
        var CounterpartyEditor = /** @class */ (function (_super) {
            __extends(CounterpartyEditor, _super);
            function CounterpartyEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CounterpartyEditor.prototype.getLookupKey = function () {
                return Store.CounterpartyRow.lookupKey;
            };
            CounterpartyEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CounterpartyID + ']';
            };
            CounterpartyEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CounterpartyEditor);
            return CounterpartyEditor;
        }(Serenity.LookupEditorBase));
        Store.CounterpartyEditor = CounterpartyEditor;
    })(Store = Store_89.Store || (Store_89.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_90) {
    var Store;
    (function (Store) {
        var CounterpartyGrid = /** @class */ (function (_super) {
            __extends(CounterpartyGrid, _super);
            function CounterpartyGrid(container) {
                return _super.call(this, container) || this;
            }
            CounterpartyGrid.prototype.getColumnsKey = function () { return 'Store.Counterparty'; };
            CounterpartyGrid.prototype.getDialogType = function () { return Store.CounterpartyDialog; };
            CounterpartyGrid.prototype.getIdProperty = function () { return Store.CounterpartyRow.idProperty; };
            CounterpartyGrid.prototype.getLocalTextPrefix = function () { return Store.CounterpartyRow.localTextPrefix; };
            CounterpartyGrid.prototype.getService = function () { return Store.CounterpartyService.baseUrl; };
            CounterpartyGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Store_90.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Store/Counterparty/ListExcel',
                    separator: true
                }));
                buttons.push(Store_90.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CounterpartyGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CounterpartyGrid);
            return CounterpartyGrid;
        }(Serenity.EntityGrid));
        Store.CounterpartyGrid = CounterpartyGrid;
    })(Store = Store_90.Store || (Store_90.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_91) {
    var Store;
    (function (Store) {
        var ProductMovementDialog = /** @class */ (function (_super) {
            __extends(ProductMovementDialog, _super);
            function ProductMovementDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.ProductMovementForm(_this.idPrefix);
                return _this;
            }
            ProductMovementDialog.prototype.getFormKey = function () { return Store.ProductMovementForm.formKey; };
            ProductMovementDialog.prototype.getIdProperty = function () { return Store.ProductMovementRow.idProperty; };
            ProductMovementDialog.prototype.getLocalTextPrefix = function () { return Store.ProductMovementRow.localTextPrefix; };
            ProductMovementDialog.prototype.getNameProperty = function () { return Store.ProductMovementRow.nameProperty; };
            ProductMovementDialog.prototype.getService = function () { return Store.ProductMovementService.baseUrl; };
            ProductMovementDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Store_91.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Store.ProductMovementDetails',
                    getParams: function () { return ({
                        ProductMoveID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            ProductMovementDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            ProductMovementDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductMovementDialog);
            return ProductMovementDialog;
        }(Serenity.EntityDialog));
        Store.ProductMovementDialog = ProductMovementDialog;
    })(Store = Store_91.Store || (Store_91.Store = {}));
})(Store || (Store = {}));
/// <reference path="../ProductMovement/ProductMovementDialog.ts" />
var Store;
(function (Store_92) {
    var Store;
    (function (Store) {
        var CounterpartyProductMovementDialog = /** @class */ (function (_super) {
            __extends(CounterpartyProductMovementDialog, _super);
            function CounterpartyProductMovementDialog() {
                return _super.call(this) || this;
            }
            CounterpartyProductMovementDialog.prototype.UpdateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CounterpartyID, true);
            };
            CounterpartyProductMovementDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CounterpartyProductMovementDialog);
            return CounterpartyProductMovementDialog;
        }(Store.ProductMovementDialog));
        Store.CounterpartyProductMovementDialog = CounterpartyProductMovementDialog;
    })(Store = Store_92.Store || (Store_92.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_93) {
    var Store;
    (function (Store) {
        var ProductMovementGrid = /** @class */ (function (_super) {
            __extends(ProductMovementGrid, _super);
            function ProductMovementGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductMovementGrid.prototype.getColumnsKey = function () { return 'Store.ProductMovement'; };
            ProductMovementGrid.prototype.getDialogType = function () { return Store.ProductMovementDialog; };
            ProductMovementGrid.prototype.getIdProperty = function () { return Store.ProductMovementRow.idProperty; };
            ProductMovementGrid.prototype.getLocalTextPrefix = function () { return Store.ProductMovementRow.localTextPrefix; };
            ProductMovementGrid.prototype.getService = function () { return Store.ProductMovementService.baseUrl; };
            ProductMovementGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Store.ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: function (p) {
                        _this.view.params.ProductID = Q.toId(p.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            ProductMovementGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            ProductMovementGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Store_93.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.ProductMovementService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Store_93.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            ProductMovementGrid.prototype.getColumns = function () {
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
            ProductMovementGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        Store_93.Common.ReportHelper.execute({
                            reportKey: 'Store.ProductMovementDetails',
                            params: {
                                ProductMoveID: item.ProductMoveID
                            }
                        });
                    }
                }
            };
            ProductMovementGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            ProductMovementGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CounterpartyID: eq ? eq.CounterpartyID : null
                });
            };
            ProductMovementGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductMovementGrid);
            return ProductMovementGrid;
        }(Serenity.EntityGrid));
        Store.ProductMovementGrid = ProductMovementGrid;
    })(Store = Store_93.Store || (Store_93.Store = {}));
})(Store || (Store = {}));
/// <reference path="../ProductMovement/ProductMovementGrid.ts" />
var Store;
(function (Store_94) {
    var Store;
    (function (Store) {
        var CounterpartyProductMovementGrid = /** @class */ (function (_super) {
            __extends(CounterpartyProductMovementGrid, _super);
            function CounterpartyProductMovementGrid(container) {
                return _super.call(this, container) || this;
            }
            CounterpartyProductMovementGrid.prototype.getDialogType = function () { return Store.CounterpartyProductMovementDialog; };
            CounterpartyProductMovementGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CounterpartyCompanyName" /* CounterpartyCompanyName */; });
            };
            CounterpartyProductMovementGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CounterpartyProductMovementGrid.prototype.AddButtonClick = function () {
                this.editItem({ CounterpartyID: this.counterpartyID });
            };
            CounterpartyProductMovementGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CounterpartyProductMovementGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.counterpartyID;
            };
            Object.defineProperty(CounterpartyProductMovementGrid.prototype, "counterpartyID", {
                get: function () {
                    return this._counterpartyID;
                },
                set: function (value) {
                    if (this._counterpartyID !== value) {
                        this._counterpartyID = value;
                        this.setEquality('CounterpartyID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CounterpartyProductMovementGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CounterpartyProductMovementGrid);
            return CounterpartyProductMovementGrid;
        }(Store.ProductMovementGrid));
        Store.CounterpartyProductMovementGrid = CounterpartyProductMovementGrid;
    })(Store = Store_94.Store || (Store_94.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_95) {
    var Store;
    (function (Store) {
        var WaresMovementDialog = /** @class */ (function (_super) {
            __extends(WaresMovementDialog, _super);
            function WaresMovementDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.WaresMovementForm(_this.idPrefix);
                return _this;
            }
            WaresMovementDialog.prototype.getFormKey = function () { return Store.WaresMovementForm.formKey; };
            WaresMovementDialog.prototype.getIdProperty = function () { return Store.WaresMovementRow.idProperty; };
            WaresMovementDialog.prototype.getLocalTextPrefix = function () { return Store.WaresMovementRow.localTextPrefix; };
            WaresMovementDialog.prototype.getNameProperty = function () { return Store.WaresMovementRow.nameProperty; };
            WaresMovementDialog.prototype.getService = function () { return Store.WaresMovementService.baseUrl; };
            WaresMovementDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(Store_95.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Store.WaresMovementDetails',
                    getParams: function () { return ({
                        WaresMoveID: _this.get_entityId()
                    }); }
                }));
                return buttons;
            };
            WaresMovementDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            WaresMovementDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], WaresMovementDialog);
            return WaresMovementDialog;
        }(Serenity.EntityDialog));
        Store.WaresMovementDialog = WaresMovementDialog;
    })(Store = Store_95.Store || (Store_95.Store = {}));
})(Store || (Store = {}));
/// <reference path="../WaresMovement/WaresMovementDialog.ts" />
var Store;
(function (Store_96) {
    var Store;
    (function (Store) {
        var CounterpartyWaresMovementDialog = /** @class */ (function (_super) {
            __extends(CounterpartyWaresMovementDialog, _super);
            function CounterpartyWaresMovementDialog() {
                return _super.call(this) || this;
            }
            CounterpartyWaresMovementDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CounterpartyID, true);
            };
            CounterpartyWaresMovementDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CounterpartyWaresMovementDialog);
            return CounterpartyWaresMovementDialog;
        }(Store.WaresMovementDialog));
        Store.CounterpartyWaresMovementDialog = CounterpartyWaresMovementDialog;
    })(Store = Store_96.Store || (Store_96.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_97) {
    var Store;
    (function (Store) {
        var WaresMovementGrid = /** @class */ (function (_super) {
            __extends(WaresMovementGrid, _super);
            function WaresMovementGrid(container) {
                return _super.call(this, container) || this;
            }
            WaresMovementGrid.prototype.getColumnsKey = function () { return 'Store.WaresMovement'; };
            WaresMovementGrid.prototype.getDialogType = function () { return Store.WaresMovementDialog; };
            WaresMovementGrid.prototype.getIdProperty = function () { return Store.WaresMovementRow.idProperty; };
            WaresMovementGrid.prototype.getLocalTextPrefix = function () { return Store.WaresMovementRow.localTextPrefix; };
            WaresMovementGrid.prototype.getService = function () { return Store.WaresMovementService.baseUrl; };
            WaresMovementGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var filters = _super.prototype.getQuickFilters.call(this);
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Store.WaresRow.lookupKey
                    },
                    field: 'WaresID',
                    title: 'Contains Wares in Details',
                    handler: function (w) {
                        _this.view.params.WaresID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return filters;
            };
            WaresMovementGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                //this.findQuickFilter(Serenity.LookupEditor, fld.OperationTypeOperation).values = ["[102]Доставка на стоки"];
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            WaresMovementGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Store_97.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.WaresMovementService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Store_97.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            WaresMovementGrid.prototype.getColumns = function () {
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
            WaresMovementGrid.prototype.onClick = function (e, row, cell) {
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
                        Store_97.Common.ReportHelper.execute({
                            reportKey: 'Store.WaresMovementDetails',
                            params: {
                                WaresMoveID: item.WaresMoveID
                            }
                        });
                    }
                }
            };
            WaresMovementGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            //public set_OpCode(value: any): void {
            //    this.OpCodeQuickFilter.value = value == ["[102]Доставка на стоки"].toString();
            WaresMovementGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CounterpartyID: eq ? eq.CounterpartyID : null
                });
            };
            WaresMovementGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], WaresMovementGrid);
            return WaresMovementGrid;
        }(Serenity.EntityGrid));
        Store.WaresMovementGrid = WaresMovementGrid;
    })(Store = Store_97.Store || (Store_97.Store = {}));
})(Store || (Store = {}));
/// <reference path="../WaresMovement/WaresMovementGrid.ts" />
var Store;
(function (Store_98) {
    var Store;
    (function (Store) {
        var CounterpartyWaresMovementGrid = /** @class */ (function (_super) {
            __extends(CounterpartyWaresMovementGrid, _super);
            function CounterpartyWaresMovementGrid(container) {
                return _super.call(this, container) || this;
            }
            CounterpartyWaresMovementGrid.prototype.getDialogType = function () { return Store.CounterpartyWaresMovementDialog; };
            CounterpartyWaresMovementGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CounterpartyCompanyName" /* CounterpartyCompanyName */; });
            };
            CounterpartyWaresMovementGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CounterpartyWaresMovementGrid.prototype.AddButtonClick = function () {
                this.editItem({ CounterpartyID: this.counterpartyID });
            };
            CounterpartyWaresMovementGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CounterpartyWaresMovementGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.counterpartyID;
            };
            Object.defineProperty(CounterpartyWaresMovementGrid.prototype, "counterpartyID", {
                get: function () {
                    return this._counterpartyID;
                },
                set: function (value) {
                    if (this._counterpartyID !== value) {
                        this._counterpartyID = value;
                        this.setEquality('CounterpartyID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CounterpartyWaresMovementGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CounterpartyWaresMovementGrid);
            return CounterpartyWaresMovementGrid;
        }(Store.WaresMovementGrid));
        Store.CounterpartyWaresMovementGrid = CounterpartyWaresMovementGrid;
    })(Store = Store_98.Store || (Store_98.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_99) {
    var Store;
    (function (Store) {
        var EmployeeDialog = /** @class */ (function (_super) {
            __extends(EmployeeDialog, _super);
            function EmployeeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new EmployeeForm(_this.idPrefix);
                return _this;
            }
            EmployeeDialog.prototype.getFormKey = function () { return EmployeeForm.formKey; };
            EmployeeDialog.prototype.getIdProperty = function () { return Store.EmployeeRow.idProperty; };
            EmployeeDialog.prototype.getLocalTextPrefix = function () { return Store.EmployeeRow.localTextPrefix; };
            EmployeeDialog.prototype.getNameProperty = function () { return Store.EmployeeRow.nameProperty; };
            EmployeeDialog.prototype.getService = function () { return EmployeeService.baseUrl; };
            EmployeeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeDialog);
            return EmployeeDialog;
        }(Serenity.EntityDialog));
        Store.EmployeeDialog = EmployeeDialog;
    })(Store = Store_99.Store || (Store_99.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_100) {
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
    })(Store = Store_100.Store || (Store_100.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_101) {
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
            EmployeeGrid.prototype.getService = function () { return EmployeeService.baseUrl; };
            EmployeeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EmployeeGrid);
            return EmployeeGrid;
        }(Serenity.EntityGrid));
        Store.EmployeeGrid = EmployeeGrid;
    })(Store = Store_101.Store || (Store_101.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_102) {
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
    })(Store = Store_102.Store || (Store_102.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_103) {
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
    })(Store = Store_103.Store || (Store_103.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_104) {
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
    })(Store = Store_104.Store || (Store_104.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_105) {
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
    })(Store = Store_105.Store || (Store_105.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_106) {
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
                        InsertUserDisplayName: Store_106.Authorization.userDefinition.DisplayName,
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
    })(Store = Store_106.Store || (Store_106.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_107) {
    var Store;
    (function (Store) {
        var OperationTypeDialog = /** @class */ (function (_super) {
            __extends(OperationTypeDialog, _super);
            function OperationTypeDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.OperationTypeForm(_this.idPrefix);
                return _this;
            }
            OperationTypeDialog.prototype.getFormKey = function () { return Store.OperationTypeForm.formKey; };
            OperationTypeDialog.prototype.getIdProperty = function () { return Store.OperationTypeRow.idProperty; };
            OperationTypeDialog.prototype.getLocalTextPrefix = function () { return Store.OperationTypeRow.localTextPrefix; };
            OperationTypeDialog.prototype.getNameProperty = function () { return Store.OperationTypeRow.nameProperty; };
            OperationTypeDialog.prototype.getService = function () { return Store.OperationTypeService.baseUrl; };
            OperationTypeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OperationTypeDialog);
            return OperationTypeDialog;
        }(Serenity.EntityDialog));
        Store.OperationTypeDialog = OperationTypeDialog;
    })(Store = Store_107.Store || (Store_107.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_108) {
    var Store;
    (function (Store) {
        var OperationTypeEditor = /** @class */ (function (_super) {
            __extends(OperationTypeEditor, _super);
            function OperationTypeEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            OperationTypeEditor.prototype.getLookupKey = function () {
                return Store.OperationTypeRow.lookupKey;
            };
            OperationTypeEditor.prototype.getItemText = function (item, lookup) {
                return '[' + item.OpCode + '] ' + _super.prototype.getItemText.call(this, item, lookup);
            };
            OperationTypeEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], OperationTypeEditor);
            return OperationTypeEditor;
        }(Serenity.LookupEditorBase));
        Store.OperationTypeEditor = OperationTypeEditor;
    })(Store = Store_108.Store || (Store_108.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_109) {
    var Store;
    (function (Store) {
        var OperationTypeGrid = /** @class */ (function (_super) {
            __extends(OperationTypeGrid, _super);
            function OperationTypeGrid(container) {
                return _super.call(this, container) || this;
            }
            OperationTypeGrid.prototype.getColumnsKey = function () { return 'Store.OperationType'; };
            OperationTypeGrid.prototype.getDialogType = function () { return Store.OperationTypeDialog; };
            OperationTypeGrid.prototype.getIdProperty = function () { return Store.OperationTypeRow.idProperty; };
            OperationTypeGrid.prototype.getLocalTextPrefix = function () { return Store.OperationTypeRow.localTextPrefix; };
            OperationTypeGrid.prototype.getService = function () { return Store.OperationTypeService.baseUrl; };
            OperationTypeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], OperationTypeGrid);
            return OperationTypeGrid;
        }(Serenity.EntityGrid));
        Store.OperationTypeGrid = OperationTypeGrid;
    })(Store = Store_109.Store || (Store_109.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_110) {
    var Store;
    (function (Store) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Store.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Store.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Store.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Store.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Store.ProductService.baseUrl; };
            ProductDialog.prototype.getLanguages = function () { return Store_110.LanguageList.getValue(); };
            ProductDialog.prototype.UpdateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.ProductCode, true);
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Store.ProductDialog = ProductDialog;
    })(Store = Store_110.Store || (Store_110.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_111) {
    var Store;
    (function (Store) {
        var ProductEditor = /** @class */ (function (_super) {
            __extends(ProductEditor, _super);
            function ProductEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            ProductEditor.prototype.getLookupKey = function () {
                return Store.CategoryRow.lookupKey;
            };
            ProductEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.Type === 200;
                });
            };
            ProductEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductEditor);
            return ProductEditor;
        }(Serenity.LookupEditorBase));
        Store.ProductEditor = ProductEditor;
    })(Store = Store_111.Store || (Store_111.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_112) {
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
            ProductGrid.prototype.getQuickFilters = function () {
                var _this = this;
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                flt.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: Store.WaresRow.lookupKey
                    },
                    field: 'WaresID',
                    title: 'Contains Wares in Details',
                    handler: function (w) {
                        _this.view.params.WaresID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
                return flt;
            };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Store_112.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Store_112.Common.PdfExportHelper.createToolButton({
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
                var category = Q.first(columns, function (x) { return x.field === "CategoryCategoryName" /* CategoryCategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Store.CategoryRow.getLookup()); };
                //var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
                //supplier.referencedFields = [fld.SupplierID];
                //supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.getLookup());
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
                    Q.serviceRequest('Store/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Store.ProductGrid = ProductGrid;
    })(Store = Store_112.Store || (Store_112.Store = {}));
})(Store || (Store = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Store;
(function (Store_113) {
    var Store;
    (function (Store) {
        var ProductDetailDialog = /** @class */ (function (_super) {
            __extends(ProductDetailDialog, _super);
            function ProductDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.ProductDetailForm(_this.idPrefix);
                _this.form.WaresID.changeSelect2(function (e) {
                    var itemID = Q.toId(_this.form.WaresID.value);
                    if (itemID != null) {
                        _this.form.PlanPrice.value = Store.WaresRow.getLookup().itemById[itemID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.PlanPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ProductDetailDialog.prototype.getFormKey = function () { return Store.ProductDetailForm.formKey; };
            ProductDetailDialog.prototype.getLocalTextPrefix = function () { return Store.ProductDetailRow.localTextPrefix; };
            ProductDetailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //this.toolbar.findButton('apply-changes-button').hide();
                //this.toolbar.findButton('save-and-close-button').hide();
            };
            ProductDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDetailDialog);
            return ProductDetailDialog;
        }(Store_113.Common.GridEditorDialog));
        Store.ProductDetailDialog = ProductDetailDialog;
    })(Store = Store_113.Store || (Store_113.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_114) {
    var Store;
    (function (Store) {
        var ProductDetailEditor = /** @class */ (function (_super) {
            __extends(ProductDetailEditor, _super);
            function ProductDetailEditor(container, options) {
                return _super.call(this, container, options) || this;
            }
            ProductDetailEditor.prototype.getLookupKey = function () {
                return Store.WaresRow.lookupKey;
            };
            ProductDetailEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) +
                    ' (' +
                    '$' + Q.formatNumber(item.UnitPrice, '#, ##0.00') +
                    //', ' + (item.UnitsInStock > 0 ? (item.UnitsInStock + ' in stock') : 'out of stock') +
                    //', ' + (item.SupplierCompanyName || 'Unknown') +
                    ')';
            };
            ProductDetailEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], ProductDetailEditor);
            return ProductDetailEditor;
        }(Serenity.LookupEditorBase));
        Store.ProductDetailEditor = ProductDetailEditor;
    })(Store = Store_114.Store || (Store_114.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_115) {
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
    })(Store = Store_115.Store || (Store_115.Store = {}));
})(Store || (Store = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Store;
(function (Store_116) {
    var Store;
    (function (Store) {
        var ProductDetailsEditor = /** @class */ (function (_super) {
            __extends(ProductDetailsEditor, _super);
            function ProductDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            ProductDetailsEditor.prototype.getColumnsKey = function () { return "Store.ProductDetail"; };
            ProductDetailsEditor.prototype.getDialogType = function () { return Store.ProductDetailDialog; };
            ProductDetailsEditor.prototype.getLocalTextPrefix = function () { return Store.ProductDetailRow.localTextPrefix; };
            ProductDetailsEditor.prototype.validateEntity = function (row, id) {
                row.WaresID = Q.toId(row.WaresID);
                var sameItem = Q.tryFirst(this.view.getItems(), function (x) { return x.WaresID === row.WaresID; });
                if (sameItem && this.id(sameItem) != id) {
                    Q.alert('This article is already in order details!');
                    return false;
                }
                row.WaresName = Store.WaresRow.getLookup().itemById[row.WaresID].WaresName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            ProductDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductDetailsEditor);
            return ProductDetailsEditor;
        }(Store_116.Common.GridEditorBase));
        Store.ProductDetailsEditor = ProductDetailsEditor;
    })(Store = Store_116.Store || (Store_116.Store = {}));
})(Store || (Store = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Store;
(function (Store_117) {
    var Store;
    (function (Store) {
        var ProductMovementDetailsDialog = /** @class */ (function (_super) {
            __extends(ProductMovementDetailsDialog, _super);
            function ProductMovementDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.ProductMovementDetailsForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.SalePrice.value = Store.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.SalePrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            ProductMovementDetailsDialog.prototype.getFormKey = function () { return Store.ProductMovementDetailsForm.formKey; };
            ProductMovementDetailsDialog.prototype.getLocalTextPrefix = function () { return Store.ProductMovementDetailsRow.localTextPrefix; };
            ProductMovementDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductMovementDetailsDialog);
            return ProductMovementDetailsDialog;
        }(Store_117.Common.GridEditorDialog));
        Store.ProductMovementDetailsDialog = ProductMovementDetailsDialog;
    })(Store = Store_117.Store || (Store_117.Store = {}));
})(Store || (Store = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Store;
(function (Store_118) {
    var Store;
    (function (Store) {
        var ProductMovementDetailsEditor = /** @class */ (function (_super) {
            __extends(ProductMovementDetailsEditor, _super);
            function ProductMovementDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            ProductMovementDetailsEditor.prototype.getColumnsKey = function () { return "Store.ProductMovementDetails"; };
            ProductMovementDetailsEditor.prototype.getDialogType = function () { return Store.ProductMovementDetailsDialog; };
            ProductMovementDetailsEditor.prototype.getLocalTextPrefix = function () { return Store.ProductMovementDetailsRow.localTextPrefix; };
            ProductMovementDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Store.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                switch (row.ProductMoveOperationTypeOpCode) {
                    case 302: {
                        row.LineTotal = (row.Quantity || 0) * (row.IncomePrice || 0) - (row.Discount || 0);
                        break;
                    }
                    case 401: {
                        row.LineTotal = (row.Quantity || 0) * (row.SalePrice || 0) - (row.Discount || 0);
                        break;
                    }
                    default: {
                        row.LineTotal = (row.Quantity || 0) * (row.SinglePrice || 0) - (row.Discount || 0);
                        break;
                    }
                }
                return true;
            };
            ProductMovementDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductMovementDetailsEditor);
            return ProductMovementDetailsEditor;
        }(Store_118.Common.GridEditorBase));
        Store.ProductMovementDetailsEditor = ProductMovementDetailsEditor;
    })(Store = Store_118.Store || (Store_118.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_119) {
    var Store;
    (function (Store) {
        var ProductMovementDetailsGrid = /** @class */ (function (_super) {
            __extends(ProductMovementDetailsGrid, _super);
            function ProductMovementDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            ProductMovementDetailsGrid.prototype.getColumnsKey = function () { return 'Store.ProductMovementDetails'; };
            ProductMovementDetailsGrid.prototype.getDialogType = function () { return Store.ProductMovementDetailsDialog; };
            ProductMovementDetailsGrid.prototype.getIdProperty = function () { return Store.ProductMovementDetailsRow.idProperty; };
            ProductMovementDetailsGrid.prototype.getLocalTextPrefix = function () { return Store.ProductMovementDetailsRow.localTextPrefix; };
            ProductMovementDetailsGrid.prototype.getService = function () { return Store.ProductMovementDetailsService.baseUrl; };
            ProductMovementDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductMovementDetailsGrid);
            return ProductMovementDetailsGrid;
        }(Serenity.EntityGrid));
        Store.ProductMovementDetailsGrid = ProductMovementDetailsGrid;
    })(Store = Store_119.Store || (Store_119.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_120) {
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
    })(Store = Store_120.Store || (Store_120.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_121) {
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
    })(Store = Store_121.Store || (Store_121.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_122) {
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
    })(Store = Store_122.Store || (Store_122.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_123) {
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
    })(Store = Store_123.Store || (Store_123.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_124) {
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
            ShopsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShopsDialog);
            return ShopsDialog;
        }(Serenity.EntityDialog));
        Store.ShopsDialog = ShopsDialog;
    })(Store = Store_124.Store || (Store_124.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_125) {
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
    })(Store = Store_125.Store || (Store_125.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_126) {
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
            ShopsGrid.prototype.getLocalTextPrefix = function () { return Store.ShopsRow.localTextPrefix; };
            ShopsGrid.prototype.getService = function () { return Store.ShopsService.baseUrl; };
            ShopsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShopsGrid);
            return ShopsGrid;
        }(Serenity.EntityGrid));
        Store.ShopsGrid = ShopsGrid;
    })(Store = Store_126.Store || (Store_126.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_127) {
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
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Store.SupplierDialog = SupplierDialog;
    })(Store = Store_127.Store || (Store_127.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_128) {
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
    })(Store = Store_128.Store || (Store_128.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_129) {
    var Store;
    (function (Store) {
        var WaresDialog = /** @class */ (function (_super) {
            __extends(WaresDialog, _super);
            function WaresDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Store.WaresForm(_this.idPrefix);
                return _this;
            }
            WaresDialog.prototype.getFormKey = function () { return Store.WaresForm.formKey; };
            WaresDialog.prototype.getIdProperty = function () { return Store.WaresRow.idProperty; };
            WaresDialog.prototype.getLocalTextPrefix = function () { return Store.WaresRow.localTextPrefix; };
            WaresDialog.prototype.getNameProperty = function () { return Store.WaresRow.nameProperty; };
            WaresDialog.prototype.getService = function () { return Store.WaresService.baseUrl; };
            WaresDialog.prototype.getLanguages = function () { return Store_129.LanguageList.getValue(); };
            WaresDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WaresDialog);
            return WaresDialog;
        }(Serenity.EntityDialog));
        Store.WaresDialog = WaresDialog;
    })(Store = Store_129.Store || (Store_129.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_130) {
    var Store;
    (function (Store) {
        var WaresEditor = /** @class */ (function (_super) {
            __extends(WaresEditor, _super);
            //constructor(container: JQuery, opt: Serenity.LookupEditorOptions) {
            //    super(container, opt);
            //}
            function WaresEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            WaresEditor.prototype.getLookupKey = function () {
                return Store.CategoryRow.lookupKey;
            };
            WaresEditor.prototype.getItems = function (lookup) {
                return _super.prototype.getItems.call(this, lookup).filter(function (x) {
                    return x.Type === 100;
                });
            };
            WaresEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], WaresEditor);
            return WaresEditor;
        }(Serenity.LookupEditorBase));
        Store.WaresEditor = WaresEditor;
    })(Store = Store_130.Store || (Store_130.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_131) {
    var Store;
    (function (Store) {
        var WaresGrid = /** @class */ (function (_super) {
            __extends(WaresGrid, _super);
            function WaresGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            WaresGrid.prototype.getColumnsKey = function () { return 'Store.Wares'; };
            WaresGrid.prototype.getDialogType = function () { return Store.WaresDialog; };
            WaresGrid.prototype.getIdProperty = function () { return Store.WaresRow.idProperty; };
            WaresGrid.prototype.getLocalTextPrefix = function () { return Store.WaresRow.localTextPrefix; };
            WaresGrid.prototype.getService = function () { return Store.WaresService.baseUrl; };
            WaresGrid.prototype.getQuickFilters = function () {
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
            WaresGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(Store_131.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Store.WaresService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(Store_131.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Wares List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            WaresID: {
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
            WaresGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            WaresGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.WaresID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' style='text - align:right' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            WaresGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.WaresID];
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
            WaresGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.WaresID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%; text-align:right'>";
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
            WaresGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.WaresID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            WaresGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                //Q.first(columns, x => x.field === 'QuantityPerUnit').format = str;
                var warescategory = Q.first(columns, function (x) { return x.field === "CategoryCategoryName" /* CategoryCategoryName */; });
                warescategory.referencedFields = ["CategoryID" /* CategoryID */];
                warescategory.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Store.CategoryRow.getLookup()); };
                //var supplier = Q.first(columns, x => x.field === fld.SupplierCompanyName);
                //supplier.referencedFields = [fld.SupplierID];
                //supplier.format = ctx => this.selectFormatter(ctx, fld.SupplierID, SupplierRow.getLookup());
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "QuantityPerUnit" /* QuantityPerUnit */; }).format = num;
                Q.first(columns, function (x) { return x.field === "MeasureName" /* MeasureName */; }).format = str;
                //Q.first(columns, x => x.field === fld.ReorderLevel).format = num;
                return columns;
            };
            WaresGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.WaresID];
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
                    this.pendingChanges[item.WaresID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            WaresGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            WaresGrid.prototype.saveClick = function () {
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
                    entity.WaresID = key;
                    Q.serviceRequest('Store/Wares/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            WaresGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], WaresGrid);
            return WaresGrid;
        }(Serenity.EntityGrid));
        Store.WaresGrid = WaresGrid;
    })(Store = Store_131.Store || (Store_131.Store = {}));
})(Store || (Store = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var Store;
(function (Store_132) {
    var Store;
    (function (Store) {
        var WaresMovementDetailsDialog = /** @class */ (function (_super) {
            __extends(WaresMovementDetailsDialog, _super);
            function WaresMovementDetailsDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Store.WaresMovementDetailsForm(_this.idPrefix);
                _this.form.WaresID.changeSelect2(function (e) {
                    var waresID = Q.toId(_this.form.WaresID.value);
                    if (waresID != null) {
                        _this.form.SinglePrice.value = Store.WaresRow.getLookup().itemById[waresID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.SinglePrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            WaresMovementDetailsDialog.prototype.getFormKey = function () { return Store.WaresMovementDetailsForm.formKey; };
            WaresMovementDetailsDialog.prototype.getLocalTextPrefix = function () { return Store.WaresMovementDetailsRow.localTextPrefix; };
            WaresMovementDetailsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], WaresMovementDetailsDialog);
            return WaresMovementDetailsDialog;
        }(Store_132.Common.GridEditorDialog));
        Store.WaresMovementDetailsDialog = WaresMovementDetailsDialog;
    })(Store = Store_132.Store || (Store_132.Store = {}));
})(Store || (Store = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var Store;
(function (Store_133) {
    var Store;
    (function (Store) {
        var WaresMovementDetailsEditor = /** @class */ (function (_super) {
            __extends(WaresMovementDetailsEditor, _super);
            function WaresMovementDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            WaresMovementDetailsEditor.prototype.getColumnsKey = function () { return "Store.WaresMovementDetails"; };
            WaresMovementDetailsEditor.prototype.getDialogType = function () { return Store.WaresMovementDetailsDialog; };
            WaresMovementDetailsEditor.prototype.getLocalTextPrefix = function () { return Store.WaresMovementDetailsRow.localTextPrefix; };
            WaresMovementDetailsEditor.prototype.validateEntity = function (row, id) {
                row.WaresID = Q.toId(row.WaresID);
                var sameWares = Q.tryFirst(this.view.getItems(), function (x) { return x.WaresID === row.WaresID; });
                if (sameWares && this.id(sameWares) !== id) {
                    Q.alert('This ware is already in order details!');
                    return false;
                }
                row.WaresName = Store.WaresRow.getLookup().itemById[row.WaresID].WaresName;
                switch (row.WaresMoveOperationTypeOpCode) {
                    case 102: {
                        row.LineTotal = (row.Quantity || 0) * (row.IncomePrice || 0) - (row.Discount || 0);
                        break;
                    }
                    case 201: {
                        row.LineTotal = (row.Quantity || 0) * (row.SalePrice || 0) - (row.Discount || 0);
                        break;
                    }
                    default: {
                        row.LineTotal = (row.Quantity || 0) * (row.SinglePrice || 0) - (row.Discount || 0);
                        break;
                    }
                }
                return true;
            };
            WaresMovementDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], WaresMovementDetailsEditor);
            return WaresMovementDetailsEditor;
        }(Store_133.Common.GridEditorBase));
        Store.WaresMovementDetailsEditor = WaresMovementDetailsEditor;
    })(Store = Store_133.Store || (Store_133.Store = {}));
})(Store || (Store = {}));
var Store;
(function (Store_134) {
    var Store;
    (function (Store) {
        var WaresMovementDetailsGrid = /** @class */ (function (_super) {
            __extends(WaresMovementDetailsGrid, _super);
            function WaresMovementDetailsGrid(container) {
                return _super.call(this, container) || this;
            }
            WaresMovementDetailsGrid.prototype.getColumnsKey = function () { return 'Store.WaresMovementDetails'; };
            WaresMovementDetailsGrid.prototype.getDialogType = function () { return Store.WaresMovementDetailsDialog; };
            WaresMovementDetailsGrid.prototype.getIdProperty = function () { return Store.WaresMovementDetailsRow.idProperty; };
            WaresMovementDetailsGrid.prototype.getLocalTextPrefix = function () { return Store.WaresMovementDetailsRow.localTextPrefix; };
            WaresMovementDetailsGrid.prototype.getService = function () { return Store.WaresMovementDetailsService.baseUrl; };
            WaresMovementDetailsGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [new Slick.Aggregators.Sum("LineTotal" /* LineTotal */)]
                });
                return grid;
            };
            WaresMovementDetailsGrid.prototype.getColumns = function () {
                var columns = _super.prototype.getColumns.call(this);
                Q.first(columns, function (x) { return x.field === "LineTotal" /* LineTotal */; })
                    .groupTotalsFormatter = function (totals, col) {
                    return (totals.sum ? ('sum: ' + Q.coalesce(totals.sum[col.field], '')) : '');
                };
                return columns;
            };
            WaresMovementDetailsGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            WaresMovementDetailsGrid.prototype.usePager = function () {
                return false;
            };
            WaresMovementDetailsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], WaresMovementDetailsGrid);
            return WaresMovementDetailsGrid;
        }(Serenity.EntityGrid));
        Store.WaresMovementDetailsGrid = WaresMovementDetailsGrid;
    })(Store = Store_134.Store || (Store_134.Store = {}));
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
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = Store.Authorization || (Store.Authorization = {}));
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
//# sourceMappingURL=Store.Web.js.map