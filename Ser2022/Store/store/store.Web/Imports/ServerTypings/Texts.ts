namespace Store.Texts {

    declare namespace Db {

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
                export const LastContactedByFirstName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByLastName: string;
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

            namespace DocumentType {
                export const DocumentName: string;
                export const DocumentTypeId: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
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
                export const ProductCategoryId: string;
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
                export const WaresAccountId: string;
                export const WaresBarcode: string;
                export const WaresCategoryId: string;
                export const WaresCode: string;
                export const WaresDiscontinued: string;
                export const WaresId: string;
                export const WaresImage: string;
                export const WaresLabel: string;
                export const WaresMeasureId: string;
                export const WaresName: string;
                export const WaresQuantityPerUnit: string;
                export const WaresUnitPrice: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace ProductMovement {
                export const CounterpartyCity: string;
                export const CounterpartyCompanyName: string;
                export const CounterpartyContactName: string;
                export const CounterpartyContactTitle: string;
                export const CounterpartyCountry: string;
                export const CounterpartyId: string;
                export const CounterpartyPhone: string;
                export const CounterpartyRegion: string;
                export const DetailList: string;
                export const DocumentDate: string;
                export const DocumentNumber: string;
                export const DocumentTypeId: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeId: string;
                export const EmployeeReportsToFullName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const OperationTypeId: string;
                export const OperationTypeOpCode: string;
                export const OperationTypeOperation: string;
                export const OrderDate: string;
                export const ProductMoveId: string;
                export const RequiredDate: string;
                export const ShippedDate: string;
                export const ShipperCompanyName: string;
                export const ShipperId: string;
                export const ShipperPhone: string;
                export const ShippingState: string;
                export const ShopAddress: string;
                export const ShopCity: string;
                export const ShopContactName: string;
                export const ShopContactTitle: string;
                export const ShopCountry: string;
                export const ShopId: string;
                export const ShopPhone: string;
                export const ShopPostalCode: string;
                export const ShopRegion: string;
                export const ShopShopName: string;
                export const TenantId: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VAT: string;
                export const Value: string;
            }

            namespace ProductMovementDetails {
                export const DetailId: string;
                export const Discount: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const ProductCategoryId: string;
                export const ProductCode: string;
                export const ProductCounterpartyId: string;
                export const ProductDiscontinued: string;
                export const ProductId: string;
                export const ProductMoveCounterpartyId: string;
                export const ProductMoveEmployeeId: string;
                export const ProductMoveId: string;
                export const ProductMoveOperationTypeId: string;
                export const ProductMoveOrderDate: string;
                export const ProductMoveRequiredDate: string;
                export const ProductMoveShippedDate: string;
                export const ProductMoveShipperId: string;
                export const ProductMoveShopId: string;
                export const ProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductReorderLevel: string;
                export const ProductUnitPrice: string;
                export const ProductUnitsInStock: string;
                export const ProductUnitsOnOrder: string;
                export const Quantity: string;
                export const RetailValue: string;
                export const SinglePrice: string;
                export const TenantId: string;
                export const TotalValue: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VAT: string;
            }

            namespace ProductMovementDoc {
                export const DocumentDate: string;
                export const DocumentNumber: string;
                export const DocumentTypeDocumentName: string;
                export const DocumentTypeId: string;
                export const ProductMoveId: string;
            }

            namespace ProductMovementTotal {
                export const ProductMoveId: string;
                export const Total: string;
                export const VAT: string;
                export const Value: string;
            }

            namespace Products {
                export const CategoryCategoryName: string;
                export const CategoryDescription: string;
                export const CategoryId: string;
                export const CounterpartyCity: string;
                export const CounterpartyCompanyName: string;
                export const CounterpartyContactName: string;
                export const CounterpartyContactTitle: string;
                export const CounterpartyCountry: string;
                export const CounterpartyId: string;
                export const CounterpartyPhone: string;
                export const CounterpartyRegion: string;
                export const DetailList: string;
                export const Discontinued: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MeasureId: string;
                export const MeasureMeasureName: string;
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
                export const CounterpartyId: string;
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

            namespace Shippers {
                export const CompanyName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Phone: string;
                export const ShipperId: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
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

            namespace Warehouse {
                export const AExpenceSinglePrice: string;
                export const AExpenceValue: string;
                export const AIncomeSinglePrice: string;
                export const AIncomeValue: string;
                export const AMistake: string;
                export const AReCost: string;
                export const ARestQuantity: string;
                export const ARestSinglePrice: string;
                export const ARestValue: string;
                export const Date: string;
                export const ExpenceQuantity: string;
                export const ExpenceSinglePrice: string;
                export const ExpenceValue: string;
                export const IncomeQuantity: string;
                export const IncomeSinglePrice: string;
                export const IncomeValue: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const Key: string;
                export const Mistake: string;
                export const MoveId: string;
                export const OperationId: string;
                export const Position: string;
                export const ReCost: string;
                export const RestQuantity: string;
                export const RestSinglePrice: string;
                export const RestValue: string;
                export const ShopId: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WaresId: string;
                export const WaresMode: string;
            }

            namespace Wares {
                export const AccountId: string;
                export const CategoryCategoryName: string;
                export const CategoryDescription: string;
                export const CategoryId: string;
                export const CounterpartyCity: string;
                export const CounterpartyCompanyName: string;
                export const CounterpartyContactName: string;
                export const CounterpartyContactTitle: string;
                export const CounterpartyCountry: string;
                export const CounterpartyId: string;
                export const CounterpartyPhone: string;
                export const CounterpartyRegion: string;
                export const Discontinued: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const MeasureId: string;
                export const MeasureName: string;
                export const QuantityPerUnit: string;
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

            namespace WaresMovement {
                export const CounterpartyCity: string;
                export const CounterpartyCompanyName: string;
                export const CounterpartyContactName: string;
                export const CounterpartyContactTitle: string;
                export const CounterpartyCountry: string;
                export const CounterpartyId: string;
                export const CounterpartyPhone: string;
                export const CounterpartyRegion: string;
                export const DetailList: string;
                export const DocumentDate: string;
                export const DocumentNumber: string;
                export const DocumentTypeId: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeId: string;
                export const EmployeeReportsToFullName: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const OperationTypeId: string;
                export const OperationTypeOpCode: string;
                export const OperationTypeOperation: string;
                export const OrderDate: string;
                export const RequiredDate: string;
                export const ShippedDate: string;
                export const ShipperCompanyName: string;
                export const ShipperId: string;
                export const ShipperPhone: string;
                export const ShippingState: string;
                export const ShopAddress: string;
                export const ShopCity: string;
                export const ShopContactName: string;
                export const ShopContactTitle: string;
                export const ShopCountry: string;
                export const ShopId: string;
                export const ShopPhone: string;
                export const ShopPostalCode: string;
                export const ShopRegion: string;
                export const ShopShopName: string;
                export const TenantId: string;
                export const Total: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const VAT: string;
                export const Value: string;
                export const WaresMoveId: string;
            }

            namespace WaresMovementDetails {
                export const DetailId: string;
                export const Discount: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LineTotal: string;
                export const LineVAT: string;
                export const LineValue: string;
                export const Quantity: string;
                export const SinglePrice: string;
                export const TenantId: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const WaresCategoryId: string;
                export const WaresCode: string;
                export const WaresCounterpartyId: string;
                export const WaresId: string;
                export const WaresMeasureId: string;
                export const WaresMeasureName: string;
                export const WaresMoveCounterpartyId: string;
                export const WaresMoveEmployeeId: string;
                export const WaresMoveId: string;
                export const WaresMoveOperationTypeId: string;
                export const WaresMoveOrderDate: string;
                export const WaresMoveRequiredDate: string;
                export const WaresMoveShippedDate: string;
                export const WaresMoveShopId: string;
                export const WaresName: string;
                export const WaresQuantityPerUnit: string;
                export const WaresUnitPrice: string;
            }

            namespace WaresMovementDoc {
                export const DocumentDate: string;
                export const DocumentNumber: string;
                export const DocumentTypeDocumentName: string;
                export const DocumentTypeId: string;
                export const WaresMoveId: string;
            }

            namespace WaresMovementTotal {
                export const Total: string;
                export const VAT: string;
                export const Value: string;
                export const WaresMoveId: string;
            }
        }
    }

    declare namespace Forms {

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

    declare namespace Navigation {
        export const LogoutLink: string;
        export const SiteTitle: string;
    }

    declare namespace Site {

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

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const SavePrimaryKeyError: string;
    }

    Store['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1,TenantId:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Tenant:{TenantId:1,TenantName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,TenantId:1,TenantName:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Store:{Categories:{CategoryCode:1,CategoryId:1,CategoryName:1,CategoryType:1,CategoryTypeId:1,Description:1,InsertDate:1,InsertUserId:1,IsActive:1,Picture:1,TenantId:1,Type:1,UpdateDate:1,UpdateUserId:1},CategoriesLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},CategoriesType:{CategoryType:1,CategoryTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,TenantId:1,Type:1,UpdateDate:1,UpdateUserId:1},Counterparties:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,CounterpartyId:1,Country:1,Email:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,LastContactDate:1,LastContactedBy:1,NotesList:1,Phone:1,PostalCode:1,Region:1,Representatives:1,SendBulletin:1,TenantId:1,UpdateDate:1,UpdateUserId:1},CounterpartyDetails:{Email:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFirstName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByLastName:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,SendBulletin:1},CounterpartyRepresentatives:{CounterpartyId:1,EmployeeId:1,RepresentativeId:1},DocumentType:{DocumentName:1,DocumentTypeId:1,InsertDate:1,InsertUserId:1,IsActive:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Employees:{Address:1,BirthDate:1,City:1,Country:1,EmployeeId:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,InsertDate:1,InsertUserId:1,IsActive:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,TenantId:1,Title:1,TitleOfCourtesy:1,UpdateDate:1,UpdateUserId:1},Measures:{InsertDate:1,InsertUserId:1,IsActive:1,MeasureId:1,MeasureName:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Notes:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},OperationType:{InsertDate:1,InsertUserId:1,IsActive:1,OpCode:1,Operation:1,OperationTypeId:1,TenantId:1,UpdateDate:1,UpdateUserId:1},ProductDetails:{DetailId:1,Discount:1,InsertDate:1,InsertUserId:1,IsActive:1,LineTotal:1,PlanPrice:1,ProductCategoryId:1,ProductDiscontinued:1,ProductId:1,ProductName:1,ProductQuantity:1,ProductQuantityPerUnit:1,ProductReorderLevel:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,Quantity:1,TenantId:1,UpdateDate:1,UpdateUserId:1,WaresAccountId:1,WaresBarcode:1,WaresCategoryId:1,WaresCode:1,WaresDiscontinued:1,WaresId:1,WaresImage:1,WaresLabel:1,WaresMeasureId:1,WaresName:1,WaresQuantityPerUnit:1,WaresUnitPrice:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},ProductMovement:{CounterpartyCity:1,CounterpartyCompanyName:1,CounterpartyContactName:1,CounterpartyContactTitle:1,CounterpartyCountry:1,CounterpartyId:1,CounterpartyPhone:1,CounterpartyRegion:1,DetailList:1,DocumentDate:1,DocumentNumber:1,DocumentTypeId:1,EmployeeFullName:1,EmployeeGender:1,EmployeeId:1,EmployeeReportsToFullName:1,InsertDate:1,InsertUserId:1,IsActive:1,OperationTypeId:1,OperationTypeOpCode:1,OperationTypeOperation:1,OrderDate:1,ProductMoveId:1,RequiredDate:1,ShippedDate:1,ShipperCompanyName:1,ShipperId:1,ShipperPhone:1,ShippingState:1,ShopAddress:1,ShopCity:1,ShopContactName:1,ShopContactTitle:1,ShopCountry:1,ShopId:1,ShopPhone:1,ShopPostalCode:1,ShopRegion:1,ShopShopName:1,TenantId:1,Total:1,UpdateDate:1,UpdateUserId:1,VAT:1,Value:1},ProductMovementDetails:{DetailId:1,Discount:1,InsertDate:1,InsertUserId:1,IsActive:1,ProductCategoryId:1,ProductCode:1,ProductCounterpartyId:1,ProductDiscontinued:1,ProductId:1,ProductMoveCounterpartyId:1,ProductMoveEmployeeId:1,ProductMoveId:1,ProductMoveOperationTypeId:1,ProductMoveOrderDate:1,ProductMoveRequiredDate:1,ProductMoveShippedDate:1,ProductMoveShipperId:1,ProductMoveShopId:1,ProductName:1,ProductQuantityPerUnit:1,ProductReorderLevel:1,ProductUnitPrice:1,ProductUnitsInStock:1,ProductUnitsOnOrder:1,Quantity:1,RetailValue:1,SinglePrice:1,TenantId:1,TotalValue:1,UpdateDate:1,UpdateUserId:1,VAT:1},ProductMovementDoc:{DocumentDate:1,DocumentNumber:1,DocumentTypeDocumentName:1,DocumentTypeId:1,ProductMoveId:1},ProductMovementTotal:{ProductMoveId:1,Total:1,VAT:1,Value:1},Products:{CategoryCategoryName:1,CategoryDescription:1,CategoryId:1,CounterpartyCity:1,CounterpartyCompanyName:1,CounterpartyContactName:1,CounterpartyContactTitle:1,CounterpartyCountry:1,CounterpartyId:1,CounterpartyPhone:1,CounterpartyRegion:1,DetailList:1,Discontinued:1,InsertDate:1,InsertUserId:1,IsActive:1,MeasureId:1,MeasureMeasureName:1,ProductBarcode:1,ProductCode:1,ProductId:1,ProductImage:1,ProductLabel:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,TenantId:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,UpdateDate:1,UpdateUserId:1},ProductsLog:{CategoryId:1,ChangingUserId:1,CounterpartyId:1,Discontinued:1,OperationType:1,ProductId:1,ProductImage:1,ProductLogId:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Shippers:{CompanyName:1,InsertDate:1,InsertUserId:1,IsActive:1,Phone:1,ShipperId:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Shops:{Address:1,City:1,ContactName:1,ContactTitle:1,Country:1,Id:1,InsertDate:1,InsertUserId:1,IsActive:1,Phone:1,PostalCode:1,Region:1,ShopId:1,ShopName:1,TenantId:1,UpdateDate:1,UpdateUserId:1},Warehouse:{AExpenceSinglePrice:1,AExpenceValue:1,AIncomeSinglePrice:1,AIncomeValue:1,AMistake:1,AReCost:1,ARestQuantity:1,ARestSinglePrice:1,ARestValue:1,Date:1,ExpenceQuantity:1,ExpenceSinglePrice:1,ExpenceValue:1,IncomeQuantity:1,IncomeSinglePrice:1,IncomeValue:1,InsertDate:1,InsertUserId:1,IsActive:1,Key:1,Mistake:1,MoveId:1,OperationId:1,Position:1,ReCost:1,RestQuantity:1,RestSinglePrice:1,RestValue:1,ShopId:1,TenantId:1,UpdateDate:1,UpdateUserId:1,WaresId:1,WaresMode:1},Wares:{AccountId:1,CategoryCategoryName:1,CategoryDescription:1,CategoryId:1,CounterpartyCity:1,CounterpartyCompanyName:1,CounterpartyContactName:1,CounterpartyContactTitle:1,CounterpartyCountry:1,CounterpartyId:1,CounterpartyPhone:1,CounterpartyRegion:1,Discontinued:1,InsertDate:1,InsertUserId:1,IsActive:1,MeasureId:1,MeasureName:1,QuantityPerUnit:1,TenantId:1,Type:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,UpdateDate:1,UpdateUserId:1,WaresBarcode:1,WaresCode:1,WaresId:1,WaresImage:1,WaresLabel:1,WaresName:1},WaresLang:{Description:1,Id:1,LanguageId:1,WaresId:1,WaresName:1},WaresMovement:{CounterpartyCity:1,CounterpartyCompanyName:1,CounterpartyContactName:1,CounterpartyContactTitle:1,CounterpartyCountry:1,CounterpartyId:1,CounterpartyPhone:1,CounterpartyRegion:1,DetailList:1,DocumentDate:1,DocumentNumber:1,DocumentTypeId:1,EmployeeFullName:1,EmployeeGender:1,EmployeeId:1,EmployeeReportsToFullName:1,InsertDate:1,InsertUserId:1,IsActive:1,OperationTypeId:1,OperationTypeOpCode:1,OperationTypeOperation:1,OrderDate:1,RequiredDate:1,ShippedDate:1,ShipperCompanyName:1,ShipperId:1,ShipperPhone:1,ShippingState:1,ShopAddress:1,ShopCity:1,ShopContactName:1,ShopContactTitle:1,ShopCountry:1,ShopId:1,ShopPhone:1,ShopPostalCode:1,ShopRegion:1,ShopShopName:1,TenantId:1,Total:1,UpdateDate:1,UpdateUserId:1,VAT:1,Value:1,WaresMoveId:1},WaresMovementDetails:{DetailId:1,Discount:1,InsertDate:1,InsertUserId:1,IsActive:1,LineTotal:1,LineVAT:1,LineValue:1,Quantity:1,SinglePrice:1,TenantId:1,UpdateDate:1,UpdateUserId:1,WaresCategoryId:1,WaresCode:1,WaresCounterpartyId:1,WaresId:1,WaresMeasureId:1,WaresMeasureName:1,WaresMoveCounterpartyId:1,WaresMoveEmployeeId:1,WaresMoveId:1,WaresMoveOperationTypeId:1,WaresMoveOrderDate:1,WaresMoveRequiredDate:1,WaresMoveShippedDate:1,WaresMoveShopId:1,WaresName:1,WaresQuantityPerUnit:1,WaresUnitPrice:1},WaresMovementDoc:{DocumentDate:1,DocumentNumber:1,DocumentTypeDocumentName:1,DocumentTypeId:1,WaresMoveId:1},WaresMovementTotal:{Total:1,VAT:1,Value:1,WaresMoveId:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,GoogleButton:1,LoginToYourAccount:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Navigation:{LogoutLink:1,SiteTitle:1},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,SavePrimaryKeyError:1}});
}
