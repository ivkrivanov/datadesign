namespace Store.Store {
    export enum Gender {
        Male = 1,
        Female = 2
    }
    Serenity.Decorators.registerEnumType(Gender, 'Store.Store.Gender', 'Store.Store.Entities.Gender');
}
