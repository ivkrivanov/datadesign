import { proxyTexts } from "@serenity-is/corelib";

namespace texts {

    export declare namespace Db {

        namespace Administration {

            namespace Language {
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
                export const TenantId: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RoleName: string;
                export const RolePermissionId: string;
            }

            namespace Tenants {
                export const TenantId: string;
                export const TenantName: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Roles: string;
                export const Source: string;
                export const TenantId: string;
                export const TenantName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const RoleName: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Company {

            namespace Address {
                export const AddressId: string;
                export const AddressLine1: string;
                export const AddressLine2: string;
                export const City: string;
                export const CountryId: string;
                export const CountryName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const PostalCode: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace AddressType {
                export const AddressTypeId: string;
                export const AddressTypeName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessEntity {
                export const BusinessEntityId: string;
                export const FirstName: string;
                export const FullName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastName: string;
                export const MiddleName: string;
                export const PersonType: string;
                export const Suffix: string;
                export const TenantId: string;
                export const Title: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessEntityAddress {
                export const AddressId: string;
                export const AddressLine1: string;
                export const AddressTypeId: string;
                export const AddressTypeName: string;
                export const BusinessEntityId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessEntityContact {
                export const BusinessEntityId: string;
                export const ContactTypeId: string;
                export const ContactTypeName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const PersonId: string;
                export const PersonType: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ContactType {
                export const ContactTypeId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Country {
                export const CountryCode: string;
                export const CountryId: string;
                export const CountryName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Currency {
                export const CurrencyCode: string;
                export const CurrencyId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace CurrencyRate {
                export const AverageRate: string;
                export const CurrencyRateDate: string;
                export const CurrencyRateId: string;
                export const EndOfDayRate: string;
                export const FromCurrencyCode: string;
                export const FromCurrencyName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const ToCurrencyCode: string;
                export const ToCurrencyName: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace EmailAddress {
                export const BusinessEntityId: string;
                export const BusinessEntityPersonType: string;
                export const EmailAddress: string;
                export const EmailAddressId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Person {
                export const BusinessEntityId: string;
                export const FirstName: string;
                export const FullName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastName: string;
                export const MiddleName: string;
                export const PersonType: string;
                export const Suffix: string;
                export const TenantId: string;
                export const Title: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PersonPhone {
                export const BusinessEntityId: string;
                export const BusinessEntityPersonType: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const PhoneNumber: string;
                export const PhoneNumberTypeId: string;
                export const PhoneNumberTypeName: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PhoneNumberType {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const PhoneNumberTypeId: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Province {
                export const CountryCode: string;
                export const CountryId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const ProvinceCode: string;
                export const ProvinceId: string;
                export const ProvinceName: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }
    }

    export declare namespace Forms {

        namespace Membership {

            namespace Login {
                export const ForgotPassword: string;
                export const LoginToYourAccount: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace SignUp {
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
        export const SiteTitle: string;
    }

    export declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace Layout {
            export const Language: string;
            export const Theme: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    export declare namespace Validation {
        export const AuthenticationError: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const PasswordConfirmMismatch: string;
        export const SavePrimaryKeyError: string;
    }

}

const Texts: typeof texts = proxyTexts({}, '', {
    Db: {
        Administration: {
            Language: {},
            Role: {},
            RolePermission: {},
            Tenants: {},
            User: {},
            UserPermission: {},
            UserRole: {}
        },
        Company: {
            Address: {},
            AddressType: {},
            BusinessEntity: {},
            BusinessEntityAddress: {},
            BusinessEntityContact: {},
            ContactType: {},
            Country: {},
            Currency: {},
            CurrencyRate: {},
            EmailAddress: {},
            Note: {},
            Person: {},
            PersonPhone: {},
            PhoneNumberType: {},
            Province: {}
        }
    },
    Forms: {
        Membership: {
            Login: {},
            SignUp: {}
        }
    },
    Site: {
        AccessDenied: {},
        Layout: {},
        RolePermissionDialog: {},
        UserDialog: {},
        UserPermissionDialog: {},
        ValidationError: {}
    },
    Validation: {}
}) as any;

export const AccessDeniedViewTexts = Texts.Site.AccessDenied;

export const LoginFormTexts = Texts.Forms.Membership.Login;

export const MembershipValidationTexts = Texts.Validation;

export const RolePermissionDialogTexts = Texts.Site.RolePermissionDialog;

export const SignUpFormTexts = Texts.Forms.Membership.SignUp;

export const SiteFormTexts = Texts.Forms;

export const SiteLayoutTexts = Texts.Site.Layout;

export const SqlExceptionHelperTexts = Texts.Validation;

export const UserDialogTexts = Texts.Site.UserDialog;

export const UserPermissionDialogTexts = Texts.Site.UserPermissionDialog;

export const ValidationErrorViewTexts = Texts.Site.ValidationError;