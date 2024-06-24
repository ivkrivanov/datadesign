import { proxyTexts } from "@serenity-is/corelib/q";

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
                export const CountryCode: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const PostalCode: string;
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
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessEntity {
                export const BusinessEntityAddresses: string;
                export const BusinessEntityId: string;
                export const FirstName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastName: string;
                export const MiddleName: string;
                export const Name: string;
                export const PersonType: string;
                export const Suffix: string;
                export const TenantId: string;
                export const Title: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace BusinessEntityAddress {
                export const AddressId: string;
                export const AddressTypeId: string;
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
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace PersonView {
                export const AddressLine1: string;
                export const AddressLine2: string;
                export const AddressType: string;
                export const City: string;
                export const Country: string;
                export const FirstName: string;
                export const LastName: string;
                export const MiddleName: string;
                export const Name: string;
                export const PersonType: string;
                export const PhoneNumberType: string;
                export const PostalCode: string;
                export const StateProvinceCode: string;
                export const Suffix: string;
                export const Title: string;
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

            namespace StateProvince {
                export const CountryCode: string;
                export const CountryName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Name: string;
                export const StateProvinceCode: string;
                export const StateProvinceId: string;
                export const TenantId: string;
                export const TerritoryId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }
        }

        namespace Person {

            namespace Person {
                export const BusinessEntityId: string;
                export const FirstName: string;
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
        }

        namespace Store {

            namespace Categories {
                export const CategoryCode: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const CategoryType: string;
                export const CategoryTypeId: string;
                export const Description: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Picture: string;
                export const TenantId: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace CategoriesLang {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
            }

            namespace CategoriesType {
                export const CategoryType: string;
                export const CategoryTypeId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const Type: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Counterparties {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const CounterpartyId: string;
                export const Country: string;
                export const Email: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const NotesList: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const Representatives: string;
                export const SendBulletin: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace CounterpartyDetails {
                export const Email: string;
                export const Id: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const LastContactedByAddress: string;
                export const LastContactedByBirthDate: string;
                export const LastContactedByCity: string;
                export const LastContactedByCountry: string;
                export const LastContactedByExtension: string;
                export const LastContactedByFullName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByNotes: string;
                export const LastContactedByPhoto: string;
                export const LastContactedByPhotoPath: string;
                export const LastContactedByPostalCode: string;
                export const LastContactedByRegion: string;
                export const LastContactedByReportsTo: string;
                export const LastContactedByTitle: string;
                export const LastContactedByTitleOfCourtesy: string;
                export const SendBulletin: string;
            }

            namespace CounterpartyRepresentatives {
                export const CounterpartyId: string;
                export const EmployeeId: string;
                export const RepresentativeId: string;
            }

            namespace Employees {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeId: string;
                export const Extension: string;
                export const FirstName: string;
                export const FullName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastName: string;
                export const Notes: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PostalCode: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToFullName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToReportsTo: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const TenantId: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Measures {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MeasureId: string;
                export const MeasureName: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Notes {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace OperationType {
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const OpCode: string;
                export const Operation: string;
                export const OperationTypeId: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductDetails {
                export const DetailId: string;
                export const Discount: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LineTotal: string;
                export const PlanPrice: string;
                export const ProductDiscontinued: string;
                export const ProductId: string;
                export const ProductName: string;
                export const ProductQuantity: string;
                export const ProductQuantityPerUnit: string;
                export const ProductReorderLevel: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const Quantity: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WaresCode: string;
                export const WaresId: string;
                export const WaresName: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace Products {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const DetailList: string;
                export const Discontinued: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MeasureId: string;
                export const MeasureName: string;
                export const ProductBarcode: string;
                export const ProductCode: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductLabel: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const TenantId: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace ProductsLog {
                export const CategoryId: string;
                export const ChangingUserId: string;
                export const Discontinued: string;
                export const OperationType: string;
                export const ProductId: string;
                export const ProductImage: string;
                export const ProductLogId: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Shops {
                export const Address: string;
                export const City: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const Id: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const ShopId: string;
                export const ShopName: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
            }

            namespace Wares {
                export const AccountId: string;
                export const Address: string;
                export const CategoryId: string;
                export const CategoryName: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const CounterpartyId: string;
                export const Country: string;
                export const Description: string;
                export const Discontinued: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MeasureId: string;
                export const MeasureName: string;
                export const Phone: string;
                export const PostalCode: string;
                export const QuantityPerUnit: string;
                export const Region: string;
                export const TenantId: string;
                export const Type: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WaresBarcode: string;
                export const WaresCode: string;
                export const WaresId: string;
                export const WaresImage: string;
                export const WaresLabel: string;
                export const WaresName: string;
            }

            namespace WaresLang {
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
                export const WaresId: string;
                export const WaresName: string;
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

    Company['Texts'] = proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1,TenantId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{TenantId:1,TenantName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Roles:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Company:{Address:{AddressId:1,AddressLine1:1,AddressLine2:1,City:1,CountryCode:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,PostalCode:1,StateProvinceCode:1,StateProvinceId:1,StateProvinceName:1,TenantId:1,UpdateDate:1,UpdateUserId:1},AddressType:{AddressTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,TenantId:1,UpdateDate:1,UpdateUserId:1},BusinessEntity:{BusinessEntityAddresses:1,BusinessEntityId:1,FirstName:1,InsertDate:1,InsertUserId:1,IsActive:1,LastName:1,MiddleName:1,Name:1,PersonType:1,Suffix:1,TenantId:1,Title:1,UpdateDate:1,UpdateUserId:1},BusinessEntityAddress:{AddressId:1,AddressTypeId:1,BusinessEntityId:1,InsertDate:1,InsertUserId:1,IsActive:1,TenantId:1,UpdateDate:1,UpdateUserId:1},BusinessEntityContact:{BusinessEntityId:1,ContactTypeId:1,ContactTypeName:1,InsertDate:1,InsertUserId:1,IsActive:1,PersonId:1,TenantId:1,UpdateDate:1,UpdateUserId:1},ContactType:{ContactTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Country:{CountryCode:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,TenantId:1,UpdateDate:1,UpdateUserId:1},PersonView:{AddressLine1:1,AddressLine2:1,AddressType:1,City:1,Country:1,FirstName:1,LastName:1,MiddleName:1,Name:1,PersonType:1,PhoneNumberType:1,PostalCode:1,StateProvinceCode:1,Suffix:1,Title:1},PhoneNumberType:{InsertDate:1,InsertUserId:1,IsActive:1,Name:1,PhoneNumberTypeId:1,TenantId:1,UpdateDate:1,UpdateUserId:1},StateProvince:{CountryCode:1,CountryName:1,InsertDate:1,InsertUserId:1,IsActive:1,Name:1,StateProvinceCode:1,StateProvinceId:1,TenantId:1,TerritoryId:1,UpdateDate:1,UpdateUserId:1}},Person:{Person:{BusinessEntityId:1,FirstName:1,InsertDate:1,InsertUserId:1,IsActive:1,LastName:1,MiddleName:1,PersonType:1,Suffix:1,TenantId:1,Title:1,UpdateDate:1,UpdateUserId:1}},Store:{Categories:{CategoryCode:1,CategoryId:1,CategoryName:1,CategoryType:1,CategoryTypeId:1,Description:1,InsertDate:1,InsertUserId:1,IsActive:1,Picture:1,TenantId:1,Type:1,UpdateDate:1,UpdateUserId:1},CategoriesLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},CategoriesType:{CategoryType:1,CategoryTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,TenantId:1,Type:1,UpdateDate:1,UpdateUserId:1},Counterparties:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,CounterpartyId:1,Country:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,LastContactDate:1,LastContactedBy:1,NotesList:1,Phone:1,PostalCode:1,Region:1,Representatives:1,SendBulletin:1,TenantId:1,UpdateDate:1,UpdateUserId:1},CounterpartyDetails:{Email:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFullName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,SendBulletin:1},CounterpartyRepresentatives:{CounterpartyId:1,EmployeeId:1,RepresentativeId:1},Employees:{Address:1,BirthDate:1,City:1,Country:1,EmployeeId:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,InsertDate:1,InsertUserId:1,IsActive:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,TenantId:1,Title:1,TitleOfCourtesy:1,UpdateDate:1,UpdateUserId:1},Measures:{InsertDate:1,InsertUserId:1,IsActive:1,MeasureId:1,MeasureName:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Notes:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},OperationType:{InsertDate:1,InsertUserId:1,IsActive:1,OpCode:1,Operation:1,OperationTypeId:1,TenantId:1,UpdateDate:1,UpdateUserId:1},ProductDetails:{DetailId:1,Discount:1,InsertDate:1,InsertUserId:1,IsActive:1,LineTotal:1,PlanPrice:1,ProductDiscontinued:1,ProductId:1,ProductName:1,ProductQuantity:1,ProductQuantityPerUnit:1,ProductReorderLevel:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,Quantity:1,TenantId:1,UpdateDate:1,UpdateUserId:1,WaresCode:1,WaresId:1,WaresName:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},Products:{CategoryId:1,CategoryName:1,Description:1,DetailList:1,Discontinued:1,InsertDate:1,InsertUserId:1,IsActive:1,MeasureId:1,MeasureName:1,ProductBarcode:1,ProductCode:1,ProductId:1,ProductImage:1,ProductLabel:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,TenantId:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,UpdateDate:1,UpdateUserId:1},ProductsLog:{CategoryId:1,ChangingUserId:1,Discontinued:1,OperationType:1,ProductId:1,ProductImage:1,ProductLogId:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Shops:{Address:1,City:1,ContactName:1,ContactTitle:1,Country:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,Phone:1,PostalCode:1,Region:1,ShopId:1,ShopName:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Wares:{AccountId:1,Address:1,CategoryId:1,CategoryName:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,CounterpartyId:1,Country:1,Description:1,Discontinued:1,InsertDate:1,InsertUserId:1,IsActive:1,MeasureId:1,MeasureName:1,Phone:1,PostalCode:1,QuantityPerUnit:1,Region:1,TenantId:1,Type:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,UpdateDate:1,UpdateUserId:1,WaresBarcode:1,WaresCode:1,WaresId:1,WaresImage:1,WaresLabel:1,WaresName:1},WaresLang:{Description:1,Id:1,LanguageId:1,WaresId:1,WaresName:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,PasswordConfirmMismatch:1,SavePrimaryKeyError:1}}) as any;
}

export const Texts = Company.Texts;