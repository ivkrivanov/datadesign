/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace Store.Administration {
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
declare namespace Store.BasicReports {
}
declare namespace Store.BasicReports {
    interface StoreMoveListRequest extends Serenity.ListRequest {
        ShopID?: number;
        TenantID?: number;
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace Store.BasicReports {
    namespace StoreMoveService {
        const baseUrl = "BasicReports/StoreMove";
        function List(request: StoreMoveListRequest, onSuccess?: (response: Serenity.ListResponse<Store.StoreMoveRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicReports/StoreMove/List"
        }
    }
}
declare namespace Store.BasicReports {
}
declare namespace Store.BasicReports {
    interface WaresFileListRequest extends Serenity.ListRequest {
        ShopID?: number;
        WaresID?: number;
        TenantID?: number;
        StartDate?: string;
        EndDate?: string;
    }
}
declare namespace Store.BasicReports {
    namespace WaresFileService {
        const baseUrl = "BasicReports/WaresFile";
        function List(request: WaresFileListRequest, onSuccess?: (response: Serenity.ListResponse<Store.WaresFileRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "BasicReports/WaresFile/List"
        }
    }
}
declare namespace Store.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace Store.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace Store.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace Store.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace Store.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
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
declare namespace Store {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace Store {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
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
        Email: Serenity.EmailEditor;
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
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
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
declare namespace Store.Modules.Store.Item {
    interface ItemListRequest extends Serenity.ListRequest {
        ItemID?: number;
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
    interface CaregoryListRequest extends Serenity.ListRequest {
        CategoryID?: number;
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface CategoryExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class CategoryExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CategoryForm {
        CategoryTypeID: Serenity.LookupEditor;
        CategoryCode: Serenity.StringEditor;
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CategoryLangRow {
        ID?: number;
        LanguageID?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "ID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Store.CategoryLang";
        const enum Fields {
            ID = "ID",
            LanguageID = "LanguageID",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace Store.Store {
    namespace CategoryLangService {
        const baseUrl = "Store/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/CategoryLang/Create",
            Update = "Store/CategoryLang/Update",
            Delete = "Store/CategoryLang/Delete",
            Retrieve = "Store/CategoryLang/Retrieve",
            List = "Store/CategoryLang/List"
        }
    }
}
declare namespace Store.Store {
    interface CategoryRow {
        CategoryID?: number;
        CategoryTypeID?: number;
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
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Store.Category";
        const lookupKey = "Store.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const enum Fields {
            CategoryID = "CategoryID",
            CategoryTypeID = "CategoryTypeID",
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
    namespace CategoryService {
        const baseUrl = "Store/Category";
        function Create(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: CaregoryListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Category/Create",
            Update = "Store/Category/Update",
            Delete = "Store/Category/Delete",
            RetrieveLocalization = "Store/Category/RetrieveLocalization",
            Retrieve = "Store/Category/Retrieve",
            List = "Store/Category/List",
            ExcelImport = "Store/Category/ExcelImport"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface CategoryTypeForm {
        Type: Serenity.IntegerEditor;
        CategoryType: Serenity.StringEditor;
    }
    class CategoryTypeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CategoryTypeRow {
        CategoryTypeID?: number;
        Type?: number;
        CategoryType?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CategoryTypeRow {
        const idProperty = "CategoryTypeID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CategoryType";
        const localTextPrefix = "Store.CategoryType";
        const lookupKey = "Store.CategoryType";
        function getLookup(): Q.Lookup<CategoryTypeRow>;
        const enum Fields {
            CategoryTypeID = "CategoryTypeID",
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
    namespace CategoryTypeService {
        const baseUrl = "Store/CategoryType";
        function Create(request: Serenity.SaveRequest<CategoryTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryTypeRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryTypeRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/CategoryType/Create",
            Update = "Store/CategoryType/Update",
            Delete = "Store/CategoryType/Delete",
            Retrieve = "Store/CategoryType/Retrieve",
            List = "Store/CategoryType/List"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface CounterpartyDetailRow {
        ID?: number;
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
    namespace CounterpartyDetailRow {
        const idProperty = "ID";
        const nameProperty = "Email";
        const localTextPrefix = "Store.CounterpartyDetail";
        const enum Fields {
            ID = "ID",
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
    interface CounterpartyForm {
        CounterpartyID: Serenity.StringEditor;
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
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CounterpartyForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CounterpartyRepresentativeRow {
        RepresentativeID?: number;
        CounterpartyID?: number;
        EmployeeID?: number;
    }
    namespace CounterpartyRepresentativeRow {
        const idProperty = "RepresentativeID";
        const localTextPrefix = "Store.CounterpartyRepresentative";
        const enum Fields {
            RepresentativeID = "RepresentativeID",
            CounterpartyID = "CounterpartyID",
            EmployeeID = "EmployeeID"
        }
    }
}
declare namespace Store.Store {
    interface CounterpartyRow {
        ID?: number;
        CounterpartyID?: string;
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
        NoteList?: NoteRow[];
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
    namespace CounterpartyRow {
        const idProperty = "ID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Store.Counterparty";
        const lookupKey = "Store.Counterparty";
        function getLookup(): Q.Lookup<CounterpartyRow>;
        const enum Fields {
            ID = "ID",
            CounterpartyID = "CounterpartyID",
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
            NoteList = "NoteList",
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
    namespace CounterpartyService {
        const baseUrl = "Store/Counterparty";
        function Create(request: Serenity.SaveRequest<CounterpartyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CounterpartyRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CounterpartyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CounterpartyRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Counterparty/Create",
            Update = "Store/Counterparty/Update",
            Delete = "Store/Counterparty/Delete",
            GetNextNumber = "Store/Counterparty/GetNextNumber",
            Retrieve = "Store/Counterparty/Retrieve",
            List = "Store/Counterparty/List"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface CustomerCustomerDemoRow {
        Id?: number;
        CustomerId?: string;
        CustomerTypeId?: string;
        CustomerId1?: number;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerEmail?: string;
        CustomerInsertDate?: string;
        CustomerInsertUserId?: number;
        CustomerUpdateDate?: string;
        CustomerUpdateUserId?: number;
        CustomerIsActive?: number;
        CustomerTenantId?: number;
        CustomerTypeId1?: number;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "Id";
        const nameProperty = "CustomerId";
        const localTextPrefix = "Store.CustomerCustomerDemo";
        const enum Fields {
            Id = "Id",
            CustomerId = "CustomerId",
            CustomerTypeId = "CustomerTypeId",
            CustomerId1 = "CustomerId1",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerEmail = "CustomerEmail",
            CustomerInsertDate = "CustomerInsertDate",
            CustomerInsertUserId = "CustomerInsertUserId",
            CustomerUpdateDate = "CustomerUpdateDate",
            CustomerUpdateUserId = "CustomerUpdateUserId",
            CustomerIsActive = "CustomerIsActive",
            CustomerTenantId = "CustomerTenantId",
            CustomerTypeId1 = "CustomerTypeId1",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}
declare namespace Store.Store {
    interface CustomerDemographicRow {
        Id?: number;
        CustomerTypeId?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "Id";
        const nameProperty = "CustomerTypeId";
        const localTextPrefix = "Store.CustomerDemographic";
        const enum Fields {
            Id = "Id",
            CustomerTypeId = "CustomerTypeId",
            CustomerDesc = "CustomerDesc"
        }
    }
}
declare namespace Store.Store {
    interface CustomerDetailsRow {
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
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Store.CustomerDetails";
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
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Representatives: Serenity.LookupEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        NoteList: NotesEditor;
        LastContactDate: Serenity.DateEditor;
        LastContactedBy: Serenity.LookupEditor;
        Email: Serenity.EmailEditor;
        SendBulletin: Serenity.BooleanEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface CustomerRepresentativesRow {
        RepresentativeID?: number;
        CustomerID?: number;
        EmployeeID?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeID";
        const localTextPrefix = "Store.CustomerRepresentatives";
        const enum Fields {
            RepresentativeID = "RepresentativeID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID"
        }
    }
}
declare namespace Store.Store {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        IsActive?: number;
        TenantId?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        NoteList?: NoteRow[];
        Representatives?: number[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Store.Customer";
        const lookupKey = "Store.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            IsActive = "IsActive",
            TenantId = "TenantId",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            NoteList = "NoteList",
            Representatives = "Representatives",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace CustomerService {
        const baseUrl = "Store/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Customer/Create",
            Update = "Store/Customer/Update",
            Delete = "Store/Customer/Delete",
            GetNextNumber = "Store/Customer/GetNextNumber",
            Retrieve = "Store/Customer/Retrieve",
            List = "Store/Customer/List"
        }
    }
}
declare namespace Store.Store {
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
        DocumentTypeID?: number;
        DocumentName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace DocumentTypeRow {
        const idProperty = "DocumentTypeID";
        const isActiveProperty = "IsActive";
        const nameProperty = "DocumentName";
        const localTextPrefix = "Store.DocumentType";
        const lookupKey = "Store.DocumentType";
        function getLookup(): Q.Lookup<DocumentTypeRow>;
        const enum Fields {
            DocumentTypeID = "DocumentTypeID",
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
    interface EmployeeRow {
        EmployeeID?: number;
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
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const isActiveProperty = "IsActive";
        const nameProperty = "LastName";
        const localTextPrefix = "Store.Employee";
        const lookupKey = "Store.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const enum Fields {
            EmployeeID = "EmployeeID",
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
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface ItemCategoryForm {
        ItemCategoryCode: Serenity.StringEditor;
        ItemCategoryName: Serenity.StringEditor;
        ItemCategoryDescription: Serenity.StringEditor;
        ItemCategoryImage: Serenity.ImageUploadEditor;
    }
    class ItemCategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ItemCategoryLangRow {
        ID?: number;
        LanguageID?: number;
        ItemCategoryName?: string;
        Description?: string;
    }
    namespace ItemCategoryLangRow {
        const idProperty = "ID";
        const nameProperty = "ItemCategoryName";
        const localTextPrefix = "Store.ItemCategoryLang";
        const enum Fields {
            ID = "ID",
            LanguageID = "LanguageID",
            ItemCategoryName = "ItemCategoryName",
            Description = "Description"
        }
    }
}
declare namespace Store.Store {
    namespace ItemCategoryLangService {
        const baseUrl = "Store/ItemCategoryLang";
        function Create(request: Serenity.SaveRequest<ItemCategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemCategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemCategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemCategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/ItemCategoryLang/Create",
            Update = "Store/ItemCategoryLang/Update",
            Delete = "Store/ItemCategoryLang/Delete",
            Retrieve = "Store/ItemCategoryLang/Retrieve",
            List = "Store/ItemCategoryLang/List"
        }
    }
}
declare namespace Store.Store {
    interface ItemCategoryRow {
        ItemCategoryID?: number;
        ItemCategoryCode?: string;
        ItemCategoryName?: string;
        ItemCategoryDescription?: string;
        ItemCategoryImage?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ItemCategoryRow {
        const idProperty = "ItemCategoryID";
        const isActiveProperty = "IsActive";
        const nameProperty = "ItemCategoryName";
        const localTextPrefix = "Store.ItemCategory";
        const lookupKey = "Store.ItemCategory";
        function getLookup(): Q.Lookup<ItemCategoryRow>;
        const enum Fields {
            ItemCategoryID = "ItemCategoryID",
            ItemCategoryCode = "ItemCategoryCode",
            ItemCategoryName = "ItemCategoryName",
            ItemCategoryDescription = "ItemCategoryDescription",
            ItemCategoryImage = "ItemCategoryImage",
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
    namespace ItemCategoryService {
        const baseUrl = "Store/ItemCategory";
        function Create(request: Serenity.SaveWithLocalizationRequest<ItemCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<ItemCategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/ItemCategory/Create",
            Update = "Store/ItemCategory/Update",
            Delete = "Store/ItemCategory/Delete",
            Retrieve = "Store/ItemCategory/Retrieve",
            List = "Store/ItemCategory/List"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface ItemForm {
        ItemCategoryID: Serenity.LookupEditor;
        ItemCode: Serenity.StringEditor;
        ItemBarcode: Serenity.StringEditor;
        ItemLabel: Serenity.StringEditor;
        ItemName: Serenity.StringEditor;
        ItemImage: Serenity.ImageUploadEditor;
        SupplierID: Serenity.LookupEditor;
        MeasureID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Discontinued: Serenity.BooleanEditor;
        AccountID: Serenity.IntegerEditor;
    }
    class ItemForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ItemLangRow {
        ID?: number;
        ItemID?: number;
        LanguageID?: number;
        ItemName?: string;
        Description?: string;
    }
    namespace ItemLangRow {
        const idProperty = "ID";
        const nameProperty = "ItemName";
        const localTextPrefix = "Store.ItemLang";
        const enum Fields {
            ID = "ID",
            ItemID = "ItemID",
            LanguageID = "LanguageID",
            ItemName = "ItemName",
            Description = "Description"
        }
    }
}
declare namespace Store.Store {
    namespace ItemLangService {
        const baseUrl = "Store/ItemLang";
        function Create(request: Serenity.SaveRequest<ItemLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ItemLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/ItemLang/Create",
            Update = "Store/ItemLang/Update",
            Delete = "Store/ItemLang/Delete",
            Retrieve = "Store/ItemLang/Retrieve",
            List = "Store/ItemLang/List"
        }
    }
}
declare namespace Store.Store {
    interface ItemRow {
        ItemID?: number;
        ItemCode?: string;
        ItemBarcode?: string;
        ItemLabel?: string;
        ItemName?: string;
        ItemImage?: string;
        SupplierID?: number;
        ItemCategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        Discontinued?: boolean;
        AccountID?: number;
        IsActive?: number;
        TenantId?: number;
        SupplierSupplierStat?: string;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierHomePage?: string;
        ItemCategoryItemCategoryCode?: string;
        ItemCategoryItemCategoryName?: string;
        ItemCategoryItemCategoryDescription?: string;
        ItemCategoryItemCategoryImage?: string;
        MeasureMeasureName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ItemRow {
        const idProperty = "ItemID";
        const isActiveProperty = "IsActive";
        const nameProperty = "ItemName";
        const localTextPrefix = "Store.Item";
        const lookupKey = "Store.Item";
        function getLookup(): Q.Lookup<ItemRow>;
        const enum Fields {
            ItemID = "ItemID",
            ItemCode = "ItemCode",
            ItemBarcode = "ItemBarcode",
            ItemLabel = "ItemLabel",
            ItemName = "ItemName",
            ItemImage = "ItemImage",
            SupplierID = "SupplierID",
            ItemCategoryID = "ItemCategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            Discontinued = "Discontinued",
            AccountID = "AccountID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            SupplierSupplierStat = "SupplierSupplierStat",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierEmail = "SupplierEmail",
            SupplierHomePage = "SupplierHomePage",
            ItemCategoryItemCategoryCode = "ItemCategoryItemCategoryCode",
            ItemCategoryItemCategoryName = "ItemCategoryItemCategoryName",
            ItemCategoryItemCategoryDescription = "ItemCategoryItemCategoryDescription",
            ItemCategoryItemCategoryImage = "ItemCategoryItemCategoryImage",
            MeasureMeasureName = "MeasureMeasureName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ItemService {
        const baseUrl = "Store/Item";
        function Create(request: Serenity.SaveWithLocalizationRequest<ItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<ItemRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ItemRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Item/Create",
            Update = "Store/Item/Update",
            RetrieveLocalization = "Store/Item/RetrieveLocalization",
            Delete = "Store/Item/Delete",
            Retrieve = "Store/Item/Retrieve",
            List = "Store/Item/List"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface MeasureForm {
        MeasureName: Serenity.StringEditor;
    }
    class MeasureForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface MeasureRow {
        MeasureID?: number;
        MeasureName?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace MeasureRow {
        const idProperty = "MeasureID";
        const isActiveProperty = "IsActive";
        const nameProperty = "MeasureName";
        const localTextPrefix = "Store.Measure";
        const lookupKey = "Store.Measure";
        function getLookup(): Q.Lookup<MeasureRow>;
        const enum Fields {
            MeasureID = "MeasureID",
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
    namespace MeasureService {
        const baseUrl = "Store/Measure";
        function Create(request: Serenity.SaveRequest<MeasureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MeasureRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MeasureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MeasureRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Measure/Create",
            Update = "Store/Measure/Update",
            Delete = "Store/Measure/Delete",
            Retrieve = "Store/Measure/Retrieve",
            List = "Store/Measure/List"
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
        OperationTypeID?: number;
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
        const idProperty = "OperationTypeID";
        const isActiveProperty = "IsActive";
        const nameProperty = "Operation";
        const localTextPrefix = "Store.OperationType";
        const lookupKey = "Store.OperationType";
        function getLookup(): Q.Lookup<OperationTypeRow>;
        const enum Fields {
            OperationTypeID = "OperationTypeID",
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
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface ProductDetailForm {
        WaresID: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        ProductQuantity: Serenity.DecimalEditor;
        PlanPrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ProductDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ProductDetailRow {
        DetailID?: number;
        ProductID?: number;
        WaresID?: number;
        PlanPrice?: number;
        Quantity?: number;
        ProductQuantity?: number;
        Discount?: number;
        IsActive?: number;
        TenantId?: number;
        ProductName?: string;
        ProductSupplierID?: number;
        ProductCategoryID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        WaresCode?: string;
        WaresBarcode?: string;
        WaresLabel?: string;
        WaresName?: string;
        WaresImage?: string;
        WaresCategoryID?: number;
        WaresMeasureID?: number;
        WaresQuantityPerUnit?: number;
        WaresUnitPrice?: number;
        WaresDiscontinued?: boolean;
        WaresAccountID?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ProductDetailRow {
        const idProperty = "DetailID";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Store.ProductDetail";
        const enum Fields {
            DetailID = "DetailID",
            ProductID = "ProductID",
            WaresID = "WaresID",
            PlanPrice = "PlanPrice",
            Quantity = "Quantity",
            ProductQuantity = "ProductQuantity",
            Discount = "Discount",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductName = "ProductName",
            ProductSupplierID = "ProductSupplierID",
            ProductCategoryID = "ProductCategoryID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            WaresCode = "WaresCode",
            WaresBarcode = "WaresBarcode",
            WaresLabel = "WaresLabel",
            WaresName = "WaresName",
            WaresImage = "WaresImage",
            WaresCategoryID = "WaresCategoryID",
            WaresMeasureID = "WaresMeasureID",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
            WaresDiscontinued = "WaresDiscontinued",
            WaresAccountID = "WaresAccountID",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ProductDetailService {
        const baseUrl = "Store/ProductDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Store/ProductDetail/Retrieve",
            List = "Store/ProductDetail/List"
        }
    }
}
declare namespace Store.Store {
    interface ProductExcelImportForm {
        FileName: Serenity.ImageUploadEditor;
    }
    class ProductExcelImportForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ProductForm {
        ProductCode: Serenity.StringEditor;
        CategoryID: Serenity.LookupEditor;
        ProductBarcode: Serenity.StringEditor;
        ProductName: Serenity.StringEditor;
        ProductLabel: Serenity.StringEditor;
        MeasureID: Serenity.LookupEditor;
        CounterpartyID: CounterpartyEditor;
        Discontinued: Serenity.BooleanEditor;
        ProductImage: Serenity.ImageUploadEditor;
        DetailList: ProductDetailsEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ProductLangRow {
        ID?: number;
        ProductID?: number;
        LanguageID?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "ID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Store.ProductLang";
        const enum Fields {
            ID = "ID",
            ProductID = "ProductID",
            LanguageID = "LanguageID",
            ProductName = "ProductName"
        }
    }
}
declare namespace Store.Store {
    namespace ProductLangService {
        const baseUrl = "Store/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/ProductLang/Create",
            Update = "Store/ProductLang/Update",
            Delete = "Store/ProductLang/Delete",
            Retrieve = "Store/ProductLang/Retrieve",
            List = "Store/ProductLang/List"
        }
    }
}
declare namespace Store.Store {
    interface ProductListRequest extends Serenity.ListRequest {
        WaresID?: number;
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface ProductMovementDetailsForm {
        ProductID: Serenity.LookupEditor;
        Quantity: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
        Discount: Serenity.DecimalEditor;
    }
    class ProductMovementDetailsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ProductMovementDetailsRow {
        ProductMoveID?: number;
        ProductID?: number;
        Quantity?: number;
        SalePrice?: number;
        Discount?: number;
        DetailID?: number;
        IsActive?: number;
        TenantId?: number;
        ProductMoveShopID?: string;
        ProductMoveCounterpartyID?: string;
        ProductMoveEmployeeID?: number;
        ProductMoveShipperID?: number;
        ProductMoveOperationTypeID?: number;
        ProductMoveOperationTypeOpCode?: number;
        ProductMoveOrderDate?: string;
        ProductMoveRequiredDate?: string;
        ProductMoveShippedDate?: string;
        ProductName?: string;
        ProductSupplierID?: number;
        ProductCategoryID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ProductMovementDetailsRow {
        const idProperty = "DetailID";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Store.ProductMovementDetails";
        const enum Fields {
            ProductMoveID = "ProductMoveID",
            ProductID = "ProductID",
            Quantity = "Quantity",
            SalePrice = "SalePrice",
            Discount = "Discount",
            DetailID = "DetailID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            ProductMoveShopID = "ProductMoveShopID",
            ProductMoveCounterpartyID = "ProductMoveCounterpartyID",
            ProductMoveEmployeeID = "ProductMoveEmployeeID",
            ProductMoveShipperID = "ProductMoveShipperID",
            ProductMoveOperationTypeID = "ProductMoveOperationTypeID",
            ProductMoveOperationTypeOpCode = "ProductMoveOperationTypeOpCode",
            ProductMoveOrderDate = "ProductMoveOrderDate",
            ProductMoveRequiredDate = "ProductMoveRequiredDate",
            ProductMoveShippedDate = "ProductMoveShippedDate",
            ProductName = "ProductName",
            ProductSupplierID = "ProductSupplierID",
            ProductCategoryID = "ProductCategoryID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            ProductUnitsInStock = "ProductUnitsInStock",
            ProductUnitsOnOrder = "ProductUnitsOnOrder",
            ProductReorderLevel = "ProductReorderLevel",
            ProductDiscontinued = "ProductDiscontinued",
            LineTotal = "LineTotal",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ProductMovementDetailsService {
        const baseUrl = "Store/ProductMovementDetails";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductMovementDetailsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Store/ProductMovementDetails/Retrieve",
            List = "Store/ProductMovementDetails/List"
        }
    }
}
declare namespace Store.Store {
    interface ProductMovementForm {
        OperationTypeOpCode: Serenity.EnumEditor;
        OrderDate: Serenity.DateEditor;
        ShopID: ShopsEditor;
        CounterpartyID: CounterpartyEditor;
        EmployeeID: Serenity.LookupEditor;
        RequiredDate: Serenity.DateEditor;
        ShipperID: Serenity.LookupEditor;
        ShippedDate: Serenity.DateEditor;
        DetailList: ProductMovementDetailsEditor;
    }
    class ProductMovementForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ProductMovementListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace Store.Store {
    enum ProductMovementOperations {
        IncomeItems = 200,
        StockDelivery = 202,
        SurplusGoods = 203,
        SaleOfArticles = 401,
        LackOfItems = 402,
        Scrappingarticles = 403
    }
}
declare namespace Store.Store {
    interface ProductMovementRow {
        ProductMoveID?: number;
        ShopID?: string;
        CounterpartyID?: string;
        EmployeeID?: number;
        ShipperID?: number;
        OperationTypeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
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
        OperationTypeOpCode?: ProductMovementOperations;
        OperationTypeOperation?: string;
        DetailList?: ProductMovementDetailsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ProductMovementRow {
        const idProperty = "ProductMoveID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CounterpartyID";
        const localTextPrefix = "Store.ProductMovement";
        const enum Fields {
            ProductMoveID = "ProductMoveID",
            ShopID = "ShopID",
            CounterpartyID = "CounterpartyID",
            EmployeeID = "EmployeeID",
            ShipperID = "ShipperID",
            OperationTypeID = "OperationTypeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
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
            DetailList = "DetailList",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ProductMovementService {
        const baseUrl = "Store/ProductMovement";
        function Create(request: Serenity.SaveRequest<ProductMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductMovementRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: ProductMovementListRequest, onSuccess?: (response: Serenity.ListResponse<ProductMovementRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/ProductMovement/Create",
            Update = "Store/ProductMovement/Update",
            Delete = "Store/ProductMovement/Delete",
            Retrieve = "Store/ProductMovement/Retrieve",
            List = "Store/ProductMovement/List"
        }
    }
}
declare namespace Store.Store {
    interface ProductRow {
        ProductID?: number;
        ProductCode?: string;
        ProductBarcode?: string;
        ProductLabel?: string;
        ProductName?: string;
        ProductImage?: string;
        CounterpartyID?: string;
        SupplierID?: number;
        CategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        Discontinued?: boolean;
        IsActive?: number;
        TenantId?: number;
        SupplierSupplierStat?: string;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierEmail?: string;
        SupplierHomePage?: string;
        CounterpartyCompanyName?: string;
        CounterpartyContactName?: string;
        CounterpartyContactTitle?: string;
        CounterpartyCity?: string;
        CounterpartyRegion?: string;
        CounterpartyCountry?: string;
        CounterpartyPhone?: string;
        CategoryCategoryName?: string;
        CategoryDescription?: string;
        DetailList?: ProductDetailRow[];
        MeasureMeasureName?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const isActiveProperty = "IsActive";
        const nameProperty = "ProductName";
        const localTextPrefix = "Store.Product";
        const lookupKey = "Store.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const enum Fields {
            ProductID = "ProductID",
            ProductCode = "ProductCode",
            ProductBarcode = "ProductBarcode",
            ProductLabel = "ProductLabel",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            CounterpartyID = "CounterpartyID",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            Discontinued = "Discontinued",
            IsActive = "IsActive",
            TenantId = "TenantId",
            SupplierSupplierStat = "SupplierSupplierStat",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierEmail = "SupplierEmail",
            SupplierHomePage = "SupplierHomePage",
            CounterpartyCompanyName = "CounterpartyCompanyName",
            CounterpartyContactName = "CounterpartyContactName",
            CounterpartyContactTitle = "CounterpartyContactTitle",
            CounterpartyCity = "CounterpartyCity",
            CounterpartyRegion = "CounterpartyRegion",
            CounterpartyCountry = "CounterpartyCountry",
            CounterpartyPhone = "CounterpartyPhone",
            CategoryCategoryName = "CategoryCategoryName",
            CategoryDescription = "CategoryDescription",
            DetailList = "DetailList",
            MeasureMeasureName = "MeasureMeasureName",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace Store.Store {
    namespace ProductService {
        const baseUrl = "Store/Product";
        function Create(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: ProductListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Product/Create",
            Update = "Store/Product/Update",
            Delete = "Store/Product/Delete",
            Retrieve = "Store/Product/Retrieve",
            RetrieveLocalization = "Store/Product/RetrieveLocalization",
            List = "Store/Product/List",
            ExcelImport = "Store/Product/ExcelImport"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Store.Shipper";
        const lookupKey = "Store.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const enum Fields {
            ShipperID = "ShipperID",
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
    namespace ShipperService {
        const baseUrl = "Store/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Shipper/Create",
            Update = "Store/Shipper/Update",
            Delete = "Store/Shipper/Delete",
            Retrieve = "Store/Shipper/Retrieve",
            List = "Store/Shipper/List"
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
}
declare namespace Store.Store {
    interface ShopsForm {
        ShopID: Serenity.StringEditor;
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
        ID?: number;
        ShopID?: string;
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
        const idProperty = "ShopID";
        const isActiveProperty = "IsActive";
        const nameProperty = "ShopName";
        const localTextPrefix = "Store.Shops";
        const lookupKey = "Store.Shops";
        function getLookup(): Q.Lookup<ShopsRow>;
        const enum Fields {
            ID = "ID",
            ShopID = "ShopID",
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
}
declare namespace Store.Store {
    interface StoreForm {
        Position: Serenity.StringEditor;
        WaresMode: Serenity.BooleanEditor;
        ShopID: Serenity.IntegerEditor;
        WaresID: Serenity.IntegerEditor;
        Key: Serenity.StringEditor;
        Date: Serenity.DateEditor;
        OperationID: Serenity.IntegerEditor;
        IncomeQuantity: Serenity.DecimalEditor;
        IncomeSinglePrice: Serenity.DecimalEditor;
        IncomeValue: Serenity.DecimalEditor;
        ExpenceQuantity: Serenity.DecimalEditor;
        ExpenceSinglePrice: Serenity.DecimalEditor;
        ExpenceValue: Serenity.DecimalEditor;
        RestQuantity: Serenity.DecimalEditor;
        RestSinglePrice: Serenity.DecimalEditor;
        RestValue: Serenity.DecimalEditor;
        ReCost: Serenity.DecimalEditor;
        Mistake: Serenity.BooleanEditor;
    }
    class StoreForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface StoreMoveRow {
        ShopID?: number;
        WaresID?: number;
        WaresCode?: string;
        WaresName?: string;
        Date?: string;
        InitialQuantity?: number;
        InitialSinglePrice?: number;
        InitialValue?: number;
        IncomeQuantity?: number;
        IncomeSinglePrice?: number;
        IncomeValue?: number;
        ExpenceQuantity?: number;
        ExpenceSinglePrice?: number;
        ExpenceValue?: number;
        RestQuantity?: number;
        RestSinglePrice?: number;
        RestValue?: number;
        ReCost?: number;
        Mistake?: boolean;
        ShopName?: string;
    }
    namespace StoreMoveRow {
        const nameProperty = "WaresCode";
        const localTextPrefix = "Store.StoreMove";
        const enum Fields {
            ShopID = "ShopID",
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            Date = "Date",
            InitialQuantity = "InitialQuantity",
            InitialSinglePrice = "InitialSinglePrice",
            InitialValue = "InitialValue",
            IncomeQuantity = "IncomeQuantity",
            IncomeSinglePrice = "IncomeSinglePrice",
            IncomeValue = "IncomeValue",
            ExpenceQuantity = "ExpenceQuantity",
            ExpenceSinglePrice = "ExpenceSinglePrice",
            ExpenceValue = "ExpenceValue",
            RestQuantity = "RestQuantity",
            RestSinglePrice = "RestSinglePrice",
            RestValue = "RestValue",
            ReCost = "ReCost",
            Mistake = "Mistake",
            ShopName = "ShopName"
        }
    }
}
declare namespace Store.Store {
    interface StoreRow {
        Position?: number;
        WaresMode?: boolean;
        MoveID?: number;
        ShopID?: number;
        WaresID?: number;
        Key?: string;
        Date?: string;
        OperationID?: number;
        IncomeQuantity?: number;
        IncomeSinglePrice?: number;
        IncomeValue?: number;
        AIncomeSinglePrice?: number;
        AIncomeValue?: number;
        ExpenceQuantity?: number;
        ExpenceSinglePrice?: number;
        ExpenceValue?: number;
        AExpenceSinglePrice?: number;
        AExpenceValue?: number;
        RestQuantity?: number;
        RestSinglePrice?: number;
        RestValue?: number;
        ARestQuantity?: number;
        ARestSinglePrice?: number;
        ARestValue?: number;
        ReCost?: number;
        AReCost?: number;
        Mistake?: boolean;
        AMistake?: boolean;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace StoreRow {
        const idProperty = "Position";
        const isActiveProperty = "IsActive";
        const nameProperty = "Key";
        const localTextPrefix = "Store.Store";
        const enum Fields {
            Position = "Position",
            WaresMode = "WaresMode",
            MoveID = "MoveID",
            ShopID = "ShopID",
            WaresID = "WaresID",
            Key = "Key",
            Date = "Date",
            OperationID = "OperationID",
            IncomeQuantity = "IncomeQuantity",
            IncomeSinglePrice = "IncomeSinglePrice",
            IncomeValue = "IncomeValue",
            AIncomeSinglePrice = "AIncomeSinglePrice",
            AIncomeValue = "AIncomeValue",
            ExpenceQuantity = "ExpenceQuantity",
            ExpenceSinglePrice = "ExpenceSinglePrice",
            ExpenceValue = "ExpenceValue",
            AExpenceSinglePrice = "AExpenceSinglePrice",
            AExpenceValue = "AExpenceValue",
            RestQuantity = "RestQuantity",
            RestSinglePrice = "RestSinglePrice",
            RestValue = "RestValue",
            ARestQuantity = "ARestQuantity",
            ARestSinglePrice = "ARestSinglePrice",
            ARestValue = "ARestValue",
            ReCost = "ReCost",
            AReCost = "AReCost",
            Mistake = "Mistake",
            AMistake = "AMistake",
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
    namespace StoreService {
        const baseUrl = "Store/Store";
        function Create(request: Serenity.SaveRequest<StoreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<StoreRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<StoreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<StoreRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Warehouse(request: WarehouseRequest, onSuccess?: (response: WarehouseResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Store/Create",
            Update = "Store/Store/Update",
            Delete = "Store/Store/Delete",
            Retrieve = "Store/Store/Retrieve",
            List = "Store/Store/List",
            Warehouse = "Store/Store/Warehouse"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface SupplierForm {
        SupplierStat: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface SupplierRow {
        SupplierID?: number;
        SupplierStat?: string;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        Email?: string;
        HomePage?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Store.Supplier";
        const lookupKey = "Store.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const enum Fields {
            SupplierID = "SupplierID",
            SupplierStat = "SupplierStat",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            Email = "Email",
            HomePage = "HomePage",
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
    namespace SupplierService {
        const baseUrl = "Store/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Supplier/Create",
            Update = "Store/Supplier/Update",
            Delete = "Store/Supplier/Delete",
            Retrieve = "Store/Supplier/Retrieve",
            List = "Store/Supplier/List"
        }
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface WaresCategoriesForm {
        WaresCategoryCode: Serenity.StringEditor;
        WaresCategoryName: Serenity.StringEditor;
        WaresCategoryDescription: Serenity.StringEditor;
        WaresCategoryImage: Serenity.ImageUploadEditor;
    }
    class WaresCategoriesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface WaresCategoriesLangRow {
        ID?: number;
        WaresCategoryID?: number;
        LanguageID?: number;
        WaresCategoryName?: string;
        Description?: string;
    }
    namespace WaresCategoriesLangRow {
        const idProperty = "ID";
        const nameProperty = "WaresCategoryName";
        const localTextPrefix = "Store.WaresCategoriesLang";
        const enum Fields {
            ID = "ID",
            WaresCategoryID = "WaresCategoryID",
            LanguageID = "LanguageID",
            WaresCategoryName = "WaresCategoryName",
            Description = "Description"
        }
    }
}
declare namespace Store.Store {
    namespace WaresCategoriesLangService {
        const baseUrl = "Store/WaresCategoriesLang";
        function Create(request: Serenity.SaveRequest<WaresCategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<WaresCategoriesLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresCategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaresCategoriesLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/WaresCategoriesLang/Create",
            Update = "Store/WaresCategoriesLang/Update",
            Delete = "Store/WaresCategoriesLang/Delete",
            Retrieve = "Store/WaresCategoriesLang/Retrieve",
            List = "Store/WaresCategoriesLang/List"
        }
    }
}
declare namespace Store.Store {
    interface WaresCategoriesRow {
        WaresCategoryID?: number;
        WaresCategoryCode?: string;
        WaresCategoryName?: string;
        WaresCategoryDescription?: string;
        WaresCategoryImage?: string;
        IsActive?: number;
        TenantId?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WaresCategoriesRow {
        const idProperty = "WaresCategoryID";
        const isActiveProperty = "IsActive";
        const nameProperty = "WaresCategoryName";
        const localTextPrefix = "Store.WaresCategories";
        const lookupKey = "Store.WaresCategories";
        function getLookup(): Q.Lookup<WaresCategoriesRow>;
        const enum Fields {
            WaresCategoryID = "WaresCategoryID",
            WaresCategoryCode = "WaresCategoryCode",
            WaresCategoryName = "WaresCategoryName",
            WaresCategoryDescription = "WaresCategoryDescription",
            WaresCategoryImage = "WaresCategoryImage",
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
    namespace WaresCategoriesService {
        const baseUrl = "Store/WaresCategories";
        function Create(request: Serenity.SaveWithLocalizationRequest<WaresCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveWithLocalizationRequest<WaresCategoriesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<WaresCategoriesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/WaresCategories/Create",
            Update = "Store/WaresCategories/Update",
            Delete = "Store/WaresCategories/Delete",
            Retrieve = "Store/WaresCategories/Retrieve",
            List = "Store/WaresCategories/List"
        }
    }
}
declare namespace Store.Store {
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
    interface WaresFileRow {
        ShopID?: number;
        WaresID?: number;
        WaresCode?: string;
        WaresName?: string;
        Date?: string;
        DocumentType?: string;
        DocumentNumber?: string;
        DocumentDate?: string;
        IncomeQuantity?: number;
        IncomeSinglePrice?: number;
        IncomeValue?: number;
        ExpenceQuantity?: number;
        ExpenceSinglePrice?: number;
        ExpenceValue?: number;
        RestQuantity?: number;
        RestSinglePrice?: number;
        RestValue?: number;
        ReCost?: number;
        Mistake?: boolean;
        ShopName?: string;
    }
    namespace WaresFileRow {
        const nameProperty = "WaresCode";
        const localTextPrefix = "Store.WaresFile";
        const enum Fields {
            ShopID = "ShopID",
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            Date = "Date",
            DocumentType = "DocumentType",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            IncomeQuantity = "IncomeQuantity",
            IncomeSinglePrice = "IncomeSinglePrice",
            IncomeValue = "IncomeValue",
            ExpenceQuantity = "ExpenceQuantity",
            ExpenceSinglePrice = "ExpenceSinglePrice",
            ExpenceValue = "ExpenceValue",
            RestQuantity = "RestQuantity",
            RestSinglePrice = "RestSinglePrice",
            RestValue = "RestValue",
            ReCost = "ReCost",
            Mistake = "Mistake",
            ShopName = "ShopName"
        }
    }
}
declare namespace Store.Store {
    interface WaresForm {
        CategoryID: Serenity.LookupEditor;
        WaresCode: Serenity.StringEditor;
        WaresBarcode: Serenity.StringEditor;
        WaresLabel: Serenity.StringEditor;
        WaresName: Serenity.StringEditor;
        MeasureID: Serenity.LookupEditor;
        WaresImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        CounterpartyID: CounterpartyEditor;
        QuantityPerUnit: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        AccountID: Serenity.IntegerEditor;
    }
    class WaresForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace Store.Store {
    interface WaresLangRow {
        ID?: number;
        WaresID?: number;
        LanguageID?: number;
        WaresName?: string;
        Description?: string;
    }
    namespace WaresLangRow {
        const idProperty = "ID";
        const nameProperty = "WaresName";
        const localTextPrefix = "Store.WaresLang";
        const enum Fields {
            ID = "ID",
            WaresID = "WaresID",
            LanguageID = "LanguageID",
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
        WaresID?: number;
    }
}
declare namespace Store.Store {
}
declare namespace Store.Store {
}
declare namespace Store.Store {
    interface WaresMovementDetailsForm {
        WaresID: Serenity.LookupEditor;
        IncomePrice: Serenity.DecimalEditor;
        SalePrice: Serenity.DecimalEditor;
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
        WaresMoveID?: number;
        WaresID?: number;
        Quantity?: number;
        IncomePrice?: number;
        SalePrice?: number;
        SinglePrice?: number;
        Discount?: number;
        DetailID?: number;
        IsActive?: number;
        TenantId?: number;
        WaresMoveShopID?: string;
        WaresMoveCounterpartyID?: string;
        WaresMoveEmployeeID?: number;
        WaresMoveShipperID?: number;
        WaresMoveOperationTypeID?: number;
        WaresMoveOperationTypeOpCode?: number;
        WaresMoveOrderDate?: string;
        WaresMoveRequiredDate?: string;
        WaresMoveShippedDate?: string;
        WaresCode?: string;
        WaresName?: string;
        WaresCounterpartyID?: string;
        WaresCategoryID?: number;
        WaresMeasureID?: number;
        WaresMeasureName?: string;
        WaresQuantityPerUnit?: string;
        WaresUnitPrice?: number;
        LineTotal?: number;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WaresMovementDetailsRow {
        const idProperty = "DetailID";
        const isActiveProperty = "IsActive";
        const localTextPrefix = "Store.WaresMovementDetails";
        const enum Fields {
            WaresMoveID = "WaresMoveID",
            WaresID = "WaresID",
            Quantity = "Quantity",
            IncomePrice = "IncomePrice",
            SalePrice = "SalePrice",
            SinglePrice = "SinglePrice",
            Discount = "Discount",
            DetailID = "DetailID",
            IsActive = "IsActive",
            TenantId = "TenantId",
            WaresMoveShopID = "WaresMoveShopID",
            WaresMoveCounterpartyID = "WaresMoveCounterpartyID",
            WaresMoveEmployeeID = "WaresMoveEmployeeID",
            WaresMoveShipperID = "WaresMoveShipperID",
            WaresMoveOperationTypeID = "WaresMoveOperationTypeID",
            WaresMoveOperationTypeOpCode = "WaresMoveOperationTypeOpCode",
            WaresMoveOrderDate = "WaresMoveOrderDate",
            WaresMoveRequiredDate = "WaresMoveRequiredDate",
            WaresMoveShippedDate = "WaresMoveShippedDate",
            WaresCode = "WaresCode",
            WaresName = "WaresName",
            WaresCounterpartyID = "WaresCounterpartyID",
            WaresCategoryID = "WaresCategoryID",
            WaresMeasureID = "WaresMeasureID",
            WaresMeasureName = "WaresMeasureName",
            WaresQuantityPerUnit = "WaresQuantityPerUnit",
            WaresUnitPrice = "WaresUnitPrice",
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
        WaresMoveID?: number;
        DocumentTypeID?: number;
        DocumentNumber?: string;
        DocumentDate?: string;
        DocumentTypeDocumentName?: string;
    }
    namespace WaresMovementDocRow {
        const idProperty = "WaresMoveID";
        const nameProperty = "DocumentNumber";
        const localTextPrefix = "Store.WaresMovementDoc";
        const enum Fields {
            WaresMoveID = "WaresMoveID",
            DocumentTypeID = "DocumentTypeID",
            DocumentNumber = "DocumentNumber",
            DocumentDate = "DocumentDate",
            DocumentTypeDocumentName = "DocumentTypeDocumentName"
        }
    }
}
declare namespace Store.Store {
    interface WaresMovementForm {
        OperationTypeID: OperationTypeEditor;
        OrderDate: Serenity.DateEditor;
        ShopID: ShopsEditor;
        CounterpartyID: CounterpartyEditor;
        EmployeeID: Serenity.LookupEditor;
        RequiredDate: Serenity.DateEditor;
        ShipperID: Serenity.LookupEditor;
        ShippedDate: Serenity.DateEditor;
        DocumentTypeID: Serenity.LookupEditor;
        DocumentNumber: Serenity.StringEditor;
        DocumentDate: Serenity.DateEditor;
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
        WaresID?: number;
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
        WaresMoveID?: number;
        ShopID?: string;
        CounterpartyID?: string;
        EmployeeID?: number;
        ShipperID?: number;
        OperationTypeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        DocumentTypeID?: number;
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
        DetailList?: WaresMovementDetailsRow[];
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace WaresMovementRow {
        const idProperty = "WaresMoveID";
        const isActiveProperty = "IsActive";
        const nameProperty = "CounterpartyID";
        const localTextPrefix = "Store.WaresMovement";
        const lookupKey = "Store.WaresMovement";
        function getLookup(): Q.Lookup<WaresMovementRow>;
        const enum Fields {
            WaresMoveID = "WaresMoveID",
            ShopID = "ShopID",
            CounterpartyID = "CounterpartyID",
            EmployeeID = "EmployeeID",
            ShipperID = "ShipperID",
            OperationTypeID = "OperationTypeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            DocumentTypeID = "DocumentTypeID",
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
    interface WaresRow {
        WaresID?: number;
        WaresCode?: string;
        WaresBarcode?: string;
        WaresLabel?: string;
        WaresName?: string;
        WaresImage?: string;
        CounterpartyID?: string;
        SupplierID?: number;
        CategoryID?: number;
        MeasureID?: number;
        QuantityPerUnit?: number;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        Discontinued?: boolean;
        AccountID?: number;
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
        const idProperty = "WaresID";
        const isActiveProperty = "IsActive";
        const nameProperty = "WaresName";
        const localTextPrefix = "Store.Wares";
        const lookupKey = "Store.Wares";
        function getLookup(): Q.Lookup<WaresRow>;
        const enum Fields {
            WaresID = "WaresID",
            WaresCode = "WaresCode",
            WaresBarcode = "WaresBarcode",
            WaresLabel = "WaresLabel",
            WaresName = "WaresName",
            WaresImage = "WaresImage",
            CounterpartyID = "CounterpartyID",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            MeasureID = "MeasureID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            Discontinued = "Discontinued",
            AccountID = "AccountID",
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
        function RetrieveLocalization(request: Serenity.RetrieveLocalizationRequest, onSuccess?: (response: Serenity.RetrieveLocalizationResponse<WaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<WaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: WaresListRequest, onSuccess?: (response: Serenity.ListResponse<WaresRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ExcelImport(request: ExcelImportRequest, onSuccess?: (response: ExcelImportResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Store/Wares/Create",
            Update = "Store/Wares/Update",
            RetrieveLocalization = "Store/Wares/RetrieveLocalization",
            Delete = "Store/Wares/Delete",
            Retrieve = "Store/Wares/Retrieve",
            List = "Store/Wares/List",
            ExcelImport = "Store/Wares/ExcelImport"
        }
    }
}
declare namespace Store.Texts {
}
declare namespace Store {
    interface WarehouseRequest extends Serenity.ServiceRequest {
    }
}
declare namespace Store {
    interface WarehouseResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace Store.LanguageList {
    function getValue(): string[][];
}
declare namespace Store.ScriptInitialization {
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
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
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
declare namespace Store {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace Store.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace Store.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace Store.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
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
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
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
declare namespace Store {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace Store.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace Store.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace Store.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
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
declare namespace Store.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace Store.Store {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getLanguages(): string[][];
        protected form: CategoryForm;
    }
}
declare namespace Store.Store {
    class CategoryExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Store.Store {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Store.Store {
    class CategoryTypeDialog extends Serenity.EntityDialog<CategoryTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryTypeForm;
    }
}
declare namespace Store.Store {
    class CategoryTypeGrid extends Serenity.EntityGrid<CategoryTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CategoryTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class CounterpartyDialog extends Serenity.EntityDialog<CounterpartyRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CounterpartyForm;
        private ProductMoveGrid;
        private WaresMoveGrid;
        private loadedState;
        constructor();
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CounterpartyRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace Store.Store {
    class CounterpartyEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CounterpartyRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace Store.Store {
    class CounterpartyGrid extends Serenity.EntityGrid<CounterpartyRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CounterpartyDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
    }
}
declare namespace Store.Store {
    class ProductMovementDialog extends Serenity.EntityDialog<ProductMovementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductMovementForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Store.Store {
    class CounterpartyProductMovementDialog extends ProductMovementDialog {
        constructor();
        UpdateInterface(): void;
    }
}
declare namespace Store.Store {
    class ProductMovementGrid extends Serenity.EntityGrid<ProductMovementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductMovementDialog;
        protected getIdProperty(): string;
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
    class CounterpartyProductMovementGrid extends ProductMovementGrid {
        protected getDialogType(): typeof CounterpartyProductMovementDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected AddButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _counterpartyID;
        counterpartyID: string;
    }
}
declare namespace Store.Store {
    class WaresMovementDialog extends Serenity.EntityDialog<WaresMovementRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: WaresMovementForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace Store.Store {
    class CounterpartyWaresMovementDialog extends WaresMovementDialog {
        constructor();
        updateInterface(): void;
    }
}
declare namespace Store.Store {
    class WaresMovementGrid extends Serenity.EntityGrid<WaresMovementRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof WaresMovementDialog;
        protected getIdProperty(): string;
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
    class CounterpartyWaresMovementGrid extends WaresMovementGrid {
        protected getDialogType(): typeof CounterpartyWaresMovementDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected AddButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _counterpartyID;
        counterpartyID: string;
    }
}
declare namespace Store.Store {
    class DocumentTypeDialog extends Serenity.EntityDialog<DocumentTypeRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: DocumentTypeForm;
    }
}
declare namespace Store.Store {
    class DocumentTypeGrid extends Serenity.EntityGrid<DocumentTypeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof DocumentTypeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class EmployeeDialog extends Serenity.EntityDialog<EmployeeRow, any> {
        protected getFormKey(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): any;
        protected form: any;
    }
}
declare namespace Store.Store {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace Store.Store {
    class EmployeeGrid extends Serenity.EntityGrid<EmployeeRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeeDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): any;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Store.Store {
    class MeasureDialog extends Serenity.EntityDialog<MeasureRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MeasureForm;
    }
}
declare namespace Store.Store {
    class MeasureGrid extends Serenity.EntityGrid<MeasureRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MeasureDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class NoteDialog extends Serenity.EntityDialog<NoteRow, any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
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
        value: NoteRow[];
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
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected getLanguages(): string[][];
        protected form: ProductForm;
        constructor();
        protected UpdateInterface(): void;
    }
}
declare namespace Store.Store {
    class ProductEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoryRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<CategoryRow>): CategoryRow[];
    }
}
declare namespace Store.Store {
    class ProductExcelImportDialog extends Serenity.PropertyDialog<any, any> {
        private form;
        constructor();
        protected getDialogTitle(): string;
        protected getDialogButtons(): Serenity.DialogButton[];
    }
}
declare namespace Store.Store {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
    }
}
declare namespace Store.Store {
    class ProductDetailDialog extends Common.GridEditorDialog<ProductDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProductDetailForm;
        constructor();
        protected updateInterface(): void;
    }
}
declare namespace Store.Store {
    class ProductDetailEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, Store.WaresRow> {
        constructor(container: JQuery, options: Serenity.LookupEditorOptions);
        protected getLookupKey(): string;
        protected getItemText(item: Store.WaresRow, lookup: Q.Lookup<WaresRow>): string;
    }
}
declare namespace Store.Store {
    class ProductDetailGrid extends Serenity.EntityGrid<ProductDetailRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDetailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace Store.Store {
    class ProductDetailsEditor extends Common.GridEditorBase<ProductDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace Store.Store {
    class ProductMovementDetailsDialog extends Common.GridEditorDialog<ProductMovementDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: ProductMovementDetailsForm;
        constructor();
    }
}
declare namespace Store.Store {
    class ProductMovementDetailsEditor extends Common.GridEditorBase<ProductMovementDetailsRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductMovementDetailsDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace Store.Store {
    class ProductMovementDetailsGrid extends Serenity.EntityGrid<ProductMovementDetailsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProductMovementDetailsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
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
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
    }
}
declare namespace Store.Store {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace Store.Store {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ShipperDialog;
        protected getIdProperty(): string;
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
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class StoreDialog extends Serenity.EntityDialog<StoreRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: StoreForm;
    }
}
declare namespace Store.Store {
    class StoreGrid extends Serenity.EntityGrid<StoreRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof StoreDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace Store.Store {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
    }
}
declare namespace Store.Store {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SupplierDialog;
        protected getIdProperty(): string;
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
        protected getLanguages(): string[][];
        protected form: WaresForm;
        constructor();
        protected UpdateInterface(): void;
    }
}
declare namespace Store.Store {
    class WaresEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CategoryRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItems(lookup: Q.Lookup<CategoryRow>): CategoryRow[];
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
        protected getDialogType(): any;
        protected getIdProperty(): string;
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
    class WaresMovementDetailsDialog extends Common.GridEditorDialog<WaresMovementDetailsRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
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
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected createSlickGrid(): Slick.Grid;
        protected getColumns(): Slick.Column[];
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
    }
}
declare namespace Store.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace Store.BasicReports {
    class StoreMoveGrid extends Serenity.EntityGrid<Store.StoreMoveRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        protected onViewProcessData(response: Serenity.ListResponse<Store.StoreMoveRow>): Serenity.ListResponse<Store.StoreMoveRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Store.BasicReports {
    class WaresFileGrid extends Serenity.EntityGrid<Store.WaresFileRow, any> {
        protected getColumnsKey(): string;
        protected getIdProperty(): string;
        protected getNameProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private nextId;
        constructor(container: JQuery);
        protected onViewProcessData(response: Serenity.ListResponse<Store.WaresFileRow>): Serenity.ListResponse<Store.WaresFileRow>;
        protected getButtons(): any[];
        protected createSlickGrid(): Slick.Grid;
        protected getSlickOptions(): Slick.GridOptions;
        protected usePager(): boolean;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace Store.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
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
