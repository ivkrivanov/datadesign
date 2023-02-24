import { Decorators } from "@serenity-is/corelib";

export enum Gender {
    Male = 1,
    Female = 2
}
Decorators.registerEnumType(Gender, 'Store.Store.Gender', 'Store.Store.Entities.Gender');
