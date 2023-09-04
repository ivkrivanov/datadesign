﻿import { proxyTexts } from "@serenity-is/corelib/q";

namespace Company.Texts {

    export declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
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
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Tenant {
                export const TenantId: string;
                export const TenantName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
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
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const PostalCode: string;
                export const Rowguid: string;
                export const StateProvinceCode: string;
                export const StateProvinceId: string;
                export const StateProvinceName: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace AddressType {
                export const AddressTypeId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const Rowguid: string;
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
                export const Rowguid: string;
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
                export const Rowguid: string;
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
                export const Rowguid: string;
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
                export const Rowguid: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Country {
                export const CountryCode: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
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
                export const Rowguid: string;
                export const Suffix: string;
                export const TenantId: string;
                export const Title: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PhoneNumberType {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const PhoneNumberTypeId: string;
                export const Rowguid: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace StateProvince {
                export const CountryCode: string;
                export const CountryName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const Rowguid: string;
                export const StateProvinceCode: string;
                export const StateProvinceId: string;
                export const TenantId: string;
                export const TerritoryId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }
    }

    export declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const GoogleButton: string;
                export const LoginToYourAccount: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
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
    }

    export declare namespace Navigation {
        export const LogoutLink: string;
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

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
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

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    export declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
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

    Company['Texts'] = proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1,TenantId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{TenantId:1,TenantName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Roles:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Company:{Address:{AddressId:1,AddressLine1:1,AddressLine2:1,City:1,InsertDate:1,InsertUserId:1,IsActive:1,PostalCode:1,Rowguid:1,StateProvinceCode:1,StateProvinceId:1,StateProvinceName:1,TenantId:1,UpdateDate:1,UpdateUserId:1},AddressType:{AddressTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,Rowguid:1,TenantId:1,UpdateDate:1,UpdateUserId:1},BusinessEntity:{BusinessEntityId:1,FirstName:1,FullName:1,InsertDate:1,InsertUserId:1,IsActive:1,LastName:1,MiddleName:1,Rowguid:1,Suffix:1,TenantId:1,Title:1,UpdateDate:1,UpdateUserId:1},BusinessEntityAddress:{AddressId:1,AddressLine1:1,AddressTypeId:1,AddressTypeName:1,BusinessEntityId:1,InsertDate:1,InsertUserId:1,IsActive:1,Rowguid:1,TenantId:1,UpdateDate:1,UpdateUserId:1},BusinessEntityContact:{BusinessEntityId:1,ContactTypeId:1,ContactTypeName:1,InsertDate:1,InsertUserId:1,IsActive:1,PersonId:1,Rowguid:1,TenantId:1,UpdateDate:1,UpdateUserId:1},ContactType:{ContactTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,Rowguid:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Country:{CountryCode:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Person:{BusinessEntityId:1,FirstName:1,FullName:1,InsertDate:1,InsertUserId:1,IsActive:1,LastName:1,MiddleName:1,Rowguid:1,Suffix:1,TenantId:1,Title:1,UpdateDate:1,UpdateUserId:1},PhoneNumberType:{InsertDate:1,InsertUserId:1,IsActive:1,Name:1,PhoneNumberTypeId:1,Rowguid:1,TenantId:1,UpdateDate:1,UpdateUserId:1},StateProvince:{CountryCode:1,CountryName:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,Rowguid:1,StateProvinceCode:1,StateProvinceId:1,TenantId:1,TerritoryId:1,UpdateDate:1,UpdateUserId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,PasswordConfirmMismatch:1,SavePrimaryKeyError:1}}) as any;
}

export const Texts = Company.Texts;