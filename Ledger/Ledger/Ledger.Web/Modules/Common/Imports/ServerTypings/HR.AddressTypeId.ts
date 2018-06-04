namespace Ledger.HR {
    export enum AddressTypeId {
        HomeAddress = 1,
        PostalAddress = 2,
        WorkAddress = 3
    }
    Serenity.Decorators.registerEnum(AddressTypeId, 'HR.AddressType');
}

