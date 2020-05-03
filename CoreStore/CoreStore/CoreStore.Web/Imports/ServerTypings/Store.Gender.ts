namespace CoreStore.Store {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'CoreStore.Store.Gender', 'CoreStore.Store.Entities.Gender');
}
