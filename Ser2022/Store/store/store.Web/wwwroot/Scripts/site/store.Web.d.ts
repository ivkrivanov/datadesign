/// <reference types="jquery" />
/// <reference types="serenity.extensions" />
/// <reference types="jqueryui" />
declare namespace Store.Administration {
    class LanguageColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace Store.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace Store.Administration {
    namespace PermissionKeys {
        const Security = "Administration:Security";
        const Translation = "Administration:Translation";
        const Tenants = "Administration:Tenants";
    }
}
declare namespace Store.Administration {
    class RoleColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Store.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace Store.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace Store.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace Store.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace Store.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
        TenantId?: number;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName",
            TenantId = "TenantId"
        }
    }
}
declare namespace Store.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace Store.Administration {
    class TenantColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Administration {
    interface TenantForm {
        TenantName: Serenity.StringEditor;
    }
    class TenantForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Administration {
    interface TenantRow {
        TenantId?: number;
        TenantName?: string;
    }
    namespace TenantRow {
        const idProperty = "TenantId";
        const nameProperty = "TenantName";
        const localTextPrefix = "Administration.Tenant";
        const lookupKey = "Administration.Tenant";
        function getLookup(): Q.Lookup<TenantRow>;
        const deletePermission = "Administration:Tenants";
        const insertPermission = "Administration:Tenants";
        const readPermission = "Administration:Tenants";
        const updatePermission = "Administration:Tenants";
        const enum Fields {
            TenantId = "TenantId",
            TenantName = "TenantName"
        }
    }
}
declare namespace Store.Administration {
    namespace TenantService {
        const baseUrl = "Administration/Tenant";
        function Create(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TenantRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TenantRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Tenant/Create",
            Update = "Administration/Tenant/Update",
            Delete = "Administration/Tenant/Delete",
            Retrieve = "Administration/Tenant/Retrieve",
            List = "Administration/Tenant/List"
        }
    }
}
declare namespace Store.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace Store.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace Store.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace Store.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace Store.Administration {
    class UserColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
        TenantId: Serenity.LookupEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace Store.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Store.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace Store.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace Store.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace Store.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace Store.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace Store.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace Store.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace Store.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        TenantId?: number;
        TenantName?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            TenantId = "TenantId",
            TenantName = "TenantName",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace Store {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace Store {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Store.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Store.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailAddressEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace Store.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace Store.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace Store.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailAddressEditor;
        ConfirmEmail: Serenity.EmailAddressEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace Store {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace Store.Store {
    class CategoriesColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface CategoriesExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class CategoriesExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CategoriesForm {
        CategoryTypeId: Serenity.LookupEditor;
        CategoryCode: Serenity.StringEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CategoriesLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoriesLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Store.CategoriesLang";
        const deletePermission = "Store:General";
        const insertPermission = "Store:General";
        const readPermission = "Store:General";
        const updatePermission = "Store:General";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace Store.Store {
    namespace CategoriesLangService {
        const baseUrl = "Store/CategoriesLang";
        function Create(request: Serenity.SaveRequest<CategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/CategoriesLang/Create",
            Update = "Store/CategoriesLang/Update",
            Delete = "Store/CategoriesLang/Delete",
            Retrieve = "Store/CategoriesLang/Retrieve",
            List = "Store/CategoriesLang/List"
        }
    }
}
declare namespace Store.Store {
    interface CategoriesListRequest extends Serenity.ListRequest {
        CategoryId?: number;
    }
}
declare namespace Store.Store {
    interface CategoriesRow {
        CategoryId?: number;
        CategoryTypeId?: number;
        CategoryCode?: string;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
        IsActive?: number;
        TenantId?: number;
        Type?: number;
        CategoryType?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CategoriesRow {
        const idProperty = "CategoryId";
        const isActiveProperty = "IsActive";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Store.Categories";
        const lookupKey = "Store.Categories";
        function getLookup(): Q.Lookup<CategoriesRow>;
        const deletePermission = "Store:Categories:Delete";
        const insertPermission = "Store:Categories:Modify";
        const readPermission = "Store:Categories:View";
        const updatePermission = "Store:Categories:Modify";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryTypeId = "CategoryTypeId",
            CategoryCode = "CategoryCode",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture",
            IsActive = "IsActive",
            TenantId = "TenantId",
            Type = "Type",
            CategoryType = "CategoryType",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace CategoriesService {
        const baseUrl = "Store/Categories";
        function Create(request: Serenity.SaveWithLocalizationRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<CategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: CategoriesListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: Serenity.Extensions.ExcelImportRequest, onSuccess?: (response: Serenity.Extensions.ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Categories/Create",
            Update = "Store/Categories/Update",
            Delete = "Store/Categories/Delete",
            Retrieve = "Store/Categories/Retrieve",
            List = "Store/Categories/List",
            ExcelImport = "Store/Categories/ExcelImport"
        }
    }
}
declare namespace Store.Store {
    class CategoriesTypeColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface CategoriesTypeForm {
        Type: Serenity.IntegerEditor;
        CategoryType: Serenity.StringEditor;
    }
    class CategoriesTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CategoriesTypeRow {
        CategoryTypeId?: number;
        Type?: number;
        CategoryType?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CategoriesTypeRow {
        const idProperty = "CategoryTypeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Type";
        const localTextPrefix = "Store.CategoriesType";
        const lookupKey = "Store.CategoriesType";
        function getLookup(): Q.Lookup<CategoriesTypeRow>;
        const deletePermission = "Store:CategoriesType:Delete";
        const insertPermission = "Store:CategoriesType:Modify";
        const readPermission = "Store:CategoriesType:View";
        const updatePermission = "Store:CategoriesType:Modify";
        const enum Fields {
            CategoryTypeId = "CategoryTypeId",
            Type = "Type",
            CategoryType = "CategoryType",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace CategoriesTypeService {
        const baseUrl = "Store/CategoriesType";
        function Create(request: Serenity.SaveRequest<CategoriesTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoriesTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoriesTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoriesTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/CategoriesType/Create",
            Update = "Store/CategoriesType/Update",
            Delete = "Store/CategoriesType/Delete",
            Retrieve = "Store/CategoriesType/Retrieve",
            List = "Store/CategoriesType/List"
        }
    }
}
declare namespace Store.Store {
    class CounterpartiesColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface CounterpartiesForm {
        CounterpartyId: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: PhoneEditor;
        NotesList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CounterpartiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CounterpartiesRow {
        Id?: number;
        CounterpartyId?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        NotesList?: NoteRow[];
        Representatives?: number[];
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CounterpartiesRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Store.Counterparties";
        const lookupKey = "Store.Counterparties";
        function getLookup(): Q.Lookup<CounterpartiesRow>;
        const deletePermission = "Store:Counterparty:Delete";
        const insertPermission = "Store:Counterparty:Modify";
        const readPermission = "Store:Counterparty:View";
        const updatePermission = "Store:Counterparty:Modify";
        const enum Fields {
            Id = "Id",
            CounterpartyId = "CounterpartyId",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            IsActive = "IsActive",
            TenantId = "TenantId",
            NotesList = "NotesList",
            Representatives = "Representatives",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace CounterpartiesService {
        const baseUrl = "Store/Counterparties";
        function Create(request: Serenity.SaveRequest<CounterpartiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CounterpartiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: Serenity.Extensions.GetNextNumberRequest, onSuccess?: (response: Serenity.Extensions.GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CounterpartiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CounterpartiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Counterparties/Create",
            Update = "Store/Counterparties/Update",
            Delete = "Store/Counterparties/Delete",
            GetNextNumber = "Store/Counterparties/GetNextNumber",
            Retrieve = "Store/Counterparties/Retrieve",
            List = "Store/Counterparties/List"
        }
    }
}
declare namespace Store.Store {
    interface CounterpartyDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CounterpartyDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Store.CounterpartyDetails";
        const deletePermission = "Store:Counterparty:Delete";
        const insertPermission = "Store:Counterparty:Modify";
        const readPermission = "Store:Counterparty:View";
        const updatePermission = "Store:Counterparty:Modify";
        const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}
declare namespace Store.Store {
    interface CounterpartyRepresentativesRow {
        RepresentativeId?: number;
        CounterpartyId?: number;
        EmployeeId?: number;
    }
    namespace CounterpartyRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Store.CounterpartyRepresentatives";
        const deletePermission = "Store:Counterparty:Delete";
        const insertPermission = "Store:Counterparty:Modify";
        const readPermission = "Store:Counterparty:View";
        const updatePermission = "Store:Counterparty:Modify";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            CounterpartyId = "CounterpartyId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace Store.Store {
    class DocumentTypeColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface DocumentTypeForm {
        DocumentName: Serenity.StringEditor;
    }
    class DocumentTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface DocumentTypeRow {
        DocumentTypeId?: number;
        DocumentName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace DocumentTypeRow {
        const idProperty = "DocumentTypeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "DocumentName";
        const localTextPrefix = "Store.DocumentType";
        const lookupKey = "Store.DocumentType";
        function getLookup(): Q.Lookup<DocumentTypeRow>;
        const deletePermission = "Store:DocumentType:Delete";
        const insertPermission = "Store:DocumentType:Modify";
        const readPermission = "Store:DocumentType:View";
        const updatePermission = "Store:DocumentType:Modify";
        const enum Fields {
            DocumentTypeId = "DocumentTypeId",
            DocumentName = "DocumentName",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace DocumentTypeService {
        const baseUrl = "Store/DocumentType";
        function Create(request: Serenity.SaveRequest<DocumentTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<DocumentTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<DocumentTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<DocumentTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/DocumentType/Create",
            Update = "Store/DocumentType/Update",
            Delete = "Store/DocumentType/Delete",
            Retrieve = "Store/DocumentType/Retrieve",
            List = "Store/DocumentType/List"
        }
    }
}
declare namespace Store.Store {
    interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        IsActive?: number;
        TenantId?: number;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "LastName";
        const localTextPrefix = "Store.Employees";
        const lookupKey = "Store.Employees";
        function getLookup(): Q.Lookup<EmployeesRow>;
        const deletePermission = "Store:General";
        const insertPermission = "Store:General";
        const readPermission = "Store:General";
        const updatePermission = "Store:General";
        const enum Fields {
            EmployeeId = "EmployeeId",
            LastName = "LastName",
            FirstName = "FirstName",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ReportsToFullName = "ReportsToFullName",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsToReportsTo = "ReportsToReportsTo",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            Gender = "Gender",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace EmployeesService {
        const baseUrl = "Store/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Employees/Create",
            Update = "Store/Employees/Update",
            Delete = "Store/Employees/Delete",
            Retrieve = "Store/Employees/Retrieve",
            List = "Store/Employees/List"
        }
    }
}
declare namespace Store.Store {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace Store.Store {
    class MeasuresColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface MeasuresForm {
        MeasureName: Serenity.StringEditor;
    }
    class MeasuresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface MeasuresRow {
        MeasureId?: number;
        MeasureName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace MeasuresRow {
        const idProperty = "MeasureId";
        const isActiveProperty = "IsActive";
        const nameProperty = "MeasureName";
        const localTextPrefix = "Store.Measures";
        const lookupKey = "Store.Measures";
        function getLookup(): Q.Lookup<MeasuresRow>;
        const deletePermission = "Store:Measures:Delete";
        const insertPermission = "Store:Measures:Modify";
        const readPermission = "Store:Measures:View";
        const updatePermission = "Store:Measures:Modify";
        const enum Fields {
            MeasureId = "MeasureId",
            MeasureName = "MeasureName",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace MeasuresService {
        const baseUrl = "Store/Measures";
        function Create(request: Serenity.SaveRequest<MeasuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeasuresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeasuresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeasuresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Measures/Create",
            Update = "Store/Measures/Update",
            Delete = "Store/Measures/Delete",
            Retrieve = "Store/Measures/Retrieve",
            List = "Store/Measures/List"
        }
    }
}
declare namespace Store.Store {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Store.Note";
        const deletePermission = "Store:General";
        const insertPermission = "Store:General";
        const readPermission = "Store:General";
        const updatePermission = "Store:General";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace Store.Store {
    class OperationTypeColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface OperationTypeForm {
        OpCode: Serenity.IntegerEditor;
        Operation: Serenity.StringEditor;
    }
    class OperationTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface OperationTypeRow {
        OperationTypeId?: number;
        OpCode?: number;
        Operation?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace OperationTypeRow {
        const idProperty = "OperationTypeId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Operation";
        const localTextPrefix = "Store.OperationType";
        const lookupKey = "Store.OperationType";
        function getLookup(): Q.Lookup<OperationTypeRow>;
        const deletePermission = "Store:OperationType:Delete";
        const insertPermission = "Store:OperationType:Modify";
        const readPermission = "Store:OperationType:View";
        const updatePermission = "Store:OperationType:Modify";
        const enum Fields {
            OperationTypeId = "OperationTypeId",
            OpCode = "OpCode",
            Operation = "Operation",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace OperationTypeService {
        const baseUrl = "Store/OperationType";
        function Create(request: Serenity.SaveRequest<OperationTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OperationTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OperationTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OperationTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/OperationType/Create",
            Update = "Store/OperationType/Update",
            Delete = "Store/OperationType/Delete",
            Retrieve = "Store/OperationType/Retrieve",
            List = "Store/OperationType/List"
        }
    }
}
declare namespace Store.Store {
    namespace PermissionKeys {
        const General = "Store:General";
    }
}
declare namespace Store.Store {
    class ShippersColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface ShippersForm {
        CompanyName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
    }
    class ShippersForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ShippersRow {
        ShipperId?: number;
        CompanyName?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ShippersRow {
        const idProperty = "ShipperId";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Store.Shippers";
        const lookupKey = "Store.Shipper";
        function getLookup(): Q.Lookup<ShippersRow>;
        const deletePermission = "Store:General";
        const insertPermission = "Store:General";
        const readPermission = "Store:General";
        const updatePermission = "Store:General";
        const enum Fields {
            ShipperId = "ShipperId",
            CompanyName = "CompanyName",
            Phone = "Phone",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ShippersService {
        const baseUrl = "Store/Shippers";
        function Create(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShippersRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShippersRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Shippers/Create",
            Update = "Store/Shippers/Update",
            Delete = "Store/Shippers/Delete",
            Undelete = "Store/Shippers/Undelete",
            Retrieve = "Store/Shippers/Retrieve",
            List = "Store/Shippers/List"
        }
    }
}
declare namespace Store.Store {
    enum ShippingState {
        NotShipped = 0,
        Shipped = 1
    }
}
declare namespace Store.Store {
    class ShopsColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface ShopsForm {
        ShopId: Serenity.StringEditor;
        ShopName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShopsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ShopsRow {
        Id?: number;
        ShopId?: string;
        ShopName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ShopsRow {
        const idProperty = "Id";
        const isActiveProperty = "IsActive";
        const nameProperty = "ShopName";
        const localTextPrefix = "Store.Shops";
        const lookupKey = "Store.Shops";
        function getLookup(): Q.Lookup<ShopsRow>;
        const deletePermission = "Store:Shops:Delete";
        const insertPermission = "Store:Shops:Modify";
        const readPermission = "Store:Shops:View";
        const updatePermission = "Store:Shops:Modify";
        const enum Fields {
            Id = "Id",
            ShopId = "ShopId",
            ShopName = "ShopName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            IsActive = "IsActive",
            TenantId = "TenantId",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ShopsService {
        const baseUrl = "Store/Shops";
        function Create(request: Serenity.SaveRequest<ShopsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShopsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShopsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShopsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Shops/Create",
            Update = "Store/Shops/Update",
            Delete = "Store/Shops/Delete",
            Retrieve = "Store/Shops/Retrieve",
            List = "Store/Shops/List"
        }
    }
}
declare namespace Store.Store {
    interface StoreAverageForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class StoreAverageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    class WaresColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface WaresExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class WaresExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface WaresForm {
        CategoryId: Serenity.LookupEditor;
        WaresCode: Serenity.StringEditor;
        WaresBarcode: Serenity.StringEditor;
        WaresLabel: Serenity.StringEditor;
        WaresName: Serenity.StringEditor;
        MeasureId: Serenity.LookupEditor;
        WaresImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        CounterpartyId: CounterpartiesEditor;
        QuantityPerUnit: Serenity.DecimalEditor;
        UnitPrice: Serenity.DecimalEditor;
        AccountId: Serenity.IntegerEditor;
    }
    class WaresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface WaresLangRow {
        Id?: number;
        WaresId?: number;
        LanguageId?: number;
        WaresName?: string;
        Description?: string;
    }
    namespace WaresLangRow {
        const idProperty = "Id";
        const nameProperty = "WaresName";
        const localTextPrefix = "Store.WaresLang";
        const deletePermission = "Store:General";
        const insertPermission = "Store:General";
        const readPermission = "Store:General";
        const updatePermission = "Store:General";
        const enum Fields {
            Id = "Id",
            WaresId = "WaresId",
            LanguageId = "LanguageId",
            WaresName = "WaresName",
            Description = "Description"
        }
    }
}
declare namespace Store.Store {
    namespace WaresLangService {
        const baseUrl = "Store/WaresLang";
        function Create(request: Serenity.SaveRequest<WaresLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WaresLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaresLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/WaresLang/Create",
            Update = "Store/WaresLang/Update",
            Delete = "Store/WaresLang/Delete",
            Retrieve = "Store/WaresLang/Retrieve",
            List = "Store/WaresLang/List"
        }
    }
}
declare namespace Store.Store {
    interface WaresListRequest extends Serenity.ListRequest {
        WaresId?: number;
    }
}
declare namespace Store.Store {
    class WaresMovementColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    class WaresMovementDetailsColumns {
        static columnsKey: string;
    }
}
declare namespace Store.Store {
    interface WaresMovementDetailsForm {
        WaresId: Serenity.LookupEditor;
        SinglePrice: Serenity.DecimalEditor;
        Quantity: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }
    class WaresMovementDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface WaresMovementDetailsRow {
        DetailId?: number;
        WaresMoveId?: number;
        WaresId?: number;
        Quantity?: number;
        SinglePrice?: number;
        Discount?: number;
        IsActive?: number;
        TenantId?: number;
        WaresMoveShopId?: string;
        WaresMoveCounterpartyId?: string;
        WaresMoveEmployeeId?: number;
        WaresMoveOperationTypeId?: number;
        WaresMoveOrderDate?: string;
        WaresMoveRequiredDate?: string;
        WaresMoveShippedDate?: string;
        WaresCode?: string;
        WaresName?: string;
        WaresCounterpartyId?: string;
        WaresCategoryId?: number;
        WaresMeasureId?: number;
        WaresMeasureName?: string;
        WaresQuantityPerUnit?: string;
        WaresUnitPrice?: number;
        LineValue?: number;
        LineVAT?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WaresMovementDetailsRow {
        const idProperty = "DetailId";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Store.WaresMovementDetails";
        const deletePermission = "Store:Wares:Delete";
        const insertPermission = "Store:Wares:Modify";
        const readPermission = "Store:Wares:View";
        const updatePermission = "Store:Wares:Modify";
        const enum Fields {
            DetailId = "DetailId",
            WaresMoveId = "WaresMoveId",
            WaresId = "WaresId",
            Quantity = "Quantity",
            SinglePrice = "SinglePrice",
            Discount = "Discount",
            IsActive = "IsActive",
            TenantId = "TenantId",
            WaresMoveShopId = "WaresMoveShopId",
            WaresMoveCounterpartyId = "WaresMoveCounterpartyId",
            WaresMoveEmployeeId = "WaresMoveEmployeeId",
            WaresMoveOperationTypeId = "WaresMoveOperationTypeId",
            WaresMoveOrderDate = "WaresMoveOrderDate",
            WaresMoveRequiredDate = "WaresMoveRequiredDate",
            WaresMoveShippedDate = "WaresMoveShippedDate",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            WaresCounterpartyId = "WaresCounterpartyId",
            WaresCategoryId = "WaresCategoryId",
            WaresMeasureId = "WaresMeasureId",
            WaresMeasureName = "WaresMeasureName",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
            LineValue = "LineValue",
            LineVAT = "LineVAT",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace WaresMovementDetailsService {
        const baseUrl = "Store/WaresMovementDetails";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaresMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Store/WaresMovementDetails/Retrieve",
            List = "Store/WaresMovementDetails/List"
        }
    }
}
declare namespace Store.Store {
    interface WaresMovementDocRow {
        WaresMoveId?: number;
        DocumentTypeId?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
    }
    namespace WaresMovementDocRow {
        const idProperty = "WaresMoveId";
        const nameProperty = "DocumentNumber";
        const localTextPrefix = "Store.WaresMovementDoc";
        const deletePermission = "Store:Wares:Delete";
        const insertPermission = "Store:Wares:Modify";
        const readPermission = "Store:Wares:View";
        const updatePermission = "Store:Wares:Modify";
        const enum Fields {
            WaresMoveId = "WaresMoveId",
            DocumentTypeId = "DocumentTypeId",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            DocumentTypeDocumentName = "DocumentTypeDocumentName"
        }
    }
}
declare namespace Store.Store {
    interface WaresMovementForm {
        OperationTypeId: OperationTypeEditor;
        OrderDate: Serenity.DateEditor;
        ShopId: ShopsEditor;
        CounterpartyId: CounterpartiesEditor;
        EmployeeId: Serenity.LookupEditor;
        RequiredDate: Serenity.DateEditor;
        ShipperId: Serenity.LookupEditor;
        ShippedDate: Serenity.DateEditor;
        DocumentTypeId: Serenity.LookupEditor;
        DocumentNumber: Serenity.StringEditor;
        DocumentDate: Serenity.DateEditor;
        Value: Serenity.DecimalEditor;
        VAT: Serenity.DecimalEditor;
        Total: Serenity.DecimalEditor;
        DetailList: WaresMovementDetailsEditor;
    }
    class WaresMovementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface WaresMovementListRequest extends Serenity.ListRequest {
        WaresId?: number;
    }
}
declare namespace Store.Store {
    enum WaresMovementOperations {
        IncomeItems = 100,
        InitialBalance = 101,
        StockDelivery = 102,
        SurplusGoods = 103,
        ExchangeRevenue = 105,
        UnsubscriptionOfGoods = 109,
        SaleOfArticles = 301,
        LackOfItems = 302,
        Scrappingarticles = 303,
        ExchangeExpense = 305,
        Inventory = 500
    }
}
declare namespace Store.Store {
    interface WaresMovementRow {
        WaresMoveId?: number;
        ShopId?: string;
        CounterpartyId?: string;
        EmployeeId?: number;
        ShipperId?: number;
        OperationTypeId?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        DocumentTypeId?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        IsActive?: number;
        TenantId?: number;
        ShopShopName?: string;
        ShopContactName?: string;
        ShopContactTitle?: string;
        ShopAddress?: string;
        ShopCity?: string;
        ShopRegion?: string;
        ShopPostalCode?: string;
        ShopCountry?: string;
        ShopPhone?: string;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        EmployeeFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipperCompanyName?: string;
        ShipperPhone?: string;
        ShippingState?: ShippingState;
        OperationTypeOpCode?: WaresMovementOperations;
        OperationTypeOperation?: string;
        Value?: number;
        VAT?: number;
        Total?: number;
        DetailList?: WaresMovementDetailsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WaresMovementRow {
        const idProperty = "WaresMoveId";
        const isActiveProperty = "IsActive";
        const nameProperty = "ShopId";
        const localTextPrefix = "Store.WaresMovement";
        const lookupKey = "Store.WaresMovement";
        function getLookup(): Q.Lookup<WaresMovementRow>;
        const deletePermission = "Store:Wares:Delete";
        const insertPermission = "Store:Wares:Modify";
        const readPermission = "Store:Wares:View";
        const updatePermission = "Store:Wares:Modify";
        const enum Fields {
            WaresMoveId = "WaresMoveId",
            ShopId = "ShopId",
            CounterpartyId = "CounterpartyId",
            EmployeeId = "EmployeeId",
            ShipperId = "ShipperId",
            OperationTypeId = "OperationTypeId",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            DocumentTypeId = "DocumentTypeId",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ShopShopName = "ShopShopName",
            ShopContactName = "ShopContactName",
            ShopContactTitle = "ShopContactTitle",
            ShopAddress = "ShopAddress",
            ShopCity = "ShopCity",
            ShopRegion = "ShopRegion",
            ShopPostalCode = "ShopPostalCode",
            ShopCountry = "ShopCountry",
            ShopPhone = "ShopPhone",
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            EmployeeFullName = "EmployeeFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipperCompanyName = "ShipperCompanyName",
            ShipperPhone = "ShipperPhone",
            ShippingState = "ShippingState",
            OperationTypeOpCode = "OperationTypeOpCode",
            OperationTypeOperation = "OperationTypeOperation",
            Value = "Value",
            VAT = "VAT",
            Total = "Total",
            DetailList = "DetailList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace WaresMovementService {
        const baseUrl = "Store/WaresMovement";
        function Create(request: Serenity.SaveRequest<WaresMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WaresMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: WaresMovementListRequest, onSuccess?: (response: Serenity.ListResponse<WaresMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/WaresMovement/Create",
            Update = "Store/WaresMovement/Update",
            Delete = "Store/WaresMovement/Delete",
            Retrieve = "Store/WaresMovement/Retrieve",
            List = "Store/WaresMovement/List"
        }
    }
}
declare namespace Store.Store {
    interface WaresMovementTotalRow {
        WaresMoveId?: number;
        Value?: number;
        VAT?: number;
        Total?: number;
    }
    namespace WaresMovementTotalRow {
        const idProperty = "WaresMoveId";
        const localTextPrefix = "Store.WaresMovementTotal";
        const deletePermission = "Store:Wares:Delete";
        const insertPermission = "Store:Wares:Modify";
        const readPermission = "Store:Wares:View";
        const updatePermission = "Store:Wares:Modify";
        const enum Fields {
            WaresMoveId = "WaresMoveId",
            Value = "Value",
            VAT = "VAT",
            Total = "Total"
        }
    }
}
declare namespace Store.Store {
    interface WaresRow {
        WaresId?: number;
        WaresCode?: string;
        WaresBarcode?: string;
        WaresLabel?: string;
        WaresName?: string;
        WaresImage?: string;
        CounterpartyId?: string;
        CategoryId?: number;
        MeasureId?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        Discontinued?: boolean;
        AccountId?: number;
        IsActive?: number;
        TenantId?: number;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        Type?: number;
        CategoryCategoryName?: string;
        CategoryDescription?: string;
        MeasureName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WaresRow {
        const idProperty = "WaresId";
        const isActiveProperty = "IsActive";
        const nameProperty = "WaresName";
        const localTextPrefix = "Store.Wares";
        const lookupKey = "Store.Wares";
        function getLookup(): Q.Lookup<WaresRow>;
        const deletePermission = "Store:Wares:Delete";
        const insertPermission = "Store:Wares:Modify";
        const readPermission = "Store:Wares:View";
        const updatePermission = "Store:Wares:Modify";
        const enum Fields {
            WaresId = "WaresId",
            WaresCode = "WaresCode",
            WaresBarcode = "WaresBarcode",
            WaresLabel = "WaresLabel",
            WaresName = "WaresName",
            WaresImage = "WaresImage",
            CounterpartyId = "CounterpartyId",
            CategoryId = "CategoryId",
            MeasureId = "MeasureId",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            Discontinued = "Discontinued",
            AccountId = "AccountId",
            IsActive = "IsActive",
            TenantId = "TenantId",
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            Type = "Type",
            CategoryCategoryName = "CategoryCategoryName",
            CategoryDescription = "CategoryDescription",
            MeasureName = "MeasureName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace WaresService {
        const baseUrl = "Store/Wares";
        function Create(request: Serenity.SaveWithLocalizationRequest<WaresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<WaresRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: Serenity.Extensions.ExcelImportRequest, onSuccess?: (response: Serenity.Extensions.ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Wares/Create",
            Update = "Store/Wares/Update",
            Delete = "Store/Wares/Delete",
            Retrieve = "Store/Wares/Retrieve",
            List = "Store/Wares/List",
            ExcelImport = "Store/Wares/ExcelImport"
        }
    }
}
declare namespace Store.Texts {
}
declare namespace Store.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace Store.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace Store.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Store.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace Store.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace Store.Administration {
    class TenantDialog extends Serenity.EntityDialog<TenantRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TenantForm;
    }
}
declare namespace Store.Administration {
    class TenantGrid extends Serenity.EntityGrid<TenantRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof TenantDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): TenantRow.Fields[];
    }
}
declare namespace Store.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace Store.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
        protected getPropertyItems(): Serenity.PropertyItem[];
    }
}
declare namespace Store.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace Store.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Store.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        get value(): UserPermissionRow[];
        set value(value: UserPermissionRow[]);
        private _rolePermissions;
        get rolePermissions(): string[];
        set rolePermissions(value: string[]);
        private _implicitPermissions;
        set implicitPermissions(value: Q.Dictionary<string[]>);
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace Store.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace Store.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace Store.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace Store.LanguageList {
    function getValue(): string[][];
}
declare namespace Store.ScriptInitialization {
}
declare namespace Store.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Store.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace Store.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        get value(): TEntity[];
        set value(value: TEntity[]);
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
        protected enableDeleteColumn(): boolean;
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
    }
}
declare namespace Store.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace Store.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare var jsPDF: any;
declare namespace Store.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace Store.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace Store.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace Store.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace Store.Membership {
    class LoginPanel extends Serenity.PropertyPanel<LoginRequest, any> {
        protected getFormKey(): string;
        constructor(container: JQuery);
        protected redirectToReturnUrl(): void;
        protected getTemplate(): string;
    }
}
declare namespace Store.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
        getTemplate(): string;
    }
}
declare namespace Store.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Store.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Store.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class CategoriesDialog extends Serenity.EntityDialog<CategoriesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoriesForm;
    }
}
declare namespace Store.Store {
    class CategoriesExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Store.Store {
    import fld = CategoriesRow.Fields;
    class CategoriesGrid extends Serenity.EntityGrid<CategoriesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getDefaultSortBy(): fld[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Store.Store {
    class CategoriesTypeDialog extends Serenity.EntityDialog<CategoriesTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CategoriesTypeForm;
    }
}
declare namespace Store.Store {
    class CategoriesTypeGrid extends Serenity.EntityGrid<CategoriesTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoriesTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): CategoriesTypeRow.Fields[];
    }
}
declare namespace Store.Store {
    class CounterpartiesDialog extends Serenity.EntityDialog<CounterpartiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: CounterpartiesForm;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CounterpartiesRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace Store.Store {
    class CounterpartiesEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CounterpartiesRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace Store.Store {
    class CounterpartiesGrid extends Serenity.EntityGrid<CounterpartiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CounterpartiesDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Store.Store {
    class DocumentTypeDialog extends Serenity.EntityDialog<DocumentTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: DocumentTypeForm;
    }
}
declare namespace Store.Store {
    class DocumentTypeGrid extends Serenity.EntityGrid<DocumentTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class EmployeesFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace Store.Store {
    class EmployeesListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Store.Store {
    class MeasuresDialog extends Serenity.EntityDialog<MeasuresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: MeasuresForm;
    }
}
declare namespace Store.Store {
    class MeasuresGrid extends Serenity.EntityGrid<MeasuresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeasuresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): MeasuresRow.Fields[];
    }
}
declare namespace Store.Store {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        get text(): string;
        set text(value: string);
        okClick: () => void;
    }
}
declare namespace Store.Store {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        get value(): NoteRow[];
        set value(value: NoteRow[]);
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace Store.Store {
    class OperationTypeDialog extends Serenity.EntityDialog<OperationTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: OperationTypeForm;
    }
}
declare namespace Store.Store {
    class OperationTypeEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, OperationTypeRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace Store.Store {
    class OperationTypeGrid extends Serenity.EntityGrid<OperationTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OperationTypeDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): OperationTypeRow.Fields[];
    }
}
declare namespace Store.Store {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace Store.Store {
    class ShippersDialog extends Serenity.EntityDialog<ShippersRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ShippersForm;
    }
}
declare namespace Store.Store {
    class ShippersFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Store.Store {
    class ShippersGrid extends Serenity.EntityGrid<ShippersRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShippersDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class ShopsDialog extends Serenity.EntityDialog<ShopsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: ShopsForm;
    }
}
declare namespace Store.Store {
    class ShopsEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, ShopsRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): any;
    }
}
declare namespace Store.Store {
    class ShopsGrid extends Serenity.EntityGrid<ShopsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShopsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class WaresDialog extends Serenity.EntityDialog<WaresRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WaresForm;
        constructor();
        protected UpdateInterface(): void;
    }
}
declare namespace Store.Store {
    class WaresExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Store.Store {
    class WaresGrid extends Serenity.EntityGrid<WaresRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaresDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<WaresRow>;
        private numericInputFormatter;
        private moneyInputFormatter;
        private stringInputFormatter;
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        /**
        * This method is called for all rows
        * @param item Data item for current row
        * @param index Index of the row in grid
        */
        protected getItemCssClass(item: Store.WaresRow, index: number): string;
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
    }
}
declare namespace Store.Store {
    class StoreAverageDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Store.Store {
    class WaresMovementDialog extends Serenity.EntityDialog<WaresMovementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WaresMovementForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Store.Store {
    class WaresMovementGrid extends Serenity.EntityGrid<WaresMovementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaresMovementDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace Store.Store {
    class WaresMovementDetailsDialog extends Common.GridEditorDialog<WaresMovementDetailsRow> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected getDeletePermission(): string;
        protected getInsertPermission(): string;
        protected getUpdatePermission(): string;
        protected form: WaresMovementDetailsForm;
        constructor();
    }
}
declare namespace Store.Store {
    class WaresMovementDetailsEditor extends Common.GridEditorBase<WaresMovementDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaresMovementDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace Store.Store {
    class WaresMovementDetailsGrid extends Serenity.EntityGrid<WaresMovementDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaresMovementDetailsDialog;
        protected getIdProperty(): string;
        protected getInsertPermission(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
